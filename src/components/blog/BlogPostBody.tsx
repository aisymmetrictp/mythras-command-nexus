import Link from 'next/link';
import type { BlogPost } from '@/data/blog/blogTypes';
import { getCategoryBySlug } from '@/data/blog/categories';
import { getGameBySlug } from '@/data/blog/games';
import BlogMarkdown from './BlogMarkdown';
import BlogTOC from './BlogTOC';
import BlogFAQ from './BlogFAQ';
import BlogCard from './BlogCard';
import AmazonPicks from './AmazonPicks';
import YouTubeEmbed from './YouTubeEmbed';
import { VIDEO_MAP } from '@/data/blog/videoMap';
import { BreadcrumbSchema, FAQSchema, ItemListSchema, MYTHRAS_PERSON_ID, MYTHRAS_ORG_ID } from '@/components/StructuredData';

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
  const video = VIDEO_MAP[post.slug];

  const blogPostingJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.lastUpdated,
    // Author is the human creator (Person), publisher is the Organization.
    // Cross-references via @id so the entity graph compounds across pages.
    author: { '@id': MYTHRAS_PERSON_ID },
    publisher: { '@id': MYTHRAS_ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(', '),
    articleSection: category?.name ?? 'Blog',
    wordCount: post.content.split(/\s+/).length,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  // Speakable schema for voice assistants — points at the TL;DR selector if present.
  if (post.tldr) {
    blogPostingJsonLd.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#blog-tldr', 'h1'],
    };
  }

  // Hero image → BlogPosting.image (absolute URL) for rich results.
  if (post.heroImage) {
    blogPostingJsonLd.image = `https://gamertagmythras.com${post.heroImage}`;
  }

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
      {(() => {
        const il = post.itemList;
        if (!il) return null;
        return (
          <ItemListSchema
            name={il.name}
            description={post.metaDescription}
            url={url}
            items={il.items}
          />
        );
      })()}

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
          <span>By <Link href="/about" className="text-[#D4A853] hover:text-[#F0C850] font-medium">Mythras</Link></span>
        </div>
      </header>

      {post.heroImage && (
        <figure className="max-w-3xl mx-auto px-4 sm:px-6 mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.heroImage}
            alt={post.heroImageAlt ?? post.title}
            className="w-full rounded-xl border border-[#D4A853]/15"
            width={1200}
            height={630}
          />
        </figure>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {post.tldr && (
          <aside
            id="blog-tldr"
            className="my-8 rounded-xl border border-[#D4A853]/30 bg-[#D4A853]/[0.06] p-5 md:p-6"
            aria-label="TL;DR — quick answer"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#D4A853] text-[10px] font-bold tracking-[0.2em] uppercase">TL;DR</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/40 to-transparent" />
            </div>
            <p className="text-[#f0f0f5] text-base md:text-lg leading-relaxed font-medium">
              {post.tldr}
            </p>
          </aside>
        )}
        {video && <YouTubeEmbed id={video.id} title={video.title} uploadDate={video.uploadDate} />}
        <BlogTOC toc={post.toc} />
        <BlogMarkdown content={post.content} />
        <BlogFAQ faqs={post.faq} />
        <AmazonPicks game={post.game} />

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

        <aside className="my-12 rounded-xl border border-[#D4A853]/20 bg-[#0c0c18]/60 p-5 flex gap-4 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mythras-logo-new.png" alt="Mythras" width={56} height={56} className="rounded-full border border-[#D4A853]/30 shrink-0" />
          <div className="text-sm text-[#c8c8d4] leading-relaxed">
            <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-1">Written by</div>
            <p className="text-white font-semibold mb-1">Mythras</p>
            <p>
              Mythras has been making gaming strategy content since 2022 across a multi-channel YouTube
              presence with thousands of gameplay videos. Every guide here comes from hands-on play and
              testing — not aggregated from other sites.{' '}
              <Link href="/about" className="text-[#D4A853] hover:text-[#F0C850]">More about Mythras</Link>
              {' '}·{' '}
              <a href="https://www.youtube.com/@cookierunmythras" target="_blank" rel="noopener noreferrer" className="text-[#D4A853] hover:text-[#F0C850]">YouTube</a>
            </p>
          </div>
        </aside>

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
