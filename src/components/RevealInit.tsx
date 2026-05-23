'use client';

import { useEffect } from 'react';

export default function RevealInit() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // IntersectionObserver to reveal elements when they enter the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).setAttribute('data-revealed', 'true');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });

        const observedElements = new Set<Element>();

        // Register element for scroll reveal
        const registerElement = (el: Element) => {
            if (observedElements.has(el)) return;
            observedElements.add(el);

            if (isReduced) {
                el.setAttribute('data-revealed', 'true');
            } else {
                observer.observe(el);
            }
        };

        // Scan and register elements already present in DOM
        const initialElements = document.querySelectorAll('[data-reveal]');
        initialElements.forEach((el) => registerElement(el));

        // Parallax items list
        const parallaxItems: { el: HTMLElement; currentY: number; targetY: number }[] = [];

        const updateParallaxItems = () => {
            const imgs = document.querySelectorAll('.art-img-wrapper img');
            const currentImgs = Array.from(imgs) as HTMLElement[];
            
            const updated = currentImgs.map(img => {
                const existing = parallaxItems.find(item => item.el === img);
                return existing || { el: img, currentY: 0, targetY: 0 };
            });
            
            parallaxItems.length = 0;
            parallaxItems.push(...updated);
        };

        // Initialize items
        updateParallaxItems();

        // Use MutationObserver to register dynamically loaded/hydrated elements
        const mutationObserver = new MutationObserver((mutations) => {
            let hasNewImages = false;
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const el = node as Element;
                        if (el.hasAttribute('data-reveal')) {
                            registerElement(el);
                        }
                        const childReveals = el.querySelectorAll('[data-reveal]');
                        childReveals.forEach((child) => registerElement(child));

                        if (el.classList?.contains('art-img-wrapper') || el.querySelector('.art-img-wrapper')) {
                            hasNewImages = true;
                        }
                    }
                });
            });
            if (hasNewImages) {
                updateParallaxItems();
            }
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Headroom sticky header logic
        const nav = document.querySelector('header.nav');
        const SHOW_TOP = 80;
        const DELTA = 5;
        let lastY = window.scrollY || 0;

        function onScroll() {
            const y = window.scrollY || 0;
            const d = y - lastY;
            
            if (nav) {
                if (y <= SHOW_TOP) {
                    nav.classList.remove('is-hidden');
                } else if (d > DELTA) {
                    nav.classList.add('is-hidden');
                } else if (d < -DELTA) {
                    nav.classList.remove('is-hidden');
                }
            }

            lastY = y;
        }

        // Smooth parallax tick loop
        let rAFId: number;
        function tick() {
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;

            parallaxItems.forEach(item => {
                const img = item.el;
                if (!img.isConnected) return;

                const rect = img.getBoundingClientRect();
                if (rect.bottom > 0 && rect.top < viewportHeight) {
                    const elementCenter = rect.top + rect.height / 2;
                    const distance = elementCenter - viewportCenter;
                    item.targetY = distance * 0.15;
                }
                // Lerping for smooth sliding inertia
                item.currentY += (item.targetY - item.currentY) * 0.08;
                img.style.transform = `translateY(${item.currentY}px) scale(1.15)`;
            });

            rAFId = requestAnimationFrame(tick);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateParallaxItems);
        rAFId = requestAnimationFrame(tick);

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateParallaxItems);
            cancelAnimationFrame(rAFId);
        };
    }, []);

    return null;
}
