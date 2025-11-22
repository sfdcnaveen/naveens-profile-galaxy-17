"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Hash,
  Terminal,
  Cpu,
} from "lucide-react";
// Fonts are loaded via CSS (see index.css)
// Using standard CSS classes for font families

// --- Content Data ---
const EXPERIENCE = [
  {
    company: "TestVagrant",
    role: "SDET",
    year: "2025—Present",
    details: [
      "Architecting scalable Salesforce automation frameworks.",
      "Playwright & TypeScript ecosystem leadership.",
      "CI/CD Pipeline orchestration.",
    ],
  },
  {
    company: "Capgemini",
    role: "Consultant",
    year: "2023—2025",
    details: [
      "Led migration: Legacy → Playwright (40% efficiency boost).",
      "Hybrid framework implementation.",
      "Salesforce QA delivery lead.",
    ],
  },
  {
    company: "Capgemini",
    role: "Assoc. Consultant",
    year: "2021—2023",
    details: [
      "Foundational Salesforce QA.",
      "Java/Selenium automation scripting.",
      "Agile workflow integration.",
    ],
  },
];

const PROJECTS = [
  {
    id: "01",
    name: "Aldar Properties",
    tag: "Real Estate / Dubai",
    stack: "Salesforce • Automation",
    desc: "Ensuring 99.9% reliability for critical leasing flows.",
  },
  {
    id: "02",
    name: "ANZ CMOS",
    tag: "FinTech / Banking",
    stack: "Compliance • QA",
    desc: "Regulatory workflow validation for banking systems.",
  },
  {
    id: "03",
    name: "SF Auto-Suite",
    tag: "Architecture",
    stack: "Playwright • TS",
    desc: "Custom-built hybrid framework architecture.",
  },
  {
    id: "04",
    name: "Portfolio V2",
    tag: "Engineering",
    stack: "Next.js • Framer",
    desc: "High-performance distinct design engineering.",
  },
];

const SKILLS = [
  { name: "Salesforce QA", level: 95 },
  { name: "Playwright", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "CI/CD Pipelines", level: 85 },
  { name: "API Testing", level: 82 },
];

// --- Sub-Components ---

const MagneticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-[100] hidden md:block"
      animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
      transition={{ type: "spring", damping: 20, stiffness: 400, mass: 0.5 }}
    />
  );
};

