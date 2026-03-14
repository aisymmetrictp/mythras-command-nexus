'use client';

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
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedContent />
        <ChannelDeck />
        <ContentHub />
        <TwitchSection />
        <Schedule />
        <SocialFeed />
        <DiscordCTA />
      </main>
      <Footer />
    </>
  );
}
