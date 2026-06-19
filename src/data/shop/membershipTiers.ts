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
    ctaLabel: 'Join on Discord',
    ctaHref: DISCORD,
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
    ctaLabel: 'Join on Discord',
    ctaHref: DISCORD,
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
    ctaLabel: 'Join on Discord',
    ctaHref: DISCORD,
    badge: 'Premium',
  },
];
