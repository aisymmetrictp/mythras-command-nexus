'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import {
  getCookieBySlug,
  ALL_COOKIES,
  RARITY_COLORS,
  TYPE_ICONS,
  STAT_GLOSSARY,
  GEAR_TIPS,
  RARITY_ORDER,
} from '@/data/cookieData';
import { AdInFeed } from '@/components/AdUnit';

function BuildCard({ label, icon, title, subtitle, accent }: { label: string; icon: string; title: string; subtitle: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-6 ${accent ? 'border-[#D4A853]/20 bg-gradient-to-br from-[#D4A853]/5 to-transparent' : 'border-white/5 bg-[#0c0c18]/80'}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <span className="text-[#D4A853] text-xs font-bold tracking-[0.15em] uppercase">{label}</span>
      </div>
      <div className="text-white font-semibold text-lg mb-1">{title}</div>
      <div className="text-[#9999aa] text-sm">{subtitle}</div>
    </div>
  );
}

function SubstatBadge({ stat }: { stat: string }) {
  const trimmed = stat.trim();
  const abbr = trimmed.replace(/\/\d+%?/, '');
  const pct = trimmed.includes('/') ? trimmed.split('/')[1] : null;
  const fullName = STAT_GLOSSARY[abbr] || abbr;

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#060610] border border-white/5">
      <span className="text-[#D4A853] text-xs font-bold">{abbr}</span>
      <span className="text-[#9999aa] text-xs">{fullName}</span>
      {pct && <span className="text-[#F0C850] text-xs font-medium">{pct}</span>}
    </div>
  );
}

