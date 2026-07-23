#!/usr/bin/env node
/**
 * Amazon Creators API — enrich ASIN picks into rich product data.
 *
 * Scans src/data/shop/amazonPicks.ts for `asin: '...'` entries, calls the
 * Creators API GetItems, and writes src/data/shop/amazonPicks.enriched.json
 * keyed by ASIN: { title, image, price, detailPageURL }. The data layer merges
 * that JSON at build time, so enriched picks render as rich cards with no code
 * change.
 *
 * ELIGIBILITY: the Creators API returns 403 AssociateNotEligible until the
 * Associates account has >=10 qualifying sales in 30 days. This script detects
 * that, logs it, and exits 0 WITHOUT touching the JSON — so it is safe to run
 * anytime (including in CI) and will simply start populating once eligible.
 *
 * Run:  AMZN_CLIENT_ID=... AMZN_CLIENT_SECRET=... node scripts/amazon/enrich-amazon-picks.mjs
 * (or rely on .env.local via `node --env-file=.env.local scripts/amazon/enrich-amazon-picks.mjs`)
 *
 * NOTE ON POLICY: Amazon's Associates agreement requires displayed prices to be
 * <=24h old. If you enrich `price`, re-run this at least daily (or drop price
 * from RESOURCES and show "on Amazon" instead). Title/image/link are stable.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..');
const PICKS_TS = resolve(ROOT, 'src/data/shop/amazonPicks.ts');
const OUT_JSON = resolve(ROOT, 'src/data/shop/amazonPicks.enriched.json');

const CLIENT_ID = process.env.AMZN_CLIENT_ID;
const CLIENT_SECRET = process.env.AMZN_CLIENT_SECRET;
const PARTNER_TAG = process.env.AMZN_PARTNER_TAG || 'mythras2026-20';
const MARKETPLACE = process.env.AMZN_MARKETPLACE || 'www.amazon.com';
const TOKEN_ENDPOINT = 'https://api.amazon.com/auth/o2/token'; // v3.1 (NA)
const API_HOST = 'https://creatorsapi.amazon';
const RESOURCES = ['itemInfo.title', 'images.primary.large', 'offersV2.listings.price'];

function die(msg) { console.error(msg); process.exit(1); }
if (!CLIENT_ID || !CLIENT_SECRET) die('Set AMZN_CLIENT_ID and AMZN_CLIENT_SECRET (see .env.local).');

// 1) Collect ASINs from the picks source.
const src = readFileSync(PICKS_TS, 'utf8');
const asins = [...new Set([...src.matchAll(/asin:\s*['"]([A-Z0-9]{10})['"]/g)].map(m => m[1]))];
if (asins.length === 0) {
  console.log('No ASIN picks found in amazonPicks.ts — nothing to enrich. (Search-link picks need no API.)');
  process.exit(0);
}
console.log(`Found ${asins.length} ASIN(s) to enrich: ${asins.join(', ')}`);

// 2) Token.
const tokRes = await fetch(TOKEN_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ grant_type: 'client_credentials', client_id: CLIENT_ID, client_secret: CLIENT_SECRET, scope: 'creatorsapi::default' }),
});
const tok = await tokRes.json();
if (!tok.access_token) die(`Token exchange failed (HTTP ${tokRes.status}): ${JSON.stringify(tok)}`);
console.log('Token OK.');

// 3) GetItems in batches of 10.
const enriched = {};
for (let i = 0; i < asins.length; i += 10) {
  const batch = asins.slice(i, i + 10);
  const res = await fetch(`${API_HOST}/catalog/v1/getItems`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${tok.access_token}`, 'Content-Type': 'application/json', 'x-marketplace': MARKETPLACE },
    body: JSON.stringify({ itemIds: batch, itemIdType: 'ASIN', marketplace: MARKETPLACE, partnerTag: PARTNER_TAG, resources: RESOURCES }),
  });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = null; }

  if (res.status === 403 && json?.reason === 'AssociateNotEligible') {
    console.log('\n⏳ 403 AssociateNotEligible — the account is not yet eligible (needs >=10 qualifying sales / 30 days).');
    console.log('   Auth + request are fine; the API just will not return data yet. Left enriched.json unchanged.');
    console.log('   Re-run this script once eligibility clears and picks will populate automatically.');
    process.exit(0);
  }
  if (!res.ok) die(`GetItems failed (HTTP ${res.status}): ${text.slice(0, 500)}`);

  for (const item of json?.itemResults?.items ?? []) {
    enriched[item.asin] = {
      title: item.itemInfo?.title?.displayValue,
      image: item.images?.primary?.large?.url,
      price: item.offersV2?.listings?.[0]?.price?.money?.displayAmount,
      detailPageURL: item.detailPageURL,
    };
  }
}

// 4) Merge with any existing enrichment and write.
let existing = {};
try { existing = JSON.parse(readFileSync(OUT_JSON, 'utf8')); } catch { /* first run */ }
const merged = { ...existing, ...enriched };
writeFileSync(OUT_JSON, JSON.stringify(merged, null, 2) + '\n');
console.log(`\n✓ Enriched ${Object.keys(enriched).length} item(s) → src/data/shop/amazonPicks.enriched.json`);
