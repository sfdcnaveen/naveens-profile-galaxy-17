import React from 'react';
import Accordion from './Accordion';
import { SFCertification } from '@/types/salesforce';

interface CertificationsProps {
    certificationsData?: SFCertification[];
}

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
                {displayCerts.map((cert, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: 'var(--slds-g-spacing-medium)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                        }}
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
                ))}
            </div>
        </Accordion>
    );
}
