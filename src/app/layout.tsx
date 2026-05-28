import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://sfdcnaveen.github.io'),
    title: 'Naveen Kumar Pasupuleti — Salesforce QA, Tester & SDET Expert',
    description: 'Naveen Kumar Pasupuleti is a high-impact SDET, Salesforce QA, and automation expert specializing in Playwright, SFDC testing, and CI/CD architecture.',
    alternates: {
        canonical: 'https://sfdcnaveen.github.io/',
    },
    icons: {
        icon: '/avatar.png',
    },
    openGraph: {
        type: 'website',
        title: 'Naveen Kumar Pasupuleti — Salesforce QA, Tester & SDET Expert',
        description: 'SDET at TestVagrant Technologies. Building robust automation frameworks for enterprise SFDC testing and Salesforce QA.',
        url: 'https://sfdcnaveen.github.io/',
        images: [
            {
                url: '/avatar.png',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Naveen Kumar Pasupuleti — Salesforce QA & SDET Expert',
        description: 'Salesforce Automation Specialist, SFDC Tester, and Playwright Architect.',
        images: ['/avatar.png'],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-HGJ42T57QL"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag() { dataLayer.push(arguments); }
                            gtag('js', new Date());
                            gtag('config', 'G-HGJ42T57QL');
                        `
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Naveen Kumar Pasupuleti",
                            "jobTitle": "SDET (Software Development Engineer in Test)",
                            "description": "Salesforce Automation Expert and Playwright Specialist dedicated to building robust automation frameworks.",
                            "url": "https://sfdcnaveen.github.io/",
                            "image": "https://sfdcnaveen.github.io/avatar.png",
                            "sameAs": [
                                "https://www.linkedin.com/in/naveenkumarpasupuleti/",
                                "https://github.com/sfdcnaveen"
                            ],
                            "worksFor": {
                                "@type": "Organization",
                                "name": "TestVagrant Technologies"
                            },
                            "knowsAbout": [
                                "Salesforce QA",
                                "Salesforce Tester",
                                "SFDC Testing",
                                "Salesforce Automation",
                                "Playwright",
                                "TypeScript",
                                "CI/CD Pipelines",
                                "Test Architecture",
                                "API Automation",
                                "Selenium"
                            ]
                        })
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
                        `
                    }}
                />
            </head>
            <body>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
