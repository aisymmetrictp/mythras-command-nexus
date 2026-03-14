'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { mockVideos } from '@/data/mockData';
import SectionHeader from './SectionHeader';

export default function FeaturedContent() {
  const featured = mockVideos[0];
  const secondary = mockVideos.slice(1, 4);

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Featured"
          title="LATEST DROP"
          subtitle="Fresh content hot off the press. Don't miss the newest uploads and stream highlights."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="group relative rounded-2xl overflow-hidden glass-panel hover:border-[#8b5cf6]/30 transition-all duration-500 cursor-pointer">
              {/* Thumbnail area */}
              <div className="relative aspect-video bg-[#111118] overflow-hidden">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8b5cf6]/90 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#8b5cf6] transition-all shadow-lg shadow-[#8b5cf6]/25"
                  >
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#8b5cf6] text-white text-xs font-bold">
                    LATEST DROP
                  </span>
                  {featured.isNew && (
                    <span className="px-2.5 py-1 rounded-lg bg-red-500 text-white text-xs font-bold animate-pulse-glow">
                      NEW
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs font-mono">
                  {featured.duration}
                </div>
              </div>
              {/* Meta */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#f97316]">{featured.channel}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#888898]">{featured.date}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 group-hover:text-[#8b5cf6] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm text-[#888898] line-clamp-2">{featured.description}</p>
                <div className="flex items-center gap-3 mt-4 text-xs text-[#55556a]">
                  <span>{featured.views} views</span>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 40px rgba(139, 92, 246, 0.1), inset 0 0 40px rgba(139, 92, 246, 0.03)' }} />
            </div>
          </motion.div>

          {/* Secondary cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {secondary.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="group flex gap-4 p-3 rounded-xl glass-panel hover:border-[#8b5cf6]/20 transition-all duration-300 cursor-pointer">
                  <div className="relative w-36 md:w-40 aspect-video rounded-lg overflow-hidden shrink-0 bg-[#111118]">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    />
                    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white">
                      {video.duration}
                    </div>
                    {video.type === 'stream' && (
                      <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-red-500/90 text-[10px] font-bold text-white">
                        STREAM
                      </div>
                    )}
                    {video.type === 'short' && (
                      <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-[#06b6d4]/90 text-[10px] font-bold text-white">
                        SHORT
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[10px] font-semibold text-[#8b5cf6] mb-1">{video.channel}</span>
                    <h4 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#8b5cf6] transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-[#55556a]">
                      <span>{video.views} views</span>
                      <span>•</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
