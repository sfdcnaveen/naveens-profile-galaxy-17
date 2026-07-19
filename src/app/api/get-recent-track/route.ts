import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function cleanSearchTerm(name: string, artist: string): string {
    // Strip common suffix noise that breaks iTunes exact search matches
    let cleanName = name.split(
        /\s+-\s+(?:Remaster|feat|with|version|edit|mix|single|lp|ep|acoustic|live)/i
    )[0];
    cleanName = cleanName.split(
        /\((?:Remaster|feat|with|version|edit|mix|single|lp|ep|acoustic|live)/i
    )[0];
    cleanName = cleanName.split(
        /\[(?:Remaster|feat|with|version|edit|mix|single|lp|ep|acoustic|live)/i
    )[0];

    // Remove trailing dashes or brackets if any left
    cleanName = cleanName.replace(/[\(\)\[\]\-]+$/, '').trim();

    return `${cleanName} ${artist.trim()}`;
}

export async function GET() {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = 'PNaveen';

    if (!apiKey) {
        // Return 3 fallback tracks when Last.fm API Key is not configured
        // Restored to authentic iTunes preview URLs
        return NextResponse.json(
            [
                {
                    name: 'Blinding Lights',
                    artist: 'The Weeknd',
                    album: 'After Hours',
                    artwork:
                        'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=120&auto=format&fit=crop&q=60',
                    previewUrl:
                        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/b4/8f/17b48f9a-0b93-6bb8-fe1d-3a16623c2cfb/mzaf_9560252727299052414.plus.aac.p.m4a',
                    songUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent('Blinding Lights The Weeknd')}`,
                    isPlaying: true,
                    verb: 'Grooving to',
                },
                {
                    name: 'Save Your Tears',
                    artist: 'The Weeknd',
                    album: 'After Hours',
                    artwork:
                        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=60',
                    previewUrl:
                        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bf/02/76/bf0276fe-a28a-78f9-4fa2-29007f3531b7/mzaf_15024479900985832789.plus.aac.p.m4a',
                    songUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent('Save Your Tears The Weeknd')}`,
                    isPlaying: false,
                    verb: 'Vibing to',
                },
                {
                    name: 'Starboy',
                    artist: 'The Weeknd',
                    album: 'Starboy',
                    artwork:
                        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=60',
                    previewUrl:
                        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/58/e7/88/58e788bc-b27a-e274-13bb-424a1b023f05/mzaf_6562024227318047913.plus.aac.p.m4a',
                    songUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent('Starboy The Weeknd')}`,
                    isPlaying: false,
                    verb: 'Listening to',
                },
            ],
            {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                },
            }
        );
    }

    try {
        const lastFmResponse = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=3`
        );

        if (!lastFmResponse.ok) {
            throw new Error('Failed to fetch from Last.fm');
        }

        const lastFmData = await lastFmResponse.json();
        const tracks = lastFmData?.recenttracks?.track || [];

        if (tracks.length === 0) {
            return NextResponse.json([]);
        }

        // Process up to 3 tracks in parallel
        const processedTracks = await Promise.all(
            tracks
                .slice(0, 3)
                .map(
                    async (t: {
                        name: string;
                        artist?: { '#text': string };
                        album?: { '#text': string };
                        image?: { '#text': string }[];
                        '@attr'?: { nowplaying?: string };
                    }) => {
                        const name = t.name;
                        const artist = t.artist ? t.artist['#text'] : '';
                        const album = t.album ? t.album['#text'] : '';
                        const isPlaying = t['@attr']?.nowplaying === 'true';

                        // Artwork extraction (medium or large/extralarge if available)
                        let artwork = null;
                        if (t.image && t.image.length > 0) {
                            artwork = t.image[t.image.length - 1]['#text'] || null;
                        }

                        let previewUrl = null;
                        // Construct reliable YouTube search URL
                        const songUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' ' + artist)}`;

                        const cleanedTerm = cleanSearchTerm(name, artist);

                        if (name && artist) {
                            try {
                                const itunesRes = await fetch(
                                    `https://itunes.apple.com/search?term=${encodeURIComponent(cleanedTerm)}&entity=song&limit=1&country=in`
                                );
                                if (itunesRes.ok) {
                                    const itunesData = await itunesRes.json();
                                    if (itunesData?.results?.[0]?.previewUrl) {
                                        previewUrl = itunesData.results[0].previewUrl;
                                    }
                                }
                            } catch (e) {
                                console.log('iTunes API preview search failed:', e);
                            }
                        }

                        let verb = 'Listening to';
                        if (artist) {
                            try {
                                const tagsRes = await fetch(
                                    `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${encodeURIComponent(artist)}&api_key=${apiKey}&format=json`
                                );
                                if (tagsRes.ok) {
                                    const tagsData = await tagsRes.json();
                                    if (tagsData.toptags?.tag?.length > 0) {
                                        const topTags = tagsData.toptags.tag
                                            .slice(0, 5)
                                            .map((tagObj: { name: string }) =>
                                                tagObj.name.toLowerCase()
                                            );

                                        const chillTags = [
                                            'chill',
                                            'lo-fi',
                                            'ambient',
                                            'relax',
                                            'acoustic',
                                            'indie',
                                        ];
                                        const danceTags = [
                                            'pop',
                                            'dance',
                                            'electronic',
                                            'house',
                                            'techno',
                                            'edm',
                                            'synthpop',
                                        ];

                                        if (
                                            topTags.some((tag: string) => danceTags.includes(tag))
                                        ) {
                                            verb = 'Grooving to';
                                        } else if (
                                            topTags.some((tag: string) => chillTags.includes(tag))
                                        ) {
                                            verb = 'Vibing to';
                                        }
                                    }
                                }
                            } catch (e) {
                                console.log('Last.fm tags fetch failed:', e);
                            }
                        }

                        return {
                            name,
                            artist,
                            album,
                            artwork,
                            previewUrl,
                            songUrl,
                            isPlaying,
                            verb,
                        };
                    }
                )
        );

        return NextResponse.json(processedTracks, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        });
    } catch (error) {
        console.error('Error fetching recent tracks:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
