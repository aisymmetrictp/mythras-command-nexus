import type { BlogPost, BlogPostListItem } from './blogTypes';
import { CRK_POSTS } from './cookie-run-kingdom';
import { MTG_POSTS } from './magic-the-gathering';

export const ALL_POSTS: BlogPost[] = [...CRK_POSTS, ...MTG_POSTS].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
);

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
