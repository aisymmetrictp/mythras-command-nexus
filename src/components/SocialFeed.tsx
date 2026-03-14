'use client';

import { motion } from 'framer-motion';
import { mockSocialFeed, SocialPost } from '@/data/mockData';
import { YouTubeVideo, formatRelativeDate, getSlugFromChannelId } from '@/lib/youtube';
import { channels as channelMeta } from '@/data/mockData';
import SectionHeader from './SectionHeader';

const platformConfig: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  twitter: {
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: '#ffffff',
    label: 'X / Twitter',
  },
  youtube: {
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: '#ef4444',
    label: 'YouTube',
  },
  twitch: {
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
      </svg>
    ),
    color: '#9146ff',
    label: 'Twitch',
  },
  discord: {
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
    color: '#5865F2',
    label: 'Discord',
  },
};

const typeIcons: Record<string, string> = {
  post: '💬',
  upload: '📹',
  live: '🔴',
  event: '🎯',
};

interface SocialFeedProps {
  allVideos?: YouTubeVideo[];
}

export default function SocialFeed({ allVideos }: SocialFeedProps) {
  // Generate real YouTube upload entries from actual video data
  const ytPosts: SocialPost[] = (allVideos || []).slice(0, 5).map((video, i) => {
    const slug = getSlugFromChannelId(video.channelId);
    const meta = channelMeta.find(c => c.slug === slug);
    return {
      id: `yt-${video.id}`,
      platform: 'youtube' as const,
      content: `NEW VIDEO: ${video.title} — now live on ${meta?.name || video.channelTitle}!`,
      date: formatRelativeDate(video.publishedAt),
      type: 'upload' as const,
      link: `https://www.youtube.com/watch?v=${video.id}`,
    };
  });

  // Merge real YouTube posts with mock social posts (Twitter, Discord, Twitch)
  const nonYtMock = mockSocialFeed.filter(p => p.platform !== 'youtube');
  const feed = [...ytPosts.slice(0, 3), ...nonYtMock].slice(0, 8);
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Live Feed"
          title="SOCIAL PULSE"
          subtitle="Real-time updates from across the Mythras ecosystem. Posts, uploads, streams, and community events."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {feed.map((post, i) => {
            const config = platformConfig[post.platform];
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-4 rounded-xl glass-panel hover:border-white/10 transition-all duration-300">
                  {/* Platform icon */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${config.color}15`, color: config.color }}
                  >
                    {config.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-semibold" style={{ color: config.color }}>
                        {config.label}
                      </span>
                      <span className="text-[10px] text-[#55556a]">{typeIcons[post.type]} {post.type}</span>
                      <span className="text-[#55556a]">•</span>
                      <span className="text-[10px] text-[#55556a]">{post.date}</span>
                    </div>
                    <p className="text-sm text-[#888898] leading-relaxed group-hover:text-white/80 transition-colors">
                      {post.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration note */}
        <p className="text-center text-[10px] text-[#55556a] mt-6">
          {/* API Integration: Connect Twitter API, YouTube RSS, Twitch webhooks, and Discord bot for live data */}
          Social feed updates automatically from all connected platforms
        </p>
      </div>
    </section>
  );
}
