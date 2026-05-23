'use client';

import React, { useState, useEffect } from 'react';

interface HNStory {
    id: number;
    title: string;
    url?: string;
}

const jokeFallbacks = [
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Software and cathedrals are much the same – first we build them, then we pray."
];

export default function BentoGrid() {
    const [news, setNews] = useState<React.ReactNode | null>(null);
    const [joke, setJoke] = useState('Loading a fresh developer joke...');
    const [jokeOpacity, setJokeOpacity] = useState(1);
    const [filter, setFilter] = useState('All');

    // Fetch HackerNews Tech Radar stories
    useEffect(() => {
        async function fetchTechNews() {
            try {
                const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
                if (!response.ok) throw new Error('HN Top Stories Error');
                const storyIds = await response.json();
                
                if (storyIds && storyIds.length >= 2) {
                    const stories: HNStory[] = [];
                    for (let i = 0; i < 2; i++) {
                        const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json?print=pretty`);
                        if (storyRes.ok) {
                            stories.push(await storyRes.json());
                        }
                    }
                    
                    if (stories.length === 2) {
                        setNews(
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {stories.map((story) => (
                                    <li key={story.id} style={{ fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                                        <a 
                                            href={story.url || `https://news.ycombinator.com/item?id=${story.id}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line)' }}
                                            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--coral)'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
                                        >
                                            {story.title} &#x2197;&#xFE0E;
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        );
                        return;
                    }
                }
                throw new Error('Incomplete HN data');
            } catch (error: any) {
                setNews(
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li style={{ fontSize: '12px' }}>
                            <a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'none' }}>
                                Playwright Documentation &#x2197;&#xFE0E;
                            </a>
                        </li>
                        <li style={{ fontSize: '12px' }}>
                            <a href="https://developer.salesforce.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'none' }}>
                                Salesforce Developer Resources &#x2197;&#xFE0E;
                            </a>
                        </li>
                    </ul>
                );
            }
        }
        fetchTechNews();
    }, []);

    // Fetch Joke Function
    const fetchDeveloperJoke = async (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setJokeOpacity(0);
        
        setTimeout(async () => {
            try {
                const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode');
                if (!response.ok) throw new Error('Joke API Error');
                const data = await response.json();
                
                if (data && data.joke) {
                    setJoke(`"${data.joke}"`);
                } else {
                    throw new Error('Invalid joke format');
                }
            } catch (error: any) {
                const randomFallback = jokeFallbacks[Math.floor(Math.random() * jokeFallbacks.length)];
                setJoke(`"${randomFallback}"`);
            }
            setJokeOpacity(1);
        }, 400);
    };

    // Load initial joke
    useEffect(() => {
        fetchDeveloperJoke();
    }, []);

    return (
        <section className="labs" id="highlights" data-od-id="labs">
            <div className="container">
                <div className="sec-rule">
                    <span className="roman">IV.</span>
                    <span className="meta-grp">
                        <span>Labs / Beyond Code</span>
                        <span className="dot-mark">•</span>
                        <span>03 Widgets catalog</span>
                    </span>
                    <span>004 / 008</span>
                </div>
                <div className="labs-head">
                    <div data-reveal>
                        <span className="label">Labs <span className="ix">· Nº 04</span></span>
                        <h2 className="display" style={{ marginTop: '30px' }}>
                            A living archive of <em>experiments</em>, widgets, and <em>creative escapes</em><span className="dot">.</span>
                        </h2>
                    </div>
                    <div className="pills" data-reveal="right">
                        <button className={`pill ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>
                            All<span className="count">3</span>
                        </button>
                        <button className={`pill ${filter === 'News' ? 'active' : ''}`} onClick={() => setFilter('News')}>
                            News<span className="count">1</span>
                        </button>
                        <button className={`pill ${filter === 'Creative' ? 'active' : ''}`} onClick={() => setFilter('Creative')}>
                            Creative<span className="count">1</span>
                        </button>
                        <button className={`pill ${filter === 'Joke' ? 'active' : ''}`} onClick={() => setFilter('Joke')}>
                            Joke<span className="count">1</span>
                        </button>
                    </div>
                </div>

                <div className="labs-meta">
                    <span className="ring">03</span>
                    <div className="meta-text">
                        <b>Dynamic connections</b>
                        API integrations in flux<br />fetching real-time info<br />to break formatting bounds
                    </div>
                </div>

                <div 
                    className="labs-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '22px'
                    }}
                >
                    {/* Item 1: Tech Radar */}
                    {(filter === 'All' || filter === 'News') && (
                        <div className="lab" data-reveal>
                            <span className="badge" style={{ display: 'inline-block', marginBottom: '8px', padding: '4px 8px', background: 'var(--ink)', color: 'var(--paper)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>News</span>
                            <div className="num-row">
                                <span>Nº 01</span>
                                <span>HN API</span>
                            </div>
                            <h4>Tech Radar</h4>
                            <div style={{ minHeight: '80px', marginTop: '8px', marginBottom: '14px' }}>
                                {news || <p style={{ fontSize: '13px', color: 'var(--ink-mute)' }}>Loading stories...</p>}
                            </div>
                            <a 
                                className="arrow-mark" 
                                href="https://news.ycombinator.com" 
                                target="_blank" 
                                rel="noreferrer noopener" 
                                aria-label="Open HackerNews"
                            >
                                <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                            </a>
                        </div>
                    )}

                    {/* Item 2: Creative Lens */}
                    {(filter === 'All' || filter === 'Creative') && (
                        <div className="lab" data-reveal>
                            <span className="badge" style={{ display: 'inline-block', marginBottom: '8px', padding: '4px 8px', background: 'var(--ink)', color: 'var(--paper)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Creative</span>
                            <div className="num-row">
                                <span>Nº 02</span>
                                <span>Lens</span>
                            </div>
                            <h4>Creative Lens</h4>
                            <p style={{ fontSize: '13px', color: 'var(--ink-mute)', marginBottom: '14px', lineHeight: '1.55' }}>
                                A part of me lives in quiet frames. Captured through the lens I always carry. Everyday moments, seen with feeling.
                            </p>
                            <a 
                                className="arrow-mark" 
                                href="https://naveen-photography-portfolio.vercel.app/" 
                                target="_blank" 
                                rel="noreferrer noopener" 
                                aria-label="Open photography portfolio"
                            >
                                <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                            </a>
                        </div>
                    )}

                    {/* Item 3: Coffee Break */}
                    {(filter === 'All' || filter === 'Joke') && (
                        <div 
                            className="lab" 
                            data-reveal
                            onClick={fetchDeveloperJoke}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="badge" style={{ display: 'inline-block', marginBottom: '8px', padding: '4px 8px', background: 'var(--ink)', color: 'var(--paper)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Joke</span>
                            <div className="num-row">
                                <span>Nº 03</span>
                                <span>Joke API</span>
                            </div>
                            <h4>Coffee Break</h4>
                            <p 
                                id="joke-text" 
                                style={{ 
                                    fontSize: '13px', 
                                    color: 'var(--ink-mute)', 
                                    fontStyle: 'italic', 
                                    lineHeight: '1.55',
                                    transition: 'opacity 0.4s ease', 
                                    opacity: jokeOpacity,
                                    marginBottom: '14px',
                                    minHeight: '60px'
                                }}
                            >
                                {joke}
                            </p>
                            <button 
                                className="arrow-mark" 
                                onClick={fetchDeveloperJoke}
                                aria-label="Fetch another developer joke"
                                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                            >
                                <svg viewBox="0 0 24 24" style={{ transform: 'rotate(90deg)' }}><path d="M21.5 2v6h-6M2.13 15.57a9 9 0 1 0 3.1-10.74L2 2" /></svg>
                            </button>
                        </div>
                    )}
                </div>

                <div className="labs-foot" style={{ marginTop: '50px' }}>
                    <div className="progress">
                        <span className="on"></span>
                        <span className="on"></span>
                        <span className="on"></span>
                        <span></span>
                    </div>
                    <span className="meta">
                        03 / 03 Widgets &nbsp;·&nbsp; 
                        <a 
                            className="library-link" 
                            href="https://github.com/sfdcnaveen" 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            style={{ color: 'var(--coral)', textDecoration: 'none', marginLeft: '6px' }}
                        >
                            VIEW GITHUB PROFILE →
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
}
