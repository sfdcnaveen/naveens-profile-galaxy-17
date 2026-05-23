'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            {/* Section VII: Testimonial & Collaborators */}
            <section className="testimonial" id="testimonial" data-od-id="testimonial" style={{ borderTop: '1px solid var(--line)', paddingTop: '100px', paddingBottom: '100px' }}>
                <div className="container">
                    <div className="sec-rule">
                        <span className="roman">VII.</span>
                        <span className="meta-grp">
                            <span>Collaborators / Impact</span>
                            <span className="dot-mark">•</span>
                            <span>Engineering Delivery</span>
                        </span>
                        <span>007 / 008</span>
                    </div>
                    <div className="testimonial-grid">
                        <div className="testimonial-copy" data-reveal>
                            <span className="label">Testimonials <span className="ix">· Nº 06</span></span>
                            <h2 style={{ marginTop: '30px', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                                &ldquo;Naveen&rsquo;s shift-left automation design reduced our Salesforce regression cycles by 40%. Flakiness was eliminated, and our deployment velocity doubled.&rdquo;
                            </h2>
                            <div className="author">
                                <span className="avatar">C</span>
                                <p>Lead Delivery Manager<br /><span>Capgemini Salesforce Operations</span></p>
                            </div>
                            <div className="divider"></div>
                            <p className="partners-text">Leveraging and contributing to open-source testing culture.</p>
                            <div className="partners">
                                <div className="partner" data-reveal>
                                    <div className="glyph" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>🎭</div>
                                    <span>Playwright</span>
                                    <small>Testing</small>
                                </div>
                                <div className="partner" data-reveal>
                                    <div className="glyph" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>TS</div>
                                    <span>TypeScript</span>
                                    <small>Language</small>
                                </div>
                                <div className="partner" data-reveal>
                                    <div className="glyph" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>⚙️</div>
                                    <span>Actions</span>
                                    <small>CI/CD</small>
                                </div>
                                <div className="partner" data-reveal>
                                    <div className="glyph" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>🐳</div>
                                    <span>Docker</span>
                                    <small>Containers</small>
                                </div>
                                <div className="partner" data-reveal>
                                    <div className="glyph" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>📊</div>
                                    <span>Meteo</span>
                                    <small>API</small>
                                </div>
                                <div className="partner" data-reveal>
                                    <div className="glyph" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>🎵</div>
                                    <span>Last.fm</span>
                                    <small>Media</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-art" data-reveal="right">
                            <div className="art-img-wrapper" style={{ minHeight: '280px', maxHeight: '30vh' }}>
                                <Image
                                    src="/testimonial-art.png"
                                    alt="Visual representation of automated pipeline metrics"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section VIII: CTA */}
            <section className="cta" id="contact" data-od-id="cta" style={{ borderTop: '1px solid var(--line)' }}>
                <div className="container">
                    <div className="sec-rule">
                        <span className="roman">VIII.</span>
                        <span className="meta-grp">
                            <span>Contact / Conversation</span>
                            <span className="dot-mark">•</span>
                            <span>Open Connection</span>
                        </span>
                        <span>008 / 008</span>
                    </div>
                    <div className="cta-grid">
                        <div data-reveal>
                            <span className="label">Start a conversation <span className="ix">· Nº 07</span></span>
                            <h2 className="display">Let&apos;s build something <em>robust</em> and <em>seamlessly</em> automated<span className="dot">.</span></h2>
                            <p className="lead">
                                I am available for automation framework reviews, Capgemini/Salesforce QA consulting, or high-impact SDET leadership roles. Let&apos;s define your testing standards.
                            </p>
                            <div className="cta-actions">
                                <a className="btn btn-primary" href="mailto:pasupulatink@gmail.com">
                                    Send an Email
                                    <span className="arrow"><svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg></span>
                                </a>
                                <a className="email-pill" href="https://www.linkedin.com/in/naveenkumarpasupuleti/" target="_blank" rel="noreferrer noopener">
                                    Connect on LinkedIn
                                    <span className="arrow-circle">→</span>
                                </a>
                            </div>
                            <div className="cta-foot">
                                <span className="stamp">● Available</span>
                                <span>sfdcnaveen / inbox</span>
                                <span style={{ marginLeft: 'auto' }}>14.4426° N · 79.9865° E</span>
                            </div>
                        </div>
                        <div className="cta-art" data-reveal="right">
                            <div className="art-img-wrapper" style={{ minHeight: '300px', maxHeight: '35vh' }}>
                                <Image
                                    src="/cta-art.png"
                                    alt="Abstract automation visual composition"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="index">Nº 08</div>
                            <div className="ribbon">NAVEEN KUMAR &nbsp;·&nbsp; FIN.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer data-od-id="footer">
                <div className="container">
                    <div className="foot-grid">
                        <div className="foot-brand">
                            <a href="#top" className="brand">
                                <span className="brand-mark">Ø</span>
                                <span>Naveen Kumar</span>
                            </a>
                            <p style={{ marginTop: '18px' }}>
                                High-impact SDET expert specializing in Playwright, TypeScript, and Salesforce quality engineering. Building robust automation structures that scale with organization growth.
                            </p>
                        </div>
                        <div className="foot-col">
                            <h5>Navigation</h5>
                            <ul>
                                <li><a href="#about">Manifesto</a></li>
                                <li><a href="#skills">Capabilities</a></li>
                                <li><a href="#experience">Timeline</a></li>
                                <li><a href="#projects">Selected Work</a></li>
                            </ul>
                        </div>
                        <div className="foot-col">
                            <h5>Library</h5>
                            <ul>
                                <li><a href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener">GitHub Profile</a></li>
                                <li><a href="https://naveen-photography-portfolio.vercel.app/" target="_blank" rel="noreferrer noopener">Creative Lens</a></li>
                                <li><a href="#highlights">Experiments</a></li>
                            </ul>
                        </div>
                        <div className="foot-col">
                            <h5>Connect</h5>
                            <ul>
                                <li><a href="mailto:pasupulatink@gmail.com">Email Inbox</a></li>
                                <li><a href="https://www.linkedin.com/in/naveenkumarpasupuleti/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
                                <li><a href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener">GitHub Handles</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="foot-bottom">
                        <span>● <b style={{ color: 'var(--ink)' }}>Naveen Kumar Pasupuleti</b> · MIT License · 2026</span>
                        <span className="right">
                            <span>Nellore / Bengaluru / Earth</span>
                            <span>14.4426° N · 79.9865° E</span>
                            <span style={{ color: 'var(--coral)' }}>♥ MMXXVI</span>
                        </span>
                    </div>
                    <div className="foot-mega">
                        <div className="word" data-reveal="rise-lg">Naveen <em>Pasupuleti</em>.</div>
                    </div>
                </div>
            </footer>
        </>
    );
}
