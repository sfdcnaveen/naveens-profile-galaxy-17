'use client';

import React, { useState, useEffect } from 'react';
import styles from './HighlightsPanel.module.css';

const PhotographyHighlights = () => {
    const [weather, setWeather] = useState('☀️ 32°C');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=14.442599&longitude=79.986458&current=temperature_2m,weather_code'
                );
                if (!response.ok) return;
                const data = await response.json();

                const weatherCodes: Record<number, { icon: string }> = {
                    0: { icon: '☀️' },
                    1: { icon: '🌤️' },
                    2: { icon: '⛅' },
                    3: { icon: '☁️' },
                    45: { icon: '🌫️' },
                    48: { icon: '🌫️' },
                    51: { icon: '🌦️' },
                    53: { icon: '🌦️' },
                    55: { icon: '🌦️' },
                    61: { icon: '🌧️' },
                    63: { icon: '🌧️' },
                    65: { icon: '🌧️' },
                    71: { icon: '❄️' },
                    73: { icon: '❄️' },
                    75: { icon: '❄️' },
                    95: { icon: '⛈️' },
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
                <div
                    className={styles.iconContainer}
                    style={{ backgroundColor: 'var(--slds-g-color-brand-base-50)' }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        style={{ width: '32px', height: '32px', fill: 'white' }}
                    >
                        <circle cx="12" cy="12" r="3.2"></circle>
                        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                    </svg>
                </div>
                <div className={styles.textInfo}>
                    <span className={styles.entityName}>Photography Record</span>
                    <h1 className={styles.recordName}>Naveen&apos;s Mobile Photography</h1>
                </div>
                <div className={styles.actions}>
                    <a href="/api/contact" style={{ textDecoration: 'none' }}>
                        <button className={styles.buttonBrand}>Contact for Prints</button>
                    </a>
                </div>
            </div>
            <ul className={styles.keyFields}>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Type</span>
                    <span className={styles.fieldValue}>Mobile Photography</span>
                </li>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Location</span>
                    <span className={styles.fieldValue}>Nellore ({weather})</span>
                </li>
                <li className={styles.keyField}>
                    <span className={styles.fieldLabel}>Status</span>
                    <span
                        className={styles.fieldValue}
                        style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                        <span
                            style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: '#4ade80',
                                borderRadius: '50%',
                                display: 'inline-block',
                            }}
                        ></span>
                        Capturing Moments
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default PhotographyHighlights;
