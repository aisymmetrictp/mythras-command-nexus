import type { BlogCategory } from './blogTypes';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'cookie-guides',
    name: 'Cookie Guides',
    description: 'Per-Cookie deep dives: toppings, beascuits, comps, skill breakdowns, pull worth.',
    icon: '🍪',
  },
  {
    slug: 'team-builds',
    name: 'Team Builds',
    description: 'Arena, Guild Battle, World Exploration, Beast-Yeast, Alliance, F2P comps.',
    icon: '⚔️',
  },
  {
    slug: 'events-updates',
    name: 'Events & Updates',
    description: 'Patch notes, new Cookie releases, banner reviews, codes, limited-time rewards.',
    icon: '📰',
  },
  {
    slug: 'beginner-guides',
    name: 'Beginner Guides',
    description: 'Rerolls, progression roadmap, system explainers, mistakes to avoid.',
    icon: '🌱',
  },
  {
    slug: 'advanced-strategy',
    name: 'Advanced Strategy',
    description: 'Meta analysis, damage optimization, cooldown tuning, investment priority.',
    icon: '🧠',
  },
  {
    slug: 'tier-lists',
    name: 'Tier Lists',
    description: 'Overall, PvE, PvP, Guild Battle, rarity-specific, refreshed monthly.',
    icon: '🏆',
  },
  {
    slug: 'game-guides',
    name: 'Game Guides',
    description: 'How-to walkthroughs, mechanics, modes, maps, settings, and systems.',
    icon: '🎮',
  },
  {
    slug: 'tips-tricks',
    name: 'Tips & Tricks',
    description: 'Quick wins, optimization, lesser-known mechanics, and pro habits.',
    icon: '💡',
  },
  // Magic: The Gathering specific
  {
    slug: 'deck-guides',
    name: 'Deck Guides',
    description: 'Commander deck techs, Standard / Modern / Pioneer / Pauper builds, sideboards, mana bases.',
    icon: '🃏',
  },
  {
    slug: 'card-guides',
    name: 'Card Guides',
    description: 'Best cards by color, format staples, new-set standouts, budget alternatives.',
    icon: '🎴',
  },
  {
    slug: 'format-guides',
    name: 'Format Guides',
    description: 'Commander / Standard / Modern / Pioneer / Pauper / Limited primers.',
    icon: '📚',
  },
  {
    slug: 'set-releases',
    name: 'Set Releases',
    description: 'New set previews, mechanics breakdowns, precon reviews, draft archetypes.',
    icon: '✨',
  },
  {
    slug: 'collector-product',
    name: 'Collector & Product',
    description: 'Rarity guides, booster box value, promo tracking, product comparisons, storage, and clearly-labeled speculation.',
    icon: '💎',
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find(c => c.slug === slug);
}
