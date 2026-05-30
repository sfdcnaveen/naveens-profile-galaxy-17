export const siteConfig = {
    name: 'Naveen Kumar Pasupuleti',
    title: 'Salesforce QA, Tester & SDET Expert',
    description:
        'Naveen Kumar Pasupuleti is a high-impact SDET and Salesforce QA with more than five years of experience, specializing in SFDC testing, Playwright, TypeScript, and CI/CD test architecture.',
    url: 'https://sfdcnaveen.github.io/',
    location: {
        city: 'Nellore',
        country: 'India',
        coords: '14.4426° N · 79.9865° E',
    },
    socials: {
        github: 'https://github.com/sfdcnaveen',
        linkedin: 'https://www.linkedin.com/in/naveenkumarpasupuleti/',
        email: 'pasupulatink@gmail.com',
    },
    meta: {
        keywords:
            'Salesforce QA, Salesforce Tester, SFDC Testing, Salesforce Automation, Playwright, TypeScript, CI/CD, SDET, Quality Engineering',
    },
};

export const heroContent = {
    label: 'Quality Automation Architect · Nº 01',
    headline: {
        part1: 'Automating the',
        highlight1: 'future',
        part2: 'of quality with',
        highlight2: 'speed',
        part3: 'and',
        highlight3: 'scale',
    },
    description:
        'I am a Salesforce QA with more than five years of experience, specializing in the Salesforce ecosystem, Playwright automation systems, CI/CD pipeline integrations, and deterministic SFDC testing loops.',
    stats: [
        { value: '5+', labelPart1: 'years', labelPart2: 'exp', highlight: false },
        { value: '4', labelPart1: 'salesforce', labelPart2: 'certs', highlight: false },
        { value: 'repos', labelPart1: 'repos', labelPart2: 'github', highlight: true }, // Repos fetched dynamically, this is placeholder structure
    ],
    footerInfo: '↳ SDET @ TestVagrant Technologies',
};

export const aboutContent = {
    label: 'About the Engineer · Nº 02',
    headline: {
        part1: 'We break',
        highlight1: 'builds',
        part2: 'so that you can ship',
        highlight2: 'uncompromising',
        part3: 'software',
    },
    description:
        'I am Naveen Kumar Pasupuleti, a modern quality engineer and Salesforce QA with more than five years of experience. Specializing in SFDC testing and modern JS automation using Playwright and TypeScript, with a focus on deterministic test suites, rapid feedback, and enterprise-scale QA.',
    footerRow: 'Plan · Automate · Execute · Verify · Repeat',
    sideNote: {
        title: 'Studies in validation · stability · automated execution.',
        desc: 'From script execution to full test coverage, we construct deterministic systems of quality.',
        signature: '(Naveen Kumar, Pasupuleti)',
    },
};

export const skillsContent = {
    label: 'Capabilities · Nº 03',
    headline: {
        part1: 'Frameworks, platforms, and strategies',
        highlight1: 'for enterprise',
        part2: 'reliability',
    },
    description:
        'I build automated verification systems tailored for complex Salesforce application logic and modern web frameworks, focusing on execution speed and stability.',
    skills: [
        {
            num: '01',
            tag: 'Salesforce',
            title: 'Salesforce\nQA Specialist',
            desc: 'Certified Platform Developer I & II, AI Associate, and Platform Foundations. Expert Salesforce tester in service and sales cloud testing.',
        },
        {
            num: '02',
            tag: 'Automation',
            title: 'Core Web\nAutomation',
            desc: 'Modern test suites using Playwright and TypeScript (90% capacity). Experienced in Selenium and WebdriverIO.',
        },
        {
            num: '03',
            tag: 'CI/CD',
            title: 'Continuous\nIntegration',
            desc: 'GitHub Actions and Jenkins pipeline choreography. Low-latency automated regression runs on code push.',
        },
        {
            num: '04',
            tag: 'APIs',
            title: 'Integration\n& APIs',
            desc: 'REST Assured automation and mock API designs. Validation of service interfaces and backend contracts.',
        },
    ],
};

export const experienceContent = {
    label: 'Timeline · Nº 05',
    headline: {
        part1: 'From',
        highlight1: 'manual',
        part2: 'scripts to fully',
        highlight2: 'autonomous',
        part3: 'pipelines',
    },
    note: 'Each milestone represents a deep dive into execution speed, test stability, and platform engineering.',
    timeline: [
        {
            num: '03',
            role: 'Associate',
            meta: 'Capgemini · 2021 — 2023',
            desc: 'Established foundational testing methodologies for global Salesforce client rollouts and CRM features.',
        },
        {
            num: '04',
            role: 'Consultant',
            meta: 'Capgemini · 2023 — 2025',
            desc: 'Led Salesforce QA migrations. Shifted legacy SFDC testing suites to Playwright, reducing regression runs by 40%.',
        },
        {
            num: '02',
            role: 'SDET',
            meta: 'TestVagrant · 2025 — Present',
            desc: 'Architecting scalable quality assurance strategies for Salesforce. Custom TypeScript-Playwright suites.',
        },
        {
            num: '01',
            role: 'Next Chapter',
            meta: 'Future · Opportunities',
            desc: 'Ready for new challenges in test architecture, framework engineering, and high-impact QA leadership.',
        },
    ],
};

export const projectsContent = {
    label: 'Selected Work',
    headline: {
        part1: 'Frameworks that turn test cases into',
        highlight1: 'deterministic',
        part2: 'feedback loops',
    },
    meta: ['● sfdcnaveen / repositories', '● Nellore · Bangalore', '● Verified build state: green'],
    projects: [
        {
            label: 'Featured Client QA',
            index: '01 / 04',
            title: 'Aldar Real Estate',
            desc: 'Architected full-cycle Salesforce QA for Dubai Aldar, automated service & sales cloud flows.',
            year: '2025 · DUBAI',
            tags: 'REAL ESTATE',
            link: 'https://www.aldar.com/en',
            icon: '/aldar.png',
        },
        {
            label: 'Compliance Testing',
            index: '02 / 04',
            title: 'CMOS / ANZ',
            desc: 'Reliability testing for ANZ complaint management. Built data-integrity verification scripts.',
            year: '2024 · BANKING',
            tags: 'COMPLIANCE',
            link: 'https://www.anz.com.au/support/complaints/',
            icon: '/anz.png',
        },
        {
            label: 'macOS Utility',
            index: '03 / 04',
            title: 'NewNet Swift Utility',
            desc: 'Native Swift menu-bar media manager utilizing yt-dlp. Low overhead, custom format selection.',
            year: '2024 · MACOS',
            tags: 'SWIFT / UTILITY',
            link: 'https://sfdcnaveen.github.io/NewNetWebsite/',
            icon: '/newnet.png',
        },
        {
            label: 'Proprietary Engine',
            index: '04 / 04',
            title: 'SF Automation Suite',
            desc: 'Playwright-based engine for complex Salesforce UI elements. Integrated into CI actions.',
            year: '2024 · ENGINE',
            tags: 'TEST ARCHITECTURE',
            link: null, // No link
            icon: '/sf_clean.png',
        },
    ],
};

export const footerContent = {
    testimonial: {
        label: 'Testimonials · Nº 06',
        quote: "Naveen's shift-left automation design reduced our Salesforce regression cycles by 40%. Flakiness was eliminated, and our deployment velocity doubled.",
        authorInitial: 'C',
        authorRole: 'Lead Delivery Manager',
        authorCompany: 'ANZ Salesforce Operations',
    },
};
