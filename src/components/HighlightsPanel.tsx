import React from 'react';
import styles from './HighlightsPanel.module.css';

const HighlightsPanel = () => {
    return (
        <div className={styles.highlightsPanel}>
            <div className={styles.mainInfo}>
                <div className={styles.iconContainer}>
                    <img src="/avatar.png" alt="Naveen" className={styles.avatar} />
                </div>
                <div className={styles.textInfo}>
                    <span className={styles.entityName}>Profile Record</span>
                    <h1 className={styles.recordName}>Naveen Kumar Pasupuleti</h1>
                </div>
                <div className={styles.actions}>
                    <button className={styles.buttonNeutral}>Follow</button>
                    <button className={styles.buttonBrand}>Download Resume</button>
                    <div className={styles.buttonGroup}>
                        <button className={styles.buttonIcon}>
                            <svg viewBox="0 0 52 52" className={styles.iconSm}>
                                <path d="M46 14l-20 20-20-20"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ul className={styles.keyFields}>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Title</span>
                    <span className={styles.fieldValue}>SDET & Salesforce Automation Expert</span>
                </li>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Company</span>
                    <span className={styles.fieldValue}>TestVagrant Technologies</span>
                </li>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Location</span>
                    <span className={styles.fieldValue}>India (☀️ 32°C)</span>
                </li>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>GitHub Pulse</span>
                    <span className={styles.fieldValue} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%', display: 'inline-block' }}></span>
                        Actively coding
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default HighlightsPanel;
