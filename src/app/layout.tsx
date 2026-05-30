import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import OnboardingTour from '@/components/OnboardingTour';
import '@/styles/globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://sfdcnaveen.github.io'),
    title: 'Naveen Kumar Pasupuleti — Salesforce QA with more than five years of experience',
    description:
        'Naveen Kumar Pasupuleti is a high-impact SDET and Salesforce QA with more than five years of experience, specializing in Playwright, SFDC testing, and CI/CD architecture.',
    alternates: {
        canonical: 'https://sfdcnaveen.github.io/',
    },
    icons: {
        icon: '/avatar.png',
    },
    openGraph: {
        type: 'website',
        title: 'Naveen Kumar Pasupuleti — Salesforce QA with more than five years of experience',
        description:
            'Naveen Kumar Pasupuleti is a Salesforce QA with more than five years of experience, building robust automation frameworks for enterprise SFDC testing.',
        url: 'https://sfdcnaveen.github.io/',
        images: [
            {
                url: '/avatar.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Naveen Kumar Pasupuleti — Salesforce QA with more than five years of experience',
        description:
            'Naveen Kumar Pasupuleti is a Salesforce QA with more than five years of experience. Automation Specialist, SFDC Tester, and Playwright Architect.',
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
                            jobTitle: 'Salesforce QA',
                            description:
                                'Naveen Kumar Pasupuleti is a Salesforce QA with more than five years of experience, dedicated to building robust automation frameworks.',
                            url: 'https://sfdcnaveen.github.io/',
                            image: 'https://sfdcnaveen.github.io/avatar.png',
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
                <Analytics />
                <SpeedInsights />
                <GoogleAnalytics gaId="G-HGJ42T57QL" />
            </body>
        </html>
    );
}
