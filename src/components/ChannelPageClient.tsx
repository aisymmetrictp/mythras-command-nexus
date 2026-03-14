'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { channels } from '@/data/mockData';
import { useChannelData } from '@/lib/useYouTubeData';
import { parseDuration, formatCount, formatRelativeDate, YouTubeVideo } from '@/lib/youtube';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'videos', label: 'Videos' },
  { id: 'shorts', label: 'Shorts' },
];

export default function ChannelPageClient({ slug }: { slug: string }) {
  const channelMeta = channels.find(c => c.slug === slug);
  const { channel: ytChannel, videos: ytVideos, loading, loadMore, hasMore } = useChannelData(slug);
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [modalVideo, setModalVideo] = useState<YouTubeVideo | null>(null);

  const filtered = useMemo(() => {
    let vids = [...ytVideos];
    if (activeTab === 'videos') vids = vids.filter(v => !v.isShort);
    if (activeTab === 'shorts') vids = vids.filter(v => v.isShort);
    if (search) {
      const q = search.toLowerCase();
      vids = vids.filter(v => v.title.toLowerCase().includes(q));
    }
    return vids;
  }, [ytVideos, activeTab, search]);

  if (!channelMeta) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Channel Not Found</h1>
            <p className="text-[#888898] mb-6">This channel doesn&apos;t exist in the Mythras ecosystem.</p>
            <Link href="/" className="px-6 py-3 rounded-xl bg-[#8b5cf6] text-white font-semibold hover:bg-[#7c3aed] transition-colors">
              Back to Command Nexus
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const color = channelMeta.color;
  const subs = ytChannel ? formatCount(ytChannel.subscriberCount) : channelMeta.stats.subscribers;
  const vidCount = ytChannel ? formatCount(ytChannel.videoCount) : channelMeta.stats.videos;
  const views = ytChannel ? formatCount(ytChannel.viewCount) : channelMeta.stats.views;
  const channelThumb = ytChannel?.thumbnail;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Channel Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#111118] to-[#0a0a0f]" />
            <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at 50% 30%, ${color}20 0%, transparent 60%)` }} />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-xs text-[#55556a] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span>Channels</span>
              <span>/</span>
              <span style={{ color }}>{channelMeta.name}</span>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                {channelThumb ? (
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={channelThumb} alt={channelMeta.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-4xl md:text-5xl" style={{ backgroundColor: `${color}15` }}>
                    {channelMeta.icon}
                  </div>
                )}
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-30" style={{ backgroundColor: color }} />
              </motion.div>

              <div className="flex-1">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border"
                    style={{ backgroundColor: `${color}10`, color, borderColor: `${color}30` }}>
                    {channelMeta.game}
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {channelMeta.name.toUpperCase()}
                  </h1>
                  <p className="text-[#888898] text-base md:text-lg max-w-2xl leading-relaxed mb-6">{channelMeta.description}</p>
                  <div className="flex flex-wrap gap-6">
                    <Stat label="Subscribers" value={subs} color={color} />
                    <Stat label="Videos" value={vidCount} color={color} />
                    <Stat label="Total Views" value={views} color={color} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label={channelMeta.game}
              title={`${channelMeta.name.toUpperCase()} VIDEOS`}
              subtitle={`All content from ${channelMeta.name}. Browse, search, and watch.`}
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="flex gap-1.5 p-1 rounded-xl bg-[#111118] border border-white/5">
                {tabs.map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeTab === tab.id ? 'text-white shadow-lg' : 'text-[#888898] hover:text-white hover:bg-white/5'
                    }`}
                    style={activeTab === tab.id ? { backgroundColor: color } : undefined}>
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex-1" />
              <div className="relative w-full sm:w-64">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Search this channel..." value={search} onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111118] border border-white/5 text-sm text-white placeholder-[#55556a] focus:outline-none transition-colors"
                  style={{ borderColor: search ? `${color}30` : undefined }} />
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="rounded-xl glass-panel overflow-hidden animate-pulse">
                    <div className="aspect-video bg-[#1c1c24]" />
                    <div className="p-4 space-y-2">
                      <div className="h-4 bg-[#1c1c24] rounded w-full" />
                      <div className="h-3 bg-[#1c1c24] rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Grid */}
            {!loading && (
              <>
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((video, i) => (
                      <motion.div key={video.id} layout
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                        onClick={() => setModalVideo(video)} className="group cursor-pointer">
                        <div className="rounded-xl glass-panel overflow-hidden hover:border-white/10 transition-all duration-300">
                          <div className="relative aspect-video bg-[#111118] overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={video.thumbnail} alt={video.title}
                              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" loading="lazy" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}CC` }}>
                                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white">{parseDuration(video.duration)}</div>
                            {video.isShort && <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: `${color}E0` }}>SHORT</div>}
                            {video.isLive && <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-500/90 text-[10px] font-bold text-white animate-pulse-glow">LIVE</div>}
                          </div>
                          <div className="p-4">
                            <h4 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-white transition-colors">{video.title}</h4>
                            <div className="flex items-center gap-2 mt-2.5 text-[10px] text-[#55556a]">
                              <span>{formatCount(video.viewCount)} views</span>
                              <span>•</span>
                              <span>{formatRelativeDate(video.publishedAt)}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Load More */}
                {hasMore && (
                  <div className="text-center mt-10">
                    <motion.button
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                      onClick={loadMore}
                      className="px-8 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg"
                      style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}30` }}>
                      Load More Videos
                    </motion.button>
                  </div>
                )}
              </>
            )}

            {!loading && filtered.length === 0 && (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">{channelMeta.icon}</div>
                <p className="text-[#55556a] text-lg mb-2">No videos found</p>
                <p className="text-[#55556a] text-sm">Try adjusting your filters or search.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalVideo(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()} className="w-full max-w-4xl rounded-2xl glass-panel overflow-hidden">
              <div className="relative aspect-video bg-black">
                <iframe src={`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1&rel=0`} title={modalVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <button onClick={() => setModalVideo(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors z-10">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold" style={{ color }}>{channelMeta.name}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#888898]">{formatRelativeDate(modalVideo.publishedAt)}</span>
                  <span className="text-[#55556a]">•</span>
                  <span className="text-xs text-[#888898]">{formatCount(modalVideo.viewCount)} views</span>
                </div>
                <h3 className="text-xl font-bold">{modalVideo.title}</h3>
                <p className="text-sm text-[#888898] mt-3 line-clamp-3">{modalVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <div className="text-xl md:text-2xl font-bold" style={{ color }}>{value}</div>
      <div className="text-xs text-[#55556a] mt-0.5">{label}</div>
    </div>
  );
}
