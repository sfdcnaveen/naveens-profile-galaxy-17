'use client';

import React, { useEffect, useState } from 'react';
import styles from './UpdateNotification.module.css';

export default function UpdateNotification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show once per user for this specific update version
        const hasSeenUpdate = localStorage.getItem('hasSeenUpdate_v2');
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
        localStorage.setItem('hasSeenUpdate_v2', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} role="dialog" aria-labelledby="update-title">
                <div className={styles.header}>
                    <h2 id="update-title" className={styles.title}>
                        🎉 What&apos;s New
                    </h2>
                    <p className={styles.subtitle}>Version 2.0 is here!</p>
                </div>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>✨</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Meet the Agentforce Agent</h3>
                            <p className={styles.itemDesc}>
                                A new, interactive AI assistant is now available to answer your
                                questions right from the floating chat button!
                            </p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.icon}>🚶</div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Daily Steps Tracking</h3>
                            <p className={styles.itemDesc}>
                                Check out my real-time daily steps metric, newly added to the Daily
                                Steps section.
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
