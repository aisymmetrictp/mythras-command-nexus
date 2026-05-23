'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DECADENT_CHOCO, ENDLESS_STRAWBERRY, OVERVIEW_VIDEOS, getDifficultyBg } from '@/data/cakeTowerData';
import { FAQSchema } from '@/components/StructuredData';

const towers = [
  {
    data: DECADENT_CHOCO,
    gradient: 'from-amber-900 via-amber-800 to-yellow-900',
    borderColor: 'border-amber-700/30',
    hoverBorder: 'hover:border-amber-500/50',
    iconBg: 'bg-amber-900/40',
    statColor: 'text-amber-400',
    buttonGradient: 'from-amber-700 to-amber-900',
  },
  {
    data: ENDLESS_STRAWBERRY,
    gradient: 'from-rose-900 via-red-800 to-pink-900',
    borderColor: 'border-rose-700/30',
    hoverBorder: 'hover:border-rose-500/50',
    iconBg: 'bg-rose-900/40',
    statColor: 'text-rose-400',
    buttonGradient: 'from-rose-700 to-rose-900',
  },
];

const faqs = [
  {
    question: 'What is the Sublime Cake Tower in CookieRun: Kingdom?',
    answer: 'The Sublime Cake Tower replaced the old Tower of Sweet Chaos. It consists of two sub-towers: the Decadent Choco Cake Tower (45 boss-rush trays) and the Endless Strawberry Cake Tower (250 wave-based trays). All cookies are auto-boosted to at least 4-star Level 70.',
  },
  {
    question: 'Do I need keys or energy to play the Sublime Cake Tower?',
    answer: 'No. Unlike the old Tower of Sweet Chaos which required Searing Keys, the Sublime Cake Tower has no energy or key costs. You can attempt any tray as many times as you want.',
  },
  {
    question: 'What is the difference between the Choco Tower and Strawberry Tower?',
    answer: 'The Decadent Choco Cake Tower is a boss-rush with 45 single-boss trays. The Endless Strawberry Cake Tower has 250 trays of wave-based combat with boss fights every 10-20 trays. Both disable Bonds, Costumes, and other external buffs.',
  },
  {
    question: 'What cookies are best for the Sublime Cake Tower?',
    answer: 'It depends on the tray. Key cookies include Stormbringer (Choco Tower), Pure Vanilla (healing/Injury removal), Burning Spice + Fire Spirit (Strawberry Tray 191-200), and Mystic Flour (Strawberry 171-180). Each tray has different optimal teams.',
  },
  {
    question: 'Are the Sublime Cake Tower rewards one-time or recurring?',
    answer: 'All rewards are one-time only per tray. Unlike the old Tower of Sweet Chaos which had seasonal refreshes, Sublime Cake Tower rewards do not reset.',
  },
  {
    question: 'What replaced the Tower of Sweet Chaos?',
    answer: 'The Tower of Sweet Chaos ended in January 2024 (Season 18) and was replaced by the Sublime Cake Tower in the Heaven-Splitting Lightning update (v5.4). The new tower features permanent one-time rewards and no key requirements.',
  },
];

