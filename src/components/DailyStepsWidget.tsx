'use client';

import React, { useState, useEffect } from 'react';
import Card from './Card';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SFPortfolioSettings } from '@/types/salesforce';

interface DailyStepsWidgetProps {
    settings: SFPortfolioSettings | null;
}

function useAnimatedNumber(value: number | null, duration: number = 2000) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (value === null) return;

        let startTimestamp: number | null = null;
        let animationFrameId: number;
        const startValue = displayValue;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart animation for a much smoother deceleration at the end
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setDisplayValue(Math.floor(startValue + (value - startValue) * easeProgress));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, duration]); // intentionally excluding displayValue from dependencies

    return displayValue;
}

export default function DailyStepsWidget() {
    const [steps, setSteps] = useState<number | null>(null);
    const animatedSteps = useAnimatedNumber(steps, 2000);

    useEffect(() => {
        async function syncSteps() {
            try {
                const res = await fetch('/api/sync-steps');
                const data = await res.json();
                if (data.success && typeof data.steps === 'number') {
                    setSteps(data.steps);
                }
            } catch (e) {
                console.error('Failed to sync steps', e);
            }
        }
        syncSteps();
    }, []);

    return (
        <Card title="Daily Steps">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <div
                    style={{
                        width: '64px',
                        height: '64px',
                        flexShrink: 0,
                    }}
                >
                    <DotLottieReact src="/lotties/walking.lottie" loop autoplay />
                </div>
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            fontSize: '2.25rem',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            color: 'var(--slds-g-color-neutral-base-10)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {animatedSteps.toLocaleString()}
                    </div>
                    <div
                        style={{
                            fontSize: '0.875rem',
                            color: 'var(--slds-g-color-neutral-base-30)',
                        }}
                    >
                        Steps today
                    </div>
                </div>
            </div>
        </Card>
    );
}
