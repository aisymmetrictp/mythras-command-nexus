export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  channelSlug: string;
  views: string;
  date: string;
  duration: string;
  type: 'video' | 'stream' | 'short' | 'clip';
  isNew?: boolean;
  description?: string;
}

export interface SocialPost {
  id: string;
  platform: 'twitter' | 'youtube' | 'twitch' | 'discord';
  content: string;
  date: string;
  link?: string;
  type: 'post' | 'upload' | 'live' | 'event';
}

export interface ScheduleItem {
  id: string;
  title: string;
  date: string;
  time: string;
  platform: string;
  channel: string;
  status: 'upcoming' | 'live' | 'completed';
}

export interface Channel {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  accentGradient: string;
  youtubeId?: string;
  twitchId?: string;
  game: string;
  stats: {
    subscribers: string;
    videos: string;
    views: string;
  };
}

export const channels: Channel[] = [
  {
    name: 'CookieRun Mythras',
    slug: 'cookierun',
    tagline: 'Top-tier CookieRun Kingdom strategy & content',
    description: 'The flagship channel delivering elite CookieRun Kingdom content — tier lists, meta analysis, arena strategies, and guild war breakdowns. Where cookies become champions.',
    icon: '🍪',
    color: '#f97316',
    accentGradient: 'from-orange-500 to-amber-500',
    game: 'CookieRun: Kingdom',
    stats: { subscribers: '12.4K', videos: '340', views: '2.1M' },
  },
  {
    name: 'Gamertag Mythras',
    slug: 'gamertag',
    tagline: 'Magic: The Gathering — competitive & casual',
    description: 'Dedicated to Magic: The Gathering across all formats. Draft guides, deck techs, meta breakdowns, and Arena gameplay. From Standard to Commander, Mythras plays them all.',
    icon: '⚔️',
    color: '#8b5cf6',
    accentGradient: 'from-violet-500 to-purple-500',
    game: 'Magic: The Gathering',
    stats: { subscribers: '8.2K', videos: '215', views: '1.4M' },
  },
  {
    name: 'Mythras Gaming',
    slug: 'mythras-gaming',
    tagline: 'All gaming, no limits',
    description: 'The variety gaming hub — from AAA titles to indie gems, FPS to RPG, co-op to competitive. If it\'s a game, Mythras plays it. Expect reviews, walkthroughs, and raw gameplay.',
    icon: '🎮',
    color: '#06b6d4',
    accentGradient: 'from-cyan-500 to-blue-500',
    game: 'Multi-Game',
    stats: { subscribers: '5.7K', videos: '180', views: '890K' },
  },
  {
    name: 'Pokemon Mythras',
    slug: 'pokemon',
    tagline: 'Gotta catch \'em all — competitively',
    description: 'Pokemon content across TCG, VGC, and mainline games. Pack openings, competitive battling, deck profiles, and Nuzlocke challenges. The ultimate Pokemon trainer hub.',
    icon: '⚡',
    color: '#eab308',
    accentGradient: 'from-yellow-500 to-orange-400',
    game: 'Pokemon',
    stats: { subscribers: '6.1K', videos: '155', views: '720K' },
  },
  {
    name: 'Lorcana Mythras',
    slug: 'lorcana',
    tagline: 'Disney Lorcana mastery',
    description: 'Deep dives into Disney Lorcana TCG — deck builds, set reviews, tournament prep, and card analysis. Building the Lorcana community one ink at a time.',
    icon: '✨',
    color: '#3b82f6',
    accentGradient: 'from-blue-500 to-indigo-500',
    game: 'Disney Lorcana',
    stats: { subscribers: '3.8K', videos: '95', views: '380K' },
  },
];

