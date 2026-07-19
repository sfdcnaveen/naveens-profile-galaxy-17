'use client';

import React, { useEffect, useState } from 'react';
import styles from './SalesforceLoader.module.css';

export default function SalesforceLoader() {
    const [visible, setVisible] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Trigger fade-out animation
        const fadeTimer = setTimeout(() => {
            setFade(true);
        }, 1200);

        // Completely unmount loader component once faded
        const removeTimer = setTimeout(() => {
            setVisible(false);
        }, 1700);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className={`${styles.loaderOverlay} ${fade ? styles.fade : ''}`}>
            <div className={styles.spinnerContainer}>
                {/* Salesforce Cloud SVG logo */}
                <div className={styles.logoWrapper}>
                    <svg
                        width="48"
                        height="34"
                        viewBox="0 0 24 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.4 6.7C19 2.9 15.9 0 12 0c-2.9 0-5.5 1.6-6.7 4.1C2.3 4.6 0 7.3 0 10.6c0 3.5 2.9 6.4 6.4 6.4h12.8c2.6 0 4.8-2.1 4.8-4.8 0-2.5-2-4.5-4.6-4.5z"
                            fill="#0176D3"
                        />
                    </svg>
                </div>
                {/* SLDS circular spin halo */}
                <div className={styles.spinner}></div>
            </div>
            <div className={styles.loadingText}>Unleashing portfolio in Salesforce Lightning</div>
        </div>
    );
}
