'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Projects() {
    const [isMobile, setIsMobile] = useState(false);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 880);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2 cards per page on desktop (4 cards total => 2 pages)
    // 1 card per page on mobile (4 cards total => 4 pages)
    const maxPages = isMobile ? 4 : 2;

    // Reset active page if it exceeds maxPages on resize
    useEffect(() => {
        if (activePage >= maxPages) {
            setActivePage(maxPages - 1);
        }
    }, [isMobile, maxPages, activePage]);

    const handleNext = () => {
        if (activePage < maxPages - 1) {
            setActivePage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activePage > 0) {
            setActivePage((prev) => prev - 1);
        }
    };

    return (
        <section className="tight" id="projects" data-od-id="work">
            <div className="work">
                <div className="work-rule">
                    <span className="roman">VI.</span>
                    <span style={{ display: 'inline-flex', gap: '24px' }}>
                        <span>Selected Work · 2026 Catalog</span>
                        <span style={{ color: 'var(--coral)' }}>•</span>
                        <span>Quality Automation Architecture</span>
                    </span>
                    <span>006 / 008</span>
                </div>
                
                <div className="work-grid">
                    {/* Left Column: static copy & metadata */}
                    <div className="work-copy" data-reveal>
                        <span className="label">Selected Work</span>
                        <h2>Frameworks that turn test cases into <em>deterministic</em> feedback loops<span className="dot">.</span></h2>
                        <a 
                            className="work-link" 
                            href="https://github.com/sfdcnaveen" 
                            target="_blank" 
                            rel="noreferrer noopener"
                            style={{ marginBottom: '30px' }}
                        >
                            View GitHub Projects
                        </a>
                        
                        {/* Stacking the meta-block inside copy column */}
                        <div 
                            style={{
                                 fontFamily: 'var(--mono)',
                                 fontSize: '11px',
                                 color: 'rgba(247, 241, 222, 0.4)',
                                 textTransform: 'uppercase',
                                 letterSpacing: '0.12em',
                                 lineHeight: 1.8,
                                 marginTop: '40px'
                            }}
                        >
                            <span>● sfdcnaveen / repositories</span><br />
                            <span>● Nellore · Bangalore</span><br />
                            <span>● Verified build state: green</span>
                        </div>
                    </div>

                    {/* Right Columns: Slider viewports */}
                    <div className="work-slider-viewport">
                        <div 
                            className="work-slider-track"
                            style={{
                                transform: `translateX(calc(-${activePage * 100}% - ${activePage * 48}px))`
                            }}
                        >
                            {/* Project 1: Aldar */}
                            <div className="work-card-wrapper">
                                <a 
                                    className="work-card" 
                                    data-reveal 
                                    href="https://www.aldar.com/en" 
                                    target="_blank" 
                                    rel="noreferrer noopener"
                                >
                                    <div className="label-row">
                                        <span className="small-label">Featured Client QA</span>
                                        <span className="index">01 / 04</span>
                                    </div>
                                    <h3>Aldar Real Estate</h3>
                                    <p>Architected full-cycle Salesforce QA for Dubai Aldar, automated service & sales cloud flows.</p>
                                    <div className="img" style={{ position: 'relative' }}>
                                        <Image 
                                            src="/aldar.png" 
                                            alt="Aldar logo" 
                                            fill
                                            style={{ objectFit: 'contain', padding: '16px' }}
                                        />
                                    </div>
                                    <div className="meta-row">
                                        <span className="year">2025 · DUBAI</span>
                                        <span>REAL ESTATE</span>
                                    </div>
                                </a>
                            </div>

                            {/* Project 2: CMOS */}
                            <div className="work-card-wrapper">
                                <a 
                                    className="work-card alt" 
                                    data-reveal 
                                    href="https://www.anz.com.au/support/complaints/" 
                                    target="_blank" 
                                    rel="noreferrer noopener"
                                >
                                    <div className="label-row">
                                        <span className="small-label">Compliance Testing</span>
                                        <span className="index">02 / 04</span>
                                    </div>
                                    <h3>CMOS / ANZ</h3>
                                    <p>Reliability testing for ANZ complaint management. Built data-integrity verification scripts.</p>
                                    <div className="img" style={{ position: 'relative' }}>
                                        <Image 
                                            src="/anz.png" 
                                            alt="ANZ Bank logo" 
                                            fill
                                            style={{ objectFit: 'contain', padding: '16px' }}
                                        />
                                    </div>
                                    <div className="meta-row">
                                        <span className="year">2024 · BANKING</span>
                                        <span>COMPLIANCE</span>
                                    </div>
                                </a>
                            </div>

                            {/* Project 3: NewNet */}
                            <div className="work-card-wrapper">
                                <a 
                                    className="work-card" 
                                    data-reveal 
                                    href="https://sfdcnaveen.github.io/NewNetWebsite/" 
                                    target="_blank" 
                                    rel="noreferrer noopener"
                                >
                                    <div className="label-row">
                                        <span className="small-label">macOS Utility</span>
                                        <span className="index">03 / 04</span>
                                    </div>
                                    <h3>NewNet Swift Utility</h3>
                                    <p>Native Swift menu-bar media manager utilizing yt-dlp. Low overhead, custom format selection.</p>
                                    <div className="img" style={{ position: 'relative' }}>
                                        <Image 
                                            src="/newnet.png" 
                                            alt="NewNet application icon" 
                                            fill
                                            style={{ objectFit: 'contain', padding: '16px' }}
                                        />
                                    </div>
                                    <div className="meta-row">
                                        <span className="year">2024 · MACOS</span>
                                        <span>SWIFT / UTILITY</span>
                                    </div>
                                </a>
                            </div>

                            {/* Project 4: SF Automation Suite */}
                            <div className="work-card-wrapper">
                                <div 
                                    className="work-card alt" 
                                    data-reveal
                                >
                                    <div className="label-row">
                                        <span className="small-label">Proprietary Engine</span>
                                        <span className="index">04 / 04</span>
                                    </div>
                                    <h3>SF Automation Suite</h3>
                                    <p>Playwright-based engine for complex Salesforce UI elements. Integrated into CI actions.</p>
                                    <div className="img" style={{ position: 'relative' }}>
                                        <Image 
                                            src="/sf_clean.png" 
                                            alt="SF Automation Suite logo" 
                                            fill
                                            style={{ objectFit: 'contain', padding: '16px' }}
                                        />
                                    </div>
                                    <div className="meta-row">
                                        <span className="year">2024 · ENGINE</span>
                                        <span>TEST ARCHITECTURE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="work-arrows">
                    <button 
                        className={`nav-btn ${activePage > 0 ? 'active' : ''}`} 
                        onClick={handlePrev}
                        disabled={activePage === 0}
                        aria-label="Previous work"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M14 6l-6 6 6 6" />
                        </svg>
                    </button>
                    <button 
                        className={`nav-btn ${activePage < maxPages - 1 ? 'active' : ''}`} 
                        onClick={handleNext}
                        disabled={activePage === maxPages - 1}
                        aria-label="Next work"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M10 6l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
