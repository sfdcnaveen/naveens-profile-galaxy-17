import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import HighlightsPanel from '@/components/HighlightsPanel';
import Tabs from '@/components/Tabs';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Card from '@/components/Card';
import SocialLinks from '@/components/SocialLinks';
import LastFmWidget from '@/components/LastFmWidget';
import {
    getProjects,
    getWorkExperience,
    getSkills,
    getPortfolioSettings,
    getCertifications,
} from '@/lib/salesforce';

export const revalidate = 3600;

export default async function Home() {
    const [experienceData, projectsData, skillsData, settings, certificationsData] =
        await Promise.all([
            getWorkExperience(),
            getProjects(),
            getSkills(),
            getPortfolioSettings(),
            getCertifications(),
        ]);

    // SEO Branding Overrides
    if (settings) {
        settings.Headline_Title__c = 'Salesforce QA & Playwright Expert';
        settings.About_Me_Description__c =
            "I am Naveen Kumar Pasupuleti, a Salesforce QA & Playwright Expert. I'm not just a QA; I am the engineer who transitions legacy SFDC testing to modern deterministic Playwright suites.";
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <GlobalHeader
                experienceData={experienceData}
                projectsData={projectsData}
                skillsData={skillsData}
            />
            <main
                className="container"
                style={{ flexGrow: 1, paddingBottom: 'var(--slds-g-spacing-large)' }}
            >
                <HighlightsPanel settings={settings} />

                <div className="page-layout">
                    <div
                        className="main-column"
                        style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}
                    >
                        <div className="record-workspace" data-tour="record-workspace">
                            <Tabs
                                defaultActiveTab="details"
                                tabs={[
                                    {
                                        id: 'details',
                                        label: 'Details',
                                        content: (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 'var(--slds-g-spacing-medium)',
                                                }}
                                            >
                                                <About settings={settings} />
                                                <Experience experienceData={experienceData} />
                                            </div>
                                        ),
                                    },
                                    {
                                        id: 'projects',
                                        label: 'Projects',
                                        content: <Projects projectsData={projectsData} />,
                                    },
                                    {
                                        id: 'skills',
                                        label: 'Skills',
                                        content: <Skills skillsData={skillsData} />,
                                    },
                                    {
                                        id: 'certifications',
                                        label: 'Certifications',
                                        content: (
                                            <Certifications
                                                certificationsData={certificationsData}
                                            />
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <aside
                        className="sidebar"
                        data-tour="profile-sidebar"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--slds-g-spacing-medium)',
                        }}
                    >
                        <Card title="Contact Info">
                            <SocialLinks settings={settings} />
                        </Card>

                        <Card title="Testimonial">
                            <div
                                style={{
                                    fontSize: '0.875rem',
                                    fontStyle: 'italic',
                                    marginBottom: 'var(--slds-g-spacing-small)',
                                }}
                            >
                                &quot;{settings?.Testimonial_Quote__c}&quot;
                            </div>
                            <div
                                style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--slds-g-color-brand-base-50)',
                                }}
                            >
                                - {settings?.Testimonial_Role__c},{' '}
                                {settings?.Testimonial_Company__c}
                            </div>
                        </Card>

                        <LastFmWidget />
                    </aside>
                </div>
            </main>
        </div>
    );
}
