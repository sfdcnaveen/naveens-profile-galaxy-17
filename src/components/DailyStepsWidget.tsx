'use client';

import React from 'react';
import Card from './Card';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SFPortfolioSettings } from '@/types/salesforce';

interface DailyStepsWidgetProps {
    settings: SFPortfolioSettings | null;
}

export default function DailyStepsWidget({ settings }: DailyStepsWidgetProps) {
    const steps = settings?.Daily_Steps__c ? settings.Daily_Steps__c.toLocaleString() : '13,261';

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
                        {steps}
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
