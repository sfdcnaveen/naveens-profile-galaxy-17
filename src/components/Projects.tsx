import React from 'react';
import { projectsContent } from '@/data/content';
import Card from './Card';

export default function Projects() {
    return (
        <Card title="Projects & Open Source">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--slds-g-spacing-medium)' }}>
                {projectsContent.projects.map((project, index) => {
                    const CardWrapper = project.link ? 'a' : 'div';
                    const props = project.link ? { href: project.link, target: '_blank', rel: 'noreferrer noopener' } as any : {};
                    
                    return (
                        <CardWrapper key={index} {...props} style={{ display: 'block', border: '1px solid var(--slds-g-color-border-base-40)', borderRadius: '4px', padding: 'var(--slds-g-spacing-medium)', color: 'inherit', textDecoration: 'none' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--slds-g-spacing-small)' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slds-g-color-neutral-base-30)' }}>{project.label}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--slds-g-color-brand-base-50)' }}>{project.year}</span>
                            </div>
                            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--slds-g-spacing-small)', color: 'var(--slds-g-color-brand-base-50)' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.875rem', marginBottom: 'var(--slds-g-spacing-small)' }}>{project.desc}</p>
                            <div style={{ fontSize: '0.75rem', color: 'var(--slds-g-color-neutral-base-30)' }}>
                                {project.tags}
                            </div>
                        </CardWrapper>
                    );
                })}
            </div>
            <div style={{ marginTop: 'var(--slds-g-spacing-medium)', textAlign: 'center' }}>
                <a href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    View GitHub Projects ↗
                </a>
            </div>
        </Card>
    );
}
