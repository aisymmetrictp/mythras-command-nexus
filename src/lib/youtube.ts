const API_KEY = 'AIzaSyCoN5LCUQkTNbUPnI80ZLjG3ngSwg-GVXA';
const BASE = 'https://www.googleapis.com/youtube/v3';

export interface YouTubeChannel {
  id: string;
  name: string;
  customUrl: string;
  description: string;
  thumbnail: string;
  banner?: string;
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
  uploadsPlaylistId: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailHigh: string;
  channelId: string;
  channelTitle: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
  likeCount: string;
  isLive: boolean;
  isShort: boolean;
  liveBroadcastContent: string;
}

// Channel IDs for all Mythras channels
export const CHANNEL_IDS = {
  cookierun: {
    id: 'UCGp83Usm4riRWlAYa9F2diQ',
    uploadsPlaylist: 'UUGp83Usm4riRWlAYa9F2diQ',
  },
  gamertag: {
    id: 'UCZwCXcKKgjxNDSe9mY1_TWQ',
    uploadsPlaylist: 'UUZwCXcKKgjxNDSe9mY1_TWQ',
  },
  'mythras-gaming': {
    id: 'UC-tDHOeoDgUaXxIkQBFffAg',
    uploadsPlaylist: 'UU-tDHOeoDgUaXxIkQBFffAg',
  },
  pokemon: {
    id: 'UCwI4EHyFi-z8Nrxh4ckr47Q',
    uploadsPlaylist: 'UUwI4EHyFi-z8Nrxh4ckr47Q',
  },
  lorcana: {
    id: 'UCfvLejQsZnBEtQsn5h0SD3Q',
    uploadsPlaylist: 'UUfvLejQsZnBEtQsn5h0SD3Q',
  },
} as const;

export type ChannelSlug = keyof typeof CHANNEL_IDS;

// Fetch channel details
export async function fetchChannel(channelId: string): Promise<YouTubeChannel | null> {
  try {
    const url = `${BASE}/channels?part=snippet,statistics,contentDetails,brandingSettings&id=${channelId}&key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.items?.length) return null;

    const item = data.items[0];
    return {
      id: item.id,
      name: item.snippet.title,
      customUrl: item.snippet.customUrl || '',
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || '',
      banner: item.brandingSettings?.image?.bannerExternalUrl || undefined,
      subscriberCount: item.statistics.subscriberCount,
      videoCount: item.statistics.videoCount,
      viewCount: item.statistics.viewCount,
      uploadsPlaylistId: item.contentDetails.relatedPlaylists.uploads,
    };
  } catch {
    return null;
  }
}

// Fetch multiple channels at once
export async function fetchChannels(channelIds: string[]): Promise<YouTubeChannel[]> {
  try {
    const url = `${BASE}/channels?part=snippet,statistics,contentDetails,brandingSettings&id=${channelIds.join(',')}&key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.items?.length) return [];

    return data.items.map((item: any) => ({
      id: item.id,
      name: item.snippet.title,
      customUrl: item.snippet.customUrl || '',
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || '',
      banner: item.brandingSettings?.image?.bannerExternalUrl || undefined,
      subscriberCount: item.statistics.subscriberCount,
      videoCount: item.statistics.videoCount,
      viewCount: item.statistics.viewCount,
      uploadsPlaylistId: item.contentDetails.relatedPlaylists.uploads,
    }));
  } catch {
    return [];
  }
}

// Fetch videos from a playlist (uploads)
export async function fetchPlaylistVideos(
  playlistId: string,
  maxResults: number = 12,
  pageToken?: string,
): Promise<{ videos: YouTubeVideo[]; nextPageToken?: string }> {
  try {
    let url = `${BASE}/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&key=${API_KEY}`;
    if (pageToken) url += `&pageToken=${pageToken}`;

    const res = await fetch(url);
    if (!res.ok) return { videos: [] };
    const data = await res.json();
    if (!data.items?.length) return { videos: [] };

    // Get video IDs for additional details
    const videoIds = data.items.map((item: any) => item.contentDetails.videoId).join(',');
    const details = await fetchVideoDetails(videoIds);

    const videos: YouTubeVideo[] = data.items.map((item: any) => {
      const videoId = item.contentDetails.videoId;
      const detail = details.find((d: any) => d.id === videoId);

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || '',
        thumbnailHigh: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || '',
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        duration: detail?.contentDetails?.duration || '',
        viewCount: detail?.statistics?.viewCount || '0',
        likeCount: detail?.statistics?.likeCount || '0',
        isLive: detail?.snippet?.liveBroadcastContent === 'live',
        isShort: isShortVideo(detail?.contentDetails?.duration || ''),
        liveBroadcastContent: detail?.snippet?.liveBroadcastContent || 'none',
      };
    });

    return {
      videos: videos.filter(v => v.title !== 'Private video' && v.title !== 'Deleted video'),
      nextPageToken: data.nextPageToken,
    };
  } catch {
    return { videos: [] };
  }
}

// Fetch video details (duration, stats, etc.)
async function fetchVideoDetails(videoIds: string): Promise<any[]> {
  try {
    const url = `${BASE}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return data.items || [];
  } catch {
    return [];
  }
}

// Fetch latest videos across all channels
export async function fetchAllChannelVideos(
  maxPerChannel: number = 4,
): Promise<{ slug: string; videos: YouTubeVideo[] }[]> {
  const results = await Promise.all(
    Object.entries(CHANNEL_IDS).map(async ([slug, config]) => {
      const { videos } = await fetchPlaylistVideos(config.uploadsPlaylist, maxPerChannel);
      return { slug, videos };
    }),
  );
  return results;
}

// Parse ISO 8601 duration to human-readable format
export function parseDuration(isoDuration: string): string {
  if (!isoDuration) return '0:00';
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '0:00';

  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Check if a video is a YouTube Short (60s or less)
function isShortVideo(isoDuration: string): boolean {
  if (!isoDuration) return false;
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return false;
  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds <= 60;
}

// Format view count
export function formatCount(count: string | number): string {
  const num = typeof count === 'string' ? parseInt(count) : count;
  if (isNaN(num)) return '0';
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

// Format relative date
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);

  if (diffMin < 1) return 'Just now';
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
  if (diffWeek < 5) return `${diffWeek} week${diffWeek > 1 ? 's' : ''} ago`;
  if (diffMonth < 12) return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;
  return date.toLocaleDateString();
}

// Get slug from channel ID
export function getSlugFromChannelId(channelId: string): string | undefined {
  for (const [slug, config] of Object.entries(CHANNEL_IDS)) {
    if (config.id === channelId) return slug;
  }
  return undefined;
}
