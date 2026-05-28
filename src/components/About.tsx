import React from 'react';
import { aboutContent } from '@/data/content';
import Card from './Card';

export default function About() {
    return (
        <Card title="About Me">
            <div style={{ padding: '0 var(--slds-g-spacing-small)' }}>
                <p style={{ marginBottom: 'var(--slds-g-spacing-medium)', color: 'var(--slds-g-color-neutral-base-10)' }}>
                    {aboutContent.description}
                </p>
                <div style={{ backgroundColor: 'var(--slds-g-color-neutral-base-95)', padding: 'var(--slds-g-spacing-medium)', borderRadius: '4px', borderLeft: '3px solid var(--slds-g-color-brand-base-50)' }}>
                    <strong>{aboutContent.sideNote.title}</strong>
                    <p style={{ marginTop: 'var(--slds-g-spacing-small)' }}>{aboutContent.sideNote.desc}</p>
                    <p style={{ marginTop: 'var(--slds-g-spacing-small)', fontStyle: 'italic' }}>- {aboutContent.sideNote.signature}</p>
                </div>
            </div>
        </Card>
    );
}
