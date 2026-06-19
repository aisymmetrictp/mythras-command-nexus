/**
 * MYTHRAS ARMORY — product catalog.
 *
 * EDIT THIS FILE to add, remove, or change shop products. No UI/code changes
 * needed — every product here renders as a ProductCard in the /shop grid and on
 * its category page (/shop/<category-slug>).
 *
 * Status meanings:
 *   available   — a real Mythras product you can get now (Discord/email/checkout)
 *   coming-soon — announced, not buyable yet (CTA collects interest)
 *   external    — sold on an outside store you own (Creator-Spring, etc.)
 *   affiliate   — a third-party product we recommend; the channel may earn a commission
 *
 * Images are optional — products without one get a branded placeholder, so you
 * can add a product now and drop the image in later at /images/shop/<slug>.webp.
 */

export type ProductCategory =
  | 'collector-cards'
  | 'merch'
  | 'tcg-gear'
  | 'cards'
  | 'gaming-gear'
  | 'digital'
  | 'support';

export type ProductStatus = 'available' | 'coming-soon' | 'external' | 'affiliate';

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  priceLabel: string;
  description: string;
  image?: string;
  /** Optional extra views (e.g. a card back). First entry overrides `image` if set. */
  images?: string[];
  badge?: string;
  status: ProductStatus;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  disclaimer?: string;
};

/** URL slug ↔ category key ↔ display name. Drives /shop/[category] + the grid filter tabs. */
export const SHOP_CATEGORIES: { slug: string; key: ProductCategory; name: string; blurb: string }[] = [
  { slug: 'collector-cards', key: 'collector-cards', name: 'Collector Cards', blurb: 'Limited Mythras collectibles and hand-signed drops.' },
  { slug: 'merch', key: 'merch', name: 'Mythras Merch', blurb: 'Tees, hoodies, and Multiverse swag.' },
  { slug: 'tcg', key: 'tcg-gear', name: 'TCG Gear', blurb: 'Playmats, sleeves, and table gear for card games.' },
  { slug: 'cards', key: 'cards', name: 'Cards We Play', blurb: 'The TCG products we actually run — Braverse, MTG, Lorcana.' },
  { slug: 'gear', key: 'gaming-gear', name: 'Gaming Gear', blurb: 'Stream and gaming setup gear we use on the channel.' },
  { slug: 'digital', key: 'digital', name: 'Digital Downloads', blurb: 'Strategy packs and one-on-one review sessions.' },
  { slug: 'support', key: 'support', name: 'Community Support', blurb: 'Tip the channel and keep the guides free.' },
];

// Shared destinations (keep in sync with /support).
const DISCORD = 'https://discord.gg/mFg8mbxtTS';
const RESERVE_EMAIL = 'mailto:gamertagmythras@gmail.com?subject=Mythras%20Shop%20Inquiry';
const STREAMLABS_TIP = 'https://streamlabs.com/3mythras3/tip';
const CREATOR_SPRING = 'https://my-store-1029bec.creator-spring.com/';
const YOURPLAYMAT = 'https://www.yourplaymat.com/';
const TCGPLAYER = 'https://tcgplayer.pxf.io/eKBr3Z';

const CARD_DISCLAIMER =
  'Original fan art and an independent collectible. Not official, not tournament-playable, and not affiliated with or endorsed by Devsisters or any game publisher.';

