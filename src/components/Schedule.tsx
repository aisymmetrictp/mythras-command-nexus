'use client';

import { motion } from 'framer-motion';
import { mockSchedule } from '@/data/mockData';
import SectionHeader from './SectionHeader';

const platformColors: Record<string, string> = {
  Twitch: '#9146ff',
  YouTube: '#ef4444',
};

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06b6d4]/[0.015] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Schedule"
          title="STREAM PULSE"
          subtitle="Upcoming streams and content drops across all channels. Never miss a session."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#8b5cf6]/20 via-[#8b5cf6]/10 to-transparent" />

            {mockSchedule.map((item, i) => {
              const isLeft = i % 2 === 0;
              const platformColor = platformColors[item.platform] || '#8b5cf6';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`relative flex items-center gap-4 mb-6 md:mb-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10 border-2 border-[#0a0a0f]" style={{ backgroundColor: platformColor }} />

                  {/* Spacer for mobile */}
                  <div className="w-8 md:hidden shrink-0" />

                  {/* Card */}
                  <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="group p-4 md:p-5 rounded-xl glass-panel hover:border-white/10 transition-all duration-300"
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-bold text-white"
                          style={{ backgroundColor: platformColor }}
                        >
                          {item.platform}
                        </span>
                        <span className="text-[10px] text-[#55556a]">{item.channel}</span>
                      </div>
                      <h4 className="font-bold text-sm mb-1 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <div className={`flex items-center gap-2 text-xs text-[#888898] ${isLeft ? 'md:justify-end' : ''}`}>
                        <span>{item.date}</span>
                        <span className="text-[#55556a]">•</span>
                        <span>{item.time}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop spacer */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-[#55556a]">All times in CST • Schedule subject to change</p>
          </div>
        </div>
      </div>
    </section>
  );
}
