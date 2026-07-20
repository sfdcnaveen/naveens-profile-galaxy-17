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
import LiveSignals from '@/components/LiveSignals';
import Accordion from '@/components/Accordion';
import {
    getProjects,
    getWorkExperience,
    getSkills,
    getPortfolioSettings,
    getCertifications,
} from '@/lib/salesforce';
import { getDailySteps } from '@/lib/fitbit';

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
            'Transitioning enterprise Salesforce testing suites to modern, deterministic Playwright automation. Focused on speed, reliability, and continuous delivery.';
    }

    // Server-Side Telemetry Pre-fetching to prevent layout shift and delays
    let initialWeather = null;
    try {
        const weatherRes = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current=temperature_2m,weather_code,is_day',
            { next: { revalidate: 900 } } // Cache weather query for 15 minutes
        );
        if (weatherRes.ok) {
            const data = await weatherRes.json();
            const temp = Math.round(data.current.temperature_2m);
            const code = data.current.weather_code;
            const isDay = data.current.is_day;

            let emoji = '☀️';
            let message = 'Clear skies today.';
            if (code === 0) {
                emoji = isDay ? '☀️' : '🌙';
                message = isDay ? 'Clear skies today.' : 'Clear night sky.';
            } else if (code >= 1 && code <= 3) {
                emoji = '⛅';
                message = 'Cloudy start today.';
            } else if (code >= 51 && code <= 65) {
                emoji = '🌧️';
                message = 'Rainy day — good for focused work.';
            }
            initialWeather = { temp, emoji, message };
        }
    } catch (e) {
        console.error('Server weather fetch failed:', e);
    }

    let initialSteps = null;
    try {
        const steps = await getDailySteps();
        if (steps > 0) {
            initialSteps = steps;
        }
    } catch (e) {
        console.error('Server steps fetch failed:', e);
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
                        style={{
                            minWidth: 0,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
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
                                                {settings?.Testimonial_Quote__c && (
                                                    <Accordion
                                                        title="Testimonial"
                                                        id="tab-details_accordion-testimonial"
                                                    >
                                                        <div
                                                            style={{
                                                                padding:
                                                                    'var(--slds-g-spacing-small)',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize: '0.875rem',
                                                                    fontStyle: 'italic',
                                                                    marginBottom:
                                                                        'var(--slds-g-spacing-small)',
                                                                }}
                                                            >
                                                                &quot;
                                                                {settings.Testimonial_Quote__c}
                                                                &quot;
                                                            </div>
                                                            <div
                                                                style={{
                                                                    fontSize: '0.75rem',
                                                                    fontWeight: 600,
                                                                    color: 'var(--slds-g-color-brand-base-50)',
                                                                }}
                                                            >
                                                                - {settings.Testimonial_Role__c},{' '}
                                                                {settings.Testimonial_Company__c}
                                                            </div>
                                                        </div>
                                                    </Accordion>
                                                )}
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
                        <Card title="Connect">
                            <SocialLinks settings={settings} />
                        </Card>

                        <LiveSignals initialWeather={initialWeather} initialSteps={initialSteps} />
                    </aside>
                </div>
            </main>
        </div>
    );
}