export const SHOP_PRODUCTS: Product[] = [
  // ---- Collector cards ----
  {
    id: 'mythras-cookie-card',
    name: 'Mythras Cookie Collector Card',
    slug: 'mythras-cookie-collector-card',
    category: 'collector-cards',
    priceLabel: '$25',
    description:
      'A custom, hand-designed collector card illustrated and hand-signed by Mythras — the golden lion in full TCG style. In stock and ready to ship.',
    image: '/images/support/mythras-cookie-card.webp',
    images: ['/images/support/mythras-cookie-card.webp', '/images/support/mythras-cookie-card-back.webp'],
    badge: 'In stock · Hand-signed',
    status: 'available',
    ctaLabel: 'Reserve on Discord',
    ctaHref: DISCORD,
    featured: true,
    disclaimer: CARD_DISCLAIMER,
  },
  {
    id: 'fan-art-collectibles',
    name: 'Cookie Run Fan Art & Collectibles',
    slug: 'cookie-run-fan-art-collectibles',
    category: 'collector-cards',
    priceLabel: 'Shop on Amazon',
    description: 'Art books, figures, and collectibles for the Cookie Run universe — our hand-picked Amazon list.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Browse the list',
    ctaHref: 'https://amzn.to/3QOGGqK',
  },

  // ---- Merch ----
  {
    id: 'multiverse-hoodie',
    name: 'Mythras Multiverse Hoodie',
    slug: 'mythras-multiverse-hoodie',
    category: 'merch',
    priceLabel: 'Coming soon',
    description: 'A premium Multiverse hoodie in the works. Want first dibs when it drops? Let us know.',
    badge: 'Coming soon',
    status: 'coming-soon',
    ctaLabel: 'Notify me',
    ctaHref: DISCORD,
  },
  {
    id: 'logo-tee',
    name: 'Mythras Logo Tee',
    slug: 'mythras-logo-tee',
    category: 'merch',
    priceLabel: 'On Creator-Spring',
    description: 'The classic gold-lion logo tee and more, printed on demand through our Creator-Spring store.',
    badge: 'External store',
    status: 'external',
    ctaLabel: 'Shop on Creator-Spring',
    ctaHref: CREATOR_SPRING,
  },

  // ---- TCG gear ----
  {
    id: 'mythras-playmat',
    name: 'Custom Playmats',
    slug: 'mythras-playmats',
    category: 'tcg-gear',
    priceLabel: '10% off · code GM10YP',
    description: 'Pro-grade custom playmats from our partner YourPlaymat. Use code GM10YP for 10% off your order.',
    badge: 'Partner · 10% off',
    status: 'affiliate',
    ctaLabel: 'Get yours (GM10YP)',
    ctaHref: YOURPLAYMAT,
  },
  {
    id: 'mythras-sleeves',
    name: 'Mythras Sleeves',
    slug: 'mythras-sleeves',
    category: 'tcg-gear',
    priceLabel: 'Coming soon',
    description: 'Mythras-branded card sleeves are on the roadmap. Register interest and we will ping you at launch.',
    badge: 'Coming soon',
    status: 'coming-soon',
    ctaLabel: 'Notify me',
    ctaHref: DISCORD,
  },

  // ---- Cards we play (affiliate) ----
  {
    id: 'braverse-starter-picks',
    name: 'CookieRun Braverse Starter Picks',
    slug: 'cookierun-braverse-starter-picks',
    category: 'cards',
    priceLabel: 'Shop on Amazon',
    description: 'The Braverse TCG products we recommend for getting started — booster boxes, decks, and accessories.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Shop Braverse',
    ctaHref: 'https://amzn.to/46ytRqz',
  },
  {
    id: 'braverse-age-of-heroes',
    name: 'Braverse — Age of Heroes & Kingdoms',
    slug: 'braverse-age-of-heroes-kingdoms',
    category: 'cards',
    priceLabel: 'Shop on Amazon',
    description: 'Set products for the Age of Heroes & Kingdoms expansion.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Shop the set',
    ctaHref: 'https://amzn.to/4nDTf5v',
  },
  {
    id: 'braverse-arena-of-glory',
    name: 'Braverse — Arena of Glory',
    slug: 'braverse-arena-of-glory',
    category: 'cards',
    priceLabel: 'Shop on Amazon',
    description: 'Set products for the Arena of Glory expansion.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Shop the set',
    ctaHref: 'https://amzn.to/3O1glGk',
  },
  {
    id: 'mtg-starter-picks',
    name: 'MTG Starter Kit Picks',
    slug: 'mtg-starter-kit-picks',
    category: 'cards',
    priceLabel: 'Shop on Amazon',
    description: 'Magic: The Gathering starter products, singles, and accessories we recommend for new and returning players.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Shop MTG',
    ctaHref: 'https://amzn.to/49FZPkr',
  },
  {
    id: 'lorcana-starter-picks',
    name: 'Lorcana Starter Picks',
    slug: 'lorcana-starter-picks',
    category: 'cards',
    priceLabel: 'On TCGplayer',
    description: 'Disney Lorcana starter decks, singles, and sealed — sourced through TCGplayer.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Shop Lorcana',
    ctaHref: TCGPLAYER,
  },
  {
    id: 'tcgplayer-singles',
    name: 'TCGplayer — Singles & Sealed',
    slug: 'tcgplayer-singles-sealed',
    category: 'cards',
    priceLabel: 'On TCGplayer',
    description: 'Singles and sealed product across every TCG we cover — our TCGplayer affiliate link.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Shop TCGplayer',
    ctaHref: TCGPLAYER,
  },

  // ---- Gaming gear (affiliate) ----
  {
    id: 'stream-setup-gear',
    name: 'Stream & Setup Gear',
    slug: 'stream-setup-gear',
    category: 'gaming-gear',
    priceLabel: 'Shop on Amazon',
    description: 'The peripherals, capture, and stream gear we actually use — our hand-picked Amazon list.',
    badge: 'Affiliate',
    status: 'affiliate',
    ctaLabel: 'Shop the gear',
    ctaHref: 'https://amzn.to/463bCrF',
  },

  // ---- Digital ----
  {
    id: 'strategy-pdf-pack',
    name: 'Mythras Strategy PDF Pack',
    slug: 'mythras-strategy-pdf-pack',
    category: 'digital',
    priceLabel: 'Coming soon',
    description: 'A downloadable pack of our best tier lists, build sheets, and cheat sheets. In production.',
    badge: 'Coming soon',
    status: 'coming-soon',
    ctaLabel: 'Notify me',
    ctaHref: DISCORD,
  },
  {
    id: 'deck-review-session',
    name: 'Deck Review Session',
    slug: 'deck-review-session',
    category: 'digital',
    priceLabel: 'Coming soon',
    description: 'A one-on-one review of your TCG deck with Mythras — tuning, swaps, and a game plan.',
    badge: 'Coming soon',
    status: 'coming-soon',
    ctaLabel: 'Request a session',
    ctaHref: RESERVE_EMAIL,
  },
  {
    id: 'team-comp-review-session',
    name: 'Team Comp Review Session',
    slug: 'team-comp-review-session',
    category: 'digital',
    priceLabel: 'Coming soon',
    description: 'A one-on-one review of your Cookie Run: Kingdom roster and comps — toppings, order, and counters.',
    badge: 'Coming soon',
    status: 'coming-soon',
    ctaLabel: 'Request a session',
    ctaHref: RESERVE_EMAIL,
  },

  // ---- Support ----
  {
    id: 'tip-the-channel',
    name: 'Tip the Channel',
    slug: 'tip-the-channel',
    category: 'support',
    priceLabel: 'Any amount',
    description: 'A one-off tip keeps the guides free and the videos coming. Every bit genuinely helps.',
    badge: 'Support',
    status: 'external',
    ctaLabel: 'Tip on Streamlabs',
    ctaHref: STREAMLABS_TIP,
  },
];

export function getProductsByCategory(key: ProductCategory): Product[] {
  return SHOP_PRODUCTS.filter(p => p.category === key);
}
export function getFeaturedProducts(): Product[] {
  return SHOP_PRODUCTS.filter(p => p.featured);
}
export function getCategoryBySlug(slug: string) {
  return SHOP_CATEGORIES.find(c => c.slug === slug);
}
