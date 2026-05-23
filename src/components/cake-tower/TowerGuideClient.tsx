'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AdBanner, AdInFeed } from '@/components/AdUnit';
import type { TowerData, TrayData } from '@/data/cakeTowerData';
import { getDifficultyBg, getDifficultyColor, OVERVIEW_VIDEOS } from '@/data/cakeTowerData';

interface Props {
  tower: TowerData;
  otherTowerSlug: string;
  otherTowerName: string;
}

type DifficultyFilter = 'All' | TrayData['difficulty'];
const DIFFICULTIES: DifficultyFilter[] = ['All', 'Easy', 'Medium', 'Hard', 'Very Hard', 'Extreme'];

export default function TowerGuideClient({ tower, otherTowerSlug, otherTowerName }: Props) {
  const [expandedTray, setExpandedTray] = useState<number | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const trayListRef = useRef<HTMLDivElement>(null);

  const filteredTrays = tower.trays.filter((t) => {
    if (difficultyFilter !== 'All' && t.difficulty !== difficultyFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        (t.boss && t.boss.toLowerCase().includes(q)) ||
        t.description.toLowerCase().includes(q) ||
        String(t.tray).includes(q) ||
        (t.recommendedTeam && t.recommendedTeam.some(c => c.toLowerCase().includes(q)))
      );
    }
    return true;
  });

  const isChoco = tower.slug === 'decadent-choco';
  const accentClass = isChoco ? 'text-amber-400' : 'text-rose-400';
  const accentBorder = isChoco ? 'border-amber-700/30' : 'border-rose-700/30';
  const accentBg = isChoco ? 'bg-amber-900/20' : 'bg-rose-900/20';
  const gradient = isChoco ? 'from-amber-900 via-amber-800 to-yellow-900' : 'from-rose-900 via-red-800 to-pink-900';

  return (
    <div className="min-h-screen bg-[#060610]">
      <Navbar />

      {/* ──────── HERO ──────── */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-10`} />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/cake-tower" className="text-xs text-[#55556a] hover:text-[#D4A853] transition-colors">
                ← Cake Tower Hub
              </Link>
              <span className="text-[#55556a]">/</span>
              <span className="text-xs text-[#9999aa]">{tower.shortName}</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-2xl ${accentBg} flex items-center justify-center text-4xl`}>
                {tower.icon}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient" style={{ fontFamily: 'var(--font-display)' }}>
                  {tower.name.toUpperCase()}
                </h1>
                <p className="text-sm text-[#9999aa] mt-1">{tower.totalTrays} Trays &bull; {tower.trays.reduce((c, t) => c + t.videos.length, 0)} Video Guides</p>
              </div>
            </div>

            <p className="text-[#9999aa] leading-relaxed max-w-3xl mb-6">{tower.description}</p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              {DIFFICULTIES.filter(d => d !== 'All').map(d => {
                const count = tower.trays.filter(t => t.difficulty === d).length;
                if (count === 0) return null;
                return (
                  <div key={d} className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${getDifficultyBg(d as TrayData['difficulty'])}`}>
                    {d}: {count} tray{count !== 1 ? 's' : ''}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────── MECHANICS ──────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-2xl border ${accentBorder} bg-[#0a0a1a]/60 backdrop-blur-sm p-6`}>
          <h2 className={`text-lg font-bold ${accentClass} mb-3`} style={{ fontFamily: 'var(--font-display)' }}>KEY MECHANICS</h2>
          <ul className="space-y-2">
            {tower.mechanics.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#9999aa]">
                <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0`} style={{ backgroundColor: tower.accentColor }} />
                {m}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <AdBanner />

      {/* ──────── FILTERS ──────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-6 sticky top-16 z-30">
        <div className="rounded-xl border border-white/5 bg-[#0a0a1a]/90 backdrop-blur-md p-3 sm:p-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search trays, bosses, or cookies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#060610] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#D4A853]/40 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {DIFFICULTIES.map((d) => {
              const isActive = difficultyFilter === d;
              return (
                <button
                  key={d}
                  onClick={() => setDifficultyFilter(d)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? d === 'All' ? 'bg-[#D4A853]/20 text-[#D4A853] border border-[#D4A853]/30' : `border ${getDifficultyBg(d as TrayData['difficulty'])}`
                      : 'bg-[#060610] text-[#55556a] border border-white/5 hover:text-white hover:border-white/10'
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────── TRAY LIST ──────── */}
      <section ref={trayListRef} className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-xs text-[#55556a] mb-4">{filteredTrays.length} tray{filteredTrays.length !== 1 ? 's' : ''} shown</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A853]/20 via-[#D4A853]/10 to-transparent hidden sm:block" />

          <div className="space-y-3">
            {filteredTrays.map((tray, i) => {
              const isExpanded = expandedTray === tray.tray;
              return (
                <motion.div
                  key={`${tray.tray}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 sm:left-4.5 top-5 w-3 h-3 rounded-full border-2 hidden sm:block z-10"
                    style={{ borderColor: getDifficultyColor(tray.difficulty), backgroundColor: isExpanded ? getDifficultyColor(tray.difficulty) : '#060610' }}
                  />

                  <div className={`sm:ml-12 rounded-xl border ${isExpanded ? accentBorder : 'border-white/5'} bg-[#0a0a1a]/60 backdrop-blur-sm overflow-hidden transition-all hover:border-white/10`}>
                    {/* Tray header — always visible */}
                    <button
                      onClick={() => setExpandedTray(isExpanded ? null : tray.tray)}
                      className="w-full text-left p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
                    >
                      {/* Tray number */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${accentBg} flex items-center justify-center`}>
                        <span className={`font-bold text-lg ${accentClass}`} style={{ fontFamily: 'var(--font-display)' }}>
                          {tray.tray}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-white text-sm sm:text-base truncate">{tray.name}</h3>
                          {tray.boss && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                              BOSS
                            </span>
                          )}
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getDifficultyBg(tray.difficulty)}`}>
                            {tray.difficulty}
                          </span>
                        </div>
                        <p className="text-xs text-[#55556a] mt-0.5 line-clamp-1">{tray.description}</p>
                      </div>

                      {/* Video count + expand */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {tray.videos.length > 0 && (
                          <span className="px-2 py-1 rounded-lg bg-red-600/10 text-red-400 text-[10px] font-semibold">
                            ▶ {tray.videos.length}
                          </span>
                        )}
                        <svg className={`w-4 h-4 text-[#55556a] transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-5 border-t border-white/5 pt-4 space-y-5">
                            {/* Description */}
                            <p className="text-sm text-[#9999aa] leading-relaxed">{tray.description}</p>

                            {/* Tips */}
                            {tray.tips.length > 0 && (
                              <div>
                                <h4 className={`text-xs font-bold ${accentClass} uppercase tracking-wider mb-2`}>Strategy Tips</h4>
                                <ul className="space-y-1.5">
                                  {tray.tips.map((tip, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm text-[#9999aa]">
                                      <span className="text-[#D4A853] mt-0.5">→</span> {tip}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Recommended team */}
                            {tray.recommendedTeam && (
                              <div>
                                <h4 className={`text-xs font-bold ${accentClass} uppercase tracking-wider mb-2`}>Recommended Team</h4>
                                <div className="flex flex-wrap gap-2">
                                  {tray.recommendedTeam.map((cookie, j) => (
                                    <span key={j} className="px-3 py-1.5 rounded-lg bg-[#060610] border border-white/10 text-xs text-white font-medium">
                                      {cookie}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Treasures */}
                            {tray.treasures && (
                              <div>
                                <h4 className={`text-xs font-bold ${accentClass} uppercase tracking-wider mb-2`}>Treasures</h4>
                                <div className="flex flex-wrap gap-2">
                                  {tray.treasures.map((t, j) => (
                                    <span key={j} className="px-3 py-1.5 rounded-lg bg-[#D4A853]/5 border border-[#D4A853]/15 text-xs text-[#D4A853]">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Bonus condition */}
                            {tray.bonusCondition && (
                              <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/15">
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Bonus Condition: </span>
                                <span className="text-sm text-purple-300">{tray.bonusCondition}</span>
                              </div>
                            )}

                            {/* Video guides */}
                            {tray.videos.length > 0 && (
                              <div>
                                <h4 className={`text-xs font-bold ${accentClass} uppercase tracking-wider mb-2`}>Video Guides by Mythras</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {tray.videos.map((v) => (
                                    <a
                                      key={v.id}
                                      href={`https://www.youtube.com/watch?v=${v.id}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group flex gap-3 rounded-lg border border-white/5 bg-[#060610] p-2 hover:border-red-500/20 transition-colors"
                                    >
                                      <div className="relative w-28 flex-shrink-0 rounded-md overflow-hidden aspect-video">
                                        <img
                                          src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                                          alt={v.title}
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                          loading="lazy"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-7 h-7 rounded-full bg-red-600/90 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex-1 min-w-0 py-0.5">
                                        <p className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-2">{v.title}</p>
                                        <p className="text-[10px] text-[#55556a] mt-1">{v.date}</p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Ad injection every 8 trays */}
                  {i > 0 && i % 8 === 0 && <div className="sm:ml-12 mt-3"><AdInFeed /></div>}
                </motion.div>
              );
            })}
          </div>
        </div>

        {filteredTrays.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#55556a]">No trays match your search. Try a different filter or search term.</p>
          </div>
        )}
      </section>

      {/* ──────── NAVIGATION ──────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/cake-tower" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#D4A853]/20 bg-[#0a0a1a]/60 text-[#D4A853] font-semibold text-sm hover:bg-[#D4A853]/10 transition-colors">
            ← Back to Hub
          </Link>
          <Link href={`/cake-tower/${otherTowerSlug}`} className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-[#0a0a1a]/60 text-white font-semibold text-sm hover:border-white/20 transition-colors">
            {otherTowerName} →
          </Link>
          <Link href="/gear-guide" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-[#0a0a1a]/60 text-white font-semibold text-sm hover:border-white/20 transition-colors">
            🍪 Gear Guide
          </Link>
        </div>
      </section>

      <AdBanner />
      <Footer />
    </div>
  );
}
