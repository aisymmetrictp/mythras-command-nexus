import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

const UPDATED = '2026-05-23';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing your use of gamertagmythras.com — acceptable use, intellectual property, disclaimers, and limitation of liability for Mythras // The Multiverse.',
  alternates: { canonical: 'https://gamertagmythras.com/terms' },
  openGraph: {
    title: 'Terms of Service | Mythras // The Multiverse',
    description: 'Site terms for gamertagmythras.com.',
    url: 'https://gamertagmythras.com/terms',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <WebPageSchema
        name="Terms of Service"
        description="Terms governing use of gamertagmythras.com."
        url="https://gamertagmythras.com/terms"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Terms of Service', url: 'https://gamertagmythras.com/terms' },
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
          <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-20">
            <header className="mb-10 pb-6 border-b border-[#D4A853]/15">
              <div className="text-xs text-[#9999aa] mb-3">
                <Link href="/" className="hover:text-[#F0C850]">Home</Link>
                <span className="mx-2 text-[#55556a]">/</span>
                <span className="text-[#D4A853]">Terms of Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Terms of Service
              </h1>
              <p className="text-sm text-[#9999aa]">Last updated: {UPDATED}</p>
            </header>

            <Section title="1. Acceptance of these terms">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{' '}
                <strong>gamertagmythras.com</strong> (the &ldquo;Site&rdquo;), operated by Mythras // The
                Multiverse (&ldquo;Mythras&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By
                accessing or using the Site you agree to be bound by these Terms. If you don&apos;t agree, please
                don&apos;t use the Site.
              </p>
            </Section>

            <Section title="2. The Site and its content">
              <p>
                The Site provides gaming guides, tier lists, blog content, embedded videos, and related editorial
                content focused primarily on Cookie Run: Kingdom and other games covered by the Mythras YouTube
                channels. Content is provided for informational and entertainment purposes only.
              </p>
              <p>
                Game mechanics, balance, and metadata change over time. We make reasonable efforts to keep guides
                accurate and up to date but make no warranty that any specific build, comp, or strategy will
                perform as described in your installation of any game.
              </p>
            </Section>

            <Section title="3. Acceptable use">
              <p>You agree not to:</p>
              <ul>
                <li>Use the Site to violate any law or the rights of any third party;</li>
                <li>Attempt to gain unauthorized access to systems, accounts, or data;</li>
                <li>Interfere with the Site&apos;s operation (e.g. denial-of-service attacks, scraping at scale,
                  bypassing rate limits);</li>
                <li>Republish substantial portions of Site content without permission;</li>
                <li>Use the Site or its content to train AI models without our written permission;</li>
                <li>Submit unlawful, defamatory, abusive, or infringing content via the contact form or any
                  other channel.</li>
              </ul>
            </Section>

            <Section title="4. Intellectual property">
              <h3>Our content</h3>
              <p>
                Original written content, layouts, designs, code, logos, and the Mythras brand are owned by us
                and protected by copyright and trademark law. You may share short quotes and links to the Site
                with appropriate attribution. You may not redistribute substantial portions or use the content
                commercially without our written permission.
              </p>
              <h3>Game publishers' content</h3>
              <p>
                Cookie Run: Kingdom and related characters, art, names, and trademarks are the property of{' '}
                <strong>Devsisters Corp.</strong> Magic: The Gathering content is the property of Wizards of the
                Coast. Pokemon TCG content is the property of The Pokemon Company. Disney Lorcana content is the
                property of Ravensburger and The Walt Disney Company. We use this content under fair use for
                commentary, review, and guide purposes. We are not affiliated with, endorsed by, or sponsored by
                any of these publishers.
              </p>
            </Section>

            <Section title="5. Third-party links and embeds">
              <p>
                The Site contains links and embeds from third parties including YouTube, Twitch, Discord, the
                Cookie Run Kingdom Wiki, official Devsisters channels, and others. We are not responsible for
                the availability, accuracy, or content of those third-party services.
              </p>
            </Section>

            <Section title="6. Advertising">
              <p>
                The Site is supported by advertising. Ads are served by Google AdSense and may be personalized
                based on your interests where you consent. See our{' '}
                <Link href="/privacy-policy">Privacy Policy</Link> for details and opt-out options.
              </p>
            </Section>

            <Section title="7. Disclaimers">
              <p>
                THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT. We do not
                warrant that the Site will be uninterrupted, error-free, or free of harmful components.
              </p>
            </Section>

            <Section title="8. Limitation of liability">
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, MYTHRAS AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO
                YOUR USE OF (OR INABILITY TO USE) THE SITE. OUR AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO THE
                SITE IS LIMITED TO ONE HUNDRED U.S. DOLLARS ($100).
              </p>
            </Section>

            <Section title="9. Changes to the Site or these Terms">
              <p>
                We may modify, suspend, or discontinue any part of the Site at any time without notice. We may
                also update these Terms; when we do, we will revise the &ldquo;Last updated&rdquo; date above.
                Continued use of the Site after changes constitutes acceptance.
              </p>
            </Section>

            <Section title="10. Governing law">
              <p>
                These Terms are governed by the laws of the State of Minnesota, USA, without regard to its
                conflict-of-laws provisions. Any dispute arising out of these Terms or your use of the Site will
                be resolved in the state or federal courts located in Minnesota.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                Questions about these Terms? Email{' '}
                <a href="mailto:gamertagmythras@gmail.com">gamertagmythras@gmail.com</a> or use the{' '}
                <Link href="/contact">contact page</Link>.
              </p>
            </Section>
          </article>
        </main>
        <Footer />
      </div>
      <style>{`
        article a { color: #D4A853; text-decoration: underline; text-decoration-color: rgba(212,168,83,0.3); }
        article a:hover { color: #F0C850; }
        article h3 { font-size: 1.125rem; font-weight: 600; color: #F0C850; margin-top: 1.5rem; margin-bottom: 0.5rem; }
        article ul { list-style: disc; padding-left: 1.5rem; margin: 0.75rem 0; }
        article ul li { margin-bottom: 0.5rem; color: #c8c8d4; }
        article strong { color: #fff; font-weight: 600; }
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
