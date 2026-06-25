import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ShopHero from '@/components/shop/ShopHero';
import MembershipTierCard from '@/components/shop/MembershipTierCard';
import ProductGrid from '@/components/shop/ProductGrid';
import ReserveForm from '@/components/shop/ReserveForm';
import ShopDisclosure from '@/components/shop/ShopDisclosure';
import { WebPageSchema, BreadcrumbSchema, FAQSchema } from '@/components/StructuredData';
import { MEMBERSHIP_TIERS } from '@/data/shop/membershipTiers';
import { SHOP_PRODUCTS, getFeaturedProducts } from '@/data/shop/shopProducts';

const SHOP_FAQ = [
  {
    question: 'Is the Mythras Cookie card an official Cookie Run: Braverse card?',
    answer:
      'No. The Mythras Cookie card is original fan art and an independent, hand-signed collectible illustrated by Mythras. It is not an official or tournament-playable card and is not affiliated with or endorsed by Devsisters or any game publisher.',
  },
  {
    question: 'How do I buy the Mythras Cookie collector card?',
    answer:
      'It is $25, hand-signed, and in stock. A one-click checkout is on the way; for now, reserve one by messaging us on Discord or emailing gamertagmythras@gmail.com and we will sort out payment and shipping.',
  },
  {
    question: 'How do memberships work right now?',
    answer:
      'Membership tiers (Wanderer, Champion, and Mythic) unlock Discord perks, early strategy, member threads, and collector-drop access. While we finish setting up checkout, you join through Discord — pick a tier and we get you set up with your roles and perks there.',
  },
  {
    question: 'Are the shop links affiliate links?',
    answer:
      'Some are. If you buy through them, the channel may earn a small commission at no extra cost to you. We only link gear, cards, and products we actually use, review, or cover for the community.',
  },
  {
    question: 'Do you ship the collector card internationally?',
    answer:
      'Reach out on Discord or by email and we will confirm shipping options and cost for your location before you pay. Since fulfillment is handled by hand for now, we sort the details with you directly.',
  },
];

export const metadata: Metadata = {
  title: 'Mythras Shop | Memberships, Merch, Collector Cards & Gaming Gear',
  description:
    'Support Mythras, join membership tiers, shop collector cards, creator merch, TCG gear, gaming accessories, and community perks across the Mythras Multiverse.',
  alternates: { canonical: 'https://gamertagmythras.com/shop' },
  openGraph: {
    title: 'The Mythras Armory — Shop & Support',
    description: 'Memberships, collector drops, creator merch, deck-tech gear, and community support — all in one place.',
    url: 'https://gamertagmythras.com/shop',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-bold text-white mb-2 scroll-mt-24" style={{ fontFamily: 'var(--font-display)' }}>
      {children}
    </h2>
  );
}

export default function ShopPage() {
  const featured = getFeaturedProducts()[0];

  return (
    <>
      <WebPageSchema
        name="Mythras Shop"
        description="Memberships, collector cards, merch, TCG gear, and community support across the Mythras Multiverse."
        url="https://gamertagmythras.com/shop"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Shop', url: 'https://gamertagmythras.com/shop' },
        ]}
      />

      <ShopHero />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-16">
        {/* Memberships */}
        <section id="memberships" className="scroll-mt-24">
          <div className="text-center mb-8">
            <SectionTitle>Membership Tiers</SectionTitle>
            <p className="text-[#9999aa] max-w-2xl mx-auto">
              Back the channel monthly and unlock community perks. Checkout is coming — for now you can join through
              Discord and we&apos;ll get you set up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {MEMBERSHIP_TIERS.map(tier => (
              <MembershipTierCard key={tier.id} tier={tier} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/shop/memberships" className="text-sm text-[#D4A853] hover:text-[#F0C850] underline">
              Compare tiers in detail →
            </Link>
          </div>
        </section>

        {/* Featured collector drop */}
        {featured && (
          <section id="drops" className="scroll-mt-24">
            <div className="text-center mb-8">
              <SectionTitle>Collector Drops</SectionTitle>
              <p className="text-[#9999aa]">Limited Mythras collectibles, hand-made and hand-signed.</p>
            </div>
            <div className="rounded-2xl border border-[#D4A853]/20 bg-[#0c0c18]/60 p-5 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex gap-3 shrink-0 justify-center">
                {(featured.images ?? [featured.image].filter(Boolean) as string[]).slice(0, 2).map((src, i) => (
                  <figure key={src} className={`relative w-32 md:w-40 aspect-[5/7] rounded-xl overflow-hidden border bg-[#12121f] ${i === 0 ? 'border-[#D4A853]/30' : 'border-[#D4A853]/20'}`}>
                    <Image src={src} alt={i === 0 ? `${featured.name} front` : `${featured.name} back`} fill className="object-cover" sizes="160px" />
                  </figure>
                ))}
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/20">In stock</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/20">Original fan art</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/20">Hand-signed by Mythras</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{featured.name}</h3>
                <div className="flex items-baseline gap-2 justify-center md:justify-start mb-3">
                  <span className="text-3xl font-bold text-[#D4A853]" style={{ fontFamily: 'var(--font-display)' }}>{featured.priceLabel}</span>
                  <span className="text-sm text-[#9999aa]">each · hand-signed · in stock</span>
                </div>
                <p className="text-[#c8c8d4] leading-relaxed mb-4">{featured.description}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <a href={featured.ctaHref} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all">Reserve on Discord</a>
                  <a href="mailto:gamertagmythras@gmail.com?subject=Mythras%20Cookie%20Card" className="px-5 py-2.5 rounded-lg font-semibold text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all">Email to reserve</a>
                  {/* TODO(stripe): swap to a "Buy now" Payment Link when checkout is wired (see lib/shop/checkout.ts). */}
                </div>
                {featured.disclaimer && <p className="text-xs text-[#55556a] mt-3">{featured.disclaimer}</p>}
              </div>
            </div>
          </section>
        )}

        {/* Full product grid */}
        <section className="scroll-mt-24">
          <div className="text-center mb-8">
            <SectionTitle>Browse the Armory</SectionTitle>
            <p className="text-[#9999aa]">Merch, gear, the cards we play, digital perks, and ways to support.</p>
          </div>
          <ProductGrid products={SHOP_PRODUCTS} />
        </section>

        {/* Reserve / request */}
        <section id="reserve" className="scroll-mt-24 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <SectionTitle>Reserve or Request</SectionTitle>
            <p className="text-[#9999aa]">Want a collector card, a membership, or a review session? Send a request and we&apos;ll follow up.</p>
          </div>
          <ReserveForm />
        </section>

        {/* Shop FAQ — useful answers + FAQ rich-results schema */}
        <section id="faq" className="scroll-mt-24 max-w-3xl mx-auto">
          <FAQSchema faqs={SHOP_FAQ} />
          <div className="text-center mb-6">
            <SectionTitle>Shop FAQ</SectionTitle>
          </div>
          <div className="space-y-3">
            {SHOP_FAQ.map((f, i) => (
              <details key={i} className="group rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-4">
                <summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-3">
                  <span>{f.question}</span>
                  <span className="text-[#D4A853] text-lg leading-none transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="text-sm text-[#9999aa] leading-relaxed mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <ShopDisclosure />
      </div>
    </>
  );
}
