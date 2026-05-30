'use client';

import React from 'react';
import { trackEvent } from '@/lib/tracking';

export default function SocialLinks() {
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
                    href="https://linkedin.com/in/naveenkumarpasupuleti"
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => trackEvent('social_link_clicked', { platform: 'linkedin' })}
                >
                    linkedin.com/in/naveenkumarpasupuleti
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
                    href="https://github.com/sfdcnaveen"
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => trackEvent('social_link_clicked', { platform: 'github' })}
                >
                    github.com/sfdcnaveen
                </a>
            </li>
        </ul>
    );
}
