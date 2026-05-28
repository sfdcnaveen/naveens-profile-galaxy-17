import React from 'react';
import styles from './GlobalHeader.module.css';
import ThemeToggle from './ThemeToggle';

const GlobalHeader = () => {
    return (
        <header className={styles.globalHeader}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {/* App Launcher Icon mock */}
                    <div className={styles.appLauncher}>
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
                    <span className={styles.appName}>Portfolio</span>
                </div>
                <div className={styles.center}>
                    <div className={styles.searchBar}>
                        <span>Search Salesforce...</span>
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