export const mockVideos: Video[] = [
  {
    id: 'v1',
    title: 'CookieRun Kingdom: ULTIMATE Tier List Season 14 — Every Cookie Ranked',
    thumbnail: '/images/mythras-profile.png',
    channel: 'CookieRun Mythras',
    channelSlug: 'cookierun',
    views: '24.5K',
    date: '2 hours ago',
    duration: '18:42',
    type: 'video',
    isNew: true,
    description: 'Complete tier list breakdown for Season 14. Every cookie ranked from SSS to D tier with full reasoning.',
  },
  {
    id: 'v2',
    title: 'MTG Arena: Duskmourn Draft Guide — Force This Archetype',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Gamertag Mythras',
    channelSlug: 'gamertag',
    views: '8.3K',
    date: '1 day ago',
    duration: '22:15',
    type: 'video',
    isNew: true,
    description: 'The definitive Duskmourn draft guide. Learn the archetype that consistently goes 7 wins.',
  },
  {
    id: 'v3',
    title: 'LIVE: Late Night CookieRun Arena Grind — Road to Diamond',
    thumbnail: '/images/mythras-profile.png',
    channel: 'CookieRun Mythras',
    channelSlug: 'cookierun',
    views: '3.1K',
    date: '3 days ago',
    duration: '2:45:30',
    type: 'stream',
    description: 'Arena grinding session pushing for Diamond league. Come hang and strategize.',
  },
  {
    id: 'v4',
    title: 'Pokemon VGC: Building the #1 Regulation G Team',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Pokemon Mythras',
    channelSlug: 'pokemon',
    views: '12.7K',
    date: '4 days ago',
    duration: '25:18',
    type: 'video',
    description: 'Full teambuilder for the current Regulation G meta. EV spreads, move sets, and matchup analysis included.',
  },
  {
    id: 'v5',
    title: 'That 200 IQ Play Nobody Expected #shorts',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Mythras Gaming',
    channelSlug: 'mythras-gaming',
    views: '45.2K',
    date: '5 days ago',
    duration: '0:58',
    type: 'short',
    description: 'Sometimes the galaxy brain play actually works.',
  },
  {
    id: 'v6',
    title: 'Lorcana Set 6 FULL Review — Best Cards & Sleeper Picks',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Lorcana Mythras',
    channelSlug: 'lorcana',
    views: '6.4K',
    date: '1 week ago',
    duration: '31:05',
    type: 'video',
    description: 'Complete Set 6 review covering every card worth your attention and the sleeper picks nobody is talking about.',
  },
  {
    id: 'v7',
    title: 'Elden Ring DLC: Blind Playthrough Part 1 — Shadow of the Erdtree',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Mythras Gaming',
    channelSlug: 'mythras-gaming',
    views: '15.8K',
    date: '1 week ago',
    duration: '1:12:45',
    type: 'stream',
    description: 'Going in completely blind. No guides, no spoilers. Pure first reactions.',
  },
  {
    id: 'v8',
    title: 'This Cookie Run Comp BREAKS Arena Meta',
    thumbnail: '/images/mythras-profile.png',
    channel: 'CookieRun Mythras',
    channelSlug: 'cookierun',
    views: '18.9K',
    date: '1 week ago',
    duration: '14:33',
    type: 'video',
    description: 'Found a team comp that absolutely destroys the current arena meta. Full guide inside.',
  },
  {
    id: 'v9',
    title: 'MTG Modern: Nadu is STILL Broken — Tournament Report',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Gamertag Mythras',
    channelSlug: 'gamertag',
    views: '11.2K',
    date: '2 weeks ago',
    duration: '19:47',
    type: 'video',
    description: 'Tournament report from last weekend. Nadu combo is still the deck to beat in Modern.',
  },
  {
    id: 'v10',
    title: 'Pokemon TCG: Budget Charizard Deck Under $50',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Pokemon Mythras',
    channelSlug: 'pokemon',
    views: '9.6K',
    date: '2 weeks ago',
    duration: '16:22',
    type: 'video',
    description: 'Build a competitive Charizard deck without breaking the bank. Every card and substitute explained.',
  },
  {
    id: 'v11',
    title: 'Lorcana Draft Night w/ the Community',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Lorcana Mythras',
    channelSlug: 'lorcana',
    views: '2.8K',
    date: '2 weeks ago',
    duration: '1:55:12',
    type: 'stream',
    description: 'Community draft night! Learning the draft format together.',
  },
  {
    id: 'v12',
    title: 'When the Topdeck Hits JUST Right #shorts',
    thumbnail: '/images/mythras-profile.png',
    channel: 'Gamertag Mythras',
    channelSlug: 'gamertag',
    views: '32.1K',
    date: '3 weeks ago',
    duration: '0:45',
    type: 'short',
    description: 'The most insane topdeck of my MTG career.',
  },
];

