'use client';

import React, { useEffect, useState } from 'react';
import styles from './UpdateNotification.module.css';

export default function UpdateNotification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show once per user for this specific update version
        const hasSeenUpdate = localStorage.getItem('hasSeenUpdate_v3_0');
        if (!hasSeenUpdate) {
            // Slight delay so it doesn't pop up instantly before page loads
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenUpdate_v3_0', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} role="dialog" aria-labelledby="update-title">
                <div className={styles.header}>
                    <h2 id="update-title" className={styles.title}>
                        🎉 What&apos;s New
                    </h2>
                    <p className={styles.subtitle}>Version 3.0 is here!</p>
                </div>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>🎙️</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Live Media Feed Integration</h3>
                            <p className={styles.itemDesc}>
                                Seamlessly display the top three most recently played podcast
                                episodes, keeping the interface synced with current interests and
                                professional insights.
                            </p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>✨</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Ambient Interface Styling</h3>
                            <p className={styles.itemDesc}>
                                Introduced a sophisticated ambient lighting effect behind media
                                thumbnails, dynamically reflecting the color palette of the artwork
                                for a premium visual depth.
                            </p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>⚡</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Performance & Speed Optimizations</h3>
                            <p className={styles.itemDesc}>
                                Replaced heavy animation libraries and migrated weather and activity
                                sync logic to server-side pre-fetching, achieving near-instantaneous
                                page load speeds and layout stability.
                            </p>
                        </div>
                    </li>
                </ul>

                <button className={styles.button} onClick={handleDismiss}>
                    Awesome!
                </button>
            </div>
        </div>
    );
}
