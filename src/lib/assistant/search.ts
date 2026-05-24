// Fuse.js-backed fuzzy search across the content index, with category boosting,
// recency boosting, and a small set of helpers the response templates lean on.
import Fuse from 'fuse.js';
import type { ContentIndexItem, RecommendedLink } from './types';
import { getContentIndex } from './contentIndex';

let _fuse: Fuse<ContentIndexItem> | null = null;

function getFuse(): Fuse<ContentIndexItem> {
  if (_fuse) return _fuse;
  _fuse = new Fuse(getContentIndex(), {
    includeScore: true,
    threshold: 0.42,
    ignoreLocation: true,
    minMatchCharLength: 2,
    useExtendedSearch: false,
    keys: [
      { name: 'title', weight: 0.45 },
      { name: 'keywords', weight: 0.35 },
      { name: 'summary', weight: 0.15 },
      { name: 'category', weight: 0.05 },
    ],
  });
  return _fuse;
}

const NOW = () => Date.now();
const ONE_DAY = 1000 * 60 * 60 * 24;

function recencyBoost(item: ContentIndexItem): number {
  if (!item.lastUpdated) return 0;
  const ageDays = (NOW() - new Date(item.lastUpdated).getTime()) / ONE_DAY;
  if (ageDays < 7) return 0.06;
  if (ageDays < 30) return 0.03;
  if (ageDays < 90) return 0.01;
  return 0;
}

const CATEGORY_BOOST: Record<string, number> = {
  blog: 0.04,
  'cake-tower': 0.03,
  cookie: 0.02,
  page: 0.02,
  'gear-category': 0.02,
  'gear-type': 0.0,
  channel: 0.0,
};

function categoryBoost(item: ContentIndexItem): number {
  return CATEGORY_BOOST[item.category] ?? 0;
}

export interface SearchResult {
  item: ContentIndexItem;
  /** Adjusted score 0-1 (1 = perfect). Higher is better. */
  score: number;
}

export function searchContent(query: string, limit = 5): SearchResult[] {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const fuse = getFuse();
  const raw = fuse.search(trimmed, { limit: limit * 3 });

  const scored: SearchResult[] = raw.map(r => {
    // fuse.score: 0 = perfect, 1 = no match. Invert to 0-1 where 1 = perfect.
    const base = 1 - (r.score ?? 1);
    const adjusted = Math.min(1, base + recencyBoost(r.item) + categoryBoost(r.item) + r.item.priority * 0.08);
    return { item: r.item, score: adjusted };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}

/** Returns content items matching ANY of the provided keywords (case-insensitive substring). */
export function findByKeywords(keywords: string[], limit = 5): SearchResult[] {
  const index = getContentIndex();
  const needles = keywords.map(k => k.toLowerCase()).filter(k => k.length > 1);
  if (needles.length === 0) return [];

  const matched: SearchResult[] = [];
  for (const item of index) {
    const haystack = (
      item.title +
      ' ' +
      item.keywords.join(' ') +
      ' ' +
      item.summary +
      ' ' +
      (item.topicCluster ?? '')
    ).toLowerCase();
    let hits = 0;
    for (const n of needles) if (haystack.includes(n)) hits++;
    if (hits > 0) {
      matched.push({
        item,
        score: Math.min(1, 0.4 + hits / needles.length * 0.5 + item.priority * 0.08),
      });
    }
  }
  matched.sort((a, b) => b.score - a.score);
  return matched.slice(0, limit);
}

/** Returns top items in a given category, recency-weighted. Used for "what should I read next?" */
export function topInCategory(category: ContentIndexItem['category'], limit = 5): SearchResult[] {
  const index = getContentIndex().filter(i => i.category === category);
  return index
    .map(item => ({
      item,
      score: Math.min(1, 0.5 + recencyBoost(item) * 5 + item.priority * 0.2),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function toRecommendedLink(r: SearchResult): RecommendedLink {
  return {
    title: r.item.title,
    href: r.item.href,
    summary: r.item.summary,
    score: r.score,
  };
}
