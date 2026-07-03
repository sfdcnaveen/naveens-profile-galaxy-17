import React from 'react';
import Image from 'next/image';
import Accordion from './Accordion';
import { SFCertification } from '@/types/salesforce';

interface CertificationsProps {
    certificationsData?: SFCertification[];
}

const logoMap: Record<string, string> = {
    'Salesforce Platform Developer I':
        '/certifications/2025-04_Badge_SF-Certified_Plat-Dev_High-Res.png',
    'Salesforce Certified Associate':
        '/certifications/2025-03_Badge_SF-Certified_Platform-Foundations_High-Res.png',
    'Salesforce Platform Developer II':
        '/certifications/2021-03_Badge_SF-Certified_Platform-Developer-II_High-Res.png',
    'Salesforce Certified AI Associate':
        '/certifications/2026-01_Badge_SF-Certified_AI-Associate_High-Res_RETIRED.png',
};

export default function Certifications({ certificationsData = [] }: CertificationsProps) {
    const certs = [
        { name: 'Salesforce Platform Developer I', date: 'Oct 2022' },
        { name: 'Salesforce Certified Associate', date: 'May 2023' },
        { name: 'Salesforce Platform Developer II', date: 'July 2023' },
        { name: 'Salesforce Certified AI Associate', date: 'March 2025' },
    ];

    const displayCerts =
        certificationsData.length > 0
            ? certificationsData.map((c) => ({
                  name: c.Name,
                  date: c.Issue_Date__c,
              }))
            : certs;

    return (
        <Accordion title="Naveen Kumar Pasupuleti's Certifications">
            <div style={{ padding: 'var(--slds-g-spacing-small)' }}>
                {displayCerts.map((cert, index) => {
                    const logoPath = logoMap[cert.name];
                    return (
                        <div
                            key={index}
                            style={{
                                marginBottom: 'var(--slds-g-spacing-medium)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            {logoPath && (
                                <div
                                    style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
                                >
                                    <Image
                                        src={logoPath}
                                        alt={cert.name}
                                        width={64}
                                        height={64}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            )}
                            <div
                                style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
                            >
                                <h3
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        color: 'var(--slds-g-color-neutral-base-10)',
                                    }}
                                >
                                    {cert.name}
                                </h3>
                                <div
                                    style={{
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: 0,
                                        color: 'var(--slds-g-color-neutral-base-30)',
                                    }}
                                >
                                    ISSUED {cert.date}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Accordion>
    );
}
