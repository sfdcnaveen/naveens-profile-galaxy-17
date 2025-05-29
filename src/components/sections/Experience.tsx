
import { useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';
import { motion, useInView } from 'framer-motion';

interface ExperienceProps {
  className?: string;
}

const Experience = ({ className }: ExperienceProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const experiences = [
    {
      title: "Consultant",
      company: "Capgemini",
      logo: "/images/capgemini_logo.jpeg",
      period: "2023 - Present",
      description: "Specializing in Salesforce Quality Assurance, leading test automation and validation for enterprise Sales Cloud and Service Cloud solutions. Currently migrating WDIO test scripts to Playwright with TypeScript to enhance test efficiency and reliability.",
      technologies: ["Salesforce", "Playwright", "TypeScript", "WDIO", "Java", "Selenium"],
      responsibilities: [
        "Developing and maintaining automated test frameworks using Java Selenium, WDIO (TypeScript), and Playwright.",
        "Performing functional, regression, and integration testing for Salesforce applications.",
        "Validating Lightning Web Components and Lightning Experience for performance and compliance.",
        "Ensuring seamless integration testing with third-party systems and APIs.",
        "Collaborating with developers, BAs, and stakeholders to define test strategies and automation best practices."
      ]
    },
    {
      title: "Associate Consultant",
      company: "Capgemini",
      logo: "/images/capgemini_logo.jpeg",
      period: "2021 - 2023",
      description: "Contributed to Salesforce QA and automation efforts, supporting clients in optimizing CRM processes through testing and quality assurance",
      technologies: ["Salesforce", "Java", "Selenium", "WDIO", "Service Cloud"],
      responsibilities: [
        "Developed and executed automated test scripts using Java Selenium and WDIO for Salesforce applications.",
        "Conducted manual and automated testing for Apex classes, triggers, and custom configurations.",
        "Performed Service Cloud component validation and ensured proper functionality of custom objects.",
        "Assisted in identifying and resolving defects, performance issues, and integration challenges."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className={cn("py-16 md:py-24 bg-background", className)}
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <AnimatedText
            text="Professional Experience"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <AnimatedText
            text="My journey building expertise in Salesforce development and implementation."
            delay={100}
            className="text-lg text-muted-foreground"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Company logo for timeline */}
                  <div className="flex-none hidden md:block z-10">
                    <div className="h-16 w-16 rounded-full glass-dark flex items-center justify-center shadow-md">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="glass-card rounded-2xl p-6 md:ml-8 interactive-card glass-hover flex-1 cursor-pointer transition-all duration-300"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <div className="flex items-center flex-wrap gap-4 mb-4">
                      <div className="md:hidden h-12 w-12 rounded-full glass-dark flex items-center justify-center shadow-md">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-6 w-6 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <div className="text-primary font-medium">{exp.company}</div>
                        <div className="text-sm text-muted-foreground">{exp.period}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="glass-dark px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand/collapse animation */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedIndex === index ? 'auto' : 0,
                        opacity: expandedIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Show more/less button */}
                    <button
                      className="mt-4 text-primary text-sm font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(expandedIndex === index ? null : index);
                      }}
                    >
                      {expandedIndex === index ? (
                        <>
                          Show Less
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Show More
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
