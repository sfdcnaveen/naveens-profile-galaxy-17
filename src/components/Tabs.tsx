'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { trackEvent } from '@/lib/tracking';
import styles from './Tabs.module.css';

interface TabItem {
    id: string;
    label: string;
    icon?: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    defaultActiveTab?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].id);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) return;

            const matchedTab = tabs.find((t) => hash.startsWith(`tab-${t.id}`));
            if (matchedTab) {
                setActiveTab(matchedTab.id);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [tabs]);

    return (
        <div className={styles.tabsContainer}>
            <ul className={styles.tabNav} role="tablist" data-tour="record-tabs">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`${styles.tabItem} ${activeTab === tab.id ? styles.active : ''}`}
                        role="presentation"
                    >
                        <button
                            type="button"
                            className={styles.tabButton}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                trackEvent('tab_clicked', { tab_id: tab.id, tab_label: tab.label });
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {tab.icon && (
                                    <Image
                                        src={tab.icon}
                                        alt=""
                                        width={16}
                                        height={16}
                                        style={{
                                            borderRadius: '4px',
                                        }}
                                    />
                                )}
                                {tab.label}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.tabContent}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        role="tabpanel"
                        className={`${styles.tabPanel} ${activeTab === tab.id ? styles.activePanel : ''}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
