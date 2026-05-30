import type { BlogPost, BlogPostListItem } from './blogTypes';
import { CRK_POSTS } from './cookie-run-kingdom';
import { MTG_POSTS } from './magic-the-gathering';
import { BRAVERSE_POSTS } from './cookie-run-braverse-tcg';
import { ROBLOX_POSTS } from './roblox';
import { PUBG_POSTS } from './pubg-battlegrounds';
import { FORTNITE_POSTS } from './fortnite';
import { MINECRAFT_POSTS } from './minecraft';

export const ALL_POSTS: BlogPost[] = [
  ...CRK_POSTS,
  ...MTG_POSTS,
  ...BRAVERSE_POSTS,
  ...ROBLOX_POSTS,
  ...PUBG_POSTS,
  ...FORTNITE_POSTS,
  ...MINECRAFT_POSTS,
].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

export function getPostsByGame(gameSlug: string): BlogPost[] {
  return ALL_POSTS.filter(p => p.game === gameSlug);
}

export function getPostBySlug(gameSlug: string, slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.game === gameSlug && p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return ALL_POSTS.filter(
    p =>
      p.game === post.game &&
      p.slug !== post.slug &&
      (p.category === post.category || p.topicCluster === post.topicCluster)
  ).slice(0, limit);
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
