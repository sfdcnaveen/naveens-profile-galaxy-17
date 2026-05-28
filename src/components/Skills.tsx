import React from 'react';
import { skillsContent } from '@/data/content';
import Card from './Card';

export default function Skills() {
    return (
        <Card title="Skills & Core Competencies">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--slds-g-spacing-medium)' }}>
                {skillsContent.skills.map((skill, index) => (
                    <div key={index} style={{ border: '1px solid var(--slds-g-color-border-base-40)', padding: 'var(--slds-g-spacing-medium)', borderRadius: '4px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--slds-g-spacing-small)' }}>
                            <strong style={{ color: 'var(--slds-g-color-brand-base-50)' }}>{skill.tag}</strong>
                            <span style={{ fontSize: '0.75rem', color: 'var(--slds-g-color-neutral-base-30)' }}>{skill.num}</span>
                        </div>
                        <h3 style={{ fontSize: '1rem', marginBottom: 'var(--slds-g-spacing-small)' }}>{skill.title}</h3>
                        <p style={{ fontSize: '0.875rem' }}>{skill.desc}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
}
