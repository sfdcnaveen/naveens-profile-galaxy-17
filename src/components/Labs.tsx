import React from 'react';
import { bentoContent } from '@/data/content';
import Card from './Card';

export default function Labs() {
    return (
        <Card title="Labs & Experiments">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--slds-g-spacing-medium)' }}>
                {bentoContent.items.map((item, index) => {
                    const CardWrapper = item.link ? 'a' : 'div';
                    const props = item.link ? { href: item.link, target: '_blank', rel: 'noreferrer noopener' } as any : {};
                    
                    return (
                        <CardWrapper key={index} {...props} style={{ display: 'block', border: '1px solid var(--slds-g-color-border-base-40)', borderRadius: '4px', padding: 'var(--slds-g-spacing-medium)', color: 'inherit', textDecoration: 'none' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--slds-g-spacing-small)' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slds-g-color-neutral-base-30)' }}>{item.type}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--slds-g-color-brand-base-50)' }}>{item.num}</span>
                            </div>
                            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--slds-g-spacing-small)', color: 'var(--slds-g-color-brand-base-50)' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                        </CardWrapper>
                    );
                })}
            </div>
        </Card>
    );
}
