'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import {
  ALL_COOKIES,
  RARITY_ORDER,
  RARITY_COLORS,
  TYPE_ICONS,
  GEAR_TIPS,
  STAT_GLOSSARY,
  getRecentlyFeaturedCookie,
  getCookiesByRarity,
} from '@/data/cookieData';
import type { CookieRarity, CookieData } from '@/data/cookieData';
import { GEAR_CATEGORIES, getToppingSlug, getBeascuitSlug, getTartSlug } from '@/data/gearData';
import type { GearCategory } from '@/data/gearData';
import { AdInFeed, AdBanner } from '@/components/AdUnit';
import { FAQSchema } from '@/components/StructuredData';

function FeaturedCookie({ cookie }: { cookie: CookieData }) {
  const colors = RARITY_COLORS[cookie.rarity];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#0c0c18] to-[#10101c] p-8 md:p-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A853]/5 via-transparent to-transparent" />
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
          {cookie.rarity}
        </span>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        {cookie.imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
            className="relative flex-shrink-0 self-center md:self-start"
          >
            <div className="relative w-32 h-32 md:w-44 md:h-44">
              <div className="absolute inset-0 rounded-2xl bg-[#D4A853]/20 blur-2xl" />
              <div className="absolute inset-0 rounded-2xl animate-pulse opacity-20" style={{ background: `conic-gradient(from 0deg, ${colors.border}, transparent, ${colors.border})` }} />
              <div className="relative w-full h-full rounded-2xl border-2 border-[#D4A853]/40 overflow-hidden bg-[#0c0c18]/80 backdrop-blur-sm shadow-2xl shadow-[#D4A853]/10">
                <img src={cookie.imageUrl} alt={cookie.name} className="w-full h-full object-cover" loading="eager" />
              </div>
            </div>
          </motion.div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#D4A853] text-xs font-semibold tracking-[0.2em] uppercase">Featured Guide</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-3">{cookie.name}</h2>
          <div className="flex items-center gap-3 mb-6">
            {!cookie.imageUrl && <span className="text-2xl">{TYPE_ICONS[cookie.type]}</span>}
            <span className="text-[#9999aa] text-sm">{cookie.type} Type</span>
            <span className="text-[#555] mx-1">|</span>
            <span style={{ color: colors.text }} className="text-sm font-medium">{cookie.rarity}</span>
          </div>
        {cookie.build && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl bg-[#060610]/60 border border-[#D4A853]/10 p-4">
              <div className="text-[#D4A853] text-xs font-semibold tracking-wider uppercase mb-2">Beascuit</div>
              <div className="text-white font-medium">{cookie.build.beascuit}</div>
              <div className="text-[#9999aa] text-sm mt-1">{cookie.build.beascuitAttunes}</div>
            </div>
            <div className="rounded-xl bg-[#060610]/60 border border-[#D4A853]/10 p-4">
              <div className="text-[#D4A853] text-xs font-semibold tracking-wider uppercase mb-2">Toppings</div>
              <div className="text-white font-medium">{cookie.build.toppings}</div>
              <div className="text-[#9999aa] text-sm mt-1">{cookie.build.toppingSubstats}</div>
            </div>
            <div className="rounded-xl bg-[#060610]/60 border border-[#D4A853]/10 p-4">
              <div className="text-[#D4A853] text-xs font-semibold tracking-wider uppercase mb-2">Tart</div>
              <div className="text-white font-medium">{cookie.build.tart}</div>
              <div className="text-[#9999aa] text-sm mt-1">{cookie.build.tartStat}</div>
            </div>
          </div>
        )}
        <div className="flex gap-3 flex-wrap">
          <Link href={`/gear-guide/${cookie.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A853] text-[#060610] font-bold rounded-lg hover:bg-[#F0C850] transition-colors">
            View Full Guide <span>→</span>
          </Link>
          {cookie.youtubeVideoUrl && (
            <a href={cookie.youtubeVideoUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"/><path fill="#fff" d="m9.545 15.568 6.273-3.568-6.273-3.568v7.136Z"/></svg>
              Watch Mythras Guide
            </a>
          )}
        </div>
        </div>
      </div>
    </motion.div>
  );
}

function GearSystemShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-display text-3xl text-white">Gear System</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/30 to-transparent" />
      </div>
      <p className="text-[#9999aa] text-sm mb-8 max-w-2xl">
        Every cookie build is defined by three gear layers. Explore each category to find which cookies use specific gear types.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {GEAR_CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + catIdx * 0.1 }}
          >
            <Link href={`/gear-guide/${cat.slug}`}
              className="group block rounded-2xl border overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              style={{ borderColor: cat.borderColor, background: `linear-gradient(160deg, ${cat.bgColor}, rgba(12,12,24,0.95))` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-display text-xl text-white group-hover:text-[#D4A853] transition-colors">{cat.name}</h3>
                    <p className="text-[#9999aa] text-xs mt-0.5">{cat.types.length} types</p>
                  </div>
                </div>
                <p className="text-[#999] text-sm leading-relaxed mb-5">{cat.description}</p>
                <div className="grid grid-cols-5 gap-2 mb-5">
                  {cat.types.slice(0, 5).map(t => (
                    <div key={t.slug}
                      className="relative rounded-lg bg-[#060610]/60 border border-white/5 p-2">
                      <img src={t.imageUrl} alt={t.name} className="w-full aspect-square object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
                {cat.types.length > 5 && (
                  <div className="grid grid-cols-5 gap-2 mb-5">
                    {cat.types.slice(5).map(t => (
                      <div key={t.slug}
                        className="relative rounded-lg bg-[#060610]/60 border border-white/5 p-2">
                        <img src={t.imageUrl} alt={t.name} className="w-full aspect-square object-contain" loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}
                <span className="text-xs font-medium transition-colors group-hover:underline" style={{ color: cat.color }}>
                  Explore {cat.name} →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CookieCard({ cookie, index }: { cookie: CookieData; index: number }) {
  const colors = RARITY_COLORS[cookie.rarity];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
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
          {cookie.youtubeVideoUrl && (
            <svg className="w-4 h-4 text-red-500/60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"/><path fill="#fff" d="m9.545 15.568 6.273-3.568-6.273-3.568v7.136Z"/></svg>
          )}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase"
            style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
            {cookie.rarity}
          </span>
          <span className="text-[#9999aa] text-[11px]">{cookie.type}</span>
        </div>
        {cookie.build ? (
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
        ) : (
          <div className="text-[#555] text-xs italic">Build guide coming soon</div>
        )}
      </Link>
    </motion.div>
  );
}

function TipsSection() {
  const [activeTab, setActiveTab] = useState<'beascuits' | 'toppings' | 'tarts'>('beascuits');
  const tabs = [
    { key: 'beascuits' as const, label: 'Beascuits', icon: '🍪' },
    { key: 'toppings' as const, label: 'Toppings', icon: '🫐' },
    { key: 'tarts' as const, label: 'Tarts', icon: '🥧' },
  ];

  return (
    <div className="rounded-2xl border border-[#D4A853]/10 bg-[#0c0c18]/60 backdrop-blur-sm overflow-hidden">
      <div className="border-b border-[#D4A853]/10 p-6 pb-4">
        <h3 className="font-display text-2xl text-white mb-4">Gear Knowledge Base</h3>
        <div className="flex gap-2">
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-[#D4A853] text-[#060610]'
                  : 'bg-white/5 text-[#9999aa] hover:bg-white/10'
              }`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.ul key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3">
            {GEAR_TIPS[activeTab].map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="text-[#D4A853] mt-0.5 flex-shrink-0">&#9670;</span>
                <span className="text-[#ccc] leading-relaxed">{tip}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

function StatGlossary() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0c0c18]/60 backdrop-blur-sm p-6">
      <h3 className="font-display text-2xl text-white mb-4">Stat Abbreviations</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {Object.entries(STAT_GLOSSARY).map(([abbr, full]) => (
          <div key={abbr} className="rounded-lg bg-[#060610]/60 border border-white/5 p-3 text-center">
            <div className="text-[#D4A853] font-bold text-sm">{abbr}</div>
            <div className="text-[#9999aa] text-xs mt-1">{full}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Build gear filter options from actual build data
function useGearFilterOptions() {
  return useMemo(() => {
    const toppings = new Map<string, string>();
    const beascuits = new Map<string, string>();
    const tarts = new Map<string, string>();

    ALL_COOKIES.forEach(c => {
      if (!c.build) return;
      const ts = getToppingSlug(c.build.toppings);
      if (ts) toppings.set(ts, c.build.toppings.replace(/\s*x\d+$/, '').split(' ').pop() || ts);
      const bs = getBeascuitSlug(c.build.beascuit);
      if (bs) beascuits.set(bs, c.build.beascuit.split(' ').pop() || bs);
      const trs = getTartSlug(c.build.tart);
      if (trs) tarts.set(trs, c.build.tart);
    });

    // Map to gear type data for full names
    const toppingTypes = GEAR_CATEGORIES[0].types.filter(t => toppings.has(t.slug));
    const beascuitTypes = GEAR_CATEGORIES[1].types.filter(t => beascuits.has(t.slug));
    const tartTypes = GEAR_CATEGORIES[2].types.filter(t => tarts.has(t.slug));

    return { toppingTypes, beascuitTypes, tartTypes };
  }, []);
}

export default function GearGuidePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<CookieRarity | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTopping, setSelectedTopping] = useState<string>('all');
  const [selectedBeascuit, setSelectedBeascuit] = useState<string>('all');
  const [selectedTart, setSelectedTart] = useState<string>('all');
  const featured = getRecentlyFeaturedCookie();
  const { toppingTypes, beascuitTypes, tartTypes } = useGearFilterOptions();

  const types = useMemo(() => {
    const t = new Set(ALL_COOKIES.map(c => c.type));
    return ['all', ...Array.from(t).sort()];
  }, []);

  const filteredCookies = useMemo(() => {
    return ALL_COOKIES.filter(c => {
      const matchesSearch = searchQuery === '' ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRarity = selectedRarity === 'all' || c.rarity === selectedRarity;
      const matchesType = selectedType === 'all' || c.type === selectedType;
      const matchesTopping = selectedTopping === 'all' || (c.build && getToppingSlug(c.build.toppings) === selectedTopping);
      const matchesBeascuit = selectedBeascuit === 'all' || (c.build && getBeascuitSlug(c.build.beascuit) === selectedBeascuit);
      const matchesTart = selectedTart === 'all' || (c.build && getTartSlug(c.build.tart) === selectedTart);
      return matchesSearch && matchesRarity && matchesType && matchesTopping && matchesBeascuit && matchesTart;
    });
  }, [searchQuery, selectedRarity, selectedType, selectedTopping, selectedBeascuit, selectedTart]);

  const groupedByRarity = useMemo(() => {
    if (selectedRarity !== 'all') return null;
    const groups: Record<string, CookieData[]> = {};
    RARITY_ORDER.forEach(r => {
      const cookies = filteredCookies.filter(c => c.rarity === r);
      if (cookies.length > 0) groups[r] = cookies;
    });
    return groups;
  }, [filteredCookies, selectedRarity]);

  const hasGearFilter = selectedTopping !== 'all' || selectedBeascuit !== 'all' || selectedTart !== 'all';

  return (
    <>
      <FAQSchema faqs={[
        { question: 'What are the best toppings in Cookie Run Kingdom?', answer: 'The best toppings depend on the cookie type. Searing Raspberry (ATK) is ideal for damage dealers, Swift Chocolate (Cooldown) for support cookies, and Solid Almond (DMG Resist) for tanks. Check each cookie\'s individual gear guide for the optimal topping recommendation.' },
        { question: 'What are beascuits in Cookie Run Kingdom?', answer: 'Beascuits are cookie-type specific gear pieces that provide powerful stat boosts and attunement bonuses. Each cookie type (Charge, Magic, Ranged, etc.) has a corresponding beascuit type (Chewy, Zesty, Light, etc.) with Legendary and Tainted tiers.' },
        { question: 'What are topping tarts in Cookie Run Kingdom?', answer: 'Topping tarts are an additional gear layer that enhances your toppings with extra stat bonuses. They come in the same types as toppings (Raspberry, Chocolate, Almond, etc.) and provide supplementary stats on top of your topping loadout.' },
        { question: 'How do I build the best cookie in Cookie Run Kingdom?', answer: 'The best cookie build combines the right beascuit for your cookie type, optimal toppings with prioritized sub-stats, and a matching topping tart. Use the Mythras Gear Guide to find specific recommendations for each of the 167+ cookies.' },
      ]} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute inset-0 opacity-20" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)',
        }} />
        <ParticleField />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 pb-20">
          {/* Breadcrumb Trail */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 mb-6">
            <nav className="flex items-center gap-2 text-sm text-[#9999aa]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#333]">/</span>
              <span className="text-[#9999aa]">Knowledge Hub</span>
              <span className="text-[#333]">/</span>
              <span className="text-[#9999aa]">CookieRun: Kingdom</span>
              <span className="text-[#333]">/</span>
              <span className="text-[#D4A853]">Gear Guide Loadouts</span>
            </nav>
          </section>

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
                <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">CookieRun Mythras</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4">
                Ultimate <span className="text-gradient">Gear Guide</span>
              </h1>
              <p className="text-[#9999aa] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
                The Mythras Gear Guide is a tactical build system for Cookie Run. Each cookie can be optimized with the right toppings, stats, and team compositions.
              </p>
              <p className="text-[#777] text-base max-w-2xl mx-auto leading-relaxed">
                This guide breaks down the best builds, recommended toppings, sub-stats, and meta strategies so you can maximize damage, survivability, and arena performance.
              </p>
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[#9999aa]">
                <span><strong className="text-white">{ALL_COOKIES.length}</strong> Cookies</span>
                <span className="text-[#333]">|</span>
                <span><strong className="text-white">{ALL_COOKIES.filter(c => c.build).length}</strong> Full Builds</span>
                <span className="text-[#333]">|</span>
                <span><strong className="text-white">{ALL_COOKIES.filter(c => c.youtubeVideoUrl).length}</strong> Video Guides</span>
              </div>
            </motion.div>

            {/* Featured Cookie */}
            <FeaturedCookie cookie={featured} />
            <AdBanner className="mt-8" />
          </section>

          {/* Gear System Showcase */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <GearSystemShowcase />
          </section>

          {/* Tips & Glossary */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TipsSection />
              <StatGlossary />
            </div>
          </section>

          {/* Search & Filters */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex flex-col gap-4">
              {/* Row 1: Search + Cookie Filters */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="relative flex-1 max-w-md">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9999aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search cookies..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0c0c18] border border-white/10 text-white placeholder-[#555] focus:border-[#D4A853]/40 focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <select
                    value={selectedRarity}
                    onChange={e => setSelectedRarity(e.target.value as CookieRarity | 'all')}
                    className="px-4 py-3 rounded-xl bg-[#0c0c18] border border-white/10 text-white text-sm focus:border-[#D4A853]/40 focus:outline-none"
                  >
                    <option value="all">All Rarities</option>
                    {RARITY_ORDER.map(r => (
                      <option key={r} value={r}>{r} ({getCookiesByRarity(r).length})</option>
                    ))}
                  </select>
                  <select
                    value={selectedType}
                    onChange={e => setSelectedType(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-[#0c0c18] border border-white/10 text-white text-sm focus:border-[#D4A853]/40 focus:outline-none"
                  >
                    {types.map(t => (
                      <option key={t} value={t}>{t === 'all' ? 'All Types' : `${TYPE_ICONS[t as keyof typeof TYPE_ICONS] || ''} ${t}`}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Gear Filters */}
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <span className="text-[#D4A853] text-xs font-semibold tracking-[0.15em] uppercase flex-shrink-0">Filter by Gear</span>
                <div className="flex gap-2 flex-wrap">
                  <select
                    value={selectedTopping}
                    onChange={e => setSelectedTopping(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-[#0c0c18] border text-sm focus:outline-none transition-colors"
                    style={{
                      borderColor: selectedTopping !== 'all' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(255,255,255,0.1)',
                      color: selectedTopping !== 'all' ? '#60A5FA' : 'white',
                    }}
                  >
                    <option value="all">All Toppings</option>
                    {toppingTypes.map(t => (
                      <option key={t.slug} value={t.slug}>{t.fullName} ({t.stat})</option>
                    ))}
                  </select>
                  <select
                    value={selectedBeascuit}
                    onChange={e => setSelectedBeascuit(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-[#0c0c18] border text-sm focus:outline-none transition-colors"
                    style={{
                      borderColor: selectedBeascuit !== 'all' ? 'rgba(240, 200, 80, 0.4)' : 'rgba(255,255,255,0.1)',
                      color: selectedBeascuit !== 'all' ? '#F0C850' : 'white',
                    }}
                  >
                    <option value="all">All Beascuits</option>
                    {beascuitTypes.map(t => (
                      <option key={t.slug} value={t.slug}>{t.fullName} ({t.stat})</option>
                    ))}
                  </select>
                  <select
                    value={selectedTart}
                    onChange={e => setSelectedTart(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-[#0c0c18] border text-sm focus:outline-none transition-colors"
                    style={{
                      borderColor: selectedTart !== 'all' ? 'rgba(251, 146, 60, 0.4)' : 'rgba(255,255,255,0.1)',
                      color: selectedTart !== 'all' ? '#FB923C' : 'white',
                    }}
                  >
                    <option value="all">All Tarts</option>
                    {tartTypes.map(t => (
                      <option key={t.slug} value={t.slug}>{t.fullName} ({t.stat})</option>
                    ))}
                  </select>
                  {hasGearFilter && (
                    <button
                      onClick={() => { setSelectedTopping('all'); setSelectedBeascuit('all'); setSelectedTart('all'); }}
                      className="px-3 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm hover:bg-red-500/20 transition-colors"
                    >
                      Clear Gear Filters
                    </button>
                  )}
                </div>
              </div>

              <div className="text-[#9999aa] text-sm">
                {filteredCookies.length} cookie{filteredCookies.length !== 1 ? 's' : ''}
              </div>
            </div>
          </section>

          {/* Cookie Grid by Rarity */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {groupedByRarity ? (
              Object.entries(groupedByRarity).map(([rarity, cookies], groupIdx) => {
                const colors = RARITY_COLORS[rarity as CookieRarity];
                return (
                  <div key={rarity}>
                    <div className="mb-12">
                      <div className="flex items-center gap-3 mb-6">
                        <h2 className="font-display text-3xl" style={{ color: colors.text }}>{rarity}</h2>
                        <div className="h-px flex-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.border}, transparent)` }} />
                        <span className="text-[#9999aa] text-sm">{cookies.length} cookies</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {cookies.map((cookie, i) => (
                          <CookieCard key={cookie.slug} cookie={cookie} index={i} />
                        ))}
                      </div>
                    </div>
                    {(groupIdx === 1 || groupIdx === 4) && <AdInFeed className="mb-12" />}
                  </div>
                );
              })
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredCookies.map((cookie, i) => (
                  <CookieCard key={cookie.slug} cookie={cookie} index={i} />
                ))}
              </div>
            )}
            {filteredCookies.length === 0 && (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">🍪</div>
                <div className="text-[#9999aa] text-lg">No cookies match your search.</div>
              </div>
            )}
          </section>

          {/* YouTube CTA */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/20 to-[#0c0c18] p-8 md:p-12 text-center">
              <h3 className="font-display text-3xl md:text-4xl text-white mb-4">Watch on CookieRun Mythras</h3>
              <p className="text-[#9999aa] mb-6 max-w-2xl mx-auto">
                Every guide comes from deep gameplay testing. Subscribe for the latest gear guides, meta breakdowns, and CookieRun Kingdom strategy.
              </p>
              <a href="https://www.youtube.com/@cookierunmythras" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"/><path fill="#fff" d="m9.545 15.568 6.273-3.568-6.273-3.568v7.136Z"/></svg>
                Subscribe to CookieRun Mythras
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
