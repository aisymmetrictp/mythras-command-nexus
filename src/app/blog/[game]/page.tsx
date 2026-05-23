import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ACTIVE_GAMES, getGameBySlug } from '@/data/blog/games';
import { getPostsByGame, groupPostsByMonth } from '@/data/blog/blogIndex';
import BlogCard from '@/components/blog/BlogCard';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

export function generateStaticParams() {
  return ACTIVE_GAMES.map(g => ({ game: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> {
  const { game } = await params;
  const g = getGameBySlug(game);
  if (!g) return { title: 'Game Not Found' };

  const title = `${g.name} Blog — Guides, Tier Lists & Meta`;
  const description = `Weekly ${g.name} guides, tier lists, codes, and team builds from Mythras. ${g.description}`;
  const url = `https://gamertagmythras.com/blog/${g.slug}`;

  return {
    title,
    description,
    keywords: [g.name, `${g.name} guides`, `${g.name} tier list`, `${g.shortName} meta`, `${g.shortName} blog`, 'Mythras'],
    openGraph: { title, description, url, type: 'website' },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default async function GameBlogHubPage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  const g = getGameBySlug(game);
  if (!g) notFound();

  const posts = getPostsByGame(g.slug);
  const months = groupPostsByMonth(posts);
  const url = `https://gamertagmythras.com/blog/${g.slug}`;

  return (
    <>
      <WebPageSchema name={`${g.name} Blog`} description={g.description} url={url} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Blog', url: 'https://gamertagmythras.com/blog' },
          { name: g.name, url },
        ]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#9999aa] mb-5">
          <Link href="/blog" className="hover:text-[#F0C850] transition-colors">Blog</Link>
          <span className="text-[#55556a]">/</span>
          <span className="text-[#D4A853] font-semibold">{g.name}</span>
        </div>
        <div className="flex items-start gap-5">
          <div className="text-5xl md:text-6xl">{g.icon}</div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {g.name}
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl">{g.description}</p>
            <div className="mt-4 text-sm text-[#9999aa]">
              <strong className="text-white">{posts.length}</strong> {posts.length === 1 ? 'article' : 'articles'} published
            </div>
          </div>
        </div>
      </section>

      {months.length === 0 ? (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-[#9999aa]">No articles published yet. Check back soon.</p>
        </section>
      ) : (
        months.map(month => (
          <section key={month.key} className="max-w-5xl mx-auto px-4 sm:px-6 mb-14">
            <div id={month.key} className="flex items-center gap-3 mb-6 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
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
        ))
      )}
    </>
  );
}
