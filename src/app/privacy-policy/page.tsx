import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

const UPDATED = '2026-05-23';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Mythras // The Multiverse collects, uses, and protects your information. Covers Google AdSense, Google Analytics, contact-form submissions, embedded YouTube and Twitch content, and your rights under GDPR and CCPA.',
  alternates: { canonical: 'https://gamertagmythras.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Mythras // The Multiverse',
    description: 'How we collect, use, and protect your information on gamertagmythras.com.',
    url: 'https://gamertagmythras.com/privacy-policy',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <WebPageSchema
        name="Privacy Policy"
        description="Privacy policy for gamertagmythras.com — covers AdSense, analytics, forms, embeds, and user rights."
        url="https://gamertagmythras.com/privacy-policy"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Privacy Policy', url: 'https://gamertagmythras.com/privacy-policy' },
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
          <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-20 prose-content">
            <header className="mb-10 pb-6 border-b border-[#D4A853]/15">
              <div className="text-xs text-[#9999aa] mb-3">
                <Link href="/" className="hover:text-[#F0C850]">Home</Link>
                <span className="mx-2 text-[#55556a]">/</span>
                <span className="text-[#D4A853]">Privacy Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Privacy Policy
              </h1>
              <p className="text-sm text-[#9999aa]">Last updated: {UPDATED}</p>
            </header>

            <Section title="1. Introduction">
              <p>
                This Privacy Policy describes how Mythras // The Multiverse (&ldquo;Mythras&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects information when you visit{' '}
                <strong>gamertagmythras.com</strong> (the &ldquo;Site&rdquo;) or interact with our content. By using the
                Site, you agree to the practices described here.
              </p>
              <p>
                Mythras is an independent gaming creator brand operated by an individual in the United States.
                We are not affiliated with Devsisters Corp. or any other game publisher mentioned on the Site.
              </p>
            </Section>

            <Section title="2. Information we collect">
              <h3>Information you provide directly</h3>
              <p>
                When you fill out our contact form, we receive whatever you choose to enter — typically a name,
                email address, subject line, and message. We do not require an account to use the Site.
              </p>
              <h3>Information collected automatically</h3>
              <p>
                Like most websites, we automatically receive standard log information when you visit, including
                IP address, browser type and version, device type, referring URL, pages viewed, and timestamps.
                This is used to understand traffic patterns and improve the Site.
              </p>
            </Section>

            <Section title="3. Cookies and tracking technologies">
              <p>
                We and our third-party partners use cookies, web beacons, local storage, and similar technologies
                to operate the Site, measure usage, and deliver advertising. Specifically:
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary cookies</strong> — required for the Site to function (e.g. remembering
                  your cookie-consent choice).
                </li>
                <li>
                  <strong>Analytics cookies</strong> — used by Google Analytics 4 (measurement ID{' '}
                  <code>G-0NF282ERV6</code>) to count visits and understand which pages perform well.
                </li>
                <li>
                  <strong>Advertising cookies</strong> — used by Google AdSense and its partners to serve ads,
                  measure ad performance, and (where you consent) personalize ads based on your interests.
                </li>
              </ul>
              <p>
                You can disable cookies in your browser settings, but parts of the Site may not work properly
                without them. Visitors in the EEA, UK, or Switzerland are presented with consent options that
                control whether non-essential cookies are loaded.
              </p>
            </Section>

            <Section title="4. Third-party services">
              <p>
                We use the following third-party services. Each operates under its own privacy policy:
              </p>
              <ul>
                <li>
                  <strong>Google AdSense</strong> — serves the advertising you see on the Site. Google may use
                  cookies and identifiers including the DoubleClick cookie to serve ads based on your prior
                  visits to this and other sites.{' '}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                    Google ads policy
                  </a>{' '}
                  · You can opt out of personalized advertising at{' '}
                  <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
                    adssettings.google.com
                  </a>{' '}
                  or via{' '}
                  <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">
                    aboutads.info
                  </a>
                  .
                </li>
                <li>
                  <strong>Google Analytics 4</strong> — measures Site traffic.{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    Google privacy policy
                  </a>
                  . You can install the{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                    GA opt-out browser add-on
                  </a>{' '}
                  to block GA tracking.
                </li>
                <li>
                  <strong>Netlify</strong> — hosts the Site and processes contact-form submissions through its
                  Forms feature.{' '}
                  <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
                    Netlify privacy
                  </a>
                  .
                </li>
                <li>
                  <strong>YouTube and Twitch embeds</strong> — some pages embed videos. Those embeds set cookies
                  from YouTube (Google) and Twitch (Amazon) and are subject to their own privacy policies.
                </li>
              </ul>
            </Section>

            <Section title="5. How we use information">
              <ul>
                <li>To operate, maintain, and improve the Site;</li>
                <li>To respond to contact-form submissions;</li>
                <li>To measure traffic and content performance via analytics;</li>
                <li>To serve and measure advertising via AdSense;</li>
                <li>To detect, prevent, and address abuse, fraud, or security issues;</li>
                <li>To comply with applicable legal obligations.</li>
              </ul>
              <p>We do not sell your personal information.</p>
            </Section>

            <Section title="6. Children's privacy">
              <p>
                The Site is not directed to children under 13, and we do not knowingly collect personal
                information from children under 13. If you believe a child has provided us with personal
                information, please contact us at the email below and we will delete it.
              </p>
            </Section>

            <Section title="7. Your rights">
              <p>
                Depending on where you live, you may have rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access, correct, or delete information we hold about you;</li>
                <li>The right to object to or restrict certain processing;</li>
                <li>The right to opt out of personalized advertising;</li>
                <li>The right to lodge a complaint with a supervisory authority.</li>
              </ul>
              <p>
                EEA/UK/Swiss residents have rights under the GDPR. California residents have rights under the CCPA/CPRA.
                To exercise any of these rights, email{' '}
                <a href="mailto:gamertagmythras@gmail.com">gamertagmythras@gmail.com</a>.
              </p>
            </Section>

            <Section title="8. Data retention and security">
              <p>
                We retain contact-form submissions and standard server logs only as long as needed for the purpose
                they were collected, after which they are deleted or anonymized. We use reasonable technical and
                organizational measures to protect your information, but no method of internet transmission or
                storage is 100% secure.
              </p>
            </Section>

            <Section title="9. Links to other sites">
              <p>
                The Site contains links to third-party sites (YouTube channels, Twitch, Discord, the Cookie Run
                Kingdom Wiki, and others). We are not responsible for the privacy practices or content of those
                sites. Please review their policies before providing information.
              </p>
            </Section>

            <Section title="10. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last
                updated&rdquo; date at the top of this page. Material changes will be highlighted on the homepage
                or via an in-page notice for at least 30 days.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                Questions about this Privacy Policy or our data practices?
              </p>
              <ul>
                <li>Email: <a href="mailto:gamertagmythras@gmail.com">gamertagmythras@gmail.com</a></li>
                <li>Web: <Link href="/contact">gamertagmythras.com/contact</Link></li>
              </ul>
            </Section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4 pb-2 border-b border-[#D4A853]/15" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      <div className="text-[#c8c8d4] leading-relaxed space-y-4 prose-section">{children}</div>
      <style>{`
        .prose-section a { color: #D4A853; text-decoration: underline; text-decoration-color: rgba(212,168,83,0.3); }
        .prose-section a:hover { color: #F0C850; }
        .prose-section h3 { font-size: 1.125rem; font-weight: 600; color: #F0C850; margin-top: 1.5rem; margin-bottom: 0.5rem; }
        .prose-section ul { list-style: disc; padding-left: 1.5rem; margin: 0.75rem 0; }
        .prose-section ul li { margin-bottom: 0.5rem; }
        .prose-section code { background: #151522; border: 1px solid rgba(212,168,83,0.15); border-radius: 4px; padding: 0.1rem 0.4rem; font-size: 0.875em; color: #F0C850; }
        .prose-section strong { color: #fff; font-weight: 600; }
      `}</style>
    </section>
  );
}
