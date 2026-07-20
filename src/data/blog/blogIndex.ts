import type { BlogPost, BlogPostListItem } from './blogTypes';
import { HIDDEN_GAME_SLUGS } from './games';
import { CRK_POSTS } from './cookie-run-kingdom';
import { MTG_POSTS } from './magic-the-gathering';
import { BRAVERSE_POSTS } from './cookie-run-braverse-tcg';
import { ROBLOX_POSTS } from './roblox';
import { PUBG_POSTS } from './pubg-battlegrounds';
import { FORTNITE_POSTS } from './fortnite';
import { MINECRAFT_POSTS } from './minecraft';
import { GENSHIN_POSTS } from './genshin-impact';
import { ELDEN_RING_POSTS } from './elden-ring';
import { BG3_POSTS } from './baldurs-gate-3';
import { CS2_POSTS } from './counter-strike-2';
import { WITCHER_3_POSTS } from './the-witcher-3';
import { BOTW_POSTS } from './zelda-breath-of-the-wild';
import { OCARINA_POSTS } from './zelda-ocarina-of-time';
import { ALTTP_POSTS } from './zelda-a-link-to-the-past';
import { MARIO_64_POSTS } from './super-mario-64';
import { HALF_LIFE_2_POSTS } from './half-life-2';
import { LAST_OF_US_POSTS } from './the-last-of-us';
import { RE4_POSTS } from './resident-evil-4';
import { RE_REQUIEM_POSTS } from './resident-evil-requiem';
import { TETRIS_POSTS } from './tetris';
import { MINA_POSTS } from './mina-the-hollower';
import { POKOPIA_POSTS } from './pokemon-pokopia';
import { CRIMSON_DESERT_POSTS } from './crimson-desert';

export const ALL_POSTS: BlogPost[] = [
  ...CRK_POSTS,
  ...MTG_POSTS,
  ...BRAVERSE_POSTS,
  ...ROBLOX_POSTS,
  ...PUBG_POSTS,
  ...FORTNITE_POSTS,
  ...MINECRAFT_POSTS,
  ...GENSHIN_POSTS,
  ...ELDEN_RING_POSTS,
  ...BG3_POSTS,
  ...CS2_POSTS,
  ...WITCHER_3_POSTS,
  ...BOTW_POSTS,
  ...OCARINA_POSTS,
  ...ALTTP_POSTS,
  ...MARIO_64_POSTS,
  ...HALF_LIFE_2_POSTS,
  ...LAST_OF_US_POSTS,
  ...RE4_POSTS,
  ...RE_REQUIEM_POSTS,
  ...TETRIS_POSTS,
  ...MINA_POSTS,
  ...POKOPIA_POSTS,
  ...CRIMSON_DESERT_POSTS,
].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

/** Posts whose game is currently indexed/discoverable (excludes hidden games).
 *  Use for the blog index feed, sitemap, and llms.txt — NOT for page builds. */
export const VISIBLE_POSTS: BlogPost[] = ALL_POSTS.filter(p => !HIDDEN_GAME_SLUGS.has(p.game));

export function getPostsByGame(gameSlug: string): BlogPost[] {
  return ALL_POSTS.filter(p => p.game === gameSlug);
}

export function getPostBySlug(gameSlug: string, slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.game === gameSlug && p.slug === slug);
}

/**
 * Per-game pillar pages — high-value hubs + GA top performers that should
 * receive internal-link equity from across the game's posts. getRelatedPosts
 * reserves slots for these so crawl depth + authority concentrate on the pages
 * most likely to rank/convert. Keep slugs real (they're looked up by slug).
 */
