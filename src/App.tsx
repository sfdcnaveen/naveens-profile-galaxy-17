import React, { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Layers,
  CheckCircle2,
} from "lucide-react";
// @ts-ignore - explicitly ignoring if types aren't found, though commonly included
import { ReactLenis } from "@studio-freight/react-lenis";

// --- TYPES & INTERFACES ---

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  desc: string;
}

interface ProjectItem {
  name: string;
  tag: string;
  tech: string[];
  desc: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

// --- DATA SOURCE ---

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "TestVagrant Technologies",
    role: "Software Development Engineer in Test",
    period: "2025 — Present",
    desc: "Spearheading Salesforce automation initiatives. Architecting scalable testing frameworks using Playwright & TypeScript to ensure robust CI/CD pipelines.",
  },
  {
    company: "Capgemini",
    role: "Consultant",
    period: "2023 — 2025",
    desc: "Led the migration of legacy QA systems to modern Playwright suites. Focused on API integration testing and Salesforce functional assurance.",
  },
  {
    company: "Capgemini",
    role: "Associate Consultant",
    period: "2021 — 2023",
    desc: "Contributed to core Salesforce QA automation. Developed regression suites and enhanced test coverage by 40%.",
  },
];

const PROJECTS: ProjectItem[] = [
  {
    name: "Aldar Properties",
    tag: "Dubai Real Estate | Salesforce",
    tech: ["Salesforce", "Playwright", "Jenkins"],
    desc: "Comprehensive automation framework for one of Dubai's largest real estate developers, handling complex property management flows.",
  },
  {
    name: "ANZ Bank CMOS",
    tag: "FinTech | Complaint Mgmt",
    tech: ["Java", "Selenium", "API"],
    desc: "End-to-end testing solution for the Complaint Management Operating System, ensuring strict compliance and data integrity.",
  },
  {
    name: "Framework Core",
    tag: "Internal Tooling",
    tech: ["TypeScript", "Playwright", "GitHub Actions"],
    desc: "A custom-built, reusable test automation framework designed to accelerate QA setup for new Salesforce modules.",
  },
];

const SKILLS: string[] = [
  "Salesforce QA",
  "Playwright",
  "TypeScript",
  "JavaScript",
  "Java",
  "WDIO",
  "API Testing",
  "CI/CD Pipelines",
  "Git & GitHub",
  "HTML5/CSS3",
  "Agile Methodologies",
];

const CERTIFICATIONS: CertificationItem[] = [
  { name: "Platform Developer I", issuer: "Salesforce", year: "2022" },
  { name: "Certified Associate", issuer: "Salesforce", year: "2023" },
  { name: "AI Associate", issuer: "Salesforce", year: "2024" },
];

// --- COMPONENTS ---

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = "",
}) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className={`text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-16 ${className}`}
  >
    {children}
  </motion.h2>
);

interface RevealTextProps {
  text: string;
  delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, delay = 0 }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  </div>
);

const NavBar: React.FC = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-white"
    >
      <span className="font-bold tracking-tight text-xl">N / K / P</span>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="hover:text-lime-400 transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className="hover:text-lime-400 transition-colors"
        >
          About
        </a>
        <a
          href="#experience"
          onClick={(e) => handleNavClick(e, "experience")}
          className="hover:text-lime-400 transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className="hover:text-lime-400 transition-colors"
        >
          Work
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hover:text-lime-400 transition-colors"
        >
          Contact
        </a>
      </div>
      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, "contact")}
        className="border border-white/30 px-4 py-2 rounded-full text-xs uppercase hover:bg-white hover:text-black transition-all"
      >
        Let's Connect
      </a>
    </motion.nav>
  );
};

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let animationFrameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      // Throttle the updates to reduce CPU usage
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full border border-lime-400 z-50 pointer-events-none hidden md:block mix-blend-difference"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

