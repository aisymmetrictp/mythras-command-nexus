'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { ALL_COOKIES } from '@/data/cookieData';
import { GEAR_CATEGORIES, getToppingSlug, getBeascuitSlug, getTartSlug } from '@/data/gearData';
import { AdBanner, AdInFeed } from '@/components/AdUnit';

function countCookiesForType(categorySlug: string, typeSlug: string): number {
  return ALL_COOKIES.filter(c => {
    if (!c.build) return false;
    if (categorySlug === 'toppings') return getToppingSlug(c.build.toppings) === typeSlug;
    if (categorySlug === 'beascuits') return getBeascuitSlug(c.build.beascuit) === typeSlug;
    if (categorySlug === 'tarts') return getTartSlug(c.build.tart) === typeSlug;
    return false;
  }).length;
}

export default function GearCategoryClient({ categorySlug }: { categorySlug: string }) {
  const category = GEAR_CATEGORIES.find(c => c.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#060610] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">❓</div>
          <h1 className="text-2xl text-white mb-2">Category Not Found</h1>
          <Link href="/gear-guide" className="text-[#D4A853] hover:underline">Back to Gear Guide</Link>
        </div>
      </div>
    );
  }

  const typesWithCounts = useMemo(() =>
    category.types.map(t => ({
      ...t,
      cookieCount: countCookiesForType(categorySlug, t.slug),
    })),
  [category, categorySlug]);

  const otherCategories = GEAR_CATEGORIES.filter(c => c.slug !== categorySlug);

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
              <span className="text-[#D4A853]">{category.name}</span>
            </nav>
          </section>

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="text-5xl mb-4 block">{category.icon}</span>
              <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
                {category.name}
              </h1>
              <p className="text-[#9999aa] text-lg max-w-2xl mx-auto leading-relaxed mb-2">
                {category.description}
              </p>
              <p className="text-[#666] text-sm">
                {category.types.length} types available
              </p>
            </motion.div>
          </section>

          <AdBanner className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" />

          {/* Gear Types Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {typesWithCounts.map((t, i) => (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.5) }}
                >
                  <Link href={`/gear-guide/${categorySlug}/${t.slug}`}
                    className="group block rounded-2xl border border-white/5 bg-[#0c0c18]/80 backdrop-blur-sm overflow-hidden hover:border-[#D4A853]/30 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#060610]/60 border border-white/10 p-2 flex-shrink-0 group-hover:border-[#D4A853]/30 transition-colors">
                          <img src={t.imageUrl} alt={t.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg group-hover:text-[#D4A853] transition-colors">{t.fullName}</h3>
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase mt-1"
                            style={{ background: category.bgColor, color: category.color, border: `1px solid ${category.borderColor}` }}>
                            {t.stat}
                          </span>
                        </div>
                      </div>
                      <p className="text-[#999] text-sm leading-relaxed mb-3">{t.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#9999aa] text-xs">{t.cookieCount} cookie{t.cookieCount !== 1 ? 's' : ''}</span>
                        <span className="text-xs font-medium group-hover:translate-x-1 transition-transform" style={{ color: category.color }}>
                          View Builds →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <AdInFeed className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" />

          {/* Other Categories */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="font-display text-2xl text-white mb-6">Other Gear Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherCategories.map(cat => (
                <Link key={cat.slug} href={`/gear-guide/${cat.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-[#0c0c18]/80 p-5 hover:border-[#D4A853]/20 transition-all">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-[#D4A853] transition-colors">{cat.name}</h3>
                    <p className="text-[#9999aa] text-sm">{cat.types.length} types</p>
                  </div>
                  <span className="ml-auto text-[#666] group-hover:text-[#D4A853] transition-colors">→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Back */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
