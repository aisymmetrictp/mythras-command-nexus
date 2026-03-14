'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  YouTubeChannel,
  YouTubeVideo,
  CHANNEL_IDS,
  ChannelSlug,
  fetchChannels,
  fetchPlaylistVideos,
} from './youtube';

interface UseYouTubeDataReturn {
  channels: Map<string, YouTubeChannel>;
  allVideos: YouTubeVideo[];
  channelVideos: Map<string, YouTubeVideo[]>;
  loading: boolean;
  error: string | null;
  loadMoreVideos: (slug: ChannelSlug) => Promise<void>;
  hasMore: Map<string, boolean>;
}

const VIDEOS_PER_LOAD = 12;

export function useYouTubeData(): UseYouTubeDataReturn {
  const [channels, setChannels] = useState<Map<string, YouTubeChannel>>(new Map());
  const [channelVideos, setChannelVideos] = useState<Map<string, YouTubeVideo[]>>(new Map());
  const [pageTokens, setPageTokens] = useState<Map<string, string | undefined>>(new Map());
  const [hasMore, setHasMore] = useState<Map<string, boolean>>(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initial load: fetch all channels + first page of videos each
  useEffect(() => {
    async function loadInitial() {
      try {
        setLoading(true);
        setError(null);

        // Fetch all channel details in one call
        const channelIds = Object.values(CHANNEL_IDS).map(c => c.id);
        const channelData = await fetchChannels(channelIds);

        const channelMap = new Map<string, YouTubeChannel>();
        channelData.forEach(ch => channelMap.set(ch.id, ch));
        setChannels(channelMap);

        // Fetch first page of videos for each channel in parallel
        const videoResults = await Promise.all(
          Object.entries(CHANNEL_IDS).map(async ([slug, config]) => {
            const result = await fetchPlaylistVideos(config.uploadsPlaylist, VIDEOS_PER_LOAD);
            return { slug, ...result };
          }),
        );

        const newVideos = new Map<string, YouTubeVideo[]>();
        const newTokens = new Map<string, string | undefined>();
        const newHasMore = new Map<string, boolean>();

        videoResults.forEach(({ slug, videos, nextPageToken }) => {
          newVideos.set(slug, videos);
          newTokens.set(slug, nextPageToken);
          newHasMore.set(slug, !!nextPageToken);
        });

        setChannelVideos(newVideos);
        setPageTokens(newTokens);
        setHasMore(newHasMore);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load YouTube data');
      } finally {
        setLoading(false);
      }
    }

    loadInitial();
  }, []);

  // Load more videos for a specific channel
  const loadMoreVideos = useCallback(async (slug: ChannelSlug) => {
    const token = pageTokens.get(slug);
    if (!token) return;

    const config = CHANNEL_IDS[slug];
    const result = await fetchPlaylistVideos(config.uploadsPlaylist, VIDEOS_PER_LOAD, token);

    setChannelVideos(prev => {
      const updated = new Map(prev);
      const existing = updated.get(slug) || [];
      updated.set(slug, [...existing, ...result.videos]);
      return updated;
    });

    setPageTokens(prev => {
      const updated = new Map(prev);
      updated.set(slug, result.nextPageToken);
      return updated;
    });

    setHasMore(prev => {
      const updated = new Map(prev);
      updated.set(slug, !!result.nextPageToken);
      return updated;
    });
  }, [pageTokens]);

  // Combine all videos sorted by date
  const allVideos = Array.from(channelVideos.values())
    .flat()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return {
    channels,
    allVideos,
    channelVideos,
    loading,
    error,
    loadMoreVideos,
    hasMore,
  };
}

// Hook for a single channel's data
export function useChannelData(slug: string) {
  const [channel, setChannel] = useState<YouTubeChannel | null>(null);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState(false);

  const config = CHANNEL_IDS[slug as ChannelSlug];

  useEffect(() => {
    if (!config) {
      setLoading(false);
      return;
    }

    async function load() {
      try {
        setLoading(true);
        const [channelData, videoData] = await Promise.all([
          fetchChannels([config.id]),
          fetchPlaylistVideos(config.uploadsPlaylist, VIDEOS_PER_LOAD),
        ]);

        if (channelData.length > 0) setChannel(channelData[0]);
        setVideos(videoData.videos);
        setNextPageToken(videoData.nextPageToken);
        setHasMore(!!videoData.nextPageToken);
      } catch {
        // Fall back to mock data
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [slug, config]);

  const loadMore = useCallback(async () => {
    if (!nextPageToken || !config) return;
    const result = await fetchPlaylistVideos(config.uploadsPlaylist, VIDEOS_PER_LOAD, nextPageToken);
    setVideos(prev => [...prev, ...result.videos]);
    setNextPageToken(result.nextPageToken);
    setHasMore(!!result.nextPageToken);
  }, [nextPageToken, config]);

  return { channel, videos, loading, loadMore, hasMore };
}