const PILLAR_SLUGS: Record<string, string[]> = {
  'cookie-run-kingdom': ['cookie-run-kingdom-tier-list', 'crk-toppings-guide', 'decadent-choco-tower-walkthrough', 'endless-strawberry-tower-walkthrough', 'best-crk-pve-teams'],
  'magic-the-gathering': ['mtg-commander-format-guide-how-to-start', 'best-commander-staples-mtg', 'how-to-build-a-commander-deck'],
  'cookie-run-braverse-tcg': ['how-to-play-cookie-run-braverse', 'cookie-run-braverse-meta-tier-list', 'best-cookie-run-braverse-starter-deck'],
  'roblox': ['best-roblox-games', 'how-to-get-robux', 'roblox-beginners-guide'],
  'pubg-battlegrounds': ['best-pubg-weapons-tier-list', 'best-pubg-loadouts', 'pubg-beginners-guide'],
  'fortnite': ['fortnite-weapon-tier-list', 'best-fortnite-settings', 'fortnite-beginners-guide'],
  'minecraft': ['minecraft-survival-guide-beginners', 'best-minecraft-enchantments', 'best-minecraft-seeds'],
};

/**
 * Pick related posts for a given post, scored by closeness
 * (topicCluster > shared tags > category), with up to 2 slots reserved for the
 * game's pillar pages, then backfilled so every post links out to `limit` others.
 */
export function getRelatedPosts(post: BlogPost, limit = 6): BlogPost[] {
  const sameGame = ALL_POSTS.filter(p => p.game === post.game && p.slug !== post.slug);
  const postTags = new Set(post.tags ?? []);
  const score = (p: BlogPost): number => {
    let s = 0;
    if (p.topicCluster && p.topicCluster === post.topicCluster) s += 4;
    if (p.tags && p.tags.some(t => postTags.has(t))) s += 2;
    if (p.category === post.category) s += 1;
    return s;
  };
  const ranked = sameGame
    .map(p => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || new Date(b.p.publishDate).getTime() - new Date(a.p.publishDate).getTime());

  const chosen: BlogPost[] = [];
  const seen = new Set<string>();
  const take = (p?: BlogPost) => { if (p && !seen.has(p.slug)) { seen.add(p.slug); chosen.push(p); } };

  // 1. Strongest topical matches (reserve ~2 slots for pillars).
  for (const { p, s } of ranked) { if (chosen.length >= Math.max(0, limit - 2)) break; if (s > 0) take(p); }
  // 2. Inject this game's pillar pages (link equity to hubs / top performers).
  for (const slug of (PILLAR_SLUGS[post.game] ?? [])) {
    if (chosen.length >= limit) break;
    if (slug !== post.slug) take(sameGame.find(p => p.slug === slug));
  }
  // 3. Backfill with the next best-scored / most-recent same-game posts.
  for (const { p } of ranked) { if (chosen.length >= limit) break; take(p); }

  return chosen.slice(0, limit);
}

export function getPostsByCategory(gameSlug: string, category: string): BlogPost[] {
  return ALL_POSTS.filter(p => p.game === gameSlug && p.category === category);
}

/** Category slugs that actually have at least one post for this game. */
export function getCategorySlugsForGame(gameSlug: string): string[] {
  const set = new Set<string>();
  for (const p of ALL_POSTS) if (p.game === gameSlug) set.add(p.category);
  return [...set];
}

/** Tags present across a game's posts, with counts, sorted alphabetically. */
export function getTagsForGame(gameSlug: string): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of ALL_POSTS) {
    if (p.game !== gameSlug || !p.tags) continue;
    for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export function toListItem(p: BlogPost): BlogPostListItem {
  return {
    slug: p.slug,
    game: p.game,
    category: p.category,
    title: p.title,
    excerpt: p.excerpt,
    publishDate: p.publishDate,
    lastUpdated: p.lastUpdated,
    readingTimeMin: p.readingTimeMin,
    primaryKeyword: p.primaryKeyword,
    featuredImagePrompt: p.featuredImagePrompt,
  };
}

export type MonthGroup = {
  key: string;
  label: string;
  posts: BlogPost[];
};

export function groupPostsByMonth(posts: BlogPost[]): MonthGroup[] {
  const groups = new Map<string, BlogPost[]>();
  for (const p of posts) {
    const d = new Date(p.publishDate);
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return [...groups.entries()]
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .map(([key, posts]) => {
      const [year, month] = key.split('-').map(Number);
      return {
        key,
        label: `${monthNames[month - 1]} ${year}`,
        posts: posts.sort(
          (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        ),
      };
    });
}
