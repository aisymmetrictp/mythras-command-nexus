import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';

export const metadata: Metadata = {
  title: {
    default: 'Mythras Blog — Cookie Run Kingdom Guides, Tier Lists & Meta',
    template: '%s | Mythras Blog',
  },
  description:
    'Cookie Run: Kingdom guides, tier lists, codes, team builds, and meta analysis from Mythras. Updated weekly with patch-fresh strategy.',
  keywords: [
    'Cookie Run Kingdom blog', 'CRK guides', 'Cookie Run Kingdom tier list',
    'CRK meta', 'Cookie Run Kingdom team builds', 'CRK codes', 'Mythras blog',
  ],
  openGraph: {
    title: 'Mythras Blog — Cookie Run Kingdom Guides & Meta',
    description: 'Patch-fresh CRK guides, tier lists, and team builds from Mythras.',
    url: 'https://gamertagmythras.com/blog',
    type: 'website',
  },
  alternates: { canonical: 'https://gamertagmythras.com/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060610]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)',
          }}
        />
        <ParticleField />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
