import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import OnboardingTour from '@/components/OnboardingTour';
import EinsteinAgent from '@/components/EinsteinAgent';
import '@/styles/globals.css';
import '@/styles/einstein-bot.css';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://naveens-portfolio-three.vercel.app'),
    title: 'Naveen Kumar Pasupuleti — Salesforce QA & Playwright Expert',
    description:
        'Naveen Kumar Pasupuleti is a Salesforce QA & Playwright Expert. The engineer who transitions legacy SFDC testing to modern deterministic Playwright suites.',
    alternates: {
        canonical: 'https://naveens-portfolio-three.vercel.app/',
    },
    icons: {
        icon: '/avatar.png',
    },
    openGraph: {
        type: 'website',
        title: 'Naveen Kumar Pasupuleti — Salesforce QA & Playwright Expert',
        description:
            'Naveen Kumar Pasupuleti is a Salesforce QA & Playwright Expert, transitioning legacy SFDC testing to modern deterministic Playwright suites.',
        url: 'https://naveens-portfolio-three.vercel.app/',
        images: [
            {
                url: '/avatar.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Naveen Kumar Pasupuleti — Salesforce QA & Playwright Expert',
        description:
            'Naveen Kumar Pasupuleti is a Salesforce QA & Playwright Expert. Transitioning legacy SFDC testing to modern Playwright suites.',
        images: ['/avatar.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Naveen Kumar Pasupuleti',
                            jobTitle: ['SDET', 'Salesforce QA & Playwright Expert'],
                            gender: 'Male',
                            nationality: 'Indian',
                            alumniOf: {
                                '@type': 'CollegeOrUniversity',
                                name: 'JNTU Anantapur',
                            },
                            description:
                                'Naveen Kumar Pasupuleti is a Salesforce QA & Playwright Expert who transitions legacy SFDC testing to modern deterministic Playwright suites.',
                            url: 'https://naveens-portfolio-three.vercel.app/',
                            image: 'https://naveens-portfolio-three.vercel.app/avatar.png',
                            sameAs: [
                                'https://www.linkedin.com/in/naveenkumarpasupuleti/',
                                'https://github.com/sfdcnaveen',
                            ],
                            worksFor: {
                                '@type': 'Organization',
                                name: 'TestVagrant Technologies',
                            },
                            knowsAbout: [
                                'Salesforce QA',
                                'Salesforce Tester',
                                'SFDC Testing',
                                'Salesforce Automation',
                                'Playwright',
                                'TypeScript',
                                'CI/CD Pipelines',
                                'Test Architecture',
                                'API Automation',
                                'Selenium',
                            ],
                        }),
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('theme');
                                    if (theme) {
                                        document.documentElement.setAttribute('data-theme', theme);
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body>
                {children}
                <OnboardingTour />
                <EinsteinAgent />
                <Analytics />
                <SpeedInsights />
                <GoogleAnalytics gaId="G-HGJ42T57QL" />
            </body>
        </html>
    );
}
