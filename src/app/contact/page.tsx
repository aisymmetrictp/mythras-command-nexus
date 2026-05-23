import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import ContactForm from '@/components/ContactForm';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Contact Mythras',
  description:
    'Get in touch with Mythras // The Multiverse. Send a message, join the Discord, or reach the team for press, partnership, or guide questions.',
  alternates: { canonical: 'https://gamertagmythras.com/contact' },
  openGraph: {
    title: 'Contact Mythras // The Multiverse',
    description: 'Send a message, join the Discord, or reach the team.',
    url: 'https://gamertagmythras.com/contact',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        name="Contact Mythras"
        description="Contact form and alternative ways to reach the Mythras team."
        url="https://gamertagmythras.com/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Contact', url: 'https://gamertagmythras.com/contact' },
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
          <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
              <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">Contact</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Get in touch
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto">
              Questions about a build, a tier-list disagreement, a guide request, a partnership, or a bug on the
              site — pick the channel that fits.
            </p>
          </section>

          <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <a
                href="https://discord.gg/mFg8mbxtTS"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-5 hover:border-[#D4A853]/40 transition-all"
              >
                <div className="text-2xl mb-2">💬</div>
                <div className="font-semibold text-white mb-1">Discord</div>
                <div className="text-xs text-[#9999aa] leading-relaxed">
                  Fastest. The whole community + the Mythras team hang out here. Best for build questions and meta talk.
                </div>
              </a>
              <a
                href="mailto:gamertagmythras@gmail.com"
                className="block rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-5 hover:border-[#D4A853]/40 transition-all"
              >
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-semibold text-white mb-1">Email</div>
                <div className="text-xs text-[#9999aa] leading-relaxed">
                  <code className="text-[#F0C850] text-[11px]">gamertagmythras@gmail.com</code> — best for press,
                  business, and privacy requests. Usually a 2–4 day reply.
                </div>
              </a>
              <a
                href="https://www.youtube.com/@cookierunmythras"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-5 hover:border-[#D4A853]/40 transition-all"
              >
                <div className="text-2xl mb-2">▶️</div>
                <div className="font-semibold text-white mb-1">YouTube</div>
                <div className="text-xs text-[#9999aa] leading-relaxed">
                  Comment on the relevant video. Good for guide feedback that helps future viewers too.
                </div>
              </a>
            </div>
          </section>

          <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
            <div className="rounded-2xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                What to write to us about
              </h2>
              <p className="text-[#c8c8d4] leading-relaxed mb-5">
                We read every message that comes through this page. Here&apos;s the rough triage so you get a
                useful reply faster — and so your message lands in the channel that&apos;ll actually solve it.
              </p>
              <div className="space-y-5 text-[#c8c8d4] leading-relaxed">
                <div>
                  <strong className="text-white">Build questions, tier disagreements, team-comp help.</strong>{' '}
                  Jump into the Discord. The whole community plus the Mythras team hangs out there, and
                  you&apos;ll often get a response within minutes from someone who&apos;s already faced the exact
                  comp you&apos;re stuck on. The pinned threads cover the most common Cookie Run: Kingdom
                  questions.
                </div>
                <div>
                  <strong className="text-white">Content corrections, factual fixes, &ldquo;your guide is out
                  of date.&rdquo;</strong> Email is best. Include the URL of the post, the section that&apos;s
                  wrong, and what the current in-game state actually is — screenshots help. We update affected
                  posts and bump the <em>Last updated</em> stamp the same day when we can.
                </div>
                <div>
                  <strong className="text-white">Business, press, partnership, brand collabs.</strong> Email{' '}
                  <a href="mailto:gamertagmythras@gmail.com" className="text-[#D4A853] hover:text-[#F0C850] underline decoration-[#D4A853]/30">
                    gamertagmythras@gmail.com
                  </a>{' '}
                  with &ldquo;BUSINESS&rdquo; in the subject line. We reply to legitimate inquiries within a few
                  business days. We do not accept paid placements in gear guides or blog tier lists — those
                  rankings stay editorially independent.
                </div>
                <div>
                  <strong className="text-white">Privacy or data requests</strong> (data deletion, marketing
                  opt-out, GDPR / CCPA rights). Email is the right channel. We route those to the same inbox
                  and reply within 30 days as required by law. See the{' '}
                  <Link href="/privacy-policy" className="text-[#D4A853] hover:text-[#F0C850] underline decoration-[#D4A853]/30">
                    Privacy Policy
                  </Link>{' '}
                  for what we collect and how to opt out.
                </div>
                <div>
                  <strong className="text-white">Bug reports or broken pages.</strong> Either the form below or
                  Discord works. Include the URL, the device and browser you&apos;re on, and what you expected
                  versus what actually happened.
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
            <div className="rounded-2xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Send a message
              </h2>
              <p className="text-sm text-[#9999aa] mb-6">
                The form below routes to the same inbox as the email above. We read everything; expect a reply
                within a few business days.
              </p>
              <ContactForm />
            </div>
          </section>

          <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-20 text-sm text-[#9999aa]">
            <p>
              Looking for our privacy practices? See the{' '}
              <Link href="/privacy-policy" className="text-[#D4A853] hover:text-[#F0C850]">Privacy Policy</Link>.
              For site terms, see the{' '}
              <Link href="/terms" className="text-[#D4A853] hover:text-[#F0C850]">Terms of Service</Link>.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
