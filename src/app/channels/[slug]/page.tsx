import type { Metadata } from 'next';
import ChannelPageClient from '@/components/ChannelPageClient';
import { channels } from '@/data/mockData';

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
  return <ChannelPageClient slug={slug} />;
}
