import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Mythras Shop',
  description: 'Thanks for supporting the Mythras Multiverse.',
  alternates: { canonical: 'https://gamertagmythras.com/shop/thank-you' },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-24 text-center">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center">
        <svg className="w-8 h-8 text-[#D4A853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
        Thank You
      </h1>
      <p className="text-lg text-[#c8c8d4] leading-relaxed mb-8">
        You&apos;re a real one. Your support keeps the guides free and the videos coming — we&apos;ll be in touch over
        email or Discord if anything needs sorting out.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/shop" className="px-6 py-3 rounded-lg font-bold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all">
          Back to the Shop
        </Link>
        <a href="https://discord.gg/mFg8mbxtTS" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-bold text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all">
          Join the Discord
        </a>
      </div>
    </section>
  );
}
