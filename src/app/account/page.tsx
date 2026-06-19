import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';

export const metadata: Metadata = {
  title: 'Account | Mythras',
  description: 'Member accounts for the Mythras Multiverse are coming soon.',
  alternates: { canonical: 'https://gamertagmythras.com/account' },
  robots: { index: false, follow: true },
};

export default function AccountPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)' }} />
        <ParticleField />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center">
          <section className="max-w-xl mx-auto px-4 sm:px-6 py-32 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
              <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">Account</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Member Accounts Coming Soon
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed mb-8">
              Member login and perks management are on the way. For now, memberships run through Discord — join a tier
              and we&apos;ll set you up with your roles and perks there.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/shop/memberships" className="px-6 py-3 rounded-lg font-bold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all">
                View Memberships
              </Link>
              <a href="https://discord.gg/mFg8mbxtTS" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-bold text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all">
                Join the Discord
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
