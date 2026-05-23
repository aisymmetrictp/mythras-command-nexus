'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { ALL_COOKIES, RARITY_COLORS, TYPE_ICONS } from '@/data/cookieData';
import type { CookieData, CookieRarity } from '@/data/cookieData';
import { GEAR_CATEGORIES, getToppingSlug, getBeascuitSlug, getTartSlug } from '@/data/gearData';
import type { GearType, GearCategory } from '@/data/gearData';
import { AdInFeed, AdBanner } from '@/components/AdUnit';

function CookieCard({ cookie, index }: { cookie: CookieData; index: number }) {
  const colors = RARITY_COLORS[cookie.rarity];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.6) }}
    >
      <Link href={`/gear-guide/${cookie.slug}`}
        className="group block rounded-xl border border-white/5 bg-[#0c0c18]/80 backdrop-blur-sm p-4 hover:border-[#D4A853]/30 hover:bg-[#0c0c18] transition-all duration-300">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {cookie.imageUrl ? (
              <div className="w-8 h-8 rounded-lg border border-white/10 overflow-hidden flex-shrink-0 group-hover:border-[#D4A853]/40 transition-colors">
                <img src={cookie.imageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ) : (
              <span className="text-lg">{TYPE_ICONS[cookie.type]}</span>
            )}
            <h3 className="text-white font-semibold text-sm group-hover:text-[#D4A853] transition-colors">{cookie.name}</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase"
            style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
            {cookie.rarity}
          </span>
          <span className="text-[#9999aa] text-[11px]">{cookie.type}</span>
        </div>
        {cookie.build && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[#D4A853] text-[10px] font-semibold w-16">BEASCUIT</span>
              <span className="text-[#9999aa] text-xs truncate">{cookie.build.beascuit}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4A853] text-[10px] font-semibold w-16">TOPPINGS</span>
              <span className="text-[#9999aa] text-xs truncate">{cookie.build.toppings}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4A853] text-[10px] font-semibold w-16">TART</span>
              <span className="text-[#9999aa] text-xs truncate">{cookie.build.tart} ({cookie.build.tartStat})</span>
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
}

