'use client';

import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
        <Card title="Listening To">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    fontSize: '0.875rem',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                        style={{
                            width: '68px',
                            height: '68px',
                            marginTop: '-0.55rem',
                            flexShrink: 0,
                        }}
                    >
                        <DotLottieReact src="/lotties/equalizer.lottie" loop autoplay />
                    </div>
                    <div style={{ flex: 1, lineHeight: 1.4, minWidth: 0 }}>
                        <div
                            style={{
                                color: 'var(--slds-g-color-brand-base-50)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                marginBottom: '2px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {data.currentTrack.split(' - ')[0]}
                        </div>
                        <div
                            style={{
                                color: 'var(--slds-g-color-neutral-base-30)',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {data.currentTrack.split(' - ').slice(1).join(' - ')}
                        </div>
                    </div>

                    {data.previewUrl && (
                        <div style={{ flexShrink: 0 }}>
                            <audio
                                ref={audioRef}
                                src={data.previewUrl}
                                onEnded={() => setIsPlaying(false)}
                            />
                            <button
                                onClick={togglePlay}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '36px',
                                    height: '36px',
                                    background: 'transparent',
                                    border: '1px solid var(--slds-g-color-border-base-40)',
                                    borderRadius: '50%',
                                    color: 'var(--slds-g-color-neutral-base-10)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor =
                                        'var(--slds-g-color-brand-base-50)';
                                    e.currentTarget.style.color =
                                        'var(--slds-g-color-brand-base-50)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor =
                                        'var(--slds-g-color-border-base-40)';
                                    e.currentTarget.style.color =
                                        'var(--slds-g-color-neutral-base-10)';
                                }}
                                aria-label={isPlaying ? 'Pause' : 'Play'}
                            >
                                {isPlaying ? (
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                    </svg>
                                ) : (
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginLeft: '2px' }}
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}