const SmoothScrollText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Bezier for "editorial" feel
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Main Page Component ---

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div
      className={`bg-[#0a0a0a] text-[#e1e1e1] min-h-screen selection:bg-[#e1e1e1] selection:text-[#0a0a0a] font-manrope cursor-none`}
    >
      <MagneticCursor />

      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50 mix-blend-difference"
      />

      {/* Grain Overlay for Texture */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none z-[40]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-start z-40 mix-blend-difference text-white">
        <div className="flex flex-col text-xs font-bold tracking-widest uppercase leading-relaxed">
          <span>Naveen K. Pasupuleti</span>
          <span className="opacity-50">SDET / Engineer</span>
        </div>
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
          {["About", "Work", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:line-through decoration-2 decoration-white transition-all"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-end px-4 md:px-12 pb-12 pt-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 font-black text-[40vw] leading-none text-white pointer-events-none select-none">
          QA
        </div>

        <div className="max-w-[90vw] z-10">
          <div className="overflow-hidden">
            <SmoothScrollText
              className={`text-[13vw] md:text-[11vw] leading-[0.85] font-bold tracking-tight uppercase text-white font-syne`}
            >
              Code.
            </SmoothScrollText>
          </div>
          <div className="overflow-hidden">
            <SmoothScrollText
              className={`text-[13vw] md:text-[11vw] leading-[0.85] font-bold tracking-tight uppercase text-white ml-[10vw] font-syne`}
            >
              Test.
            </SmoothScrollText>
          </div>
          <div className="overflow-hidden">
            <SmoothScrollText
              className={`text-[13vw] md:text-[11vw] leading-[0.85] font-bold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 font-syne`}
            >
              Deploy.
            </SmoothScrollText>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-16 border-t border-white/20 pt-6">
          <p className="max-w-md text-sm md:text-base text-gray-400 leading-relaxed">
            Based in India. Transforming manual scenarios into high-speed
            automated delivery at{" "}
            <span className="text-white font-bold">
              TestVagrant Technologies
            </span>
            .
          </p>
          <div className="mt-8 md:mt-0 animate-spin-slow">
            <Terminal size={48} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* About / Manifesto */}
      <section id="about" className="py-32 px-4 md:px-12">
        <div className="max-w-5xl">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-gray-500">
            / The Manifesto
          </h2>
          <p
            className={`text-3xl md:text-5xl leading-[1.2] font-medium indent-24 font-syne`}
          >
            I don't just find bugs; I engineer the systems that prevent them.
            With a deep focus on{" "}
            <span className="text-white border-b border-white/30">
              Salesforce Automation
            </span>{" "}
            and the{" "}
            <span className="text-white border-b border-white/30">
              Playwright ecosystem
            </span>
            , I build testing architectures that are as robust as the code they
            verify.
          </p>
        </div>
      </section>

      {/* Experience - The Timeline */}
      <section
        id="work"
        className="py-24 px-4 md:px-12 border-t border-white/10"
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div className="sticky top-24 h-fit">
            <h2 className={`text-6xl font-bold mb-4 font-syne`}>Exp.</h2>
            <p className="text-sm text-gray-500">
              A history of quality assurance.
            </p>
            <div className="mt-8">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          <div className="space-y-24">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="flex items-baseline justify-between mb-4 border-b border-white/10 pb-4">
                  <h3
                    className={`text-3xl font-bold group-hover:text-white transition-colors font-syne`}
                  >
                    {exp.company}
                  </h3>
                  <span className="font-mono text-sm text-gray-500">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-xl text-white mb-6">{exp.role}</h4>
                <ul className="space-y-3">
                  {exp.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-400 font-light"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-white transition-colors" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Catalogue */}
      <section className="py-32 px-4 md:px-12 bg-[#0f0f0f]">
        <div className="flex items-end justify-between mb-16">
          <h2 className={`text-7xl md:text-9xl font-bold opacity-10 font-syne`}>
            WORK
          </h2>
          <span className="hidden md:block text-xs font-bold tracking-widest">
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="border-t border-white/20">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              className="group relative border-b border-white/20 py-12 md:py-16 cursor-pointer transition-colors hover:bg-white/5"
              initial="initial"
              whileHover="hover"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between relative z-10 px-4">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="font-mono text-xs text-gray-500">
                    /{project.id}
                  </span>
                </div>
                <div className="md:w-2/4">
                  <h3
                    className={`text-4xl md:text-5xl font-bold mb-2 group-hover:ml-4 transition-all duration-300 font-syne`}
                  >
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:w-2/3 group-hover:ml-4 transition-all duration-300 delay-75">
                    {project.desc}
                  </p>
                </div>
                <div className="md:w-1/4 text-right mt-4 md:mt-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    {project.tag}
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono mt-1">
                    {project.stack}
                  </div>
                </div>
              </div>

              {/* Hover Icon Reveal */}
              <motion.div
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  hover: { scale: 1, opacity: 1 },
                }}
                className="absolute right-12 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full text-black hidden md:block"
              >
                <ArrowUpRight size={32} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24 px-4 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className={`text-4xl font-bold mb-8 font-syne`}>
              Technical <br /> Proficiency.
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              My stack is chosen for reliability and speed. I specialize in the
              intersection of application logic and automated verification.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              {["Git", "Jenkins", "Docker", "JIRA", "Postman", "Figma"].map(
                (tool) => (
                  <div
                    key={tool}
                    className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    {tool}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="space-y-8">
            {SKILLS.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-2 text-sm font-bold uppercase tracking-wider">
                  <span>{skill.name}</span>
                  <span className="font-mono opacity-50">{skill.level}%</span>
                </div>
                <div className="h-[2px] w-full bg-gray-800 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute top-0 left-0 h-full bg-white"
                  />
                </div>
              </div>
            ))}

            {/* Certifications Block */}
            <div className="pt-12 mt-12 border-t border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="text-white" />
                <h3 className="font-bold uppercase tracking-widest">
                  Certifications
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["PD1", "Associate", "AI Associate"].map((cert) => (
                  <div
                    key={cert}
                    className="border border-white/10 p-4 text-center hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    <span className="block font-bold text-sm">Salesforce</span>
                    <span className="text-xs block mt-1 opacity-70">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-32 px-4 md:px-12 border-t border-white/10 relative overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center text-center z-10 relative">
          <span className="text-xs font-bold uppercase tracking-[0.4em] mb-8 animate-pulse">
            Availability: Open
          </span>

          <a
            href="mailto:naveen@example.com"
            className={`text-[10vw] leading-none font-bold hover:text-gray-500 transition-colors duration-300 font-syne`}
          >
            SAY HELLO
          </a>

          <div className="flex gap-12 mt-16">
            <a href="#" className="group flex flex-col items-center gap-2">
              <div className="p-4 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                Email
              </span>
            </a>
            <a href="#" className="group flex flex-col items-center gap-2">
              <div className="p-4 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <Linkedin size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                LinkedIn
              </span>
            </a>
            <a href="#" className="group flex flex-col items-center gap-2">
              <div className="p-4 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <Github size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                GitHub
              </span>
            </a>
          </div>

          <div className="absolute bottom-0 w-full flex justify-between text-[10px] uppercase tracking-widest opacity-30 py-4 px-12">
            <span>© 2025 NKP.DEV</span>
            <span>
              Local Time:{" "}
              {new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
