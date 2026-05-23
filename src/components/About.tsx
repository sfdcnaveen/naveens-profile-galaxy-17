'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="about" id="about" data-od-id="about">
            <div className="container">
                <div className="sec-rule">
                    <span className="roman">II.</span>
                    <span className="meta-grp">
                        <span>About / Manifesto</span>
                        <span className="dot-mark">•</span>
                        <span>Quality Engineering / Volume 01</span>
                    </span>
                    <span>002 / 008</span>
                </div>
                <div className="about-grid">
                    <div className="about-copy" data-reveal>
                        <span className="label">About the Engineer <span className="ix">· Nº 02</span></span>
                        <h2 className="display">
                            We break <em>builds</em> so that you can ship <em>uncompromising</em> software<span className="dot">.</span>
                        </h2>
                        <p className="lead">
                            I am a modern quality engineer and automation architect. Specializing in the Salesforce ecosystem and modern JS automation using Playwright and TypeScript, with a focus on deterministic test suites, rapid feedback, and enterprise-scale quality engineering.
                        </p>
                        <a 
                            className="btn btn-ghost" 
                            href="https://github.com/sfdcnaveen" 
                            target="_blank" 
                            rel="noreferrer noopener"
                            style={{ width: 'fit-content' }}
                        >
                            Read My Code
                            <span className="arrow">
                                <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11"></path></svg>
                            </span>
                        </a>
                        <div className="footer-row">
                            <span className="mark">Ø</span>
                            <span>Plan · Automate · Execute · Verify · Repeat</span>
                            <span className="stamp">
                                <span>Engineering Practice</span>
                                <span style={{ color: 'var(--ink)' }}>Est. MMXXI</span>
                            </span>
                        </div>
                    </div>
                    <div className="about-art" data-reveal="right">
                        <div className="art-img-wrapper" style={{ minHeight: '300px', maxHeight: '35vh' }}>
                            <Image 
                                src="/about-art.png" 
                                alt="Abstract visual composition representing automated testing flows"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="about-side-note">
                            <b></b>
                            From script execution<br />to full test coverage,<br />we construct<br />deterministic systems<br />of quality.
                        </div>
                        <div className="about-caption">
                            <b>Studies in validation · stability · automated execution.</b>
                            (Naveen Kumar, MMXXVI)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
