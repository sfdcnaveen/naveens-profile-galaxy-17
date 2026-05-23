'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const weatherCodes: { [key: number]: { desc: string; icon: string } } = {
    0: { desc: 'Clear sky', icon: '☀️' },
    1: { desc: 'Mainly clear', icon: '🌤️' },
    2: { desc: 'Partly cloudy', icon: '⛅' },
    3: { desc: 'Overcast', icon: '☁️' },
    45: { desc: 'Fog', icon: '🌫️' },
    48: { desc: 'Depositing rime fog', icon: '🌫️' },
    51: { desc: 'light drizzle', icon: '🌦️' },
    53: { desc: 'moderate drizzle', icon: '🌦️' },
    55: { desc: 'dense drizzle', icon: '🌦️' },
    57: { desc: 'dense freezing drizzle', icon: '🌨️' },
    61: { desc: 'slight rain', icon: '🌧️' },
    63: { desc: 'moderate rain', icon: '🌧️' },
    65: { desc: 'heavy rain', icon: '🌧️' },
    71: { desc: 'slight snow fall', icon: '❄️' },
    75: { desc: 'heavy snow fall', icon: '❄️' },
    80: { desc: 'slight rain showers', icon: '🌧️' },
    82: { desc: 'violent rain showers', icon: '🌧️' },
    95: { desc: 'thunderstorm', icon: '⛈️' }
};

interface MusicState {
    verb: string;
    currentTrack: string;
    previewUrl: string | null;
}

