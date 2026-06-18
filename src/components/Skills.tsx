import React from 'react';
import { SFSkill } from '@/types/salesforce';
import Accordion from './Accordion';

interface SkillsProps {
    skillsData?: SFSkill[];
}

export default function Skills({ skillsData = [] }: SkillsProps) {
    if (!skillsData || skillsData.length === 0) {
        return (
            <Accordion
                title="Naveen Kumar Pasupuleti's Skills & Core Competencies"
                id="tab-related_accordion-capabilities"
            >
                <div
                    style={{
                        padding: 'var(--slds-g-spacing-medium)',
                        textAlign: 'center',
                        color: 'var(--slds-g-color-neutral-base-50)',
                    }}
                >
                    No skills found in Salesforce.
                </div>
            </Accordion>
        );
    }

    return (
        <Accordion
            title="Naveen Kumar Pasupuleti's Skills & Core Competencies"
            id="tab-related_accordion-capabilities"
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--slds-g-spacing-medium)',
                }}
            >
                {skillsData.map((skill) => (
                    <div
                        key={skill.Id}
                        style={{
                            border: '1px solid var(--slds-g-color-border-base-40)',
                            padding: 'var(--slds-g-spacing-medium)',
                            borderRadius: '4px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 'var(--slds-g-spacing-small)',
                            }}
                        >
                            <strong style={{ color: 'var(--slds-g-color-brand-base-50)' }}>
                                {skill.Category__c}
                            </strong>
                        </div>
                        <h3
                            style={{
                                fontSize: '1rem',
                                marginBottom: 'var(--slds-g-spacing-small)',
                            }}
                        >
                            {skill.Name}
                        </h3>
                        {skill.Description__c && (
                            <p style={{ fontSize: '0.875rem' }}>{skill.Description__c}</p>
                        )}
                    </div>
                ))}
            </div>
        </Accordion>
    );
}