// --- MAIN PAGE ---

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <div className="bg-[#050505] text-[#e0e0e0] min-h-screen font-sans selection:bg-lime-400 selection:text-black overflow-x-hidden">
        {!isMobile && <CursorFollower />}
        <NavBar />

        {/* HERO SECTION */}
        <header
          className="relative h-screen flex flex-col justify-center px-6 md:px-20 pt-20"
          id="home"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-[12vw] leading-[0.9] font-display font-black uppercase tracking-normal text-white">
              <RevealText text="Naveen" />
            </h1>
            <h1 className="text-[12vw] leading-[0.9] font-display font-black uppercase tracking-normal flex items-center gap-4">
              <RevealText text="Kumar" delay={0.1} />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "20vw" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2vw] bg-lime-400 rounded-full mt-2 hidden md:block"
              />
            </h1>
          </div>

          <div className="mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8">
            <div className="max-w-md">
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed">
                SDET @{" "}
                <span className="text-white font-medium">TestVagrant</span>.{" "}
                <br />
                Crafting robust{" "}
                <span className="text-lime-400">Salesforce</span> automation
                architectures with Playwright & TypeScript.
              </p>
            </div>
            <motion.div
              className="mt-8 md:mt-0 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-white text-black px-6 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-lime-400 transition-colors"
              >
                View Projects{" "}
                <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </header>

        {/* ABOUT / NARRATIVE */}
        <section
          id="about"
          className="py-32 px-6 md:px-20 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="block text-lime-400 font-mono text-sm mb-4">
                ( 01 — ABOUT )
              </span>
              <div className="w-full h-[1px] bg-white/20 mb-8"></div>
              <p className="text-gray-400">
                Based in India. <br />
                Available for global consulting.
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-3xl md:text-5xl font-light leading-tight">
                I bridge the gap between development and quality assurance. As a
                specialist in{" "}
                <span className="text-white font-serif italic">
                  Salesforce ecosystems
                </span>
                , I don't just write tests; I engineer stability.
              </p>
              <p className="mt-12 text-xl text-gray-400 max-w-2xl">
                My work focuses on building self-healing automation frameworks
                that adapt to the dynamic nature of enterprise applications.
                When I'm not optimizing Playwright selectors, I'm exploring
                photography or fine-tuning my WFH setup.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="py-32 px-6 md:px-20 bg-[#0a0a0a]">
          <SectionHeading>Experience</SectionHeading>

          <div className="flex flex-col">
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group border-t border-white/10 py-16 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
                  <div className="md:col-span-2 text-lime-400 font-mono text-sm">
                    {job.period}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-3xl font-display uppercase font-bold">
                      {job.company}
                    </h3>
                    <span className="text-lg text-gray-400">{job.role}</span>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-xl font-light text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {job.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SELECTED PROJECTS */}
        <section id="projects" className="py-32 px-6 md:px-20">
          <div className="flex justify-between items-end mb-20">
            <SectionHeading className="mb-0">
              Selected
              <br />
              Works
            </SectionHeading>
            <span className="hidden md:block text-gray-500 font-mono text-right">
              SYSTEM ARCHITECTURE <br /> & AUTOMATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 0.98 }}
                className={`bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[400px] ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full border border-white/20 text-xs text-gray-300 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="text-lime-400 w-8 h-8" />
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4">
                    {project.name}
                  </h3>
                  <p className="text-xl text-gray-400 font-light">
                    {project.tag}
                  </p>
                </div>
                <div className="mt-12">
                  <p className="text-lg text-gray-300 border-l-2 border-lime-400 pl-4">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS & CERTIFICATIONS MARQUEE */}
        <section className="py-20 overflow-hidden bg-lime-400 text-black">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-12"
            >
              {[...SKILLS].map((skill, i) => (
                <span
                  key={i}
                  className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter flex items-center gap-4"
                >
                  {skill}{" "}
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-display uppercase mb-12 flex items-center gap-3">
              <Layers className="text-lime-400" /> Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-2xl hover:text-lime-400 transition-colors cursor-default select-none"
                >
                  {skill} <span className="text-gray-700 mx-2">/</span>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-display uppercase mb-12 flex items-center gap-3">
              <CheckCircle2 className="text-lime-400" /> Certifications
            </h3>
            <div className="flex flex-col gap-6">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/10 pb-6 group hover:pl-4 transition-all"
                >
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-lime-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-gray-500">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer
          id="contact"
          className="py-32 px-6 md:px-20 border-t border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-[10vw] leading-[0.8] font-display font-black uppercase tracking-tighter mb-12 text-center md:text-left">
              Let's <span className="text-lime-400">Connect</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
              <div className="md:col-span-2">
                <p className="text-2xl text-gray-400 font-light max-w-xl">
                  Currently open to full-time roles and technical consulting in
                  Salesforce Automation.
                </p>
                <div className="mt-12 flex flex-wrap gap-4">
                  <a
                    href="mailto:naveen@example.com"
                    className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-lime-400 transition-colors flex items-center gap-2"
                  >
                    <Mail size={18} /> Email Me
                  </a>
                  <a
                    href="#"
                    className="border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a
                    href="#"
                    className="border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                  >
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-end text-right text-gray-500 text-sm font-mono">
                <p>&copy; 2025 NAVEEN KUMAR P.</p>
                <p>DESIGNED & DEVELOPED WITH REACT</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
