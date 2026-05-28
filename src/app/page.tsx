import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import HighlightsPanel from '@/components/HighlightsPanel';
import Tabs from '@/components/Tabs';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Card from '@/components/Card';
import { footerContent } from '@/data/content';

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <GlobalHeader />
            <main className="container" style={{ flexGrow: 1, paddingBottom: 'var(--slds-g-spacing-large)' }}>
                <HighlightsPanel />
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--slds-g-spacing-large)', alignItems: 'start' }}>
                    <div className="main-column" style={{ minHeight: '65vh', minWidth: 0 }}>
                        <div style={{ backgroundColor: 'var(--slds-g-color-neutral-base-100)', border: '1px solid var(--slds-g-color-border-base-40)', borderRadius: '4px', boxShadow: 'var(--slds-g-shadow-depth-1)', height: '100%' }}>
                            <Tabs
                                defaultActiveTab="details"
                                tabs={[
                                    {
                                        id: 'details',
                                        label: 'Details',
                                        content: (
                                            <div style={{ padding: '0 var(--slds-g-spacing-medium)', display: 'flex', flexDirection: 'column', gap: 'var(--slds-g-spacing-medium)' }}>
                                                <About />
                                                <Experience />
                                                <Projects />
                                            </div>
                                        )
                                    },
                                    {
                                        id: 'related',
                                        label: 'Related',
                                        content: (
                                            <div style={{ padding: '0 var(--slds-g-spacing-medium)', display: 'flex', flexDirection: 'column', gap: 'var(--slds-g-spacing-medium)' }}>
                                                <Skills />
                                            </div>
                                        )
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    
                    <aside className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--slds-g-spacing-medium)' }}>
                        <Card title="Contact Info">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
                                <li style={{ padding: 'var(--slds-g-spacing-small) 0', borderBottom: '1px solid var(--slds-g-color-border-base-40)' }}>
                                    <span style={{ color: 'var(--slds-g-color-neutral-base-30)', display: 'block', fontSize: '0.75rem' }}>LinkedIn</span>
                                    <a href="https://linkedin.com/in/naveenkumarpasupuleti" target="_blank" rel="noreferrer">linkedin.com/in/naveenkumarpasupuleti</a>
                                </li>
                                <li style={{ padding: 'var(--slds-g-spacing-small) 0' }}>
                                    <span style={{ color: 'var(--slds-g-color-neutral-base-30)', display: 'block', fontSize: '0.75rem' }}>GitHub</span>
                                    <a href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer">github.com/sfdcnaveen</a>
                                </li>
                            </ul>
                        </Card>
                        
                        <Card title="Testimonial">
                            <div style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: 'var(--slds-g-spacing-small)' }}>
                                "{footerContent.testimonial.quote}"
                            </div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--slds-g-color-brand-base-50)' }}>
                                - {footerContent.testimonial.authorRole}, {footerContent.testimonial.authorCompany}
                            </div>
                        </Card>
                    </aside>
                </div>
            </main>
        </div>
    );
}
