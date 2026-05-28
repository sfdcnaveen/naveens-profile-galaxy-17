'use client';

import React, { useState, useEffect } from 'react';
import styles from './HighlightsPanel.module.css';

const HighlightsPanel = () => {
    const [weather, setWeather] = useState('☀️ 32°C');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=14.442599&longitude=79.986458&current=temperature_2m,weather_code');
                if (!response.ok) return;
                const data = await response.json();
                
                const weatherCodes: Record<number, { icon: string }> = {
                    0: { icon: '☀️' }, 1: { icon: '🌤️' }, 2: { icon: '⛅' }, 3: { icon: '☁️' },
                    45: { icon: '🌫️' }, 48: { icon: '🌫️' }, 51: { icon: '🌦️' }, 53: { icon: '🌦️' },
                    55: { icon: '🌦️' }, 61: { icon: '🌧️' }, 63: { icon: '🌧️' }, 65: { icon: '🌧️' },
                    71: { icon: '❄️' }, 73: { icon: '❄️' }, 75: { icon: '❄️' }, 95: { icon: '⛈️' }
                };
                
                const temp = Math.round(data.current.temperature_2m);
                const code = data.current.weather_code;
                const icon = weatherCodes[code]?.icon || '☀️';
                
                setWeather(`${icon} ${temp}°C`);
            } catch (error) {
                console.log('Weather API failed', error);
            }
        };
        fetchWeather();
    }, []);

    return (
        <div className={styles.highlightsPanel}>
            <div className={styles.mainInfo}>
                <div className={styles.iconContainer}>
                    <img src="/avatar.png" alt="Naveen" className={styles.avatar} />
                </div>
                <div className={styles.textInfo}>
                    <span className={styles.entityName}>Profile Record</span>
                    <h1 className={styles.recordName}>Naveen's Portfolio</h1>
                </div>
                <div className={styles.actions}>
                    <a href="https://naveen-photography-portfolio.vercel.app/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <button className={styles.buttonNeutral}>Creative Lens</button>
                    </a>
                    <a href="/api/contact" style={{ textDecoration: 'none' }}>
                        <button className={styles.buttonBrand}>Send Email</button>
                    </a>
                    
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
                    <span className={styles.fieldValue}>Nellore ({weather})</span>
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
