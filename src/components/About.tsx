import React from 'react';
import { aboutContent } from '@/data/content';
import Accordion from './Accordion';

export default function About() {
    return (
        <Accordion title="About Me" id="tab-details_accordion-about">
            <div style={{ padding: '0 var(--slds-g-spacing-small)' }}>
                <p
                    style={{
                        marginBottom: 'var(--slds-g-spacing-medium)',
                        color: 'var(--slds-g-color-neutral-base-10)',
                    }}
                >
                    {aboutContent.description}
                </p>
                <div
                    style={{
                        backgroundColor: 'var(--slds-g-color-neutral-base-95)',
                        padding: 'var(--slds-g-spacing-medium)',
                        borderRadius: '4px',
                        borderLeft: '3px solid var(--slds-g-color-brand-base-50)',
                    }}
                >
                    <strong>{aboutContent.sideNote.title}</strong>
                    <p style={{ marginTop: 'var(--slds-g-spacing-small)' }}>
                        {aboutContent.sideNote.desc}
                    </p>
                    <p style={{ marginTop: 'var(--slds-g-spacing-small)', fontStyle: 'italic' }}>
                        - {aboutContent.sideNote.signature}
                    </p>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                        gap: 'var(--slds-g-spacing-medium)',
                        marginTop: 'var(--slds-g-spacing-large)',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem',
                            border: '1px solid var(--slds-g-color-border-base-40)',
                            borderRadius: '4px',
                            textAlign: 'center',
                            backgroundColor: 'var(--slds-g-color-neutral-base-100)',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: 'var(--slds-g-color-brand-base-50)',
                                lineHeight: 1,
                            }}
                        >
                            5+
                        </span>
                        <span
                            style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                color: 'var(--slds-g-color-neutral-base-30)',
                                marginTop: '0.5rem',
                                letterSpacing: 0,
                                fontWeight: 600,
                            }}
                        >
                            Years Exp
                        </span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem',
                            border: '1px solid var(--slds-g-color-border-base-40)',
                            borderRadius: '4px',
                            textAlign: 'center',
                            backgroundColor: 'var(--slds-g-color-neutral-base-100)',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: 'var(--slds-g-color-brand-base-50)',
                                lineHeight: 1,
                            }}
                        >
                            4
                        </span>
                        <span
                            style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                color: 'var(--slds-g-color-neutral-base-30)',
                                marginTop: '0.5rem',
                                letterSpacing: 0,
                                fontWeight: 600,
                            }}
                        >
                            Salesforce Certs
                        </span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem',
                            border: '1px solid var(--slds-g-color-border-base-40)',
                            borderRadius: '4px',
                            textAlign: 'center',
                            backgroundColor: 'var(--slds-g-color-neutral-base-100)',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: 'var(--slds-g-color-brand-base-50)',
                                lineHeight: 1,
                            }}
                        >
                            20+
                        </span>
                        <span
                            style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                color: 'var(--slds-g-color-neutral-base-30)',
                                marginTop: '0.5rem',
                                letterSpacing: 0,
                                fontWeight: 600,
                            }}
                        >
                            GitHub Repos
                        </span>
                    </div>
                </div>
            </div>
        </Accordion>
    );
}
