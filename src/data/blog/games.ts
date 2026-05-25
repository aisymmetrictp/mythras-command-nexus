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
];

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find(g => g.slug === slug);
}

export const ACTIVE_GAMES: Game[] = GAMES.filter(g => g.active);
