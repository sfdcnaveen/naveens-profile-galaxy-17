import React from 'react';
import { experienceContent } from '@/data/content';
import Accordion from './Accordion';

export default function Experience() {
    return (
        <Accordion title="Work Experience">
            <div style={{ padding: 'var(--slds-g-spacing-small)' }}>
                {experienceContent.timeline.map((step, index) => (
                    <div key={index} style={{ marginBottom: 'var(--slds-g-spacing-large)', position: 'relative', paddingLeft: 'var(--slds-g-spacing-large)', borderLeft: '2px solid var(--slds-g-color-border-base-40)' }}>
                        <div style={{ position: 'absolute', left: '-6px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--slds-g-color-brand-base-50)' }}></div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--slds-g-color-neutral-base-30)', marginBottom: '4px' }}>{step.meta}</div>
                        <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--slds-g-spacing-small)', color: 'var(--slds-g-color-neutral-base-10)' }}>{step.role}</h3>
                        <p style={{ fontSize: '0.875rem' }}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </Accordion>
    );
}
