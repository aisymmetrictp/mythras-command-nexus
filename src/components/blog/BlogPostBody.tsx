import Link from 'next/link';
import type { BlogPost } from '@/data/blog/blogTypes';
import { getCategoryBySlug } from '@/data/blog/categories';
import { getGameBySlug } from '@/data/blog/games';
import BlogMarkdown from './BlogMarkdown';
import BlogTOC from './BlogTOC';
import BlogFAQ from './BlogFAQ';
import BlogCard from './BlogCard';
import { BreadcrumbSchema, FAQSchema } from '@/components/StructuredData';

type Props = { post: BlogPost; related: BlogPost[] };

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostBody({ post, related }: Props) {
  const game = getGameBySlug(post.game);
  const category = getCategoryBySlug(post.category);
  const url = `https://gamertagmythras.com/blog/${post.game}/${post.slug}`;

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.lastUpdated,
    author: { '@type': 'Organization', name: 'Mythras // The Multiverse' },
    publisher: {
      '@type': 'Organization',
      name: 'Mythras // The Multiverse',
      logo: { '@type': 'ImageObject', url: 'https://gamertagmythras.com/images/mythras-logo-new.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(', '),
    articleSection: category?.name ?? 'Blog',
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <article className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Blog', url: 'https://gamertagmythras.com/blog' },
          { name: game?.name ?? 'Game', url: `https://gamertagmythras.com/blog/${post.game}` },
          { name: post.title, url },
        ]}
      />
      {post.faq.length > 0 && (
        <FAQSchema faqs={post.faq.map(f => ({ question: f.question, answer: f.answer }))} />
      )}

      <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#9999aa] mb-5">
          <Link href="/blog" className="hover:text-[#F0C850] transition-colors">Blog</Link>
          <span className="text-[#55556a]">/</span>
          <Link href={`/blog/${post.game}`} className="hover:text-[#F0C850] transition-colors">
            {game?.shortName ?? game?.name}
          </Link>
          {category && (
            <>
              <span className="text-[#55556a]">/</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#D4A853]/10 text-[#F0C850] font-semibold tracking-wider uppercase text-[10px]">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
            </>
          )}
        </div>
        <h1
          className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}
        >
          {post.title}
        </h1>
        <p className="text-lg text-[#c8c8d4] leading-relaxed mb-6">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#9999aa] pb-6 border-b border-[#D4A853]/15">
          <span>Published <strong className="text-white font-medium">{formatDate(post.publishDate)}</strong></span>
          {post.lastUpdated !== post.publishDate && (
            <span>Updated <strong className="text-white font-medium">{formatDate(post.lastUpdated)}</strong></span>
          )}
          <span className="text-[#55556a]">·</span>
          <span>{post.readingTimeMin} min read</span>
          <span className="text-[#55556a]">·</span>
          <span>By <strong className="text-[#D4A853]">Mythras</strong></span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <BlogTOC toc={post.toc} />
        <BlogMarkdown content={post.content} />
        <BlogFAQ faqs={post.faq} />

        {post.internalLinks.length > 0 && (
          <section className="my-12">
            <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#D4A853]/15" style={{ fontFamily: 'var(--font-display)' }}>
              Keep Reading
            </h2>
            <ul className="space-y-2">
              {post.internalLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-[#D4A853] hover:text-[#F0C850] transition-colors text-sm"
                  >
                    <span aria-hidden>→</span>
                    {link.anchor}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {post.externalSources.length > 0 && (
          <section className="my-12 rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-5">
            <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-3">
              Sources & Further Reading
            </div>
            <ul className="space-y-2 text-sm">
              {post.externalSources.map((src, i) => (
                <li key={i}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c8c8d4] hover:text-[#F0C850] transition-colors"
                  >
                    {src.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="my-12 pt-6 border-t border-[#D4A853]/15 text-sm text-[#9999aa]">
          Last updated <strong className="text-white font-medium">{formatDate(post.lastUpdated)}</strong>.
          Notice something out of date?{' '}
          <a href="https://discord.gg/mFg8mbxtTS" target="_blank" rel="noopener noreferrer" className="text-[#D4A853] hover:text-[#F0C850]">
            Tell us in Discord
          </a>.
        </footer>
      </div>

      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map(p => (
              <BlogCard key={p.slug} post={p} gameSlug={post.game} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
