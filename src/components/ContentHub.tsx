'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { mockVideos } from '@/data/mockData';
import SectionHeader from './SectionHeader';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'video', label: 'Latest' },
  { id: 'stream', label: 'Streams' },
  { id: 'short', label: 'Shorts' },
  { id: 'clip', label: 'Clips' },
];

const sortOptions = [
  { id: 'date', label: 'Newest' },
  { id: 'views', label: 'Most Viewed' },
  { id: 'alpha', label: 'A-Z' },
];

export default function ContentHub() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date');
  const [modalVideo, setModalVideo] = useState<typeof mockVideos[0] | null>(null);

  const filtered = useMemo(() => {
    let vids = [...mockVideos];
    if (activeTab !== 'all') vids = vids.filter(v => v.type === activeTab);
    if (search) {
      const q = search.toLowerCase();
      vids = vids.filter(v => v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q));
    }
    if (sort === 'views') vids.sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
    if (sort === 'alpha') vids.sort((a, b) => a.title.localeCompare(b.title));
    return vids;
  }, [activeTab, search, sort]);

  return (
    <section id="content-hub" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Content Hub"
          title="VIDEO VAULT"
          subtitle="Browse, search, and watch across all Mythras channels. Every video, stream, short, and clip in one place."
        />

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          {/* Tabs */}
          <div className="flex gap-1.5 p-1 rounded-xl bg-[#111118] border border-white/5 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/20'
                    : 'text-[#888898] hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1" />

          {/* Search */}
          <div className="relative w-full md:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search videos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111118] border border-white/5 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#8b5cf6]/30 transition-colors"
            />
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-[#111118] border border-white/5 text-sm text-[#888898] focus:outline-none focus:border-[#8b5cf6]/30 cursor-pointer"
          >
            {sortOptions.map(opt => (
              <option key={opt.id} value={opt.id}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((video, i) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => setModalVideo(video)}
                className="group cursor-pointer"
              >
                <div className="rounded-xl glass-panel overflow-hidden hover:border-[#8b5cf6]/20 transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#111118] overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Play icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/80 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white">
                      {video.duration}
                    </div>
                    {/* Type badge */}
                    {video.type === 'stream' && (
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-500/90 text-[10px] font-bold text-white">STREAM</div>
                    )}
                    {video.type === 'short' && (
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#06b6d4]/90 text-[10px] font-bold text-white">SHORT</div>
                    )}
                    {video.isNew && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#8b5cf6]/90 text-[10px] font-bold text-white">NEW</div>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <span className="text-[10px] font-semibold" style={{ color: '#8b5cf6' }}>
                      {video.channel}
                    </span>
                    <h4 className="text-sm font-semibold leading-snug mt-1 line-clamp-2 group-hover:text-[#8b5cf6] transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2.5 text-[10px] text-[#55556a]">
                      <span>{video.views} views</span>
                      <span>•</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#55556a] text-lg">No videos found matching your search.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-4xl rounded-2xl glass-panel overflow-hidden"
            >
              {/* Player area */}
              <div className="relative aspect-video bg-[#111118]">
                <Image
                  src={modalVideo.thumbnail}
                  alt={modalVideo.title}
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#8b5cf6]/90 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#888898]">YouTube embed will load here</p>
                    <p className="text-xs text-[#55556a] mt-1">Connect YouTube API to enable playback</p>
                  </div>
                </div>
                <button
                  onClick={() => setModalVideo(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#8b5cf6]">{modalVideo.channel}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#888898]">{modalVideo.date}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#888898]">{modalVideo.views} views</span>
                </div>
                <h3 className="text-xl font-bold">{modalVideo.title}</h3>
                {modalVideo.description && (
                  <p className="text-sm text-[#888898] mt-3">{modalVideo.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
