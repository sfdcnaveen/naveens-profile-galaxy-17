'use client';

import React, { useState, useEffect } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
    id?: string;
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    defaultExpanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
    id,
    title,
    icon,
    children,
    defaultExpanded = true,
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && id && hash === id) {
                setIsExpanded(true);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [id]);

    return (
        <article id={id} className={`${styles.accordion} ${isExpanded ? styles.expanded : ''}`}>
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
                            <path d="M14 20l12 12 12-12" />
                        </svg>
                        {icon && <div className={styles.icon}>{icon}</div>}
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                </button>
            </header>
            {isExpanded && <div className={styles.body}>{children}</div>}
        </article>
    );
};

export default Accordion;
