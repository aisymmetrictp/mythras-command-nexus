'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { YouTubeVideo, YouTubeChannel, parseDuration, formatCount, formatRelativeDate, getSlugFromChannelId, CHANNEL_IDS, ChannelSlug } from '@/lib/youtube';
import { channels as channelMeta } from '@/data/mockData';
import SectionHeader from './SectionHeader';

const channelTabs = [
  { id: 'all', label: 'All Channels' },
  { id: 'cookierun', label: '🍪 CookieRun' },
  { id: 'gamertag', label: '⚔️ MTG' },
  { id: 'mythras-gaming', label: '🎮 Gaming' },
  { id: 'pokemon', label: '⚡ Pokemon' },
  { id: 'lorcana', label: '✨ Lorcana' },
];

const sortOptions = [
  { id: 'date', label: 'Newest' },
  { id: 'views', label: 'Most Viewed' },
  { id: 'alpha', label: 'A-Z' },
];

interface ContentHubProps {
  allVideos: YouTubeVideo[];
  channelVideos: Map<string, YouTubeVideo[]>;
  loading: boolean;
  channels: Map<string, YouTubeChannel>;
}

export default function ContentHub({ allVideos, channelVideos, loading, channels }: ContentHubProps) {
  const [activeChannel, setActiveChannel] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date');
  const [modalVideo, setModalVideo] = useState<YouTubeVideo | null>(null);

  const { fullVideos, shorts } = useMemo(() => {
    let vids = activeChannel === 'all' ? [...allVideos] : [...(channelVideos.get(activeChannel) || [])];
    if (search) {
      const q = search.toLowerCase();
      vids = vids.filter(v => v.title.toLowerCase().includes(q) || v.channelTitle.toLowerCase().includes(q));
    }
    const sortFn = (a: YouTubeVideo, b: YouTubeVideo) => {
      if (sort === 'views') return parseInt(b.viewCount) - parseInt(a.viewCount);
      if (sort === 'alpha') return a.title.localeCompare(b.title);
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    };

    const full = vids.filter(v => !v.isShort).sort(sortFn).slice(0, 20);
    const short = vids.filter(v => v.isShort).sort(sortFn).slice(0, 20);
    return { fullVideos: full, shorts: short };
  }, [activeChannel, allVideos, channelVideos, search, sort]);

  const getChannelColor = (video: YouTubeVideo) => {
    const slug = getSlugFromChannelId(video.channelId);
    return channelMeta.find(c => c.slug === slug)?.color || '#D4A853';
  };

  const getChannelName = (video: YouTubeVideo) => {
    const slug = getSlugFromChannelId(video.channelId);
    return channelMeta.find(c => c.slug === slug)?.name || video.channelTitle;
  };

  return (
    <section id="content-hub" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Content Hub"
          title="VIDEO VAULT"
          subtitle="Browse and watch across all Mythras channels. Top 20 full videos featured first, shorts below."
        />

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
          <div className="flex gap-1.5 p-1 rounded-xl bg-[#0c0c18] border border-[#D4A853]/10 overflow-x-auto max-w-full">
            {channelTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveChannel(tab.id)}
                className={`px-3 md:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeChannel === tab.id
                    ? 'bg-[#D4A853] text-[#060610] shadow-lg shadow-[#D4A853]/20'
                    : 'text-[#9999aa] hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex-1" />
          <div className="relative w-full md:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search videos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0c0c18] border border-[#D4A853]/10 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#D4A853]/30 transition-colors"
            />
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-[#0c0c18] border border-[#D4A853]/10 text-sm text-[#9999aa] focus:outline-none focus:border-[#D4A853]/30 cursor-pointer"
          >
            {sortOptions.map(opt => (
              <option key={opt.id} value={opt.id}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl glass-panel overflow-hidden animate-pulse">
                <div className="aspect-video bg-[#151522]" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-[#151522] rounded w-1/3" />
                  <div className="h-4 bg-[#151522] rounded w-full" />
                  <div className="h-3 bg-[#151522] rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FULL VIDEOS */}
        {!loading && fullVideos.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 rounded-full bg-[#D4A853]" />
              <h3 className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                FULL VIDEOS
              </h3>
              <span className="text-xs text-[#55556a] ml-2">({fullVideos.length})</span>
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {fullVideos.map((video, i) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    index={i}
                    getChannelColor={getChannelColor}
                    getChannelName={getChannelName}
                    onClick={() => setModalVideo(video)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* SHORTS */}
        {!loading && shorts.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 rounded-full bg-white/40" />
              <h3 className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                SHORTS &amp; CLIPS
              </h3>
              <span className="text-xs text-[#55556a] ml-2">({shorts.length})</span>
            </div>

            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              <AnimatePresence mode="popLayout">
                {shorts.map((video, i) => (
                  <ShortCard
                    key={video.id}
                    video={video}
                    index={i}
                    getChannelColor={getChannelColor}
                    getChannelName={getChannelName}
                    onClick={() => setModalVideo(video)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {!loading && fullVideos.length === 0 && shorts.length === 0 && (
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
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1&rel=0`}
                  title={modalVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setModalVideo(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold" style={{ color: getChannelColor(modalVideo) }}>{getChannelName(modalVideo)}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#9999aa]">{formatRelativeDate(modalVideo.publishedAt)}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#9999aa]">{formatCount(modalVideo.viewCount)} views</span>
                </div>
                <h3 className="text-xl font-bold">{modalVideo.title}</h3>
                <p className="text-sm text-[#9999aa] mt-3 line-clamp-3">{modalVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function VideoCard({
  video, index, getChannelColor, getChannelName, onClick,
}: {
  video: YouTubeVideo; index: number;
  getChannelColor: (v: YouTubeVideo) => string;
  getChannelName: (v: YouTubeVideo) => string;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="rounded-xl glass-panel overflow-hidden hover:border-[#D4A853]/20 transition-all duration-300">
        <div className="relative aspect-video bg-[#0c0c18] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-[#D4A853]/80 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-5 h-5 text-[#060610] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-white">
            {parseDuration(video.duration)}
          </div>
          {video.isLive && (
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-500/90 text-[10px] font-bold text-white animate-pulse-glow">LIVE</div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: getChannelColor(video) }} />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: getChannelColor(video) }} />
            <span className="text-[10px] font-semibold" style={{ color: getChannelColor(video) }}>
              {getChannelName(video)}
            </span>
          </div>
          <h4 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-white transition-colors">
            {video.title}
          </h4>
          <div className="flex items-center gap-2 mt-2.5 text-[10px] text-[#55556a]">
            <span>{formatCount(video.viewCount)} views</span>
            <span>•</span>
            <span>{formatRelativeDate(video.publishedAt)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ShortCard({
  video, index, getChannelColor, getChannelName, onClick,
}: {
  video: YouTubeVideo; index: number;
  getChannelColor: (v: YouTubeVideo) => string;
  getChannelName: (v: YouTubeVideo) => string;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.2) }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="rounded-xl glass-panel overflow-hidden hover:border-white/10 transition-all duration-300">
        <div className="relative aspect-[9/16] bg-[#0c0c18] overflow-hidden max-h-[200px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-[#D4A853]/90 text-[8px] font-bold text-[#060610] tracking-wider">
            SHORT
          </div>
          <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-mono text-white">
            {parseDuration(video.duration)}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-[#D4A853]/80 flex items-center justify-center">
              <svg className="w-3 h-3 text-[#060610] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-2.5">
          <h4 className="text-[11px] font-semibold leading-snug line-clamp-2 group-hover:text-[#D4A853] transition-colors">
            {video.title}
          </h4>
          <div className="flex items-center gap-1 mt-1.5 text-[9px] text-[#55556a]">
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: getChannelColor(video) }} />
            <span>{getChannelName(video)}</span>
            <span>•</span>
            <span>{formatCount(video.viewCount)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
