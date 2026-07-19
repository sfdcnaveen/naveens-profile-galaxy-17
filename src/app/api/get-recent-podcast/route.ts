import { NextResponse } from 'next/server';
import fallbackPodcasts from '@/data/podcasts.json';

export const dynamic = 'force-dynamic';

export async function GET() {
    const playlistId = process.env.YOUTUBE_PLAYLIST_ID;
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey || !playlistId) {
        // Fallback to local curated JSON if env variables are not set
        return NextResponse.json(fallbackPodcasts, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate',
            },
        });
    }

    try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=3&playlistId=${playlistId}&key=${apiKey}`;

        // Pass Referer header so that Google API Key security restrictions allow our server request
        const response = await fetch(url, {
            headers: {
                Referer: 'https://naveens-portfolio-three.vercel.app/',
                'Cache-Control': 'no-cache',
            },
        });

        if (!response.ok) {
            throw new Error(`YouTube API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        const items = data.items || [];

        if (items.length === 0) {
            return NextResponse.json(fallbackPodcasts, {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate',
                },
            });
        }

        const podcasts = items.map(
            (item: {
                snippet: {
                    title?: string;
                    channelTitle?: string;
                    videoOwnerChannelTitle?: string;
                    thumbnails?: {
                        high?: { url: string };
                        medium?: { url: string };
                        default?: { url: string };
                    };
                    resourceId?: { videoId?: string };
                };
            }) => {
                const snippet = item.snippet;
                const videoId = snippet.resourceId?.videoId;
                return {
                    title: snippet.title || 'Unknown Title',
                    channelTitle:
                        snippet.videoOwnerChannelTitle || snippet.channelTitle || 'Unknown Channel',
                    thumbnail:
                        snippet.thumbnails?.high?.url ||
                        snippet.thumbnails?.medium?.url ||
                        snippet.thumbnails?.default?.url ||
                        '',
                    videoUrl: videoId
                        ? `https://www.youtube.com/watch?v=${videoId}`
                        : 'https://youtube.com',
                };
            }
        );

        return NextResponse.json(podcasts, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        });
    } catch (error) {
        console.error('Error fetching YouTube playlist:', error);
        return NextResponse.json(fallbackPodcasts, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate',
            },
        });
    }
}
