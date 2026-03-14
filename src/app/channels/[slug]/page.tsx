import ChannelPageClient from '@/components/ChannelPageClient';
import { channels } from '@/data/mockData';

export function generateStaticParams() {
  return channels.map((channel) => ({
    slug: channel.slug,
  }));
}

export default async function ChannelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ChannelPageClient slug={slug} />;
}
