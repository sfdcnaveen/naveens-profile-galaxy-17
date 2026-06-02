'use client';

import React from 'react';
import { trackEvent } from '@/lib/tracking';
import { SFPortfolioSettings } from '@/types/salesforce';

interface SocialLinksProps {
    settings?: SFPortfolioSettings | null;
}

export default function SocialLinks({ settings }: SocialLinksProps) {
    const linkedinUrl = settings?.LinkedIn_URL__c || 'https://linkedin.com/in/naveenkumarpasupuleti';
    const githubUrl = settings?.GitHub_URL__c || 'https://github.com/sfdcnaveen';
    const emailAddress = settings?.Email_Address__c || 'pasupulatink@gmail.com';
    
    const formatUrlDisplay = (url: string) => {
        return url.replace(/^https?:\/\/(www\.)?/, '');
    };
    return (
        <ul
            style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.875rem',
            }}
        >
            <li
                style={{
                    padding: 'var(--slds-g-spacing-small) 0',
                    borderBottom: '1px solid var(--slds-g-color-border-base-40)',
                }}
            >
                <span
                    style={{
                        color: 'var(--slds-g-color-neutral-base-30)',
                        display: 'block',
                        fontSize: '0.75rem',
                    }}
                >
                    LinkedIn
                </span>
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => trackEvent('social_link_clicked', { platform: 'linkedin' })}
                >
                    {formatUrlDisplay(linkedinUrl)}
                </a>
            </li>
            <li style={{ padding: 'var(--slds-g-spacing-small) 0' }}>
                <span
                    style={{
                        color: 'var(--slds-g-color-neutral-base-30)',
                        display: 'block',
                        fontSize: '0.75rem',
                    }}
                >
                    GitHub
                </span>
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => trackEvent('social_link_clicked', { platform: 'github' })}
                >
                    {formatUrlDisplay(githubUrl)}
                </a>
            </li>
        </ul>
    );
}
