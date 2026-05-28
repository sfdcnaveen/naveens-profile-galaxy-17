'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    defaultExpanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, icon, children, defaultExpanded = true }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <article className={`${styles.accordion} ${isExpanded ? styles.expanded : ''}`}>
            <header className={styles.header}>
                <button
                    className={styles.headerButton}
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                >
                    <div className={styles.headerContent}>
                        <svg
                            viewBox="0 0 52 52"
                            className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
                        >
                            <path d="M14 20l12 12 12-12"/>
                        </svg>
                        {icon && <div className={styles.icon}>{icon}</div>}
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                </button>
            </header>
            {isExpanded && (
                <div className={styles.body}>
                    {children}
                </div>
            )}
        </article>
    );
};

export default Accordion;
