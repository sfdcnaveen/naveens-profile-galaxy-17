'use client';

import React from 'react';
import { trackEvent } from '@/lib/tracking';
import { SFProject } from '@/types/salesforce';
import Accordion from './Accordion';

function ProjectCard({
    project,
    children,
}: {
    project: SFProject;
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
    if (project.Live_Link__c) {
        return (
            <a
                href={project.Live_Link__c}
                target="_blank"
                rel="noreferrer noopener"
                style={style}
                onClick={() =>
                    trackEvent('project_clicked', {
                        project_title: project.Title__c,
                        project_link: project.Live_Link__c || '',
                    })
                }
            >
                {children}
            </a>
        );
    }
    return <div style={style}>{children}</div>;
}

interface ProjectsProps {
    projectsData?: SFProject[];
}

export default function Projects({ projectsData = [] }: ProjectsProps) {
    if (!projectsData || projectsData.length === 0) {
        return (
            <Accordion title="Projects & Open Source">
                <div style={{ padding: 'var(--slds-g-spacing-medium)', textAlign: 'center', color: 'var(--slds-g-color-neutral-base-50)' }}>
                    No projects found in Salesforce.
                </div>
            </Accordion>
        );
    }

    return (
        <Accordion title="Projects & Open Source">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--slds-g-spacing-medium)',
                }}
            >
                {projectsData.map((project) => {
                    return (
                        <ProjectCard key={project.Id} project={project}>
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
                                    PROJECT
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
                                {project.Image_URL__c && (
                                    <>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={project.Image_URL__c}
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
                                    {project.Title__c}
                                </h3>
                            </div>
                            <p
                                style={{
                                    fontSize: '0.875rem',
                                    marginBottom: 'var(--slds-g-spacing-small)',
                                }}
                            >
                                {project.Description__c}
                            </p>
                            <div
                                style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--slds-g-color-neutral-base-30)',
                                }}
                            >
                                {project.Tech_Stack__c}
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
                    View GitHub Profile ↗
                </a>
            </div>
        </Accordion>
    );
}