export default function CakeTowerHub() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="min-h-screen bg-[#060610]">
        <Navbar />

        {/* ──────── HERO ──────── */}
        <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            background: 'radial-gradient(ellipse at 30% 30%, rgba(212, 168, 83, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(220, 20, 60, 0.1) 0%, transparent 50%)',
          }} />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/5 text-[#D4A853] text-xs font-semibold tracking-widest uppercase mb-4">
                CookieRun: Kingdom Guide
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gradient" style={{ fontFamily: 'var(--font-display)' }}>
                SUBLIME CAKE TOWER
              </h1>
              <p className="text-lg text-[#9999aa] max-w-3xl mx-auto leading-relaxed mb-2">
                The definitive F2P guide to every tray of both the Decadent Choco Cake Tower and Endless Strawberry Cake Tower.
                Video walkthroughs, team comps, treasure picks, and boss strategies — all from Mythras.
              </p>
              <p className="text-sm text-[#55556a]">
                Covering {DECADENT_CHOCO.totalTrays + ENDLESS_STRAWBERRY.totalTrays} total trays across both towers &bull; {DECADENT_CHOCO.trays.reduce((c, t) => c + t.videos.length, 0) + ENDLESS_STRAWBERRY.trays.reduce((c, t) => c + t.videos.length, 0)} video guides
              </p>
            </motion.div>
          </div>
        </section>

        {/* ──────── KEY MECHANICS ──────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#D4A853]/10 bg-[#0a0a1a]/60 backdrop-blur-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#D4A853] mb-4" style={{ fontFamily: 'var(--font-display)' }}>WHAT YOU NEED TO KNOW</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '⚡', title: 'No Keys Required', desc: 'Unlike the old Tower of Sweet Chaos, no Searing Keys or energy are needed. Attempt any tray, any time.' },
                { icon: '📈', title: 'Auto Level 70', desc: 'All cookies are boosted to at least 4-star Level 70. Under-leveled cookies are viable — strategy beats stats.' },
                { icon: '🚫', title: 'Systems Disabled', desc: 'Bonds, Sugar Gnome Lab, Costume Sets, Guild Relics, Landmarks, and Topping bonus effects are all turned off.' },
                { icon: '🎁', title: 'One-Time Rewards', desc: 'Rewards don\'t refresh. Coins, Star Jellies, Crystals, and Chaos Cake Pieces are earned once per tray.' },
                { icon: '🍫', title: '45 Boss Trays', desc: 'The Choco Tower is a boss rush — one powered-up boss per tray. Periodic damage bypasses the hit-shield.' },
                { icon: '🍓', title: '250 Wave Trays', desc: 'The Strawberry Tower is a massive gauntlet with wave combat, boss fights every 10-20 trays, and bonus conditions.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#060610]/80 border border-white/5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-[#9999aa] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ──────── TOWER CARDS ──────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              CHOOSE YOUR TOWER
            </h2>
            <p className="text-sm text-[#9999aa]">Each tower has its own dedicated guide with tray-by-tray breakdowns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {towers.map(({ data, gradient, borderColor, hoverBorder, iconBg, statColor, buttonGradient }, i) => (
              <motion.div
                key={data.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Link
                  href={`/cake-tower/${data.slug}`}
                  className={`block rounded-2xl border ${borderColor} ${hoverBorder} bg-[#0a0a1a]/60 backdrop-blur-sm overflow-hidden transition-all hover:scale-[1.01] hover:shadow-xl group`}
                >
                  {/* Tower header */}
                  <div className={`bg-gradient-to-br ${gradient} p-6 sm:p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center text-4xl mb-4`}>
                        {data.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                        {data.name.toUpperCase()}
                      </h3>
                      <p className="text-white/70 text-sm">{data.totalTrays} Trays</p>
                    </div>
                  </div>

                  {/* Tower stats */}
                  <div className="p-6">
                    <p className="text-sm text-[#9999aa] leading-relaxed mb-4">{data.description}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="px-3 py-1.5 rounded-lg bg-[#060610] border border-white/5 text-xs">
                        <span className="text-[#55556a]">Trays:</span>{' '}
                        <span className={statColor}>{data.totalTrays}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#060610] border border-white/5 text-xs">
                        <span className="text-[#55556a]">Videos:</span>{' '}
                        <span className={statColor}>{data.trays.reduce((c, t) => c + t.videos.length, 0)}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#060610] border border-white/5 text-xs">
                        <span className="text-[#55556a]">Boss Trays:</span>{' '}
                        <span className={statColor}>{data.trays.filter(t => t.boss).length}</span>
                      </div>
                    </div>

                    {/* Difficulty preview */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {data.trays.slice(0, 8).map((t, j) => (
                        <span key={j} className={`inline-flex px-2 py-0.5 rounded text-[10px] font-semibold border ${getDifficultyBg(t.difficulty)}`}>
                          {t.difficulty}
                        </span>
                      ))}
                      {data.trays.length > 8 && <span className="text-[10px] text-[#55556a] self-center">+{data.trays.length - 8} more</span>}
                    </div>

                    <div className={`w-full py-2.5 rounded-lg bg-gradient-to-r ${buttonGradient} text-center text-white font-bold text-sm tracking-wider uppercase group-hover:brightness-110 transition-all`}>
                      View Full Guide →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ──────── OVERVIEW VIDEOS ──────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gradient mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              FEATURED VIDEO GUIDES
            </h2>
            <p className="text-sm text-[#9999aa]">Start here for an overview before diving into specific trays</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OVERVIEW_VIDEOS.map((v) => (
              <motion.a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-[#D4A853]/10 bg-[#0a0a1a]/60 overflow-hidden hover:border-[#D4A853]/30 transition-all"
              >
                <div className="relative aspect-video bg-[#060610]">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-[#D4A853] transition-colors line-clamp-2">{v.title}</h3>
                  <p className="text-xs text-[#55556a]">{v.date}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ──────── MYTHRAS TAKE ──────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#D4A853]/5 to-transparent p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4A853]/10 flex items-center justify-center text-[#D4A853] font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>M</div>
              <div>
                <h2 className="font-bold text-[#D4A853] text-lg" style={{ fontFamily: 'var(--font-display)' }}>MYTHRAS TAKE</h2>
                <p className="text-xs text-[#55556a]">Editorial perspective</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-[#9999aa] leading-relaxed">
              <p>
                The Sublime Cake Tower is one of the best things DevSisters has done for CRK&apos;s endgame. Removing the key system was huge — it lets
                you actually practice and experiment without watching a timer. The auto-level-70 boost means your entire roster is viable, not just the five
                cookies you&apos;ve been feeding resources for months.
              </p>
              <p>
                The Choco Tower rewards game knowledge over raw power. Understanding boss mechanics, knowing when to use periodic damage to
                bypass hit-shields, and picking the right cookies for each encounter — that&apos;s what separates clears from failures. The Strawberry
                Tower is a marathon that tests both team depth and adaptability as the meta shifts every 20-30 trays.
              </p>
              <p>
                My biggest advice: don&apos;t try to brute-force these towers. Watch the guides, understand WHY specific teams work for specific trays,
                and build your roster strategically. A level 70 cookie with the right matchup beats a maxed cookie in the wrong fight every time.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ──────── FAQ ──────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <h2 className="text-2xl font-bold text-gradient mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl border border-[#D4A853]/10 bg-[#0a0a1a]/60"
              >
                <summary className="cursor-pointer p-4 sm:p-5 flex items-center justify-between text-white font-semibold text-sm hover:text-[#D4A853] transition-colors list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-[#55556a] group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-[#9999aa] leading-relaxed border-t border-white/5 pt-3">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </section>

        {/* ──────── CROSS-LINK ──────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-2xl border border-[#D4A853]/10 bg-[#0a0a1a]/60 p-6 text-center">
            <p className="text-sm text-[#9999aa] mb-3">Looking for cookie build guides?</p>
            <Link href="/gear-guide" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] font-semibold text-sm hover:bg-[#D4A853]/20 transition-colors">
              🍪 Gear Guide Loadouts — Toppings, Beascuits & Tarts
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
