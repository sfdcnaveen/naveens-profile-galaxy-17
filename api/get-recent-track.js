export default async function handler(req, res) {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = 'PNaveen';

    if (!apiKey) {
        // If the API key is missing (e.g. running locally without .env), return a safe fallback
        return res.status(200).json({ 
            currentTrack: "Blinding Lights - After Hours", 
            previewUrl: null 
        });
    }

    try {
        // 1. Fetch from Last.fm
        const lastFmResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`);
        
        if (!lastFmResponse.ok) {
            throw new Error('Failed to fetch from Last.fm');
        }

        const lastFmData = await lastFmResponse.json();
        
        if (!lastFmData || !lastFmData.recenttracks || !lastFmData.recenttracks.track || lastFmData.recenttracks.track.length === 0) {
             return res.status(200).json({ currentTrack: "Blinding Lights - After Hours", previewUrl: null });
        }

        const t = lastFmData.recenttracks.track[0];
        let albumName = t.album['#text'] ? t.album['#text'] : "Unknown Album";
        if (albumName.includes('(')) {
            albumName = albumName.substring(0, albumName.indexOf('(')).trim();
        }
        
        const currentTrack = `${t.name} - ${albumName}`;
        const artistName = t.artist ? t.artist['#text'] : '';
        
        let previewUrl = null;

        // 2. Fetch preview from iTunes
        if (t.name && artistName) {
            try {
                const itunesRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(t.name + ' ' + artistName)}&entity=song&limit=1`);
                if (itunesRes.ok) {
                    const itunesData = await itunesRes.json();
                    if (itunesData.results && itunesData.results.length > 0 && itunesData.results[0].previewUrl) {
                        previewUrl = itunesData.results[0].previewUrl;
                    }
                }
            } catch (e) {
                console.log('iTunes API fallback:', e.message);
            }
        }

        let verb = "Listening to";
        
        // 3. Fetch top tags for the artist to determine genre/mood
        if (artistName) {
            try {
                const tagsRes = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${encodeURIComponent(artistName)}&api_key=${apiKey}&format=json`);
                if (tagsRes.ok) {
                    const tagsData = await tagsRes.json();
                    if (tagsData.toptags && tagsData.toptags.tag && tagsData.toptags.tag.length > 0) {
                        const topTags = tagsData.toptags.tag.slice(0, 5).map(tagObj => tagObj.name.toLowerCase());
                        
                        const rockTags = ['rock', 'metal', 'punk', 'hardcore', 'grunge', 'alternative'];
                        const chillTags = ['chill', 'lo-fi', 'ambient', 'relax', 'acoustic', 'indie'];
                        const danceTags = ['pop', 'dance', 'electronic', 'house', 'techno', 'edm', 'synthpop'];
                        const swayTags = ['jazz', 'blues', 'soul', 'r&b', 'rnb'];
                        const bounceTags = ['hip hop', 'rap', 'trap', 'hip-hop'];
                        const immerseTags = ['classical', 'soundtrack', 'instrumental'];
                        
                        if (topTags.some(t => danceTags.includes(t))) verb = "Grooving to";
                        else if (topTags.some(t => chillTags.includes(t))) verb = "Vibing to";
                        else if (topTags.some(t => rockTags.includes(t))) verb = "Rocking to";
                        else if (topTags.some(t => swayTags.includes(t))) verb = "Swaying to";
                        else if (topTags.some(t => bounceTags.includes(t))) verb = "Bouncing to";
                        else if (topTags.some(t => immerseTags.includes(t))) verb = "Immersed in";
                    }
                }
            } catch (e) {
                console.log('Last.fm tags fallback:', e.message);
            }
        }

        return res.status(200).json({
            currentTrack,
            previewUrl,
            verb
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
