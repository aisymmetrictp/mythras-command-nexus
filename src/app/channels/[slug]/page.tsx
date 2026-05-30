import type { Metadata } from 'next';
import ChannelPageClient from '@/components/ChannelPageClient';
import { channels } from '@/data/mockData';
import { CHANNEL_IDS, ChannelSlug, fetchPlaylistVideos } from '@/lib/youtube';

export function generateStaticParams() {
  return channels.map((channel) => ({
    slug: channel.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const channel = channels.find(c => c.slug === slug);
  if (!channel) return { title: 'Channel Not Found' };

  const title = `${channel.name} — ${channel.tagline}`;
  const description = channel.description;

  return {
    title,
    description,
    keywords: [channel.name, channel.game, 'Mythras', 'YouTube', 'gaming', `${channel.game} content`, `${channel.game} guides`],
    openGraph: {
      title,
      description,
      url: `https://gamertagmythras.com/channels/${slug}`,
    },
    alternates: { canonical: `https://gamertagmythras.com/channels/${slug}` },
  };
}

export default async function ChannelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const channel = channels.find(c => c.slug === slug);

  // Build-time snapshot of the channel's latest uploads, baked into the static
  // HTML as VideoObject JSON-LD so search/AI engines can read each video's
  // title + description without executing the client-side fetch. The interactive
  // grid below still refreshes to the latest uploads on the client.
  // fetchPlaylistVideos swallows errors and returns [] so a flaky API never
  // breaks the static export.
  const config = CHANNEL_IDS[slug as ChannelSlug];
  const { videos } = config
    ? await fetchPlaylistVideos(config.uploadsPlaylist, 12)
    : { videos: [] };

  const channelUrl = `https://gamertagmythras.com/channels/${slug}`;
  const channelName = channel?.name ?? slug;

  const videosJsonLd =
    videos.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: `${channelName} — Latest Videos`,
          url: channelUrl,
          numberOfItems: videos.length,
          itemListElement: videos.map((v, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'VideoObject',
              name: v.title,
              description: (v.description?.trim() || v.title).slice(0, 5000),
              thumbnailUrl: [v.thumbnailHigh || v.thumbnail].filter(Boolean),
              uploadDate: v.publishedAt,
              ...(v.duration ? { duration: v.duration } : {}),
              contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
              embedUrl: `https://www.youtube.com/embed/${v.id}`,
              ...(Number(v.viewCount) > 0
                ? {
                    interactionStatistic: {
                      '@type': 'InteractionCounter',
                      interactionType: { '@type': 'WatchAction' },
                      userInteractionCount: Number(v.viewCount),
                    },
                  }
                : {}),
              publisher: {
                '@type': 'Organization',
                name: 'Mythras // The Multiverse',
                url: 'https://gamertagmythras.com',
              },
            },
          })),
        }
      : null;

  return (
    <>
      {videosJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videosJsonLd) }}
        />
      )}
      <ChannelPageClient slug={slug} />
    </>
  );
}
