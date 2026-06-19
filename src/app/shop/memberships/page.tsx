import type { Metadata } from 'next';
import Link from 'next/link';
import MembershipTierCard from '@/components/shop/MembershipTierCard';
import ReserveForm from '@/components/shop/ReserveForm';
import ShopDisclosure from '@/components/shop/ShopDisclosure';
import { WebPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { MEMBERSHIP_TIERS } from '@/data/shop/membershipTiers';

export const metadata: Metadata = {
  title: 'Mythras Memberships | Support Tiers & Community Perks',
  description:
    'Join the Mythras Multiverse. Three membership tiers — Wanderer, Champion, and Mythic — with Discord perks, early strategy notes, deck/team reviews, and collector-drop access.',
  alternates: { canonical: 'https://gamertagmythras.com/shop/memberships' },
  openGraph: {
    title: 'Mythras Memberships',
    description: 'Wanderer, Champion, and Mythic tiers — back the channel and unlock community perks.',
    url: 'https://gamertagmythras.com/shop/memberships',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function MembershipsPage() {
  return (
    <>
      <WebPageSchema
        name="Mythras Memberships"
        description="Membership tiers and perks for supporting the Mythras Multiverse."
        url="https://gamertagmythras.com/shop/memberships"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Shop', url: 'https://gamertagmythras.com/shop' },
          { name: 'Memberships', url: 'https://gamertagmythras.com/shop/memberships' },
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
          <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">Memberships</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          Join the Multiverse
        </h1>
        <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto">
          Back the channel monthly and unlock community perks, early strategy, and collector-drop access. Pick the
          tier that fits — you can join through Discord today while one-click checkout is on the way.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {MEMBERSHIP_TIERS.map(tier => (
            <MembershipTierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <section id="request" className="scroll-mt-24 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>Request Membership</h2>
            <p className="text-[#9999aa]">Tell us which tier you want and we&apos;ll get you set up.</p>
          </div>
          <ReserveForm defaultProduct="Membership" />
        </section>

        <div className="text-center">
          <Link href="/shop" className="text-sm text-[#D4A853] hover:text-[#F0C850] underline">← Back to the full shop</Link>
        </div>

        <ShopDisclosure />
      </div>
    </>
  );
}
