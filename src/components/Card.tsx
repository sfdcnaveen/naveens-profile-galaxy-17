import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children, actions }) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <div className={styles.headerMedia}>
                    {icon && <div className={styles.icon}>{icon}</div>}
                    <h2 className={styles.title}>{title}</h2>
                </div>
                {actions && <div className={styles.actions}>{actions}</div>}
            </header>
            <div className={styles.body}>{children}</div>
        </article>
    );
};

export default Card;
