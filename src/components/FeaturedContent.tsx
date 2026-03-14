'use client';

import { motion } from 'framer-motion';
import { YouTubeVideo, YouTubeChannel, parseDuration, formatCount, formatRelativeDate, getSlugFromChannelId } from '@/lib/youtube';
import { channels as channelMeta } from '@/data/mockData';
import SectionHeader from './SectionHeader';

interface FeaturedContentProps {
  allVideos: YouTubeVideo[];
  loading: boolean;
  channels: Map<string, YouTubeChannel>;
}

export default function FeaturedContent({ allVideos, loading }: FeaturedContentProps) {
  // Exclude shorts from Latest Drops
  const fullVideos = allVideos.filter(v => !v.isShort);
  const videos = fullVideos.slice(0, 4);
  const featured = videos[0];
  const secondary = videos.slice(1, 4);

  if (loading) {
    return (
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Featured" title="LATEST DROPS" subtitle="Fresh full-length content hot off the press." />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <div className="rounded-2xl glass-panel overflow-hidden animate-pulse">
                <div className="aspect-video bg-[#151522]" />
                <div className="p-6 space-y-3">
                  <div className="h-3 bg-[#151522] rounded w-1/3" />
                  <div className="h-5 bg-[#151522] rounded w-3/4" />
                  <div className="h-3 bg-[#151522] rounded w-full" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 p-3 rounded-xl glass-panel animate-pulse">
                  <div className="w-36 aspect-video rounded-lg bg-[#151522] shrink-0" />
                  <div className="flex-1 space-y-2 py-2">
                    <div className="h-3 bg-[#151522] rounded w-1/2" />
                    <div className="h-4 bg-[#151522] rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!featured) return null;

  const getChannelName = (video: YouTubeVideo) => {
    const slug = getSlugFromChannelId(video.channelId);
    return channelMeta.find(c => c.slug === slug)?.name || video.channelTitle;
  };

  const getChannelColor = (video: YouTubeVideo) => {
    const slug = getSlugFromChannelId(video.channelId);
    return channelMeta.find(c => c.slug === slug)?.color || '#D4A853';
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Featured"
          title="LATEST DROPS"
          subtitle="Fresh full-length content hot off the press. No shorts — just the main event."
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
            <a
              href={`https://www.youtube.com/watch?v=${featured.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden glass-panel hover:border-[#D4A853]/20 transition-all duration-500"
            >
              <div className="relative aspect-video bg-[#0c0c18] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.thumbnailHigh || featured.thumbnail}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D4A853]/90 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#D4A853] transition-all shadow-lg shadow-[#D4A853]/25"
                  >
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#060610] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-[#D4A853] text-[#060610] text-xs font-bold">LATEST DROP</span>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs font-mono">
                  {parseDuration(featured.duration)}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold" style={{ color: getChannelColor(featured) }}>{getChannelName(featured)}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#9999aa]">{formatRelativeDate(featured.publishedAt)}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 group-hover:text-[#D4A853] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm text-[#9999aa] line-clamp-2">{featured.description}</p>
                <div className="flex items-center gap-3 mt-4 text-xs text-[#55556a]">
                  <span>{formatCount(featured.viewCount)} views</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 40px rgba(212, 168, 83, 0.08), inset 0 0 40px rgba(212, 168, 83, 0.02)' }} />
            </a>
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
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 p-3 rounded-xl glass-panel hover:border-[#D4A853]/15 transition-all duration-300"
                >
                  <div className="relative w-36 md:w-40 aspect-video rounded-lg overflow-hidden shrink-0 bg-[#0c0c18]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white">
                      {parseDuration(video.duration)}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[10px] font-semibold mb-1" style={{ color: getChannelColor(video) }}>{getChannelName(video)}</span>
                    <h4 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#D4A853] transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-[#55556a]">
                      <span>{formatCount(video.viewCount)} views</span>
                      <span>•</span>
                      <span>{formatRelativeDate(video.publishedAt)}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
