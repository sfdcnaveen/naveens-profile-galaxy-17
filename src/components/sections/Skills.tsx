
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
    { name: "Salesforce Sales Cloud", level: 95, color: "#00A1E0" },
    { name: "Salesforce Service Cloud", level: 90, color: "#00A1E0" },
    { name: "Apex Programming", level: 90, color: "#00A1E0" },
    { name: "Lightning Web Components", level: 85, color: "#00A1E0" },
    { name: "Process Builder & Flow Builder", level: 92, color: "#00A1E0" }
  ];
  
  const webSkills: SkillProps[] = [
    { name: "HTML5 & CSS3", level: 85, color: "#E44D26" },
    { name: "JavaScript", level: 82, color: "#F7DF1E" },
    { name: "Java", level: 75, color: "#007396" },
    { name: "Git", level: 80, color: "#F05032" }
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
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-primary font-medium">{skill.level}%</span>
        </div>
        <div className="skill-bar">
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
      className={cn("py-16 md:py-24 bg-white", className)}
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <AnimatedText 
            text="Technical Skills" 
            className="text-3xl md:text-4xl font-bold mb-6" 
          />
          <AnimatedText 
            text="A showcase of my expertise in Salesforce development and related technologies."
            delay={100}
            className="text-lg text-muted-foreground" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <img 
                src="https://media.licdn.com/dms/image/v2/C560BAQHZ9xYomLW7zg/company-logo_400_400/company-logo_400_400/0/1630658255326/salesforce_logo?e=1748476800&v=beta&t=MpI_GvGzjNVIAZ4Zd59Impvg3Xkc3eTza7ByOyTlCNY" 
                alt="Salesforce" 
                className="w-8 h-8 mr-3"
              />
              Salesforce Ecosystem
            </h3>
            <div className="glass rounded-xl p-6">
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
              Development Skills
            </h3>
            <div className="glass rounded-xl p-6">
              {webSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} delay={(index + salesforceSkills.length) * 100} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Problem Solving", 
                "Communication", 
                "Analytical Thinking",
                "Team Collaboration",
                "Client Consultation",
                "Technical Documentation",
                "Time Management",
                "Adaptability"
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="glass text-center py-3 px-4 rounded-lg text-sm font-medium interactive-card"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
