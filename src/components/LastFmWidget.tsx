'use client';

import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';

interface TrackData {
    currentTrack: string;
    previewUrl: string | null;
    verb: string;
}

export default function LastFmWidget() {
    const [data, setData] = useState<TrackData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        fetch('/api/get-recent-track')
            .then((res) => res.json())
            .then((json: TrackData) => {
                setData(json);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    if (loading) {
        return (
            <Card title="Music Info">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                    }}
                >
                    <div
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--slds-g-color-neutral-base-60)',
                        }}
                    ></div>
                    Fetching live track...
                </div>
            </Card>
        );
    }

    if (!data) return null;

    return (
        <Card title="Live Status">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    fontSize: '0.875rem',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#fa243c',
                            marginTop: '0.35rem',
                            boxShadow: '0 0 8px rgba(250, 36, 60, 0.6)',
                        }}
                    ></div>
                    <div style={{ flex: 1, lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--slds-g-color-neutral-base-30)' }}>
                            {data.verb}{' '}
                        </span>
                        <strong
                            style={{
                                color: 'var(--slds-g-color-brand-base-50)',
                                display: 'inline-block',
                            }}
                        >
                            {data.currentTrack}
                        </strong>
                    </div>
                </div>

                {data.previewUrl && (
                    <div style={{ marginTop: '0.25rem' }}>
                        <audio
                            ref={audioRef}
                            src={data.previewUrl}
                            onEnded={() => setIsPlaying(false)}
                        />
                        <button
                            onClick={togglePlay}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'transparent',
                                border: '1px solid var(--slds-g-color-border-base-40)',
                                borderRadius: '999px',
                                padding: '0.35rem 0.8rem',
                                color: 'var(--slds-g-color-neutral-base-10)',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor =
                                    'var(--slds-g-color-brand-base-50)';
                                e.currentTarget.style.color = 'var(--slds-g-color-brand-base-50)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor =
                                    'var(--slds-g-color-border-base-40)';
                                e.currentTarget.style.color = 'var(--slds-g-color-neutral-base-10)';
                            }}
                        >
                            {isPlaying ? (
                                <>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                    </svg>
                                    Pause Preview
                                </>
                            ) : (
                                <>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    Play Preview
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </Card>
    );
}
