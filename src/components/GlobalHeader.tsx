'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import styles from './GlobalHeader.module.css';
import ThemeToggle from './ThemeToggle';
import { skillsContent, experienceContent, projectsContent } from '@/data/content';
import Link from 'next/link';

const GlobalHeader = () => {
    const [isAppLauncherOpen, setIsAppLauncherOpen] = useState(false);
    const appLauncherRef = useRef<HTMLDivElement>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Aggregate searchable data
    const allSearchableItems = useMemo(() => {
        const items: {
            type: string;
            title: string;
            desc: string;
            tags?: string;
            link?: string | null;
        }[] = [];

        // Add Tabs
        items.push({
            type: 'Tab',
            title: 'Details',
            desc: 'About the Engineer & Timeline',
            link: '#tab-details',
        });
        items.push({
            type: 'Tab',
            title: 'Projects',
            desc: 'Selected Work & Frameworks',
            link: '#tab-projects',
        });
        items.push({
            type: 'Tab',
            title: 'Certifications',
            desc: 'Salesforce & QA Certifications',
            link: '#tab-certifications',
        });
        items.push({
            type: 'Tab',
            title: 'Related',
            desc: 'Skills & Core Competencies',
            link: '#tab-related',
        });

        // Add Accordion sections
        items.push({
            type: 'Section',
            title: 'About the Engineer',
            desc: 'Studies in validation and stability',
            link: '#tab-details_accordion-about',
        });
        items.push({
            type: 'Section',
            title: 'Work Experience',
            desc: 'Timeline and milestones',
            link: '#tab-details_accordion-experience',
        });
        items.push({
            type: 'Section',
            title: 'Skills & Core Competencies',
            desc: 'Frameworks, platforms, and strategies',
            link: '#tab-related_accordion-capabilities',
        });

        projectsContent.projects.forEach((p) => {
            items.push({
                type: 'Project',
                title: p.title,
                desc: p.desc,
                tags: p.tags,
                link: '#tab-projects',
            });
        });

        skillsContent.skills.forEach((s) => {
            items.push({
                type: 'Skill',
                title: s.title.replace('\n', ' '),
                desc: s.desc,
                tags: s.tag,
                link: '#tab-related_accordion-capabilities',
            });
        });

        experienceContent.timeline.forEach((e) => {
            items.push({
                type: 'Experience',
                title: e.role,
                desc: e.desc,
                tags: e.meta,
                link: '#tab-details_accordion-experience',
            });
        });

        return items;
    }, []);

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase();
        return allSearchableItems.filter(
            (item) =>
                item.title.toLowerCase().includes(q) ||
                item.desc.toLowerCase().includes(q) ||
                (item.tags && item.tags.toLowerCase().includes(q))
        );
    }, [searchQuery, allSearchableItems]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (appLauncherRef.current && !appLauncherRef.current.contains(event.target as Node)) {
                setIsAppLauncherOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className={styles.globalHeader}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {/* App Launcher */}
                    <div className={styles.appLauncherWrapper} ref={appLauncherRef}>
                        <div
                            className={styles.appLauncher}
                            onClick={() => setIsAppLauncherOpen(!isAppLauncherOpen)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isAppLauncherOpen}
                            aria-haspopup="true"
                        >
                            <svg viewBox="0 0 52 52" className={styles.icon}>
                                <circle cx="10" cy="10" r="4" fill="currentColor" />
                                <circle cx="26" cy="10" r="4" fill="currentColor" />
                                <circle cx="42" cy="10" r="4" fill="currentColor" />
                                <circle cx="10" cy="26" r="4" fill="currentColor" />
                                <circle cx="26" cy="26" r="4" fill="currentColor" />
                                <circle cx="42" cy="26" r="4" fill="currentColor" />
                                <circle cx="10" cy="42" r="4" fill="currentColor" />
                                <circle cx="26" cy="42" r="4" fill="currentColor" />
                                <circle cx="42" cy="42" r="4" fill="currentColor" />
                            </svg>
                        </div>

                        {isAppLauncherOpen && (
                            <div className={styles.appLauncherMenu}>
                                <div className={styles.appLauncherHeader}>
                                    <h3>App Launcher</h3>
                                </div>
                                <ul className={styles.appList}>
                                    <li>
                                        <Link
                                            href="/"
                                            className={styles.appItem}
                                            onClick={() => setIsAppLauncherOpen(false)}
                                        >
                                            <div
                                                className={styles.appIconWrapper}
                                                style={{
                                                    backgroundColor:
                                                        'var(--slds-g-color-brand-base-50)',
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className={styles.appIconIcon}
                                                >
                                                    <path
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <div className={styles.appItemText}>
                                                <span className={styles.appItemTitle}>
                                                    Professional Portfolio
                                                </span>
                                                <span className={styles.appItemDesc}>
                                                    Salesforce QA & SDET Profile
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/photography"
                                            className={styles.appItem}
                                            onClick={() => setIsAppLauncherOpen(false)}
                                        >
                                            <div
                                                className={styles.appIconWrapper}
                                                style={{ backgroundColor: '#ff5a5f' }}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className={styles.appIconIcon}
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="3.2"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <div className={styles.appItemText}>
                                                <span className={styles.appItemTitle}>
                                                    Photography Portfolio
                                                </span>
                                                <span className={styles.appItemDesc}>
                                                    Creative visual captures
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <span className={styles.appName}>Portfolio</span>
                </div>
                <div className={styles.center}>
                    <div className={styles.searchContainer} ref={searchRef}>
                        <div className={styles.searchBar}>
                            <svg viewBox="0 0 24 24" className={styles.searchIcon}>
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                    fill="currentColor"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search Salesforce Portfolio..."
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setIsSearchOpen(true);
                                }}
                                onFocus={() => setIsSearchOpen(true)}
                            />
                        </div>
                        {isSearchOpen && searchQuery.trim() && (
                            <div className={styles.searchDropdown}>
                                {searchResults.length > 0 ? (
                                    <ul className={styles.searchList}>
                                        {searchResults.map((item, index) => (
                                            <li key={index} className={styles.searchResultItem}>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        target={
                                                            item.link.startsWith('#')
                                                                ? undefined
                                                                : '_blank'
                                                        }
                                                        rel={
                                                            item.link.startsWith('#')
                                                                ? undefined
                                                                : 'noreferrer'
                                                        }
                                                        className={styles.searchResultLink}
                                                        onClick={() => setIsSearchOpen(false)}
                                                    >
                                                        <div className={styles.searchResultContent}>
                                                            <span
                                                                className={
                                                                    styles.searchResultCategory
                                                                }
                                                            >
                                                                {item.type}
                                                            </span>
                                                            <span
                                                                className={styles.searchResultTitle}
                                                            >
                                                                {item.title}
                                                            </span>
                                                            <span
                                                                className={styles.searchResultDesc}
                                                            >
                                                                {item.desc}
                                                            </span>
                                                        </div>
                                                    </a>
                                                ) : (
                                                    <div className={styles.searchResultLink}>
                                                        <div className={styles.searchResultContent}>
                                                            <span
                                                                className={
                                                                    styles.searchResultCategory
                                                                }
                                                            >
                                                                {item.type}
                                                            </span>
                                                            <span
                                                                className={styles.searchResultTitle}
                                                            >
                                                                {item.title}
                                                            </span>
                                                            <span
                                                                className={styles.searchResultDesc}
                                                            >
                                                                {item.desc}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className={styles.noResults}>
                                        No results found for &quot;{searchQuery}&quot;
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.right} style={{ display: 'flex', alignItems: 'center' }}>
                    <ThemeToggle />
                    <div className={styles.userProfile}>
                        <img src="/avatar.png" alt="User Profile" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default GlobalHeader;