export default function GearTypeClient({ categorySlug, typeSlug }: { categorySlug: string; typeSlug: string }) {
  const category = GEAR_CATEGORIES.find(c => c.slug === categorySlug);
  const gearType = category?.types.find(t => t.slug === typeSlug);

  const cookies = useMemo(() => {
    if (!gearType || !category) return [];
    return ALL_COOKIES.filter(c => {
      if (!c.build) return false;
      if (categorySlug === 'toppings') {
        return getToppingSlug(c.build.toppings) === typeSlug;
      } else if (categorySlug === 'beascuits') {
        return getBeascuitSlug(c.build.beascuit) === typeSlug;
      } else if (categorySlug === 'tarts') {
        return getTartSlug(c.build.tart) === typeSlug;
      }
      return false;
    });
  }, [category, gearType, categorySlug, typeSlug]);

  if (!category || !gearType) {
    return (
      <div className="min-h-screen bg-[#060610] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">❓</div>
          <h1 className="text-2xl text-white mb-2">Gear Type Not Found</h1>
          <Link href="/gear-guide" className="text-[#D4A853] hover:underline">Back to Gear Guide</Link>
        </div>
      </div>
    );
  }

  // Group by rarity
  const rarityOrder: CookieRarity[] = ['Beast', 'Ancient', 'Legendary', 'Dragon', 'Super Epic', 'Epic', 'Rare', 'Common', 'Special'];
  const grouped = rarityOrder.reduce((acc, r) => {
    const items = cookies.filter(c => c.rarity === r);
    if (items.length > 0) acc.push({ rarity: r, cookies: items });
    return acc;
  }, [] as { rarity: CookieRarity; cookies: CookieData[] }[]);

  // Other types in same category for navigation
  const otherTypes = category.types.filter(t => t.slug !== typeSlug);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute inset-0 opacity-20" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.1) 0%, transparent 50%)',
        }} />
        <ParticleField />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 pb-20">
          {/* Breadcrumb */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 mb-6">
            <nav className="flex items-center gap-2 text-sm text-[#9999aa] flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#333]">/</span>
              <span>Knowledge Hub</span>
              <span className="text-[#333]">/</span>
              <span>CookieRun: Kingdom</span>
              <span className="text-[#333]">/</span>
              <Link href="/gear-guide" className="hover:text-white transition-colors">Gear Guide</Link>
              <span className="text-[#333]">/</span>
              <span style={{ color: category.color }}>{category.name}</span>
              <span className="text-[#333]">/</span>
              <span className="text-[#D4A853]">{gearType.fullName}</span>
            </nav>
          </section>

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-2xl border p-8 md:p-12"
              style={{ borderColor: category.borderColor, background: `linear-gradient(135deg, ${category.bgColor}, rgba(12,12,24,0.9))` }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="relative flex-shrink-0"
                >
                  <div className="relative w-28 h-28 md:w-36 md:h-36">
                    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40" style={{ background: category.color }} />
                    <div className="relative w-full h-full rounded-2xl border-2 overflow-hidden bg-[#0c0c18]/80 p-3"
                      style={{ borderColor: category.borderColor }}>
                      <img src={gearType.imageUrl} alt={gearType.fullName} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </motion.div>
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: category.color }}>
                      {category.icon} {category.name}
                    </span>
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl text-white mb-3">{gearType.fullName}</h1>
                  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                      style={{ background: category.bgColor, color: category.color, border: `1px solid ${category.borderColor}` }}>
                      {gearType.stat}
                    </span>
                    <span className="text-[#9999aa] text-sm">{cookies.length} cookie{cookies.length !== 1 ? 's' : ''} use this</span>
                  </div>
                  <p className="text-[#9999aa] text-base max-w-xl leading-relaxed">{gearType.description}</p>
                </div>
              </div>
            </motion.div>
          </section>

          <AdBanner className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" />

          {/* Cookies using this gear */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="font-display text-2xl text-white mb-6">
              Cookies Using {gearType.fullName}
            </h2>
            {grouped.length > 0 ? (
              grouped.map(({ rarity, cookies: rarCookies }) => {
                const colors = RARITY_COLORS[rarity];
                return (
                  <div key={rarity} className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-display text-xl" style={{ color: colors.text }}>{rarity}</h3>
                      <div className="h-px flex-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.border}, transparent)` }} />
                      <span className="text-[#9999aa] text-sm">{rarCookies.length}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {rarCookies.map((cookie, i) => (
                        <CookieCard key={cookie.slug} cookie={cookie} index={i} />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🍪</div>
                <p className="text-[#9999aa]">No cookies currently use this gear type in our database.</p>
              </div>
            )}
          </section>

          <AdInFeed className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" />

          {/* Other gear types in same category */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="font-display text-2xl text-white mb-6">Other {category.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {otherTypes.map((t, i) => (
                <motion.div key={t.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/gear-guide/${categorySlug}/${t.slug}`}
                    className="group block rounded-xl border border-white/5 bg-[#0c0c18]/80 p-4 hover:border-[#D4A853]/20 transition-all text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden bg-[#060610]/60 p-1.5">
                      <img src={t.imageUrl} alt={t.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="text-white text-sm font-medium group-hover:text-[#D4A853] transition-colors">{t.fullName}</div>
                    <div className="text-[#666] text-xs mt-1">{t.stat}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 flex-wrap">
            <Link href={`/gear-guide/${categorySlug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors">
              ← All {category.name}
            </Link>
            <Link href="/gear-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#D4A853]/20 text-[#D4A853] hover:bg-[#D4A853]/10 transition-colors">
              ← Back to Gear Guide
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
