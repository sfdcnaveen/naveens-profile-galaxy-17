import React from 'react';
import { SFPortfolioSettings } from '@/types/salesforce';
import Accordion from './Accordion';

interface AboutProps {
    settings?: SFPortfolioSettings | null;
}

export default function About({ settings }: AboutProps) {
    return (
        <Accordion title="About Naveen Kumar Pasupuleti" id="tab-details_accordion-about">
            <div style={{ padding: '0 var(--slds-g-spacing-small)' }}>
                <p
                    style={{
                        marginBottom: 'var(--slds-g-spacing-medium)',
                        color: 'var(--slds-g-color-neutral-base-10)',
                    }}
                >
                    {settings?.About_Me_Description__c}
                </p>
                <div
                    style={{
                        backgroundColor: 'var(--slds-g-color-neutral-base-95)',
                        padding: 'var(--slds-g-spacing-medium)',
                        borderRadius: '4px',
                        borderLeft: '3px solid var(--slds-g-color-brand-base-50)',
                    }}
                >
                    <strong>{settings?.Side_Note_Title__c}</strong>
                    <p style={{ marginTop: 'var(--slds-g-spacing-small)' }}>
                        {settings?.Side_Note_Description__c}
                    </p>
                    <p style={{ marginTop: 'var(--slds-g-spacing-small)', fontStyle: 'italic' }}>
                        - {settings?.Full_Name__c ? `(${settings.Full_Name__c})` : ''}
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
                            {settings?.Years_of_Experience__c
                                ? `${settings.Years_of_Experience__c}+`
                                : ''}
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
                            {settings?.Total_Certifications__c || ''}
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
                            {settings?.Total_GitHub_Repos__c
                                ? `${settings.Total_GitHub_Repos__c}+`
                                : ''}
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
