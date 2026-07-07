'use client';

import React, { useState, useCallback } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { DotLottie } from '@lottiefiles/dotlottie-react';
import styles from './AgentTrigger.module.css';

export default function AgentTrigger() {
    const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

    const dotLottieRefCallback = useCallback((dotLottieInstance: DotLottie) => {
        setDotLottie(dotLottieInstance);
    }, []);

    const handleMouseEnter = () => {
        if (dotLottie) dotLottie.play();
    };

    const handleMouseLeave = () => {
        if (dotLottie) dotLottie.pause();
    };
    const handleClick = () => {
        console.log('Agentforce trigger clicked!');
        // Fallback to clicking the native Salesforce button which we hid with CSS
        const defaultBtn = document.querySelector(
            '.embeddedServiceHelpButton .helpButton .uiButton'
        ) as HTMLElement;
        if (defaultBtn) {
            defaultBtn.click();
        } else {
            console.warn('Salesforce chat button not found yet.');
            // Attempt utilAPI if button isn't found but API is present
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof window !== 'undefined' && (window as any).embeddedservice_bootstrap) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const bootstrap = (window as any).embeddedservice_bootstrap;
                    if (bootstrap.utilAPI && bootstrap.utilAPI.launchChat) {
                        bootstrap.utilAPI.launchChat();
                    }
                } catch (e) {
                    console.error('Failed to launch chat via API:', e);
                }
            }
        }
    };

    return (
        <div
            className={styles.triggerContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            title="Chat with Portfolio Assistant"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            }}
        >
            <div className={styles.lottieWrapper}>
                <DotLottieReact
                    src="/lotties/agent.lottie"
                    loop
                    dotLottieRefCallback={dotLottieRefCallback}
                />
            </div>
        </div>
    );
}
