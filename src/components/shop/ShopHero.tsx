import Link from 'next/link';

export default function ShopHero() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
        <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">The Armory</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
        The Mythras Armory
      </h1>
      <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto mb-8">
        Support the channel, unlock community perks, grab Mythras collectibles, and find the cards, sleeves, gear,
        and tools we actually use.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="#memberships"
          className="px-6 py-3 rounded-lg font-bold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all"
        >
          Become a Member
        </Link>
        <Link
          href="#drops"
          className="px-6 py-3 rounded-lg font-bold text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all"
        >
          Shop Collector Drops
        </Link>
      </div>
    </section>
  );
}