export default function Hero() {
    const [weatherText, setWeatherText] = useState('fetching weather...');
    const [music, setMusic] = useState<MusicState>({
        verb: 'Grooving to',
        currentTrack: 'fetching track...',
        previewUrl: null
    });
    const [githubPulse, setGithubPulse] = useState('Actively coding & automating');
    const [githubRepos, setGithubRepos] = useState(20);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Fetch Weather
    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=14.442599&longitude=79.986458&current=temperature_2m,weather_code');
                if (!response.ok) throw new Error('Weather API Error');
                const data = await response.json();
                const temp = Math.round(data.current.temperature_2m);
                const code = data.current.weather_code;
                const weather = weatherCodes[code] || { desc: 'Clear', icon: '☀️' };
                setWeatherText(`${weather.icon} ${temp}°C`);
            } catch (error: any) {
                setWeatherText('☀️ 32°C');
            }
        }
        fetchWeather();
    }, []);

    // Fetch Music
    useEffect(() => {
        async function fetchRecentMusic() {
            try {
                const response = await fetch('/api/get-recent-track');
                if (!response.ok) throw new Error('Music API Error');
                const data = await response.json();
                setMusic({
                    verb: data.verb || 'Listening to',
                    currentTrack: data.currentTrack || 'Blinding Lights - After Hours',
                    previewUrl: data.previewUrl || null
                });
            } catch (error: any) {
                setMusic({
                    verb: 'Listening to',
                    currentTrack: 'Blinding Lights - After Hours',
                    previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/b4/8f/17b48f9a-0b93-6bb8-fe1d-3a16623c2cfb/mzaf_9560252727299052414.plus.aac.p.m4a'
                });
            }
        }
        fetchRecentMusic();
    }, []);

    // Fetch GitHub Pulse & Repos count
    useEffect(() => {
        async function fetchGithubData() {
            try {
                const userRes = await fetch('https://api.github.com/users/sfdcnaveen');
                if (userRes.ok) {
                    const userData = await userRes.json();
                    if (userData && userData.public_repos !== undefined) {
                        setGithubRepos(userData.public_repos);
                    }
                }
            } catch (err) {}

            try {
                const eventsRes = await fetch('https://api.github.com/users/sfdcnaveen/events/public?per_page=1');
                if (eventsRes.ok) {
                    const eventsData = await eventsRes.json();
                    if (eventsData && eventsData.length > 0) {
                        const latestEvent = eventsData[0];
                        let actionText = 'Actively contributing to open source';
                        const repoName = latestEvent.repo?.name ? latestEvent.repo.name.split('/')[1] : '';
                        if (latestEvent.type === 'PushEvent' && repoName) {
                            actionText = `Recently pushed to ${repoName}`;
                        } else if (latestEvent.type === 'PullRequestEvent' && repoName) {
                            actionText = `Recently opened a PR in ${repoName}`;
                        } else if (latestEvent.type === 'CreateEvent' && repoName) {
                            actionText = `Recently created repository ${repoName}`;
                        }
                        setGithubPulse(actionText);
                    }
                }
            } catch (err) {
                setGithubPulse('Actively coding and contributing');
            }
        }
        fetchGithubData();
    }, []);

    const handlePlayPause = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((err) => {
                console.log('Audio playback failed:', err);
            });
        }
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <section className="hero" id="top" data-od-id="hero">
                <div className="container">
                    <div className="sec-rule">
                        <span className="roman">I.</span>
                        <span className="meta-grp">
                            <span>Hero / Cover Plate</span>
                            <span className="dot-mark">•</span>
                            <span>Naveen Kumar / Vol. 01</span>
                        </span>
                        <span>001 / 008</span>
                    </div>
                </div>
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <span className="label" data-reveal>
                            Quality Automation Architect <span className="ix">· Nº 01</span>
                        </span>
                        <h1 className="display" data-reveal>
                            Automating the <em>future</em> of quality with <em>speed</em> and <em>scale</em><span className="dot">.</span>
                        </h1>
                        
                        {/* Live Status Widget as a styled tag card */}
                        <div 
                            className="lead" 
                            data-reveal
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'var(--bone)',
                                border: '1px solid var(--line)',
                                padding: '8px 16px',
                                borderRadius: '30px',
                                fontSize: '12px',
                                fontFamily: 'var(--mono)',
                                color: 'var(--ink-soft)',
                                marginBottom: '24px',
                                width: 'fit-content'
                            }}
                        >
                            <span 
                                style={{ 
                                    width: '6px', 
                                    height: '6px', 
                                    borderRadius: '50%', 
                                    background: 'var(--coral)',
                                    display: 'inline-block',
                                    animation: 'pulse 2.4s ease-in-out infinite' 
                                }}
                            ></span>
                            <span>
                                {music.verb} <b style={{ color: 'var(--coral)', fontWeight: 600 }}>{music.currentTrack}</b>
                                {music.previewUrl && (
                                    <>
                                        <button
                                            onClick={handlePlayPause}
                                            aria-label={isPlaying ? 'Pause preview' : 'Play 30s preview'}
                                            style={{
                                                background: isPlaying ? 'var(--coral)' : 'var(--ink)',
                                                color: 'var(--paper)',
                                                border: 'none',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                padding: '3px',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft: '8px',
                                                verticalAlign: 'middle',
                                                width: '18px',
                                                height: '18px'
                                            }}
                                        >
                                            {isPlaying ? (
                                                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                                                    <rect x="6" y="4" width="4" height="16"></rect>
                                                    <rect x="14" y="4" width="4" height="16"></rect>
                                                </svg>
                                            ) : (
                                                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '1px' }}>
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                            )}
                                        </button>
                                        <audio ref={audioRef} src={music.previewUrl} onEnded={handleAudioEnded} />
                                    </>
                                )}
                            </span>
                            <span style={{ color: 'var(--line)' }}>|</span>
                            <span>Nellore {weatherText}</span>
                        </div>

                        <p className="lead" data-reveal>
                            High-impact SDET expert specializing in the Salesforce ecosystem, Playwright automation systems, CI/CD pipeline integrations, and deterministic engineering feedback loops.
                        </p>

                        <div className="hero-actions" data-reveal>
                            <a className="btn btn-primary" href="mailto:pasupulatink@gmail.com">
                                Start a Conversation
                                <span className="arrow">
                                    <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11"></path></svg>
                                </span>
                            </a>
                            <a className="btn btn-ghost" href="https://www.linkedin.com/in/naveenkumarpasupuleti/" target="_blank" rel="noreferrer noopener">
                                Connect on LinkedIn
                                <span className="arrow">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M9 12h6M12 9v6"></path></svg>
                                </span>
                            </a>
                        </div>
                        <div className="hero-stats" data-reveal>
                            <div className="stat">
                                <span className="ring solid">5+</span>
                                <span className="stat-label">
                                    <b>years</b>exp
                                </span>
                            </div>
                            <div className="stat">
                                <span className="ring">4</span>
                                <span className="stat-label">
                                    <b>salesforce</b>certs
                                </span>
                            </div>
                            <div className="stat">
                                <span className="ring coral">{githubRepos}</span>
                                <span className="stat-label">
                                    <b>repos</b>github
                                </span>
                            </div>
                        </div>
                        <div className="hero-foot" data-reveal>
                            <span className="meta">↳ &nbsp; SDET @ TestVagrant Technologies</span>
                            <span className="coord">14.4426° N · 79.9865° E</span>
                        </div>
                    </div>
                    <div className="hero-art" data-reveal="scale">
                        <span className="corner tl"></span>
                        <span className="corner tr"></span>
                        <span className="corner bl"></span>
                        <span className="corner br"></span>
                        <span className="annot annot-tl coord">FIG. 01 / NKP-26</span>
                        <span className="annot annot-tr">Plate Nº 01</span>
                        <span className="annot annot-bl coord">LOC · Nellore, IN</span>
                        <span className="annot annot-br">
                            Composed in <span style={{ color: 'var(--coral)' }}>Next.js</span>
                        </span>
                        
                        <div 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                src="/avatar.jpg" 
                                alt="Naveen Kumar Pasupuleti"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'right center' }}
                                priority
                            />
                        </div>

                        <div className="index">
                            <span>
                                <span className="n">01</span>Plan
                            </span>
                            <span className="on">
                                <span className="n">02</span>Automate
                            </span>
                            <span>
                                <span className="n">03</span>Execute
                            </span>
                            <span>
                                <span className="n">04</span>Verify
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Ticker Wire Section */}
            <section className="wire" data-od-id="wire" aria-label="Global wire — cities and contributor activities">
                <div className="container wire-inner">
                    <div className="wire-left">
                        <span className="wire-mark" aria-hidden="true">
                            <span className="wire-pulse"></span>
                        </span>
                        <span className="wire-title">
                            <b>Activity Feed</b>
                            <span>Nellore · Bangalore · Live</span>
                        </span>
                    </div>
                    <div className="wire-rows">
                        <div className="wire-row">
                            <div className="marquee-track" aria-hidden="true">
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">14.44°N</span><span className="wire-name">Nellore</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">12.97°N</span><span className="wire-name">Bangalore</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">13.08°N</span><span className="wire-name">Chennai</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">19.07°N</span><span className="wire-name">Mumbai</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">28.61°N</span><span className="wire-name">Delhi</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">52.52°N</span><span className="wire-name">Berlin</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">37.77°N</span><span className="wire-name">San Francisco</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">14.44°N</span><span className="wire-name">Nellore</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">12.97°N</span><span className="wire-name">Bangalore</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">13.08°N</span><span className="wire-name">Chennai</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">19.07°N</span><span className="wire-name">Mumbai</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">28.61°N</span><span className="wire-name">Delhi</span></span>
                            </div>
                        </div>
                        <div className="wire-row reverse">
                            <div className="marquee-track">
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@sfdcnaveen</span><span className="wire-role">{githubPulse}</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@playwright</span><span className="wire-role">TEST AUTOMATION</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@salesforce</span><span className="wire-role">CRM ENGINEERING</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@typescript</span><span className="wire-role">TYPE-SAFE CODE</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@sfdcnaveen</span><span className="wire-role">ACTIVELY CONTRIBUTING</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@github-actions</span><span className="wire-role">CI/CD INTEGRATION</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@sfdcnaveen</span><span className="wire-role">{githubPulse}</span></span>
                                <span className="wire-item"><span className="wire-dot">·</span><span className="wire-handle">@playwright</span><span className="wire-role">TEST AUTOMATION</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
