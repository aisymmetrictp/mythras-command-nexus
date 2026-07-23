/**
 * AMAZON PICKS — per-game affiliate product recommendations.
 *
 * TWO KINDS of pick, both live in the same list:
 *   1. `searchKeywords` — a tagged Amazon SEARCH link. Works TODAY, never breaks,
 *      needs no API and no eligibility. This is the fast, safe default for
 *      blanketing every game with monetization.
 *   2. `asin` — a specific product. Renders as a plain tagged product link now,
 *      and auto-upgrades to a rich card (real title/image/price + canonical
 *      affiliate detailPageURL) once the Creators API enrichment script can run
 *      (see scripts/amazon/enrich-amazon-picks.mjs). Enrichment output is merged
 *      from amazonPicks.enriched.json by ASIN — no code change needed.
 *
 * The Creators API is eligibility-gated (>=10 qualifying sales / 30 days), so
 * until then everything runs on the search/manual links below. Add ASINs here
 * whenever you want a specific product; the enrichment flips them rich later.
 *
 * Associate tag: mythras2026-20. All links auto-fire GA4 `affiliate_click`
 * (AnalyticsEvents matches amazon.com), and the UI carries an affiliate label.
 */
import enrichedRaw from './amazonPicks.enriched.json';

export const AMAZON_TAG = 'mythras2026-20';

export function amazonProductUrl(asin: string, tag: string = AMAZON_TAG): string {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}
export function amazonSearchUrl(keywords: string, tag: string = AMAZON_TAG): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(keywords)}&tag=${tag}`;
}

export type AmazonPick = {
  asin?: string;
  searchKeywords?: string;
  title: string;
  sub?: string;
  image?: string;
  price?: string;
};

export type ResolvedAmazonPick = {
  title: string;
  sub?: string;
  image?: string;
  price?: string;
  href: string;
  kind: 'product' | 'search';
};

type Enriched = { title?: string; sub?: string; image?: string; price?: string; detailPageURL?: string };
const ENRICHED = enrichedRaw as Record<string, Enriched>;

export function resolvePick(pick: AmazonPick): ResolvedAmazonPick {
  if (pick.asin) {
    const e = ENRICHED[pick.asin] ?? {};
    return {
      title: pick.title || e.title || 'View on Amazon',
      sub: pick.sub ?? e.sub,
      image: pick.image ?? e.image,
      price: pick.price ?? e.price,
      href: e.detailPageURL ?? amazonProductUrl(pick.asin),
      kind: 'product',
    };
  }
  return {
    title: pick.title,
    sub: pick.sub,
    image: pick.image,
    price: pick.price,
    href: amazonSearchUrl(pick.searchKeywords ?? pick.title),
    kind: 'search',
  };
}

// ── Reusable pick-sets (search links — valid immediately) ───────────────────
const GAMING_GEAR: AmazonPick[] = [
  { searchKeywords: 'gaming mouse', title: 'Gaming Mice', sub: 'Lightweight, high-DPI mice on Amazon' },
  { searchKeywords: 'mechanical gaming keyboard', title: 'Mechanical Keyboards', sub: 'Fast, tactile boards on Amazon' },
  { searchKeywords: 'gaming headset', title: 'Gaming Headsets', sub: 'Positional-audio headsets on Amazon' },
];
const TCG_GEAR: AmazonPick[] = [
  { searchKeywords: 'trading card sleeves', title: 'Card Sleeves', sub: 'Protect your singles on Amazon' },
  { searchKeywords: 'tcg deck box', title: 'Deck Boxes', sub: 'Deck storage on Amazon' },
  { searchKeywords: 'tcg playmat', title: 'Playmats', sub: 'Match-ready playmats on Amazon' },
];
const SWITCH_GEAR: AmazonPick[] = [
  { searchKeywords: 'nintendo switch pro controller', title: 'Pro Controllers', sub: 'Comfier control on Amazon' },
  { searchKeywords: 'nintendo switch microSD card', title: 'microSD Cards', sub: 'More storage on Amazon' },
  { searchKeywords: 'nintendo switch accessories', title: 'Switch Accessories', sub: 'Cases, grips & more on Amazon' },
];
const MOBILE_GEAR: AmazonPick[] = [
  { searchKeywords: 'mobile gaming controller', title: 'Mobile Controllers', sub: 'Phone gamepads on Amazon' },
  { searchKeywords: 'phone cooler gaming', title: 'Phone Coolers', sub: 'Beat thermal throttle on Amazon' },
  { searchKeywords: 'usb c power bank', title: 'Power Banks', sub: 'Longer grind sessions on Amazon' },
];

const DEFAULT_PICKS = GAMING_GEAR;

// ── Per-game mapping ────────────────────────────────────────────────────────
export const AMAZON_PICKS_BY_GAME: Record<string, AmazonPick[]> = {
  'magic-the-gathering': TCG_GEAR,
  'cookie-run-braverse-tcg': TCG_GEAR,
  'cookie-run-kingdom': MOBILE_GEAR,
  'genshin-impact': MOBILE_GEAR,
  'zelda-breath-of-the-wild': SWITCH_GEAR,
  'zelda-ocarina-of-time': SWITCH_GEAR,
  'zelda-a-link-to-the-past': SWITCH_GEAR,
  'super-mario-64': SWITCH_GEAR,
  'pokemon-pokopia': SWITCH_GEAR,
  'fortnite': GAMING_GEAR,
  'pubg-battlegrounds': GAMING_GEAR,
  'counter-strike-2': GAMING_GEAR,
  'roblox': GAMING_GEAR,
  'minecraft': GAMING_GEAR,
  'elden-ring': GAMING_GEAR,
  'the-witcher-3': GAMING_GEAR,
  'baldurs-gate-3': GAMING_GEAR,
  'half-life-2': GAMING_GEAR,
  'the-last-of-us': GAMING_GEAR,
  'resident-evil-4': GAMING_GEAR,
  'resident-evil-requiem': GAMING_GEAR,
  'tetris': GAMING_GEAR,
  'mina-the-hollower': GAMING_GEAR,
  'crimson-desert': GAMING_GEAR,
};

export function getAmazonPicks(game: string, limit = 3): ResolvedAmazonPick[] {
  const picks = AMAZON_PICKS_BY_GAME[game] ?? DEFAULT_PICKS;
  return picks.slice(0, limit).map(resolvePick);
}
