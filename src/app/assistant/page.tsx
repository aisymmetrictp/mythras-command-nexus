import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import ChatWidget from '@/components/assistant/ChatWidget';
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Mythras Assistant — Ask Anything About Your Games',
  description:
    'A site-content-powered chat assistant that recommends Mythras guides across Cookie Run: Kingdom, Magic: The Gathering, Roblox, PUBG, Fortnite, and Minecraft — builds, tier lists, beginner guides, meta, and more.',
  alternates: { canonical: 'https://gamertagmythras.com/assistant' },
  openGraph: {
    title: 'Mythras Assistant — Ask Anything About Your Games',
    description: 'Site-content-powered chat assistant for CRK, MTG, Roblox, PUBG, Fortnite, and Minecraft.',
    url: 'https://gamertagmythras.com/assistant',
    type: 'website',
  },
};

export default function AssistantPage() {
  return (
    <>
      <WebPageSchema
        name="Mythras Assistant"
        description="Chat assistant for gaming guides on gamertagmythras.com — Cookie Run: Kingdom, MTG, Roblox, PUBG, Fortnite, and Minecraft."
        url="https://gamertagmythras.com/assistant"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Assistant', url: 'https://gamertagmythras.com/assistant' },
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
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
              <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">Mythras Assistant</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Ask anything about your games
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto">
              The assistant answers from what&apos;s actually live on Mythras — across Cookie Run: Kingdom, Magic:
              The Gathering, Roblox, PUBG, Fortnite, and Minecraft. Builds, tier lists, beginner guides, meta,
              and more. If I don&apos;t have it, I&apos;ll say so and point you at the closest guide rather than guess.
            </p>
          </section>

          <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-16">
            <ChatWidget embed />
          </section>

          <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 text-sm text-[#9999aa] leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              What this assistant is (and isn&apos;t)
            </h2>
            <p className="mb-3">
              This is a <strong className="text-white">retrieval assistant</strong>, not a language model. It
              indexes every blog post, Cookie gear page, gear category, and Cake Tower guide on Mythras. When you
              ask a question, it matches your intent to our content and surfaces the most relevant guides with a
              short summary. No data leaves your browser. No API key required.
            </p>
            <p className="mb-3">
              If you ask about something we haven&apos;t covered yet (a brand-new patch detail, a code we
              haven&apos;t verified, a Cookie that&apos;s not in our database), the assistant will tell you it
              doesn&apos;t have a confirmed answer and point you at the closest guide we do have. We&apos;d
              rather under-claim than invent.
            </p>
            <p>
              Browse the <Link href="/blog" className="text-[#D4A853] hover:text-[#F0C850]">blog</Link>, the{' '}
              <Link href="/gear-guide" className="text-[#D4A853] hover:text-[#F0C850]">gear guide</Link>, or the{' '}
              <Link href="/cake-tower" className="text-[#D4A853] hover:text-[#F0C850]">Cake Tower guide</Link>{' '}
              directly for the same content the assistant pulls from.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
