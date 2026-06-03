/**
 * Submit sitemap URLs to IndexNow (instant crawl ping for Bing, Yandex, Seznam,
 * Naver, and other participating engines). Google does NOT use IndexNow — for
 * Google, the live robots.txt -> sitemap reference handles discovery, and you
 * resubmit the sitemap in Search Console manually.
 *
 * The key file (public/<key>.txt, content = the key) MUST already be live on the
 * production domain before running this — IndexNow validates ownership by fetching
 * https://gamertagmythras.com/<key>.txt. So: deploy first, then run this.
 *
 * Usage (from mythras-command-nexus/):
 *   node scripts/seo/indexnow-submit.js              # submit ALL sitemap URLs
 *   node scripts/seo/indexnow-submit.js --latest=40  # only the 40 most-recently-added
 *   node scripts/seo/indexnow-submit.js --dry        # print what would be sent, send nothing
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const PUBLIC = path.join(ROOT, 'public');
const HOST = 'gamertagmythras.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

function arg(name, def) {
  const hit = process.argv.find(a => a === `--${name}` || a.startsWith(`--${name}=`));
  if (!hit) return def;
  const eq = hit.indexOf('=');
  return eq === -1 ? true : hit.slice(eq + 1);
}

function findKey() {
  const f = fs.readdirSync(PUBLIC).find(x => /^[a-f0-9]{32}\.txt$/.test(x));
  if (!f) throw new Error('No IndexNow key file (public/<32hex>.txt) found. Generate one first.');
  return { key: f.replace('.txt', ''), keyLocation: `https://${HOST}/${f}` };
}

function sitemapUrls() {
  const xml = fs.readFileSync(path.join(PUBLIC, 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
}

async function main() {
  const { key, keyLocation } = findKey();
  let urls = sitemapUrls();
  const latest = parseInt(arg('latest', 0), 10);
  if (latest > 0) urls = urls.slice(-latest); // new entries are appended to the sitemap
  const dry = !!arg('dry', false);

  console.log(`IndexNow: ${urls.length} URLs | host ${HOST} | key ${key.slice(0, 8)}…`);
  if (dry) { urls.forEach(u => console.log('  ' + u)); console.log('(dry run — nothing sent)'); return; }

  // IndexNow accepts up to 10,000 URLs per request.
  for (let i = 0; i < urls.length; i += 10000) {
    const batch = urls.slice(i, i + 10000);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key, keyLocation, urlList: batch }),
    });
    // IndexNow returns 200 or 202 on success; body is usually empty.
    console.log(`Batch ${i / 10000 + 1}: ${batch.length} URLs -> HTTP ${res.status} ${res.statusText}`);
    if (res.status !== 200 && res.status !== 202) {
      const body = await res.text();
      console.error('  Response: ' + body.slice(0, 300));
    }
  }
  console.log('Done. (Bing/Yandex/etc. will crawl on their own schedule; IndexNow only notifies.)');
}

main().catch(e => { console.error(e.message || e); process.exit(1); });
