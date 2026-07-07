'use client';

import React, { useEffect, useState } from 'react';
import styles from './UpdateNotification.module.css';

export default function UpdateNotification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show once per user for this specific update version
        const hasSeenUpdate = localStorage.getItem('hasSeenUpdate_v2_1');
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
        localStorage.setItem('hasSeenUpdate_v2_1', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} role="dialog" aria-labelledby="update-title">
                <div className={styles.header}>
                    <h2 id="update-title" className={styles.title}>
                        🎉 What&apos;s New
                    </h2>
                    <p className={styles.subtitle}>Version 2.1 is here!</p>
                </div>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>☁️</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>New Salesforce Org & Data Cloud</h3>
                            <p className={styles.itemDesc}>
                                Shifted from the old org to a new org for better data management,
                                leveraging Agentforce and Data Cloud!
                            </p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>🤖</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Agentforce Upgrade</h3>
                            <p className={styles.itemDesc}>
                                The interactive AI assistant has been upgraded to a smarter
                                Agentforce bot to assist you directly from the chat button.
                            </p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>🚶</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Live Fitbit Tracking</h3>
                            <p className={styles.itemDesc}>
                                The steps shown are now real, live data fetched directly from my
                                Fitbit tracker!
                            </p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>🎵</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Last.fm Integration</h3>
                            <p className={styles.itemDesc}>
                                Added Last.fm integration to show the music track I listened to most
                                recently.
                            </p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>🎨</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Dynamic Micro-Animations</h3>
                            <p className={styles.itemDesc}>
                                The portfolio now feels more alive with beautiful, high-quality
                                Lottie animations enhancing the experience.
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
