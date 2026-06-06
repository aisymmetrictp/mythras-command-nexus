import type { Game } from './blogTypes';

export const GAMES: Game[] = [
  {
    slug: 'cookie-run-kingdom',
    name: 'Cookie Run: Kingdom',
    shortName: 'CRK',
    description:
      'Devsisters\' flagship gacha RPG. Cookie team-building, kingdom management, PvE story, Guild Battles, Arena, Beast-Yeast, and seasonal collabs.',
    icon: '🍪',
    accentColor: '#D4A853',
    active: true,
  },
  {
    slug: 'magic-the-gathering',
    name: 'Magic: The Gathering',
    shortName: 'MTG',
    description:
      'Wizards of the Coast\'s flagship TCG. Commander, Standard, Modern, Pioneer, Pauper, and Limited coverage — deck guides, card evaluations, set reviews, and format primers.',
    icon: '🧙',
    accentColor: '#D4A853',
    active: true,
  },
  {
    slug: 'cookie-run-braverse-tcg',
    name: 'Cookie Run: Braverse',
    shortName: 'Braverse',
    description:
      'Devsisters\' Cookie Run trading card game — a fast-to-learn two-player TCG. Starter deck rankings, deck-building basics, the five colors, the FLIP mechanic, set reviews, collecting guides, and competitive archetypes.',
    icon: '🎴',
    accentColor: '#D4A853',
    active: true,
  },
  {
    slug: 'roblox',
    name: 'Roblox',
    shortName: 'Roblox',
    description:
      'The massive user-generated game platform. Finding the best experiences, getting started safely, earning and spending Robux, Roblox Studio basics, and the best games to play with friends.',
    icon: '🟥',
    accentColor: '#D4A853',
    active: true,
  },
  {
    slug: 'pubg-battlegrounds',
    name: 'PUBG: Battlegrounds',
    shortName: 'PUBG',
    description:
      'Krafton\'s original battle royale. Survival fundamentals, weapon and loadout tier lists, attachment setups, the best landing spots, and settings and sensitivity tuning.',
    icon: '🪂',
    accentColor: '#D4A853',
    active: true,
  },
  {
    slug: 'fortnite',
    name: 'Fortnite',
    shortName: 'Fortnite',
    description:
      'Epic\'s genre-defining battle royale. Beginner fundamentals, building basics, current-season landing spots, weapon tier lists, and the best settings for PC and console.',
    icon: '🦙',
    accentColor: '#D4A853',
    active: true,
  },
  {
    slug: 'minecraft',
    name: 'Minecraft',
    shortName: 'Minecraft',
    description:
      'Mojang\'s sandbox phenomenon. Survival guides for beginners, enchantment rankings, redstone basics, the best seeds, and building tips for every kind of player.',
    icon: '⛏️',
    accentColor: '#D4A853',
    active: true,
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find(g => g.slug === slug);
}

export const ACTIVE_GAMES: Game[] = GAMES.filter(g => g.active);

// --- Indexing gate (AdSense focus) -------------------------------------------
// Games temporarily hidden from discovery + de-indexed while we get the site
// approved on its strongest, original-media-backed vertical (Cookie Run). Their
// pages still BUILD (so re-enabling is instant) but are emitted noindex and
// removed from the nav, the blog index, the sitemap, and llms.txt.
// To restore everything after approval: empty this set.
export const HIDDEN_GAME_SLUGS = new Set<string>([
  'magic-the-gathering',
  'minecraft',
  'roblox',
  'fortnite',
  'pubg-battlegrounds',
]);

export function isGameHidden(slug: string): boolean {
  return HIDDEN_GAME_SLUGS.has(slug);
}

/** Active games that are also currently indexed/discoverable (drives nav + blog index). */
export const VISIBLE_GAMES: Game[] = ACTIVE_GAMES.filter(g => !HIDDEN_GAME_SLUGS.has(g.slug));
