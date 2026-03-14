'use client';

import { useYouTubeData } from '@/lib/useYouTubeData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedContent from '@/components/FeaturedContent';
import ChannelDeck from '@/components/ChannelDeck';
import ContentHub from '@/components/ContentHub';
import TwitchSection from '@/components/TwitchSection';
import SocialFeed from '@/components/SocialFeed';
import DiscordCTA from '@/components/DiscordCTA';
import Schedule from '@/components/Schedule';
import Footer from '@/components/Footer';

export default function Home() {
  const ytData = useYouTubeData();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedContent allVideos={ytData.allVideos} loading={ytData.loading} channels={ytData.channels} />
        <ChannelDeck ytChannels={ytData.channels} />
        <ContentHub
          allVideos={ytData.allVideos}
          channelVideos={ytData.channelVideos}
          loading={ytData.loading}
          channels={ytData.channels}
        />
        <TwitchSection />
        <Schedule />
        <SocialFeed allVideos={ytData.allVideos} />
        <DiscordCTA />
      </main>
      <Footer />
    </>
  );
}
