import Link from 'next/link';

export default function WhatIsMythras() {
  return (
    <section className="relative z-10 py-16 md:py-20 border-t border-[#D4A853]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
          <span className="text-[#D4A853] text-xs font-semibold tracking-[0.25em] uppercase">What is Mythras</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Player-tested guides. No filler.
        </h2>
        <div className="space-y-5 text-[#c8c8d4] text-base md:text-lg leading-relaxed">
          <p>
            Gamertag Mythras is the central hub of the Mythras Multiverse — a player-run gaming
            ecosystem built for grinders, theorycrafters, and anyone tired of cookie-cutter wiki
            scrapes. Everything you read here is run on live accounts before it ships, written by
            players who actually clear the content. If a build does not survive the test runs, it
            does not make the site. No bench warmers, no recycled patch notes, no AI slop.
          </p>
          <p>
            The core of the site is our <Link href="/gear-guide" className="text-[#D4A853] hover:text-[#F0C850] transition-colors">Gear Guide</Link>
            {' '}— 167+ Cookie Run: Kingdom cookies with full beascuit, topping, and tart loadouts,
            stat priorities, and direct links to the matching Mythras YouTube breakdowns. Pair it
            with the <Link href="/blog" className="text-[#D4A853] hover:text-[#F0C850] transition-colors">Blog</Link> for weekly
            tier lists, active coupon codes, fresh team comps, and event walkthroughs. When you
            hit the endgame wall, drop into the <Link href="/cake-tower" className="text-[#D4A853] hover:text-[#F0C850] transition-colors">Cake Tower</Link>
            {' '}meta-guide for floor-by-floor strategy. New patch drops? We rebuild the page, not the disclaimer.
          </p>
          <p>
            Beyond the guides, the <Link href="/multiverse" className="text-[#D4A853] hover:text-[#F0C850] transition-colors">Multiverse</Link>
            {' '}covers five YouTube channels — live streams, full-length strategy breakdowns,
            shorts, console highlights, and community content across mobile and PC. One brand, one
            voice, zero clickbait. Whether you are pulling on a new Legendary banner, optimizing
            substats for Guild Battle, or just looking for a calm voice to walk you through Beast-Yeast,
            you will find the answer here. Bookmark the site, jump in the Discord, and play smarter
            — your roster will thank you.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
          <Link
            href="/gear-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4A853] text-[#060610] text-sm font-semibold hover:bg-[#F0C850] transition-colors"
          >
            Explore the Gear Guide →
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#D4A853]/30 text-[#D4A853] text-sm font-semibold hover:bg-[#D4A853]/5 transition-colors"
          >
            Read the Blog →
          </Link>
        </div>
      </div>
    </section>
  );
}