export default function CookieGearGuideClient({ slug }: { slug: string }) {
  const cookie = getCookieBySlug(slug);

  if (!cookie) {
    return (
      <div className="min-h-screen bg-[#060610] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍪</div>
          <h1 className="text-2xl text-white mb-4">Cookie Not Found</h1>
          <Link href="/gear-guide" className="text-[#D4A853] hover:underline">Back to Gear Guide</Link>
        </div>
      </div>
    );
  }

  const colors = RARITY_COLORS[cookie.rarity];
  const substats = cookie.build?.toppingSubstats.split('+').map(s => s.trim()).filter(Boolean) || [];

  // Find related cookies of same rarity
  const related = ALL_COOKIES.filter(c => c.rarity === cookie.rarity && c.slug !== cookie.slug).slice(0, 4);

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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#9999aa] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#333]">/</span>
              <Link href="/gear-guide" className="hover:text-white transition-colors">Gear Guide</Link>
              <span className="text-[#333]">/</span>
              <span className="text-[#D4A853]">{cookie.name}</span>
            </nav>

            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* Cookie Portrait */}
                {cookie.imageUrl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="relative flex-shrink-0"
                  >
                    <div className="relative w-28 h-28 md:w-36 md:h-36">
                      <div className="absolute inset-0 rounded-2xl opacity-40 blur-xl" style={{ background: colors.bg }} />
                      <div className="relative w-full h-full rounded-2xl border-2 overflow-hidden bg-[#0c0c18]/80 backdrop-blur-sm"
                        style={{ borderColor: colors.border }}>
                        <img src={cookie.imageUrl} alt={cookie.name} className="w-full h-full object-cover" loading="eager" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-lg"
                        style={{ background: colors.bg, border: `2px solid ${colors.border}` }}>
                        {TYPE_ICONS[cookie.type]}
                      </div>
                    </div>
                  </motion.div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {!cookie.imageUrl && <span className="text-3xl">{TYPE_ICONS[cookie.type]}</span>}
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
                      {cookie.rarity}
                    </span>
                    <span className="text-[#9999aa] text-sm">{cookie.type} Type</span>
                  </div>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">{cookie.name}</h1>
                  <div className="flex gap-3 flex-wrap">
                <a href={cookie.wikiUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#9999aa] text-sm hover:bg-white/10 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  View on Wiki
                </a>
                {cookie.youtubeVideoUrl && (
                  <a href={cookie.youtubeVideoUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm hover:bg-red-500/20 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"/><path fill="#fff" d="m9.545 15.568 6.273-3.568-6.273-3.568v7.136Z"/></svg>
                    Watch Mythras Video
                  </a>
                )}
              </div>
                </div>
              </div>
            </motion.div>

            {/* Build Section */}
            {cookie.build ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                {/* Gear Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <BuildCard
                    label="Beascuit"
                    icon="🍪"
                    title={cookie.build.beascuit}
                    subtitle={`Attunes: ${cookie.build.beascuitAttunes}`}
                    accent
                  />
                  <BuildCard
                    label="Toppings"
                    icon="🫐"
                    title={cookie.build.toppings}
                    subtitle="5-piece set"
                  />
                  <BuildCard
                    label="Tart"
                    icon="🥧"
                    title={cookie.build.tart}
                    subtitle={cookie.build.tartStat}
                  />
                </div>

                {/* Ad after build cards */}
                <AdInFeed className="mb-8" />

                {/* Substat Focus */}
                <div className="rounded-xl border border-white/5 bg-[#0c0c18]/80 p-6 mb-8">
                  <h3 className="text-[#D4A853] text-xs font-bold tracking-[0.15em] uppercase mb-4">Topping Substat Priority</h3>
                  <div className="flex flex-wrap gap-2">
                    {substats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {i > 0 && <span className="text-[#333]">→</span>}
                        <SubstatBadge stat={stat} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Embed */}
                {cookie.youtubeVideoUrl && (
                  <div className="rounded-xl border border-red-500/10 bg-[#0c0c18]/80 p-6 mb-8">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"/><path fill="#fff" d="m9.545 15.568 6.273-3.568-6.273-3.568v7.136Z"/></svg>
                      CookieRun Mythras Video Guide
                    </h3>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${cookie.youtubeVideoUrl.split('v=')[1]}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={cookie.youtubeVideoTitle || `${cookie.name} Gear Guide`}
                      />
                    </div>
                    {cookie.youtubeVideoTitle && (
                      <p className="text-[#9999aa] text-sm mt-3">{cookie.youtubeVideoTitle}</p>
                    )}
                    {/* Additional Videos */}
                    {cookie.allVideos.length > 1 && (
                      <div className="mt-5 pt-5 border-t border-white/5">
                        <h4 className="text-[#D4A853] text-xs font-bold tracking-[0.15em] uppercase mb-3">More Mythras Videos</h4>
                        <div className="space-y-2">
                          {cookie.allVideos.slice(1).map((vid, i) => (
                            <a key={i} href={vid.url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#060610]/60 border border-white/5 hover:border-red-500/20 hover:bg-red-500/5 transition-all group">
                              <svg className="w-4 h-4 text-red-500/50 group-hover:text-red-500 flex-shrink-0 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"/><path fill="#fff" d="m9.545 15.568 6.273-3.568-6.273-3.568v7.136Z"/></svg>
                              <span className="text-[#9999aa] text-sm group-hover:text-white transition-colors truncate">{vid.title}</span>
                              {vid.date && <span className="text-[#555] text-xs flex-shrink-0 ml-auto">{vid.date}</span>}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Ad after video */}
                <AdInFeed className="mb-8" />

                {/* Build Tips */}
                <div className="rounded-xl border border-[#D4A853]/10 bg-[#0c0c18]/60 p-6 mb-8">
                  <h3 className="font-display text-xl text-white mb-4">Build Tips</h3>
                  <div className="space-y-4">
                    {cookie.build.beascuit.includes('Tainted') && (
                      <div className="flex gap-3">
                        <span className="text-[#D4A853] mt-0.5">&#9670;</span>
                        <p className="text-[#ccc] text-sm leading-relaxed">
                          <strong className="text-[#F0C850]">Tainted Beascuit:</strong> This cookie uses a Tainted Beascuit for the 20% elemental damage bonus. If you don&apos;t have the correct Tainted Beascuit yet, use a Legendary Beascuit as a placeholder.
                        </p>
                      </div>
                    )}
                    {cookie.build.beascuit.includes('Legendary') && !cookie.build.beascuit.includes('Tainted') && (
                      <div className="flex gap-3">
                        <span className="text-[#D4A853] mt-0.5">&#9670;</span>
                        <p className="text-[#ccc] text-sm leading-relaxed">
                          <strong className="text-[#F0C850]">Legendary Beascuit:</strong> Standard Legendary quality is optimal for this cookie. Remember to fully attune all 4 symbols.
                        </p>
                      </div>
                    )}
                    {cookie.build.toppingSubstats.includes('CD') && (
                      <div className="flex gap-3">
                        <span className="text-[#D4A853] mt-0.5">&#9670;</span>
                        <p className="text-[#ccc] text-sm leading-relaxed">
                          <strong className="text-[#F0C850]">Cooldown Priority:</strong> Cooldown is the most valuable substat. Aim for the highest CD rolls possible on your toppings.
                        </p>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <span className="text-[#D4A853] mt-0.5">&#9670;</span>
                      <p className="text-[#ccc] text-sm leading-relaxed">
                        <strong className="text-[#F0C850]">Tart Connection:</strong> Always connect your {cookie.build.tart} Tart to the toppings for the 6-piece set bonus substats.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#D4A853] mt-0.5">&#9670;</span>
                      <p className="text-[#ccc] text-sm leading-relaxed">
                        Keep stats in <strong className="text-purple-400">purple</strong> range. Reset Beascuits until you hit optimal percentages (aim for 15%).
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="rounded-xl border border-white/5 bg-[#0c0c18]/80 p-12 text-center mb-8">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl text-white mb-2">Build Guide Coming Soon</h3>
                <p className="text-[#9999aa]">
                  This cookie&apos;s gear guide is still being tested. Check back soon or visit the
                  <a href={cookie.wikiUrl} target="_blank" rel="noopener noreferrer" className="text-[#D4A853] hover:underline mx-1">wiki page</a>
                  for general info.
                </p>
              </motion.div>
            )}

            {/* Related Cookies */}
            {related.length > 0 && (
              <div className="mt-12">
                <h3 className="font-display text-2xl text-white mb-6">
                  More <span style={{ color: colors.text }}>{cookie.rarity}</span> Cookies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {related.map(c => (
                    <Link key={c.slug} href={`/gear-guide/${c.slug}`}
                      className="group rounded-xl border border-white/5 bg-[#0c0c18]/80 p-4 hover:border-[#D4A853]/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        {c.imageUrl ? (
                          <div className="w-7 h-7 rounded-lg border border-white/10 overflow-hidden flex-shrink-0 group-hover:border-[#D4A853]/40 transition-colors">
                            <img src={c.imageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ) : (
                          <span>{TYPE_ICONS[c.type]}</span>
                        )}
                        <span className="text-white text-sm font-medium group-hover:text-[#D4A853] transition-colors">{c.name}</span>
                      </div>
                      <span className="text-[#9999aa] text-xs">{c.type}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back Link */}
            <div className="mt-12 text-center">
              <Link href="/gear-guide"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[#9999aa] hover:text-white hover:bg-white/10 transition-all">
                <span>←</span> Back to All Cookies
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
