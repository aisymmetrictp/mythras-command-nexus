/**
 * MYTHRAS ARMORY — membership tiers.
 *
 * EDIT THIS FILE to change tier names, prices, or benefits. Renders on /shop
 * (#memberships) and /shop/memberships via <MembershipTierCard />.
 *
 * Checkout is not wired yet (the site is a static export — see
 * src/lib/shop/checkout.ts). Until a Stripe Payment Link or serverless function
 * exists, every tier CTA routes to Discord / the reserve form. Set `ctaHref` to
 * a Stripe Payment Link URL when ready and it will just work.
 */

export type MembershipTier = {
  id: string;
  name: string;
  priceLabel: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
};

const DISCORD = 'https://discord.gg/mFg8mbxtTS';

/**
 * Stripe Payment Links per tier, injected at build time from env.
 * - Local/test: set in `.env.local` (gitignored) as NEXT_PUBLIC_STRIPE_LINK_*.
 * - Live: set the LIVE-mode links as Netlify env vars, then rebuild + deploy.
 * Until a tier's link is set, its CTA falls back to Discord (current behavior).
 * NEXT_PUBLIC_ prefix is REQUIRED — this is a static export, so the value must
 * be inlined into the client bundle at build time.
 */
const STRIPE_LINKS: Record<string, string | undefined> = {
  wanderer: process.env.NEXT_PUBLIC_STRIPE_LINK_WANDERER,
  champion: process.env.NEXT_PUBLIC_STRIPE_LINK_CHAMPION,
  mythic: process.env.NEXT_PUBLIC_STRIPE_LINK_MYTHIC,
};

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'wanderer',
    name: 'Wanderer',
    priceLabel: '$5/mo',
    description: 'Light support that keeps the free guides and videos coming.',
    benefits: [
      'Support the free guides and videos',
      'Discord supporter badge',
      'Early community polls',
      'Monthly supporter shoutout',
      'Access to member-only updates',
    ],
    ctaLabel: STRIPE_LINKS.wanderer ? 'Subscribe' : 'Join on Discord',
    ctaHref: STRIPE_LINKS.wanderer || DISCORD,
    badge: 'Supporter',
  },
  {
    id: 'champion',
    name: 'Champion',
    priceLabel: '$15/mo',
    description: 'For the core community member who wants a real seat at the table.',
    benefits: [
      'Everything in Wanderer',
      'Priority Discord Q&A',
      'Early strategy notes',
      'Monthly deck/team review thread',
      'Member-only livestream & community night access',
      'Discounts on Mythras collector drops',
    ],
    ctaLabel: STRIPE_LINKS.champion ? 'Subscribe' : 'Join on Discord',
    ctaHref: STRIPE_LINKS.champion || DISCORD,
    featured: true,
    badge: 'Most popular',
  },
  {
    id: 'mythic',
    name: 'Mythic',
    priceLabel: '$30/mo',
    description: 'Premium supporter — the closest seat to the Mythras forge.',
    benefits: [
      'Everything in Champion',
      'Priority build / deck / team feedback',
      'Behind-the-scenes content',
      'Private supporter channel',
      'First access to limited collector drops',
      'Annual signed card or print',
    ],
    ctaLabel: STRIPE_LINKS.mythic ? 'Subscribe' : 'Join on Discord',
    ctaHref: STRIPE_LINKS.mythic || DISCORD,
    badge: 'Premium',
  },
];
