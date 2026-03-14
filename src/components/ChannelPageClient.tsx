'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { channels, mockVideos } from '@/data/mockData';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'video', label: 'Videos' },
  { id: 'stream', label: 'Streams' },
  { id: 'short', label: 'Shorts' },
];

export default function ChannelPageClient({ slug }: { slug: string }) {
  const channel = channels.find(c => c.slug === slug);
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const videos = useMemo(() => {
    let vids = mockVideos.filter(v => v.channelSlug === slug);
    if (activeTab !== 'all') vids = vids.filter(v => v.type === activeTab);
    if (search) {
      const q = search.toLowerCase();
      vids = vids.filter(v => v.title.toLowerCase().includes(q));
    }
    return vids;
  }, [slug, activeTab, search]);

  if (!channel) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Channel Not Found
            </h1>
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Channel Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#111118] to-[#0a0a0f]" />
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: `radial-gradient(ellipse at 50% 30%, ${channel.color}20 0%, transparent 60%)` }}
            />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-xs text-[#55556a] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span>Channels</span>
              <span>/</span>
              <span style={{ color: channel.color }}>{channel.name}</span>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-4xl md:text-5xl"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  {channel.icon}
                </div>
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-30" style={{ backgroundColor: channel.color }} />
              </motion.div>

              <div className="flex-1">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border"
                    style={{ backgroundColor: `${channel.color}10`, color: channel.color, borderColor: `${channel.color}30` }}
                  >
                    {channel.game}
                  </span>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {channel.name.toUpperCase()}
                  </h1>

                  <p className="text-[#888898] text-base md:text-lg max-w-2xl leading-relaxed mb-6">{channel.description}</p>

                  <div className="flex flex-wrap gap-6">
                    <Stat label="Subscribers" value={channel.stats.subscribers} color={channel.color} />
                    <Stat label="Videos" value={channel.stats.videos} color={channel.color} />
                    <Stat label="Total Views" value={channel.stats.views} color={channel.color} />
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
              label={channel.game}
              title={`${channel.name.toUpperCase()} VIDEOS`}
              subtitle={`All content from ${channel.name}. Browse, search, and watch.`}
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="flex gap-1.5 p-1 rounded-xl bg-[#111118] border border-white/5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeTab === tab.id ? 'text-white shadow-lg' : 'text-[#888898] hover:text-white hover:bg-white/5'
                    }`}
                    style={activeTab === tab.id ? { backgroundColor: channel.color } : undefined}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex-1" />
              <div className="relative w-full sm:w-64">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search this channel..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111118] border border-white/5 text-sm text-white placeholder-[#55556a] focus:outline-none transition-colors"
                  style={{ borderColor: search ? `${channel.color}30` : undefined }}
                />
              </div>
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {videos.map((video, i) => (
                  <motion.div
                    key={video.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="group cursor-pointer"
                  >
                    <div className="rounded-xl glass-panel overflow-hidden hover:border-white/10 transition-all duration-300">
                      <div className="relative aspect-video bg-[#111118] overflow-hidden">
                        <Image src={video.thumbnail} alt={video.title} fill className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${channel.color}CC` }}>
                            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white">{video.duration}</div>
                        {video.type === 'stream' && <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-500/90 text-[10px] font-bold text-white">STREAM</div>}
                        {video.type === 'short' && <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: `${channel.color}E0` }}>SHORT</div>}
                        {video.isNew && <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: channel.color }}>NEW</div>}
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-white transition-colors">{video.title}</h4>
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

            {videos.length === 0 && (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <p className="text-[#55556a] text-lg mb-2">No videos found</p>
                <p className="text-[#55556a] text-sm">Try adjusting your filters or search.</p>
              </div>
            )}

            <div className="text-center mt-12">
              <p className="text-xs text-[#55556a]">Showing sample content — connect YouTube API for live data</p>
            </div>
          </div>
        </section>
      </main>
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
