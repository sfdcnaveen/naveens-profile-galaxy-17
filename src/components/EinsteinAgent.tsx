'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

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
        }
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
