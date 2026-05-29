'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import BlogCard, { type BlogCardPost } from './BlogCard';

export type BrowsePost = BlogCardPost & { tags?: string[] };

type CategoryOption = { slug: string; name: string; icon: string; count: number };
type TagOption = { tag: string; count: number };

type Props = {
  gameSlug: string;
  posts: BrowsePost[];
  categories: CategoryOption[];
  tags: TagOption[];
};

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function groupByMonth(posts: BrowsePost[]) {
  const groups = new Map<string, BrowsePost[]>();
  for (const p of posts) {
    const d = new Date(p.publishDate);
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .map(([key, ps]) => {
      const [year, month] = key.split('-').map(Number);
      return {
        key,
        label: `${MONTH_NAMES[month - 1]} ${year}`,
        posts: ps.sort(
          (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        ),
      };
    });
}

export default function BlogBrowser({ gameSlug, posts, categories, tags }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) =>
    setActiveTags(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));

  const clearAll = () => {
    setActiveCategory(null);
    setActiveTags([]);
  };

  const filtered = useMemo(() => {
    return posts.filter(p => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (activeTags.length > 0) {
        const postTags = p.tags ?? [];
        if (!activeTags.some(t => postTags.includes(t))) return false;
      }
      return true;
    });
  }, [posts, activeCategory, activeTags]);

  const months = useMemo(() => groupByMonth(filtered), [filtered]);
  const hasFilters = activeCategory !== null || activeTags.length > 0;
  const activeCategoryOption = categories.find(c => c.slug === activeCategory);

  const chipBase =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border';
  const chipOn = 'bg-[#D4A853] text-[#0c0c18] border-[#D4A853]';
  const chipOff =
    'bg-[#0c0c18]/60 text-[#c8c8d4] border-[#D4A853]/15 hover:border-[#D4A853]/45 hover:text-white';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* Filter bar */}
      <div className="rounded-2xl border border-[#D4A853]/15 bg-[#0c0c18]/50 p-4 sm:p-5 mb-10">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9999aa]">
            Filter by category
          </span>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-xs font-semibold text-[#D4A853] hover:text-[#F0C850] transition-colors"
            >
              Clear filters ✕
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={`${chipBase} ${activeCategory === null ? chipOn : chipOff}`}
          >
            All <span className="opacity-70">{posts.length}</span>
          </button>
          {categories.map(c => (
            <button
              key={c.slug}
              onClick={() => setActiveCategory(activeCategory === c.slug ? null : c.slug)}
              aria-pressed={activeCategory === c.slug}
              className={`${chipBase} ${activeCategory === c.slug ? chipOn : chipOff}`}
            >
              <span aria-hidden>{c.icon}</span>
              {c.name} <span className="opacity-70">{c.count}</span>
            </button>
          ))}
        </div>

        {tags.length > 0 && (
          <>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9999aa] mt-5 mb-3">
              Filter by topic, archetype &amp; set
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => {
                const on = activeTags.includes(t.tag);
                return (
                  <button
                    key={t.tag}
                    onClick={() => toggleTag(t.tag)}
                    aria-pressed={on}
                    className={`${chipBase} ${on ? chipOn : chipOff}`}
                  >
                    {t.tag} <span className="opacity-70">{t.count}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Active-category deep link to the dedicated landing page */}
      {activeCategoryOption && (
        <div className="mb-6 -mt-4">
          <Link
            href={`/blog/${gameSlug}/category/${activeCategoryOption.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4A853] hover:text-[#F0C850] transition-colors"
          >
            View the full {activeCategoryOption.name} page
            <span aria-hidden>→</span>
          </Link>
        </div>
      )}

      {/* Results */}
      <div className="text-sm text-[#9999aa] mb-6">
        Showing <strong className="text-white">{filtered.length}</strong>{' '}
        {filtered.length === 1 ? 'article' : 'articles'}
        {hasFilters ? ' matching your filters' : ''}.
      </div>

      {months.length === 0 ? (
        <div className="rounded-2xl border border-[#D4A853]/10 bg-[#0c0c18]/40 py-16 text-center">
          <p className="text-[#9999aa] mb-3">No articles match these filters yet.</p>
          <button
            onClick={clearAll}
            className="text-sm font-semibold text-[#D4A853] hover:text-[#F0C850] transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        months.map(month => (
          <section key={month.key} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <h2
                className="text-xl md:text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {month.label}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
              <span className="text-xs text-[#9999aa]">
                {month.posts.length} {month.posts.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {month.posts.map(post => (
                <BlogCard key={post.slug} post={post} gameSlug={gameSlug} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
