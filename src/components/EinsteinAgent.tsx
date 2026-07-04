'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { createRoot } from 'react-dom/client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function EinsteinAgent() {
    // These should be populated from your Salesforce MIAW (Messaging for In-App and Web) deployment
    const orgId = process.env.NEXT_PUBLIC_SF_ORG_ID;
    const deploymentName = process.env.NEXT_PUBLIC_SF_DEPLOYMENT_NAME;
    const siteUrl = process.env.NEXT_PUBLIC_SF_SITE_URL;
    const scrt2Url = process.env.NEXT_PUBLIC_SF_SCRT2_URL;

    useEffect(() => {
        if (!orgId || !deploymentName || !siteUrl) {
            console.warn(
                'Einstein Agent is not initialized. Please configure NEXT_PUBLIC_SF_ORG_ID, NEXT_PUBLIC_SF_DEPLOYMENT_NAME, and NEXT_PUBLIC_SF_SITE_URL in your .env.local'
            );
            return;
        }

        // MutationObserver to enhance Salesforce Embedded Chat DOM with Apple HIG interactions
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length) {
                    // 1. Entrance animation for the Help Button
                    const helpButtonContainer = document.querySelector(
                        '.embeddedServiceHelpButton'
                    );
                    if (
                        helpButtonContainer &&
                        !helpButtonContainer.classList.contains('bot-loaded')
                    ) {
                        helpButtonContainer.classList.add('bot-loaded');
                    }

                    // Custom Agent Lottie Injection - Robust overlay method
                    const helpButtonWrapper = document.querySelector(
                        '.embeddedServiceHelpButton .helpButton'
                    );
                    if (helpButtonWrapper && !document.querySelector('.custom-agent-lottie')) {
                        const lottieOverlay = document.createElement('div');
                        lottieOverlay.className = 'custom-agent-lottie';
                        lottieOverlay.style.position = 'absolute';
                        lottieOverlay.style.top = '50%';
                        lottieOverlay.style.left = '50%';
                        lottieOverlay.style.transform = 'translate(-50%, -50%)';
                        lottieOverlay.style.pointerEvents = 'none'; // Allow clicks to pass to the real button
                        helpButtonWrapper.appendChild(lottieOverlay);

                        const root = createRoot(lottieOverlay);
                        root.render(
                            <div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <DotLottieReact src="/lotties/agent.lottie" loop autoplay />
                            </div>
                        );
                    }

                    // 2. Chat Window logic (Drag-to-dismiss & Keyboard handling)
                    const sidebar = document.querySelector(
                        '.embeddedServiceSidebar'
                    ) as HTMLElement;
                    if (sidebar && !sidebar.classList.contains('is-open')) {
                        sidebar.classList.add('is-open');

                        // Implement Drag-to-Dismiss on mobile
                        const header = sidebar.querySelector('.sidebarHeader') as HTMLElement;
                        if (header && window.innerWidth < 768) {
                            let startY = 0;
                            let currentY = 0;
                            let isDragging = false;

                            const onTouchStart = (e: TouchEvent) => {
                                startY = e.touches[0].clientY;
                                isDragging = true;
                                sidebar.style.transition = 'none';
                            };

                            const onTouchMove = (e: TouchEvent) => {
                                if (!isDragging) return;
                                currentY = e.touches[0].clientY;
                                const deltaY = currentY - startY;
                                if (deltaY > 0) {
                                    sidebar.style.transform = `translateY(${deltaY}px)`;
                                }
                            };

                            const onTouchEnd = () => {
                                isDragging = false;
                                sidebar.style.transition =
                                    'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                                const deltaY = currentY - startY;

                                // If dragged down more than 40% of window height, close it
                                if (deltaY > window.innerHeight * 0.4) {
                                    sidebar.classList.remove('is-open');
                                    sidebar.classList.add('is-closing');
                                    setTimeout(() => {
                                        // Find and click the close button to actually close the Salesforce session
                                        const closeBtn = header.querySelector(
                                            '.closeButton, .minimizeButton'
                                        ) as HTMLButtonElement;
                                        if (closeBtn) closeBtn.click();
                                        sidebar.style.transform = '';
                                        sidebar.classList.remove('is-closing');
                                    }, 250);
                                } else {
                                    // Snap back
                                    sidebar.style.transform = 'translateY(0)';
                                }
                            };

                            header.addEventListener('touchstart', onTouchStart, { passive: true });
                            header.addEventListener('touchmove', onTouchMove, { passive: true });
                            header.addEventListener('touchend', onTouchEnd);
                        }

                        // Handle VisualViewport for iOS Keyboard to prevent chat from being hidden
                        if (window.visualViewport) {
                            const onViewportResize = () => {
                                if (window.innerWidth < 768 && sidebar) {
                                    const viewportHeight =
                                        window.visualViewport?.height || window.innerHeight;
                                    const offset = window.innerHeight - viewportHeight;
                                    if (offset > 0) {
                                        sidebar.style.height = `${viewportHeight}px`;
                                        sidebar.style.bottom = `${offset}px`;
                                    } else {
                                        sidebar.style.height = '88vh';
                                        sidebar.style.bottom = '0px';
                                    }
                                }
                            };
                            window.visualViewport.addEventListener('resize', onViewportResize);
                        }
                    }

                    // 3. Replace default typing indicator with Apple-style pulsing dots
                    const typingIndicators = document.querySelectorAll('.waitingState');
                    typingIndicators.forEach((indicator) => {
                        if (!indicator.classList.contains('apple-typing-applied')) {
                            indicator.innerHTML =
                                '<div class="bot-typing-indicator"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
                            indicator.classList.add('apple-typing-applied');
                        }
                    });
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, [orgId, deploymentName, siteUrl]);

    if (!orgId || !deploymentName || !siteUrl) {
        return null;
    }

    return (
        <>
            <Script
                id="salesforce-einstein-agent"
                strategy="lazyOnload"
                src={`${siteUrl}/assets/js/bootstrap.min.js`}
                onLoad={() => {
                    try {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const _window = window as any;
                        if (_window.embeddedservice_bootstrap) {
                            _window.embeddedservice_bootstrap.settings.language = 'en_US';
                            _window.embeddedservice_bootstrap.init(orgId, deploymentName, siteUrl, {
                                scrt2URL: scrt2Url,
                            });
                        }
                    } catch (err) {
                        console.error('Error loading Einstein Agent: ', err);
                    }
                }}
            />
        </>
    );
}
