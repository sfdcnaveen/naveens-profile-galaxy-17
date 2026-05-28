import React from 'react';
import styles from './GlobalHeader.module.css';

const GlobalHeader = () => {
    return (
        <header className={styles.globalHeader}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {/* App Launcher Icon mock */}
                    <div className={styles.appLauncher}>
                        <svg viewBox="0 0 52 52" className={styles.icon}>
                            <path d="M10 10h10v10H10zm11 0h10v10H21zm11 0h10v10H32zM10 21h10v10H10zm11 0h10v10H21zm11 0h10v10H32zM10 32h10v10H10zm11 0h10v10H21zm11 0h10v10H32z"/>
                        </svg>
                    </div>
                    <span className={styles.appName}>Portfolio App</span>
                </div>
                <div className={styles.center}>
                    <div className={styles.searchBar}>
                        <span>Search Salesforce...</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.userProfile}>
                        <img src="/avatar.png" alt="User Profile" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default GlobalHeader;
