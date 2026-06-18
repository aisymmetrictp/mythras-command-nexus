import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Support the Channel',
  description:
    'Support Mythras // The Multiverse — grab merch and swag, custom playmats and sleeves, the gear we use, and our trading-card affiliate links. Plus the limited Mythras Cookie fan-art collectible card.',
  alternates: { canonical: 'https://gamertagmythras.com/support' },
  openGraph: {
    title: 'Support Mythras // The Multiverse',
    description: 'Merch, playmats, gear, TCG links, and the limited Mythras Cookie fan-art collectible.',
    url: 'https://gamertagmythras.com/support',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

// Each tile is an outbound support link. `affiliate` ones carry commission.
type Tile = { label: string; sub: string; href: string; icon: string; affiliate?: boolean };

const directSupport: Tile[] = [
  { label: 'Tip the Channel', sub: 'One-off support via Streamlabs', href: 'https://streamlabs.com/3mythras3/tip', icon: '💛' },
  { label: 'Join the Discord', sub: 'Free — hang out and get help', href: 'https://discord.gg/mFg8mbxtTS', icon: '💬' },
];

const merch: Tile[] = [
  { label: 'Swag Store', sub: 'Tees, hoodies & more (Creator-Spring)', href: 'https://my-store-1029bec.creator-spring.com/', icon: '👕' },
  { label: 'Streamlabs Merch', sub: 'Alternate merch storefront', href: 'https://streamlabs.com/3mythras3/merch', icon: '🛍️' },
  { label: 'Custom Sleeves & Playmats', sub: 'YourPlaymat — 10% off with code GM10YP', href: 'https://www.yourplaymat.com/', icon: '🎴' },
  { label: 'Gaming Gear', sub: 'The peripherals we actually use', href: 'https://amzn.to/463bCrF', icon: '🎮', affiliate: true },
];

const tcg: Tile[] = [
  { label: 'Cookie Run: Braverse TCG', sub: 'Booster boxes & decks', href: 'https://amzn.to/46ytRqz', icon: '🎴', affiliate: true },
  { label: 'Braverse — Age of Heroes & Kingdoms', sub: 'Set products', href: 'https://amzn.to/4nDTf5v', icon: '⚔️', affiliate: true },
  { label: 'Braverse — Arena of Glory', sub: 'Set products', href: 'https://amzn.to/3O1glGk', icon: '🏟️', affiliate: true },
  { label: 'Magic: The Gathering', sub: 'Singles, boxes & accessories', href: 'https://amzn.to/49FZPkr', icon: '🧙', affiliate: true },
  { label: 'TCGplayer', sub: 'Singles & sealed across every TCG', href: 'https://tcgplayer.pxf.io/eKBr3Z', icon: '🃏', affiliate: true },
  { label: 'Cookie Run Fan Art List', sub: 'Art books & collectibles', href: 'https://amzn.to/3QOGGqK', icon: '🎨', affiliate: true },
];

export default function SupportPage() {
  return (
    <>
      <WebPageSchema
        name="Support the Channel"
        description="Ways to support Mythras // The Multiverse — merch, playmats, gear, TCG links, and the Mythras Cookie collectible."
        url="https://gamertagmythras.com/support"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Support', url: 'https://gamertagmythras.com/support' },
        ]}
      />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)' }} />
        <ParticleField />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
              <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Support the Channel
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto">
              Everything here is optional and every bit helps keep the guides free and the videos coming. Grab some
              swag, pick up the gear and cards we cover, or snag the limited Mythras Cookie collectible.
            </p>
          </section>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-12">
            <TileSection title="Support directly" tiles={directSupport} />

            {/* The Mythras Cookie collectible — original fan art, framed as a collectible (NOT an official/playable card). */}
            <section>
              <SectionHeading>The Mythras Cookie card</SectionHeading>
              <div className="rounded-2xl border border-[#D4A853]/20 bg-[#0c0c18]/60 p-5 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="relative w-44 md:w-56 shrink-0 aspect-[5/7] rounded-xl overflow-hidden border border-[#D4A853]/30 bg-[#12121f]">
                  <Image src="/images/support/mythras-cookie-card.png" alt="The Mythras Cookie fan-art collectible card — a golden lion Cookie, Level 3, HP 5" fill className="object-cover" sizes="224px" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                    <Badge>Limited run of 50</Badge>
                    <Badge>Original fan art</Badge>
                    <Badge>Signed by Mythras</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Mythras Cookie — Collector Card
                  </h3>
                  <p className="text-[#c8c8d4] leading-relaxed mb-4">
                    A custom, hand-designed collector card illustrated by Mythras — the golden lion himself, rendered
                    in full TCG style. Only 50 physical copies exist. It&apos;s a fan-made art collectible, not an
                    official or tournament-playable card.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a
                      href="https://discord.gg/mFg8mbxtTS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all"
                    >
                      Grab one on Discord
                    </a>
                    <a
                      href="mailto:gamertagmythras@gmail.com?subject=Mythras%20Cookie%20Card"
                      className="px-5 py-2.5 rounded-lg font-semibold text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all"
                    >
                      Email to reserve
                    </a>
                  </div>
                  <p className="text-xs text-[#666] mt-3">
                    A proper one-click checkout is in the works. Until then, message us and we&apos;ll sort it out.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#55556a] mt-3 text-center md:text-left">
                The Mythras Cookie card is original artwork by Mythras. &ldquo;Cookie Run&rdquo; and Cookie Run: Braverse
                are trademarks of Devsisters Corp.; this is an independent fan creation, not affiliated with or endorsed by Devsisters.
              </p>
            </section>

            <TileSection title="Merch, swag & gear" tiles={merch} />
            <TileSection title="Cards we play (and recommend)" tiles={tcg} />

            <p className="text-sm text-[#55556a] leading-relaxed text-center max-w-3xl mx-auto border-t border-[#D4A853]/10 pt-8">
              <strong className="text-[#9999aa]">Affiliate disclosure:</strong> some links above are affiliate links.
              If you buy through them, the channel may earn a small commission at no extra cost to you. We only link gear,
              cards, and products we actually use and cover. All game names and trademarks belong to their respective publishers.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 pb-2 border-b border-[#D4A853]/15" style={{ fontFamily: 'var(--font-display)' }}>
      {children}
    </h2>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/20">
      {children}
    </span>
  );
}

function TileSection({ title, tiles }: { title: string; tiles: Tile[] }) {
  return (
    <section>
      <SectionHeading>{title}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tiles.map(t => (
          <a
            key={t.href}
            href={t.href}
            target="_blank"
            rel={t.affiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
            className="group flex items-start gap-4 rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-4 hover:border-[#D4A853]/40 transition-all"
          >
            <span className="text-2xl leading-none mt-0.5">{t.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white group-hover:text-[#F0C850] transition-colors">{t.label}</span>
                {t.affiliate && <span className="text-[10px] text-[#666] uppercase tracking-wider">ad</span>}
              </div>
              <p className="text-xs text-[#9999aa] leading-relaxed mt-0.5">{t.sub}</p>
            </div>
            <span className="text-[#D4A853]/40 group-hover:text-[#D4A853] transition-colors" aria-hidden>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
