'use client';

import React, { useEffect, useMemo, useState } from 'react';
import styles from './OnboardingTour.module.css';

const STORAGE_KEY = 'portfolio-onboarding-tour-complete';

type TourStep = {
    title: string;
    body: string;
    selector?: string;
};

type HighlightRect = {
    top: number;
    left: number;
    width: number;
    height: number;
};

const getElementRect = (selector?: string): HighlightRect | null => {
    if (!selector) return null;

    const element = document.querySelector<HTMLElement>(selector);
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
    };
};

const getTooltipStyle = (highlightRect: HighlightRect | null) => {
    if (!highlightRect) return undefined;

    const viewportPadding = 16;
    const cardGap = 16;
    const cardWidth = Math.min(420, window.innerWidth - viewportPadding * 2);
    const estimatedCardHeight = 300;
    const centeredLeft = highlightRect.left + highlightRect.width / 2 - cardWidth / 2;

    const left = Math.min(
        window.innerWidth - cardWidth - viewportPadding,
        Math.max(viewportPadding, centeredLeft)
    );

    const preferredTop = highlightRect.top + highlightRect.height + cardGap;
    const fallbackTop = highlightRect.top - estimatedCardHeight - cardGap;
    const top =
        preferredTop + estimatedCardHeight > window.innerHeight - viewportPadding
            ? fallbackTop
            : preferredTop;

    return {
        top: Math.max(
            viewportPadding,
            Math.min(window.innerHeight - estimatedCardHeight - viewportPadding, top)
        ),
        left,
        width: cardWidth,
    };
};

export default function OnboardingTour() {
    const steps = useMemo<TourStep[]>(
        () => [
            {
                title: 'Welcome to the Salesforce-style portfolio',
                body: 'This quick tour shows how to move through the portfolio like a Lightning record page.',
            },
            {
                title: 'Open the App Launcher',
                body: 'Use this launcher to switch between the professional portfolio and the photography portfolio experience.',
                selector: '[data-tour="app-launcher"]',
            },
            {
                title: 'Search portfolio records',
                body: 'Search works like a global Salesforce search for tabs, sections, projects, skills, and experience.',
                selector: '[data-tour="global-search"]',
            },
            {
                title: 'Review the record highlights',
                body: 'The Highlights Panel summarizes the profile record, key details, and primary actions at a glance.',
                selector: '[data-tour="highlights-panel"]',
            },
            {
                title: 'Navigate with Lightning tabs',
                body: 'Use tabs to move between details, projects, certifications, and related skills without leaving the record page.',
                selector: '[data-tour="record-tabs"]',
            },
            {
                title: 'Use record actions',
                body: 'These actions give quick access to the resume and contact flow, similar to actions on a Salesforce record.',
                selector: '[data-tour="record-actions"]',
            },
            {
                title: 'Scan related profile details',
                body: 'The side panel keeps contact links, testimonial context, and live activity close to the main record.',
                selector: '[data-tour="profile-sidebar"]',
            },
        ],
        []
    );

    const [isOpen, setIsOpen] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [highlightRect, setHighlightRect] = useState<HighlightRect | null>(null);

    const activeStep = steps[stepIndex];
    const isLastStep = stepIndex === steps.length - 1;

    useEffect(() => {
        const hasCompletedTour = window.localStorage.getItem(STORAGE_KEY) === 'true';
        if (!hasCompletedTour) {
            window.setTimeout(() => setIsOpen(true), 0);
        }

        const startTour = () => {
            setStepIndex(0);
            setIsOpen(true);
        };

        window.addEventListener('portfolio:start-tour', startTour);
        return () => window.removeEventListener('portfolio:start-tour', startTour);
    }, []);

    useEffect(() => {
        if (!isOpen || !activeStep) return;

        const updateHighlight = () => {
            const rect = getElementRect(activeStep.selector);
            setHighlightRect(rect);
        };

        updateHighlight();
        window.addEventListener('resize', updateHighlight);
        window.addEventListener('scroll', updateHighlight, true);

        return () => {
            window.removeEventListener('resize', updateHighlight);
            window.removeEventListener('scroll', updateHighlight, true);
        };
    }, [activeStep, isOpen]);

    useEffect(() => {
        if (!isOpen || !activeStep?.selector) return;

        const element = document.querySelector<HTMLElement>(activeStep.selector);
        element?.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
    }, [activeStep, isOpen]);

    if (!isOpen || !activeStep) return null;

    const completeTour = () => {
        window.localStorage.setItem(STORAGE_KEY, 'true');
        setIsOpen(false);
    };

    const nextStep = () => {
        if (isLastStep) {
            completeTour();
            return;
        }

        setStepIndex((current) => Math.min(current + 1, steps.length - 1));
    };

    const previousStep = () => {
        setStepIndex((current) => Math.max(current - 1, 0));
    };

    const tooltipStyle = getTooltipStyle(highlightRect);

    return (
        <div className={styles.tourLayer} role="dialog" aria-modal="true" aria-labelledby="tour-title">
            <div className={styles.scrim} />

            {highlightRect && (
                <div
                    className={styles.highlight}
                    style={{
                        top: highlightRect.top - 8,
                        left: highlightRect.left - 8,
                        width: highlightRect.width + 16,
                        height: highlightRect.height + 16,
                    }}
                />
            )}

            <section
                className={`${styles.card} ${highlightRect ? styles.anchoredCard : ''}`}
                style={tooltipStyle}
            >
                <div className={styles.eyebrow}>Guided Tour</div>
                <h2 id="tour-title" className={styles.title}>
                    {activeStep.title}
                </h2>
                <p className={styles.body}>{activeStep.body}</p>

                <div className={styles.progress}>
                    {steps.map((step, index) => (
                        <span
                            key={step.title}
                            className={`${styles.progressDot} ${
                                index <= stepIndex ? styles.progressDotActive : ''
                            }`}
                        />
                    ))}
                </div>

                <div className={styles.footer}>
                    <button type="button" className={styles.skipButton} onClick={completeTour}>
                        Skip tour
                    </button>
                    <div className={styles.actions}>
                        <button
                            type="button"
                            className={styles.neutralButton}
                            onClick={previousStep}
                            disabled={stepIndex === 0}
                        >
                            Back
                        </button>
                        <button type="button" className={styles.brandButton} onClick={nextStep}>
                            {isLastStep ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
