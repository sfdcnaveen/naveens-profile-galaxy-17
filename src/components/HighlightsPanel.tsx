'use client';

import React from 'react';
import styles from './HighlightsPanel.module.css';
import Image from 'next/image';

import { SFPortfolioSettings } from '@/types/salesforce';

interface HighlightsPanelProps {
    settings?: SFPortfolioSettings | null;
}

const HighlightsPanel = ({ settings }: HighlightsPanelProps) => {
    return (
        <div className={styles.highlightsPanel} data-tour="highlights-panel">
            <div className={styles.mainInfo}>
                <div className={styles.iconContainer}>
                    <Image
                        src="/new-avatar.png"
                        alt="Naveen Kumar Pasupuleti - Salesforce QA Expert"
                        className={styles.avatar}
                        width={56}
                        height={56}
                        priority
                    />
                </div>
                <div className={styles.textInfo}>
                    <span className={styles.entityName}>Senior QA Automation Engineer</span>
                    <h1 className={styles.recordName}>
                        {settings?.Full_Name__c || 'Naveen Kumar Pasupuleti'}
                    </h1>
                </div>
                <div className={styles.actions} data-tour="record-actions">
                    <a
                        href={settings?.Resume_URL__c || '#'}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className={styles.buttonBrand}>View Resume</button>
                    </a>
                    <a href="/api/contact" style={{ textDecoration: 'none' }}>
                        <button className={styles.buttonNeutral}>Get in Touch</button>
                    </a>
                </div>
            </div>
            <ul className={styles.keyFields}>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Specialization</span>
                    <span className={styles.fieldValue}>
                        {settings?.Headline_Title__c || 'Salesforce & Playwright'}
                    </span>
                </li>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Current Role</span>
                    <span className={styles.fieldValue}>
                        {settings?.Current_Company__c || 'QA Architect'}
                    </span>
                </li>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Availability</span>
                    <span
                        className={styles.fieldValue}
                        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                        <div className={styles.pulseDot} />
                        Open to Projects
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default HighlightsPanel;
