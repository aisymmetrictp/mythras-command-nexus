import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Support the Channel',
  description:
    'Support Mythras // The Multiverse directly — tip the channel, join the Discord, or become a member. Looking for merch, gear, and collector cards? Visit the Mythras Armory shop.',
  alternates: { canonical: 'https://gamertagmythras.com/support' },
  openGraph: {
    title: 'Support Mythras // The Multiverse',
    description: 'Tip, join the Discord, or become a member. Merch, gear, and collector cards live in the Shop.',
    url: 'https://gamertagmythras.com/support',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

type Tile = { label: string; sub: string; href: string; icon: string };

// Direct, non-commerce ways to back the creator. (Merch / gear / TCG / the full
// product catalog live on /shop — this page deliberately doesn't duplicate them.)
const directSupport: Tile[] = [
  { label: 'Tip the Channel', sub: 'One-off support via Streamlabs', href: 'https://streamlabs.com/3mythras3/tip', icon: '💛' },
  { label: 'Join the Discord', sub: 'Free — hang out, get help, and grab perks', href: 'https://discord.gg/mFg8mbxtTS', icon: '💬' },
];

export default function SupportPage() {
  return (
    <>
      <WebPageSchema
        name="Support the Channel"
        description="Ways to back Mythras // The Multiverse directly — tip, Discord, and membership."
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
              The guides and videos stay free because the community backs them. The quickest ways to help are below —
              and the full storefront (merch, gear, collector cards, and memberships) lives in the{' '}
              <Link href="/shop" className="text-[#D4A853] hover:text-[#F0C850] underline">Mythras Armory shop</Link>.
            </p>
          </section>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-12">
            {/* Direct support */}
            <section>
              <SectionHeading>Support directly</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {directSupport.map(t => (
                  <a
                    key={t.href}
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-4 hover:border-[#D4A853]/40 transition-all"
                  >
                    <span className="text-2xl leading-none mt-0.5">{t.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-white group-hover:text-[#F0C850] transition-colors">{t.label}</span>
                      <p className="text-xs text-[#9999aa] leading-relaxed mt-0.5">{t.sub}</p>
                    </div>
                    <span className="text-[#D4A853]/40 group-hover:text-[#D4A853] transition-colors" aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Mythras Cookie card — compact teaser that routes to the full drop on /shop */}
            <section>
              <SectionHeading>The Mythras Cookie collector card</SectionHeading>
              <div className="rounded-2xl border border-[#D4A853]/20 bg-[#0c0c18]/60 p-5 md:p-6 flex flex-col sm:flex-row gap-5 items-center">
                <figure className="relative w-28 shrink-0 aspect-[5/7] rounded-xl overflow-hidden border border-[#D4A853]/30 bg-[#12121f]">
                  <Image src="/images/support/mythras-cookie-card.webp" alt="The Mythras Cookie collector card — a golden lion Cookie illustrated by Mythras" fill className="object-cover" sizes="112px" />
                </figure>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                    <Badge>$25</Badge>
                    <Badge>Hand-signed</Badge>
                    <Badge>In stock</Badge>
                  </div>
                  <p className="text-[#c8c8d4] leading-relaxed mb-4">
                    A limited, hand-signed fan-art collector card illustrated by Mythras. It&apos;s an original fan
                    collectible — not an official or tournament-playable card.
                  </p>
                  <Link href="/shop#drops" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all">
                    See it in the Shop →
                  </Link>
                </div>
              </div>
            </section>

            {/* Route to the full storefront */}
            <section className="rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#0c0c18] to-[#10101e] p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Looking for merch, gear & memberships?
              </h2>
              <p className="text-[#c8c8d4] max-w-2xl mx-auto mb-6">
                Tees and hoodies, custom playmats and sleeves, the gaming gear and trading cards we actually use, and
                monthly membership tiers — it&apos;s all in the Mythras Armory.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/shop" className="px-6 py-3 rounded-lg font-bold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all">
                  Explore the Shop
                </Link>
                <Link href="/shop/memberships" className="px-6 py-3 rounded-lg font-bold text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all">
                  Become a Member
                </Link>
              </div>
            </section>

            <p className="text-xs text-[#55556a] leading-relaxed text-center max-w-3xl mx-auto border-t border-[#D4A853]/10 pt-8">
              Some links in the shop are affiliate links — if you buy through them the channel may earn a small commission
              at no extra cost to you. The Mythras Cookie card is original fan art and an independent collectible, not
              affiliated with or endorsed by Devsisters or any game publisher. Game names and trademarks belong to their respective owners.
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
