import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://sfdcnaveen.github.io'),
    title: 'Naveen Kumar Pasupuleti — Salesforce Automation & SDET Expert',
    description: 'Naveen Kumar Pasupuleti is a high-impact SDET and Salesforce Automation expert specializing in Playwright, TypeScript, and CI/CD test architecture.',
    alternates: {
        canonical: 'https://sfdcnaveen.github.io/',
    },
    icons: {
        icon: '/avatar.png',
    },
    openGraph: {
        type: 'website',
        title: 'Naveen Kumar Pasupuleti — Salesforce Automation & SDET Expert',
        description: 'SDET at TestVagrant Technologies. Building robust automation frameworks for enterprise Salesforce applications.',
        url: 'https://sfdcnaveen.github.io/',
        images: [
            {
                url: '/avatar.png',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Naveen Kumar Pasupuleti — SDET Expert',
        description: 'Salesforce Automation Specialist and Playwright Architect.',
        images: ['/avatar.png'],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
            </head>
            <body>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
