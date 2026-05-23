import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { channels } from '@/data/mockData';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'About Mythras',
  description:
    'Mythras // The Multiverse is a gaming creator brand built around five YouTube channels, deep Cookie Run: Kingdom guides, and a multi-game expansion across MTG, Pokemon, and Lorcana. Meet the team behind gamertagmythras.com.',
  alternates: { canonical: 'https://gamertagmythras.com/about' },
  openGraph: {
    title: 'About Mythras // The Multiverse',
    description: 'Five YouTube channels. One creator brand. Built for players who want practical answers fast.',
    url: 'https://gamertagmythras.com/about',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const channelYouTubeUrls: Record<string, string> = {
  cookierun: 'https://www.youtube.com/@cookierunmythras',
  gamertag: 'https://www.youtube.com/@gamertagmythras',
  'mythras-gaming': 'https://www.youtube.com/@mythrasgaming',
  pokemon: 'https://www.youtube.com/@pokemonmythras',
  lorcana: 'https://www.youtube.com/@lorcanamythras',
};

export default function AboutPage() {
  return (
    <>
      <WebPageSchema
        name="About Mythras"
        description="The team, mission, and channels behind gamertagmythras.com."
        url="https://gamertagmythras.com/about"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'About', url: 'https://gamertagmythras.com/about' },
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
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
              <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">About</span>
            </div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D4A853]/40 bg-[#060610]">
              <Image src="/images/mythras-logo-new.png" alt="Mythras logo" fill className="object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Mythras // The Multiverse
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto">
              Five channels. One creator brand. Built for players who want fast, honest answers and the kind of
              meta breakdowns that actually move you up the ladder.
            </p>
          </section>

          <article className="max-w-3xl mx-auto px-4 sm:px-6 prose-content">
            <Section title="What Mythras is">
              <p>
                Mythras // The Multiverse is a gaming creator brand operating across YouTube, Twitch, Discord,
                and right here at <strong>gamertagmythras.com</strong>. We&apos;ve been making gameplay,
                strategy, and guide content since 2022 — the kind of content we wanted to find ourselves when
                we were stuck on a hard mode boss or trying to figure out which Cookie to invest crystals in.
              </p>
              <p>
                The brand started in Cookie Run: Kingdom with the <a href="https://www.youtube.com/@cookierunmythras" target="_blank" rel="noopener noreferrer">CookieRun Mythras</a>{' '}
                channel and has expanded into a multiverse of five channels covering CRK, Magic: The Gathering,
                Pokemon TCG, Disney Lorcana, and broader gaming content.
              </p>
            </Section>

            <Section title="The five channels">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-4">
                {channels.map(c => (
                  <a
                    key={c.slug}
                    href={channelYouTubeUrls[c.slug] || `/channels/${c.slug}`}
                    target={channelYouTubeUrls[c.slug] ? '_blank' : undefined}
                    rel={channelYouTubeUrls[c.slug] ? 'noopener noreferrer' : undefined}
                    className="block rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-4 hover:border-[#D4A853]/40 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-2xl">{c.icon}</span>
                      <span className="font-semibold text-white">{c.name}</span>
                    </div>
                    <p className="text-xs text-[#9999aa] leading-relaxed">{c.description}</p>
                  </a>
                ))}
              </div>
            </Section>

            <Section title="What you'll find on this site">
              <ul>
                <li>
                  <strong><Link href="/gear-guide">Gear Guide</Link></strong> — 167+ individual Cookie pages
                  with build recommendations: best toppings, beascuits, topping tarts, and sub-stat priorities.
                </li>
                <li>
                  <strong><Link href="/cake-tower">Cake Tower Guide</Link></strong> — strategy walkthroughs
                  for Decadent Choco Tower and Endless Strawberry Tower with team comps and floor-by-floor tips.
                </li>
                <li>
                  <strong><Link href="/blog">Blog</Link></strong> — weekly tier lists, patch overviews, new
                  Cookie deep-dives, team build guides, and the running codes list for Cookie Run: Kingdom.
                </li>
                <li>
                  <strong><Link href="/#content-hub">Video hub</Link></strong> — every guide on the site is
                  paired with the corresponding gameplay video from the appropriate channel.
                </li>
              </ul>
            </Section>

            <Section title="How we work">
              <p>
                Every gear build, team comp, and tier ranking on this site comes from actual gameplay testing —
                usually documented on video first, then written up here with the build math and reasoning.
                When we&apos;re not sure about something, we say so. When the meta shifts, we update the post
                and the <em>Last updated</em> date.
              </p>
              <p>
                We don&apos;t pay for traffic. We don&apos;t republish other sites&apos; guides. Every long-form
                article is written from scratch by the Mythras team based on our own play.
              </p>
            </Section>

            <Section title="Not affiliated with Devsisters">
              <p>
                Cookie Run: Kingdom and all Cookie Run: Kingdom characters, art, and trademarks are the property
                of <a href="https://www.devsisters.com/en/" target="_blank" rel="noopener noreferrer">Devsisters Corp.</a>{' '}
                Mythras is an independent fan and creator project. Magic: The Gathering, Pokemon, and Disney
                Lorcana content covered on our channels is similarly the property of Wizards of the Coast, The
                Pokemon Company, and Ravensburger / Disney respectively.
              </p>
            </Section>

            <Section title="Get in touch">
              <p>
                The fastest way to reach the Mythras team is the{' '}
                <a href="https://discord.gg/mFg8mbxtTS" target="_blank" rel="noopener noreferrer">Mythras Discord</a>.
                For business or press inquiries, use the <Link href="/contact">contact page</Link> or email{' '}
                <a href="mailto:gamertagmythras@gmail.com">gamertagmythras@gmail.com</a>.
              </p>
            </Section>
          </article>
        </main>
        <Footer />
      </div>
      <style>{`
        .prose-content a { color: #D4A853; text-decoration: underline; text-decoration-color: rgba(212,168,83,0.3); }
        .prose-content a:hover { color: #F0C850; }
        .prose-content ul { list-style: disc; padding-left: 1.5rem; margin: 0.75rem 0; }
        .prose-content ul li { margin-bottom: 0.5rem; color: #c8c8d4; }
        .prose-content strong { color: #fff; font-weight: 600; }
        .prose-content em { color: #F0D68A; font-style: italic; }
      `}</style>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4 pb-2 border-b border-[#D4A853]/15" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      <div className="text-[#c8c8d4] leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
