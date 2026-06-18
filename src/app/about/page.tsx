import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import { getWorkExperience, getProjects, getSkills } from '@/lib/salesforce';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Naveen Kumar Pasupuleti - Salesforce QA',
    description:
        'Read the professional biography of Naveen Kumar Pasupuleti, a Salesforce QA and Playwright expert who transitions legacy SFDC testing to modern deterministic suites.',
};

export default async function AboutPage() {
    const experienceData = await getWorkExperience();
    const projectsData = await getProjects();
    const skillsData = await getSkills();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: 'var(--slds-g-color-neutral-base-95)',
            }}
        >
            <GlobalHeader
                experienceData={experienceData}
                projectsData={projectsData}
                skillsData={skillsData}
            />
            <main
                className="container"
                style={{
                    flexGrow: 1,
                    paddingBottom: 'var(--slds-g-spacing-large)',
                    paddingTop: 'var(--slds-g-spacing-large)',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'var(--slds-g-color-neutral-base-100)',
                        padding: 'var(--slds-g-spacing-x-large)',
                        borderRadius: '8px',
                        border: '1px solid var(--slds-g-color-border-base-40)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        maxWidth: '800px',
                        margin: '0 auto',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '2rem',
                            fontWeight: 800,
                            color: 'var(--slds-g-color-brand-base-50)',
                            marginBottom: 'var(--slds-g-spacing-large)',
                        }}
                    >
                        About Naveen Kumar Pasupuleti
                    </h1>
                    <article
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            color: 'var(--slds-g-color-neutral-base-10)',
                        }}
                    >
                        <p style={{ marginBottom: 'var(--slds-g-spacing-medium)' }}>
                            <strong>Naveen Kumar Pasupuleti</strong> is a distinguished Salesforce
                            QA and Playwright Expert, specializing in the transformation of legacy
                            Salesforce (SFDC) testing environments into modern, deterministic, and
                            highly scalable automation suites. With a career spanning over five
                            years in quality engineering, Naveen has established himself not merely
                            as a Quality Assurance professional, but as a strategic architect who
                            bridges the gap between complex software development and rigorous,
                            flawless deployment pipelines.
                        </p>
                        <p style={{ marginBottom: 'var(--slds-g-spacing-medium)' }}>
                            Early in his career, Naveen Kumar Pasupuleti recognized the inherent
                            limitations of traditional, script-heavy testing methodologies,
                            particularly within the sprawling ecosystem of Salesforce. He saw that
                            flakiness, slow execution times, and high maintenance overhead were
                            stifling agile delivery. Driven by a philosophy that quality should be
                            engineered rather than merely assured, Naveen pivoted toward
                            cutting-edge test automation frameworks. He became an early adopter and
                            champion of Playwright and TypeScript, recognizing their potential to
                            execute fast, reliable, and headless browser interactions that far
                            outpaced older selenium-based approaches.
                        </p>
                        <p style={{ marginBottom: 'var(--slds-g-spacing-medium)' }}>
                            Naveen&apos;s primary differentiator—and his most significant
                            contribution to the teams he leads—is his ability to transition
                            organizations away from fragile, legacy SFDC testing protocols. By
                            architecting deterministic Playwright suites, Naveen ensures that every
                            test execution is repeatable, predictable, and fully integrated into
                            Continuous Integration and Continuous Deployment (CI/CD) pipelines. His
                            expertise with GitHub Actions and Docker choreography enables him to
                            construct low-latency, automated regression runs that trigger seamlessly
                            on every code push, drastically reducing regression cycles and doubling
                            deployment velocity for enterprise clients.
                        </p>
                        <p style={{ marginBottom: 'var(--slds-g-spacing-medium)' }}>
                            Throughout his tenure, including his impactful roles at TestVagrant
                            Technologies and Capgemini, Naveen Kumar Pasupuleti has led major
                            Salesforce QA migrations. He successfully shifted massive, monolithic
                            legacy suites to modular Playwright architectures. This strategic
                            overhaul not only reduced test execution times by 40%, but it also
                            eliminated the chronic flakiness that previously plagued client
                            rollouts. His work on the Complaint Management Operating System for ANZ
                            and full-cycle service and sales cloud automation for Aldar in Dubai
                            stands as a testament to his capability to handle high-stakes, global
                            enterprise deployments.
                        </p>
                        <p style={{ marginBottom: 'var(--slds-g-spacing-medium)' }}>
                            Naveen is a heavily certified professional, holding prestigious
                            credentials such as the Salesforce Platform Developer I and II,
                            Salesforce Certified Associate, and Salesforce Certified AI Associate.
                            These certifications underscore his deep technical proficiency in the
                            Salesforce platform, empowering him to test complex CRM features,
                            integrations, and REST APIs with a developer&apos;s insight. He
                            doesn&apos;t just test the UI; he validates backend contracts, service
                            interfaces, and data integrity with surgical precision.
                        </p>
                        <p style={{ marginBottom: 'var(--slds-g-spacing-medium)' }}>
                            Beyond his enterprise contributions, Naveen Kumar Pasupuleti is an
                            active member of the open-source community. He maintains numerous GitHub
                            repositories and constantly builds utility tools, such as native Swift
                            menu-bar media managers, reflecting his passion for coding beyond
                            testing. His philosophy, &quot;Studies in validation, stability, and
                            automated execution,&quot; drives him to continuously construct
                            deterministic systems of quality.
                        </p>
                        <p style={{ marginBottom: 'var(--slds-g-spacing-medium)' }}>
                            Whether he is designing mock API contracts, implementing advanced mobile
                            automation using WebdriverIO, or leading a team through a complex CRM
                            migration, Naveen approaches every challenge with a focus on systemic
                            reliability. He believes that true quality engineering requires a
                            holistic view of the software lifecycle, where testing is shifted as far
                            left as possible. By doing so, Naveen Kumar Pasupuleti empowers
                            developers to code with confidence, knowing that the automated safety
                            nets he constructs will catch anomalies before they ever reach
                            production. Ultimately, Naveen is redefining what it means to be a
                            modern SDET in the Salesforce ecosystem, setting new standards for
                            speed, accuracy, and architectural elegance in software validation.
                        </p>
                    </article>
                </div>
            </main>
        </div>
    );
}
