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
import ParticleField from '@/components/ParticleField';

export default function Home() {
  const ytData = useYouTubeData();

  return (
    <>
      {/* Fixed full-page Dark Loop vortex background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060610]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(212, 168, 83, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 168, 83, 0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <ParticleField />
      </div>

      <div className="relative z-10">
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
      </div>
    </>
  );
}
