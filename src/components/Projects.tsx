'use client';

import React from 'react';
import { trackEvent } from '@/lib/tracking';
import { projectsContent } from '@/data/content';
import Accordion from './Accordion';
function ProjectCard({
    project,
    children,
}: {
    project: (typeof projectsContent.projects)[0];
    children: React.ReactNode;
}) {
    const style: React.CSSProperties = {
        display: 'block',
        border: '1px solid var(--slds-g-color-border-base-40)',
        borderRadius: '4px',
        padding: 'var(--slds-g-spacing-medium)',
        color: 'inherit',
        textDecoration: 'none',
    };
    if (project.link) {
        return (
            <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                style={style}
                onClick={() =>
                    trackEvent('project_clicked', {
                        project_title: project.title,
                        project_link: project.link || '',
                    })
                }
            >
                {children}
            </a>
        );
    }
    return <div style={style}>{children}</div>;
}

export default function Projects() {
    return (
        <Accordion title="Projects & Open Source">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--slds-g-spacing-medium)',
                }}
            >
                {projectsContent.projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 'var(--slds-g-spacing-small)',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        color: 'var(--slds-g-color-neutral-base-30)',
                                    }}
                                >
                                    {project.label}
                                </span>
                                <span
                                    style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--slds-g-color-brand-base-50)',
                                    }}
                                >
                                    {project.year}
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--slds-g-spacing-small)',
                                    marginBottom: 'var(--slds-g-spacing-small)',
                                }}
                            >
                                {project.icon && (
                                    <>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={project.icon}
                                            alt=""
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '4px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </>
                                )}
                                <h3
                                    style={{
                                        fontSize: '1rem',
                                        color: 'var(--slds-g-color-brand-base-50)',
                                    }}
                                >
                                    {project.title}
                                </h3>
                            </div>
                            <p
                                style={{
                                    fontSize: '0.875rem',
                                    marginBottom: 'var(--slds-g-spacing-small)',
                                }}
                            >
                                {project.desc}
                            </p>
                            <div
                                style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--slds-g-color-neutral-base-30)',
                                }}
                            >
                                {project.tags}
                            </div>
                        </ProjectCard>
                    );
                })}
            </div>
            <div style={{ marginTop: 'var(--slds-g-spacing-medium)', textAlign: 'center' }}>
                <a
                    href="https://github.com/sfdcnaveen"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ fontSize: '0.875rem', fontWeight: 600 }}
                    onClick={() => trackEvent('github_projects_clicked')}
                >
                    View GitHub Projects ↗
                </a>
            </div>
        </Accordion>
    );
}