export const mockSocialFeed: SocialPost[] = [
  {
    id: 's1',
    platform: 'twitter',
    content: 'New CookieRun tier list dropping in 2 hours. Season 14 changed EVERYTHING. 🍪🔥',
    date: '2 hours ago',
    type: 'post',
  },
  {
    id: 's2',
    platform: 'youtube',
    content: 'NEW VIDEO: Ultimate CookieRun Kingdom Tier List Season 14 is LIVE!',
    date: '2 hours ago',
    type: 'upload',
    link: '#',
  },
  {
    id: 's3',
    platform: 'twitch',
    content: 'Going live in 30 minutes — MTG Arena Duskmourn draft marathon!',
    date: '5 hours ago',
    type: 'live',
  },
  {
    id: 's4',
    platform: 'discord',
    content: 'New community event: Pokemon VGC Tournament this Saturday! Sign up in #events',
    date: '1 day ago',
    type: 'event',
  },
  {
    id: 's5',
    platform: 'twitter',
    content: 'Lorcana Set 6 is actually incredible. Full review video coming this week. The sleeper picks are WILD.',
    date: '1 day ago',
    type: 'post',
  },
  {
    id: 's6',
    platform: 'youtube',
    content: 'Stream replay uploaded: Late Night CookieRun Arena Grind',
    date: '3 days ago',
    type: 'upload',
    link: '#',
  },
  {
    id: 's7',
    platform: 'discord',
    content: 'Guild Wars team sign-ups are open! Check #guild-wars for details.',
    date: '4 days ago',
    type: 'event',
  },
  {
    id: 's8',
    platform: 'twitch',
    content: 'Thanks for the 3K viewers on last night\'s stream! You all are incredible. 💜',
    date: '5 days ago',
    type: 'post',
  },
];

export const mockSchedule: ScheduleItem[] = [
  {
    id: 'sch1',
    title: 'CookieRun Arena Grind',
    date: 'Today',
    time: '7:00 PM CST',
    platform: 'Twitch',
    channel: 'CookieRun Mythras',
    status: 'upcoming',
  },
  {
    id: 'sch2',
    title: 'MTG Arena Draft Night',
    date: 'Tomorrow',
    time: '8:00 PM CST',
    platform: 'YouTube',
    channel: 'Gamertag Mythras',
    status: 'upcoming',
  },
  {
    id: 'sch3',
    title: 'Pokemon VGC Ladder',
    date: 'Wednesday',
    time: '6:00 PM CST',
    platform: 'Twitch',
    channel: 'Pokemon Mythras',
    status: 'upcoming',
  },
  {
    id: 'sch4',
    title: 'Variety Gaming — Community Picks',
    date: 'Thursday',
    time: '9:00 PM CST',
    platform: 'Twitch',
    channel: 'Mythras Gaming',
    status: 'upcoming',
  },
  {
    id: 'sch5',
    title: 'Lorcana Draft & Pack Opening',
    date: 'Friday',
    time: '7:30 PM CST',
    platform: 'YouTube',
    channel: 'Lorcana Mythras',
    status: 'upcoming',
  },
  {
    id: 'sch6',
    title: 'CookieRun Guild Wars Live',
    date: 'Saturday',
    time: '3:00 PM CST',
    platform: 'Twitch',
    channel: 'CookieRun Mythras',
    status: 'upcoming',
  },
];
