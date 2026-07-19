'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './LiveSignals.module.css';

interface WeatherData {
    temp: number;
    emoji: string;
    message: string;
}

interface TrackData {
    name: string;
    artist: string;
    album: string;
    artwork: string | null;
    previewUrl: string | null;
    songUrl: string;
    isPlaying: boolean;
}

interface PodcastData {
    title: string;
    channelTitle: string;
    thumbnail: string;
    videoUrl: string;
}

export default function LiveSignals() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [tracks, setTracks] = useState<TrackData[]>([]);
    const [podcasts, setPodcasts] = useState<PodcastData[]>([]);
    const [steps, setSteps] = useState<number | null>(null);
    const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Fetch Weather
        async function fetchWeather() {
            try {
                const res = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=14.442599&longitude=79.986458&current=temperature_2m,weather_code,is_day'
                );
                if (!res.ok) return;
                const data = await res.json();
                const temp = Math.round(data.current.temperature_2m);
                const code = data.current.weather_code;
                const isDay = data.current.is_day;

                let emoji = '☀️';
                let message = 'Clear skies in Nellore.';
                if (code === 0) {
                    emoji = isDay ? '☀️' : '🌙';
                    message = isDay ? 'Clear skies today.' : 'Clear night sky.';
                } else if (code >= 1 && code <= 3) {
                    emoji = '⛅';
                    message = 'Cloudy start in Nellore.';
                } else if (code >= 51 && code <= 65) {
                    emoji = '🌧️';
                    message = 'Rainy day — good for focused work.';
                }
                setWeather({ temp, emoji, message });
            } catch (e) {
                console.error(e);
            }
        }

        // Fetch Music (3 Tracks)
        async function fetchMusic() {
            try {
                const res = await fetch(`/api/get-recent-track?t=${Date.now()}`);
                if (!res.ok) return;
                const data = await res.json();
                setTracks(data);
            } catch (e) {
                console.error(e);
            }
        }

        // Fetch Podcasts (up to 3)
        async function fetchPodcast() {
            try {
                const res = await fetch('/api/get-recent-podcast');
                if (res.ok) {
                    const data = await res.json();
                    setPodcasts(Array.isArray(data) ? data : [data]);
                } else {
                    setPodcasts([
                        {
                            title: 'Continuous Delivery & Playwright Best Practices',
                            channelTitle: 'Dave Farley - Continuous Delivery',
                            thumbnail:
                                'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=60',
                            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        },
                    ]);
                }
            } catch (e) {
                console.error(e);
            }
        }

        // Fetch Steps
        async function fetchSteps() {
            try {
                const res = await fetch('/api/sync-steps');
                const data = await res.json();
                if (data.success && typeof data.steps === 'number') {
                    setSteps(data.steps);
                }
            } catch (e) {
                console.error(e);
            }
        }

        fetchWeather();
        fetchMusic();
        fetchPodcast();
        fetchSteps();
    }, []);

    const playPreview = (url: string) => {
        if (!audioRef.current) return;

        if (activePreviewUrl === url && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            setActivePreviewUrl(url);
            audioRef.current.src = url;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className={styles.signalsContainer}>
            <h2 className={styles.sectionTitle}>Telemetry & Signals</h2>

            {/* Weather Card */}
            {weather && (
                <div className={styles.signalCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardLabel}>Weather Now</span>
                        <span className={`${styles.sourceBadge} ${styles.badgeLive}`}>Nellore</span>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.artContainer}>
                            <span className={styles.artEmoji}>{weather.emoji}</span>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.mainValue}>{weather.temp}°C</div>
                            <div className={styles.subText}>{weather.message}</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Steps Tracker Card */}
            {steps !== null && (
                <div className={styles.signalCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardLabel}>Activity Today</span>
                        <span className={`${styles.sourceBadge} ${styles.badgeLive}`}>
                            Fitness Sync
                        </span>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.artContainer}>
                            <span className={styles.artEmoji}>👟</span>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.mainValue}>{steps.toLocaleString()}</div>
                            <div className={styles.subText}>
                                Steps synced today using Fitbit Air
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Music Card (Last.fm mapped to YouTube) */}
            {tracks.length > 0 && (
                <div className={styles.signalCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardLabel}>Recent Listening</span>
                        <span className={`${styles.sourceBadge} ${styles.badgeLastfm}`}>
                            Last.fm
                        </span>
                    </div>
                    <div className={styles.trackList}>
                        {tracks.map((track, i) => (
                            <div key={i} className={styles.trackRow}>
                                <div className={styles.artContainer}>
                                    {track.artwork ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={track.artwork}
                                            alt={track.album}
                                            className={styles.artImage}
                                        />
                                    ) : (
                                        <span className={styles.artEmoji}>🎵</span>
                                    )}
                                    {track.isPlaying && (
                                        <div className={styles.equalizer}>
                                            <div className={styles.eqBar} />
                                            <div className={styles.eqBar} />
                                            <div className={styles.eqBar} />
                                        </div>
                                    )}
                                </div>
                                <div className={styles.details}>
                                    <a
                                        href={track.songUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.titleText}
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
                                        {track.name}
                                    </a>
                                    <div className={styles.subText}>{track.artist}</div>
                                </div>
                                {track.previewUrl && (
                                    <button
                                        className={styles.actionBtn}
                                        onClick={() => playPreview(track.previewUrl!)}
                                        aria-label={
                                            activePreviewUrl === track.previewUrl && isPlaying
                                                ? 'Pause'
                                                : 'Play'
                                        }
                                    >
                                        {activePreviewUrl === track.previewUrl && isPlaying ? (
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                style={{ marginLeft: '1px' }}
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        )}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <audio
                        ref={audioRef}
                        onEnded={() => setIsPlaying(false)}
                        onError={(e) => {
                            console.warn('Audio preview is unavailable or has expired:', e);
                            setIsPlaying(false);
                            setActivePreviewUrl(null);
                        }}
                    />
                </div>
            )}

            {/* Podcast Card */}
            {podcasts.length > 0 && (
                <div className={styles.signalCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardLabel}>Podcast Highlights</span>
                        <span className={`${styles.sourceBadge} ${styles.badgeYoutube}`}>
                            YouTube
                        </span>
                    </div>
                    <div className={styles.trackList}>
                        {podcasts.map((podcast, i) => (
                            <div key={i} className={styles.trackRow}>
                                <a
                                    href={podcast.videoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.artContainer}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={podcast.thumbnail}
                                        alt={podcast.title}
                                        className={styles.artImage}
                                    />
                                </a>
                                <div className={styles.details}>
                                    <a
                                        href={podcast.videoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.titleText}
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
                                        {podcast.title}
                                    </a>
                                    <div className={styles.subText}>{podcast.channelTitle}</div>
                                </div>
                                <a
                                    href={podcast.videoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.actionBtn}
                                    aria-label="Watch on YouTube"
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
