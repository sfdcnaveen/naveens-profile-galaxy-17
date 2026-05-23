'use client';

import React from 'react';

export default function Experience() {
    return (
        <section className="method" id="experience" data-od-id="method">
            <div className="container">
                <div className="sec-rule">
                    <span className="roman">V.</span>
                    <span className="meta-grp">
                        <span>Career Timeline / Method</span>
                        <span className="dot-mark">•</span>
                        <span>04 Stages, Iterative Growth</span>
                    </span>
                    <span>005 / 008</span>
                </div>
                <div className="method-head">
                    <div data-reveal>
                        <span className="label">Timeline <span className="ix">· Nº 05</span></span>
                        <h2 className="display" style={{ marginTop: '30px' }}>
                            From <em>manual</em> scripts to fully <em>autonomous</em> pipelines<span className="dot">.</span>
                        </h2>
                    </div>
                    <div className="right" data-reveal="right" style={{ paddingTop: '14px' }}>
                        <span className="plus">+</span>
                        <p style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--ink-soft)', maxWidth: '24ch', lineHeight: '1.55' }}>
                            Each milestone represents a deep dive into execution speed, test stability, and platform engineering.
                        </p>
                    </div>
                </div>
                <div 
                    className="method-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '40px'
                    }}
                >
                    {/* Stage 1 */}
                    <div className="method-step" data-reveal>
                        <div className="num">01</div>
                        <h4>SDET <span className="arrow-r">→</span></h4>
                        <p style={{ fontSize: '12px', color: 'var(--coral)', fontFamily: 'var(--sans)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '8px' }}>
                            TestVagrant · 2025 — Present
                        </p>
                        <p>
                            Architecting scalable quality assurance strategies for Salesforce. Custom TypeScript-Playwright suites.
                        </p>
                    </div>

                    {/* Stage 2 */}
                    <div className="method-step" data-reveal>
                        <div className="num">02</div>
                        <h4>Consultant <span className="arrow-r">→</span></h4>
                        <p style={{ fontSize: '12px', color: 'var(--coral)', fontFamily: 'var(--sans)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '8px' }}>
                            Capgemini · 2023 — 2025
                        </p>
                        <p>
                            Led Salesforce QA migrations. Shifted legacy test suites to Playwright, reducing regression runs by 40%.
                        </p>
                    </div>

                    {/* Stage 3 */}
                    <div className="method-step" data-reveal>
                        <div className="num">03</div>
                        <h4>Associate <span className="arrow-r">→</span></h4>
                        <p style={{ fontSize: '12px', color: 'var(--coral)', fontFamily: 'var(--sans)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '8px' }}>
                            Capgemini · 2021 — 2023
                        </p>
                        <p>
                            Established foundational testing methodologies for global Salesforce client rollouts and CRM features.
                        </p>
                    </div>

                    {/* Stage 4 */}
                    <div className="method-step" data-reveal>
                        <div className="num">04</div>
                        <h4>Next Chapter</h4>
                        <p style={{ fontSize: '12px', color: 'var(--coral)', fontFamily: 'var(--sans)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '8px' }}>
                            Future · Opportunities
                        </p>
                        <p>
                            Ready for new challenges in test architecture, framework engineering, and high-impact QA leadership.
                        </p>
                    </div>
                </div>
                <div className="method-foot">
                    <div className="left">
                        <span className="ring" style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', border: '1px dashed var(--ink-faint)', marginRight: '8px', verticalAlign: 'middle' }}></span>
                        <span>Experience shapes outcomes. Scripts make it real.</span>
                    </div>
                    <div className="right">
                        <a className="method-repo-link" href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener">
                            <b>github.com/sfdcnaveen</b>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
