import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ACTIVE_GAMES, getGameBySlug, isGameHidden } from '@/data/blog/games';
import {
  getPostsByCategory,
  getCategorySlugsForGame,
  groupPostsByMonth,
} from '@/data/blog/blogIndex';
import { BLOG_CATEGORIES, getCategoryBySlug } from '@/data/blog/categories';
import BlogCard from '@/components/blog/BlogCard';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

export function generateStaticParams() {
  const params: { game: string; category: string }[] = [];
  for (const g of ACTIVE_GAMES) {
    for (const category of getCategorySlugsForGame(g.slug)) {
      params.push({ game: g.slug, category });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ game: string; category: string }>;
}): Promise<Metadata> {
  const { game, category } = await params;
  const g = getGameBySlug(game);
  const cat = getCategoryBySlug(category as never);
  if (!g || !cat) return { title: 'Not Found' };

  const title = `${g.name} ${cat.name} — Guides & Articles`;
  const description = `Every ${g.name} ${cat.name.toLowerCase()} article from Mythras. ${cat.description}`;
  const url = `https://gamertagmythras.com/blog/${g.slug}/category/${cat.slug}`;

  return {
    title,
    description,
    keywords: [`${g.name} ${cat.name}`, `${g.shortName} ${cat.name}`, g.name, cat.name, 'Mythras'],
    openGraph: { title, description, url, type: 'website' },
    twitter: { title, description },
    alternates: { canonical: url },
    ...(isGameHidden(g.slug) ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function GameCategoryPage({
  params,
}: {
  params: Promise<{ game: string; category: string }>;
}) {
  const { game, category } = await params;
  const g = getGameBySlug(game);
  const cat = getCategoryBySlug(category as never);
  if (!g || !cat) notFound();

  const posts = getPostsByCategory(g.slug, cat.slug);
  if (posts.length === 0) notFound();

  const months = groupPostsByMonth(posts);
  const url = `https://gamertagmythras.com/blog/${g.slug}/category/${cat.slug}`;

  const siblingCategories = getCategorySlugsForGame(g.slug)
    .filter(slug => slug !== cat.slug)
    .map(slug => BLOG_CATEGORIES.find(c => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <WebPageSchema name={`${g.name} ${cat.name}`} description={cat.description} url={url} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Blog', url: 'https://gamertagmythras.com/blog' },
          { name: g.name, url: `https://gamertagmythras.com/blog/${g.slug}` },
          { name: cat.name, url },
        ]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#9999aa] mb-5">
          <Link href="/blog" className="hover:text-[#F0C850] transition-colors">Blog</Link>
          <span className="text-[#55556a]">/</span>
          <Link href={`/blog/${g.slug}`} className="hover:text-[#F0C850] transition-colors">{g.name}</Link>
          <span className="text-[#55556a]">/</span>
          <span className="text-[#D4A853] font-semibold">{cat.name}</span>
        </div>
        <div className="flex items-start gap-5">
          <div className="text-5xl md:text-6xl">{cat.icon}</div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {g.name}: {cat.name}
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl">{cat.description}</p>
            <div className="mt-4 text-sm text-[#9999aa]">
              <strong className="text-white">{posts.length}</strong> {posts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
        </div>
      </section>

      {months.map(month => (
        <section key={month.key} className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              {month.label}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
            <span className="text-xs text-[#9999aa]">{month.posts.length} {month.posts.length === 1 ? 'post' : 'posts'}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {month.posts.map(post => (
              <BlogCard key={post.slug} post={post} gameSlug={g.slug} />
            ))}
          </div>
        </section>
      ))}

      {siblingCategories.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              More {g.name} categories
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            {siblingCategories.map(c => (
              <Link
                key={c.slug}
                href={`/blog/${g.slug}/category/${c.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#D4A853]/15 bg-[#0c0c18]/60 px-4 py-2 text-sm font-semibold text-[#c8c8d4] hover:border-[#D4A853]/45 hover:text-white transition-all"
              >
                <span aria-hidden>{c.icon}</span>
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <Link
          href={`/blog/${g.slug}`}
          className="inline-flex items-center gap-2 rounded-lg border border-[#D4A853]/20 px-6 py-3 text-[#D4A853] hover:bg-[#D4A853]/10 transition-colors"
        >
          ← All {g.name} articles
        </Link>
      </section>
    </>
  );
}
