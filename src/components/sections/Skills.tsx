
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';

interface SkillProps {
  name: string;
  level: number;
  icon?: string;
  color?: string;
}

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  const salesforceSkills: SkillProps[] = [
    { name: "Salesforce Administration", level: 80, color: "#00A1E0" },
    { name: "Salesforce Service Cloud", level: 90, color: "#00A1E0" },
    { name: "Case Management", level: 90, color: "#00A1E0" },
    { name: "Case Entitlements", level: 90, color: "#00A1E0" },
    { name: "Apex Programming", level: 40, color: "#00A1E0" },
    { name: "Lightning Web Components", level: 50, color: "#00A1E0" },
    { name: "Process Builder & Flow Builder", level: 60, color: "#00A1E0" },
    { name: "User Configuration", level: 50, color: "#00A1E0" }
  ];

  const webSkills: SkillProps[] = [
    { name: "HTML5 & CSS3", level: 85, color: "#E44D26" },
    { name: "JavaScript", level: 82, color: "#F7DF1E" },
    { name: "TypeScript", level: 82, color: "#F7DF1E" },
    { name: "Java", level: 75, color: "#007396" },
    { name: "Git", level: 80, color: "#F05032" },
    { name: "WDIO", level: 85, color: "#61DAFB" },
    { name: "Playwright", level: 80, color: "#61DAFB" }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const SkillBar = ({ skill, delay = 0 }: { skill: SkillProps; delay?: number }) => {
    return (
      <div className="mb-6 transform transition-all duration-300 hover:scale-105">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-primary font-medium">{skill.level}%</span>
        </div>
        <div className="skill-bar hover:shadow-md transition-all duration-300">
          <div
            className="skill-progress"
            style={{
              width: animated ? `${skill.level}%` : '0%',
              backgroundColor: skill.color,
              transitionDelay: `${delay}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className={cn("py-16 md:py-24 bg-background", className)}
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <AnimatedText
            text="Technical Skills"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <AnimatedText
            text="A showcase of my expertise in Salesforce Quality Assurance and related technologies."
            delay={100}
            className="text-lg text-muted-foreground"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <img
                src="/images/salesforce_logo.jpeg"
                alt="Salesforce"
                className="w-8 h-8 mr-3"
              />
              Salesforce Ecosystem
            </h3>
            <div className="glass-card rounded-xl p-6">
              {salesforceSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} delay={index * 100} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Automation Skills
            </h3>
            <div className="glass-card rounded-xl p-6">
              {webSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} delay={(index + salesforceSkills.length) * 100} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 glass-hover">
              <div className="flex items-center mb-4">
                <div className="glass-dark rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Problem Solving & Analytical Thinking</h4>
              </div>
              <p className="text-muted-foreground ml-14">Adept at breaking down complex issues into manageable components and developing effective solutions through systematic analysis and creative thinking.</p>
            </div>

            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 glass-hover">
              <div className="flex items-center mb-4">
                <div className="glass-dark rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Communication & Client Consultation</h4>
              </div>
              <p className="text-muted-foreground ml-14">Skilled in clear, concise communication with both technical and non-technical stakeholders, ensuring requirements are understood and expectations are managed effectively.</p>
            </div>

            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 glass-hover">
              <div className="flex items-center mb-4">
                <div className="glass-dark rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Team Collaboration & Adaptability</h4>
              </div>
              <p className="text-muted-foreground ml-14">Thrive in collaborative environments, contributing positively to team dynamics while remaining flexible and adaptable to changing project requirements and technologies.</p>
            </div>

            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 glass-hover">
              <div className="flex items-center mb-4">
                <div className="glass-dark rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Time Management & Documentation</h4>
              </div>
              <p className="text-muted-foreground ml-14">Excellent at prioritizing tasks, meeting deadlines, and creating comprehensive technical documentation that enhances project clarity and knowledge transfer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
