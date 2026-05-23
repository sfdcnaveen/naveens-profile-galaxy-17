import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://sfdcnaveen.github.io'),
    title: 'Naveen Kumar Pasupuleti — Salesforce Automation & SDET Expert',
    description: 'Naveen Kumar Pasupuleti is a high-impact SDET and Salesforce Automation expert specializing in Playwright, TypeScript, and CI/CD test architecture.',
    alternates: {
        canonical: 'https://sfdcnaveen.github.io/',
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

import RevealInit from '@/components/RevealInit';

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
                <div className="side-rail right" data-od-id="rail-right">
                    <span className="rail-text">Naveen Kumar Pasupuleti — Vol. 01 · Issue Nº 26 · SDET</span>
                </div>
                <div className="side-rail left" data-od-id="rail-left">
                    <span className="rail-text">Salesforce Automation · Playwright · TypeScript · CI/CD</span>
                </div>
                <div className="shell">
                    <div className="topbar" data-od-id="topbar">
                        <div className="container topbar-inner">
                            <span><b>NKP / 2026</b> &nbsp;·&nbsp; Portfolio Vol. 01</span>
                            <span className="mid">
                                <span>Filed under <b className="coral">Quality Engineering · Test Automation</b></span>
                                <span>Salesforce Automation Expert</span>
                            </span>
                            <span className="right">
                                <a className="topbar-link" href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener">
                                    <span className="pulse"></span>Live · India
                                </a>
                                <span><b>EN</b> · DE · JP</span>
                            </span>
                        </div>
                    </div>
                    {children}
                </div>
                <RevealInit />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
