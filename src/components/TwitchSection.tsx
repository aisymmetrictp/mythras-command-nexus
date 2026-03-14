'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function TwitchSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9146ff]/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Live Stream"
          title="TWITCH HQ"
          subtitle="Watch live, catch replays, and never miss a stream. The Mythras broadcast center."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main stream embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl glass-panel overflow-hidden">
              {/* Stream embed placeholder */}
              <div className="relative aspect-video bg-[#111118] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#9146ff]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#9146ff]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#888898]" />
                    </span>
                    <span className="text-sm font-semibold text-[#888898]">CURRENTLY OFFLINE</span>
                  </div>
                  <p className="text-xs text-[#55556a] mb-4">Twitch embed activates when live</p>
                  {/* Integration point: Replace with Twitch embed iframe */}
                  {/* <iframe src="https://player.twitch.tv/?channel=3mythras3&parent=gamertagmythras.com" ... /> */}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base">3mythras3</h3>
                    <p className="text-xs text-[#888898] mt-0.5">Variety gaming, TCG, and strategy content</p>
                  </div>
                  <motion.a
                    href="https://www.twitch.tv/3mythras3"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 rounded-xl bg-[#9146ff] text-white text-sm font-semibold hover:bg-[#7c2ff0] transition-colors"
                  >
                    Watch on Twitch
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Recent VODs / Schedule teaser */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-2xl glass-panel p-5">
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9146ff]" />
                Recent Streams
              </h3>
              {[
                { title: 'CookieRun Arena Grind — Diamond Push', time: '2h 45m', date: '3 days ago' },
                { title: 'MTG Arena Duskmourn Draft Marathon', time: '3h 12m', date: '5 days ago' },
                { title: 'Elden Ring DLC Blind Run Pt. 1', time: '1h 12m', date: '1 week ago' },
                { title: 'Pokemon VGC Ladder Session', time: '1h 55m', date: '1 week ago' },
              ].map((vod, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 py-3 border-b border-white/5 last:border-0 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#9146ff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#9146ff]/20 transition-colors">
                    <svg className="w-3 h-3 text-[#9146ff]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-[#9146ff] transition-colors">
                      {vod.title}
                    </p>
                    <div className="flex gap-2 mt-1 text-[10px] text-[#55556a]">
                      <span>{vod.time}</span>
                      <span>•</span>
                      <span>{vod.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl glass-panel p-5 text-center">
              <p className="text-xs text-[#888898] mb-3">Follow on Twitch to get notified when Mythras goes live</p>
              <a
                href="https://www.twitch.tv/3mythras3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9146ff]/10 text-[#9146ff] text-xs font-semibold hover:bg-[#9146ff]/20 transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                </svg>
                Follow 3mythras3
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
