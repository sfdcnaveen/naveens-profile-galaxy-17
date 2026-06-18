import React from 'react';
import { SFWorkExperience } from '@/types/salesforce';
import Accordion from './Accordion';

interface ExperienceProps {
    experienceData?: SFWorkExperience[];
}

export default function Experience({ experienceData = [] }: ExperienceProps) {
    if (!experienceData || experienceData.length === 0) {
        return (
            <Accordion
                title="Naveen Kumar Pasupuleti's Work Experience"
                id="tab-details_accordion-experience"
            >
                <div style={{ padding: 'var(--slds-g-spacing-small)' }}>
                    <p
                        style={{
                            fontSize: '0.875rem',
                            color: 'var(--slds-g-color-neutral-base-50)',
                        }}
                    >
                        No work experience data found in Salesforce or connection failed. Please
                        configure Salesforce credentials.
                    </p>
                </div>
            </Accordion>
        );
    }

    return (
        <Accordion
            title="Naveen Kumar Pasupuleti's Work Experience"
            id="tab-details_accordion-experience"
        >
            <div style={{ padding: 'var(--slds-g-spacing-small)' }}>
                {experienceData.map((step) => {
                    const startYear = step.Start_Date__c
                        ? new Date(step.Start_Date__c).getFullYear()
                        : '';
                    const endYear = step.End_Date__c
                        ? new Date(step.End_Date__c).getFullYear()
                        : 'Present';
                    const meta = `${startYear} - ${endYear} · ${step.Company__c}`;

                    return (
                        <div
                            key={step.Id}
                            style={{
                                marginBottom: 'var(--slds-g-spacing-large)',
                                position: 'relative',
                                paddingLeft: 'var(--slds-g-spacing-large)',
                                borderLeft: '2px solid var(--slds-g-color-border-base-40)',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '-6px',
                                    top: '4px',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--slds-g-color-brand-base-50)',
                                }}
                            ></div>
                            <div
                                style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--slds-g-color-neutral-base-30)',
                                    marginBottom: '4px',
                                }}
                            >
                                {meta}
                            </div>
                            <h3
                                style={{
                                    fontSize: '1.125rem',
                                    marginBottom: 'var(--slds-g-spacing-small)',
                                    color: 'var(--slds-g-color-neutral-base-10)',
                                }}
                            >
                                {step.Role__c}
                            </h3>
                            <p style={{ fontSize: '0.875rem' }}>{step.Description__c}</p>
                        </div>
                    );
                })}
            </div>
        </Accordion>
    );
}
