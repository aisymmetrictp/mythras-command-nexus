import Link from 'next/link';
import { ALL_POSTS } from '@/data/blog/blogIndex';
import { ACTIVE_GAMES } from '@/data/blog/games';
import { BLOG_CATEGORIES } from '@/data/blog/categories';
import BlogCard from '@/components/blog/BlogCard';
import { WebPageSchema, BreadcrumbSchema } from '@/components/StructuredData';

// Build the "Latest Articles" feed by interleaving top posts from each active game,
// so no single game's date cluster shoulders the others off the visible slice.
function buildInterleavedRecent(perGameLimit = 3): typeof ALL_POSTS {
  const perGame = ACTIVE_GAMES.map(g =>
    ALL_POSTS.filter(p => p.game === g.slug).slice(0, perGameLimit)
  );
  const out: typeof ALL_POSTS = [];
  for (let i = 0; i < perGameLimit; i++) {
    for (const game of perGame) {
      if (game[i]) out.push(game[i]);
    }
  }
  return out;
}

export default function BlogIndexPage() {
  const recent = buildInterleavedRecent(3);

  return (
    <>
      <WebPageSchema
        name="Mythras Blog — Cookie Run Kingdom & Magic: The Gathering Guides"
        description="Patch-fresh CRK and MTG guides, tier lists, deck techs, and meta analysis from Mythras."
        url="https://gamertagmythras.com/blog"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Blog', url: 'https://gamertagmythras.com/blog' },
        ]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
          <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">The Mythras Blog</span>
        </div>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Strategy. <span className="text-gradient">Meta.</span> Mastery.
        </h1>
        <p className="text-lg text-[#9999aa] leading-relaxed max-w-2xl mx-auto">
          Patch-fresh guides, tier lists, and team-builds — written by players, for players.
          Organized by game, refreshed every week.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Games
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ACTIVE_GAMES.map(game => {
            const postsForGame = ALL_POSTS.filter(p => p.game === game.slug);
            return (
              <Link
                key={game.slug}
                href={`/blog/${game.slug}`}
                className="group block glass-panel rounded-2xl p-6 border border-[#D4A853]/15 hover:border-[#D4A853]/50 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{game.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#F0C850] transition-colors mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {game.name}
                    </h3>
                    <p className="text-sm text-[#9999aa] leading-relaxed mb-3">{game.description}</p>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A853]">
                      {postsForGame.length} {postsForGame.length === 1 ? 'article' : 'articles'}
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Latest Articles
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recent.map(post => (
            <BlogCard key={post.slug} post={post} gameSlug={post.game} />
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Browse by Topic
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {BLOG_CATEGORIES.map(cat => {
            const count = ALL_POSTS.filter(p => p.category === cat.slug).length;
            return (
              <div
                key={cat.slug}
                className="rounded-xl border border-[#D4A853]/10 bg-[#0c0c18]/60 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-semibold text-white text-sm">{cat.name}</span>
                </div>
                <p className="text-xs text-[#9999aa] leading-relaxed mb-2">{cat.description}</p>
                <span className="text-[10px] text-[#D4A853] font-semibold uppercase tracking-wider">
                  {count} {count === 1 ? 'guide' : 'guides'}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
