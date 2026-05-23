'use client';

import React from 'react';

export default function Skills() {
    return (
        <section className="capabilities" id="skills" data-od-id="capabilities">
            <div className="container">
                <div className="sec-rule">
                    <span className="roman">III.</span>
                    <span className="meta-grp">
                        <span>Capabilities · Skills · Systems</span>
                        <span className="dot-mark">•</span>
                        <span>4 Core Domains</span>
                    </span>
                    <span>003 / 008</span>
                </div>
                <div className="capabilities-grid">
                    <div className="capabilities-art" data-reveal="left">
                        <span className="corner tl"></span>
                        <span className="corner br"></span>

                        <div className="ribbon"><b>NAVEEN KUMAR</b> &nbsp;·&nbsp; CAPABILITIES MATRIX &nbsp;·&nbsp; NKP/26</div>
                    </div>
                    <div className="capabilities-copy" data-reveal>
                        <span className="label">Capabilities <span className="ix">· Nº 03</span></span>
                        <h2 className="display">
                            Frameworks, platforms, and strategies <em>for enterprise</em> reliability<span className="dot">.</span>
                        </h2>
                        <p className="lead">
                            I build automated verification systems tailored for complex Salesforce application logic and modern web frameworks, focusing on execution speed and stability.
                        </p>
                        <div className="cards">
                            <div className="card" data-reveal>
                                <div className="num">01<span className="tag">Automation</span></div>
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="9" cy="9" r="5" /><path d="M14 14l5 5" />
                                </svg>
                                <h3>Core Web<br />Automation</h3>
                                <p>Modern test suites using Playwright and TypeScript (90% capacity). Experienced in Selenium and WebdriverIO.</p>
                                <a className="arrow-mark" href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener" aria-label="Learn more about Automation">
                                    <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                                </a>
                            </div>
                            <div className="card" data-reveal>
                                <div className="num">02<span className="tag">Salesforce</span></div>
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3.5" y="3.5" width="8" height="8" /><rect x="12.5" y="3.5" width="8" height="8" /><rect x="3.5" y="12.5" width="8" height="8" /><rect x="12.5" y="12.5" width="8" height="8" />
                                </svg>
                                <h3>Salesforce<br />QA Specialist</h3>
                                <p>Certified Platform Developer I & II, AI Associate, and Platform Foundations. Expert in service/sales cloud testing.</p>
                                <a className="arrow-mark" href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener" aria-label="Learn more about Salesforce">
                                    <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                                </a>
                            </div>
                            <div className="card" data-reveal>
                                <div className="num">03<span className="tag">CI/CD</span></div>
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="8" cy="12" r="4.5" /><circle cx="16" cy="12" r="4.5" />
                                </svg>
                                <h3>Continuous<br />Integration</h3>
                                <p>GitHub Actions and Jenkins pipeline choreography. Low-latency automated regression runs on code push.</p>
                                <a className="arrow-mark" href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener" aria-label="Learn more about CI/CD">
                                    <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                                </a>
                            </div>
                            <div className="card" data-reveal>
                                <div className="num">04<span className="tag">APIs</span></div>
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 8h14v8H5z" /><path d="M9 12h6M12 9v6" />
                                </svg>
                                <h3>Integration<br />& APIs</h3>
                                <p>REST Assured automation and mock API designs. Validation of service interfaces and backend contracts.</p>
                                <a className="arrow-mark" href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener" aria-label="Learn more about APIs">
                                    <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
