import { track as vercelTrack } from '@vercel/analytics';
import { sendGAEvent } from '@next/third-parties/google';

export const trackEvent = (
    eventName: string,
    eventData?: Record<string, string | number | boolean | null>
) => {
    // Send to Vercel Analytics
    try {
        vercelTrack(eventName, eventData);
    } catch (e) {
        console.error('Vercel Analytics tracking failed', e);
    }

    // Send to Google Analytics
    try {
        sendGAEvent('event', eventName, eventData || {});
    } catch (e) {
        console.error('Google Analytics tracking failed', e);
    }
};
