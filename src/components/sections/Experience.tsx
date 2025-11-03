import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceProps {
  className?: string;
}

const Experience = ({ className }: ExperienceProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const experiences = [
    {
      title: "SDET",
      company: "TestVagrant Technologies",
      logo: "/images/testvagrant_technologies_logo.jpeg",
      period: "Present",
      description:
        "Automating Salesforce applications using Playwright and JavaScript.",
      technologies: [
        "Salesforce",
        "Playwright",
        "JavaScript",
        "API Automation",
      ],
      responsibilities: [
        "Developing and maintaining automated test frameworks using Java Selenium, WDIO (TypeScript), and Playwright.",
        "Performing functional, regression, and integration testing for Salesforce applications.",
        "Validating Lightning Web Components and Lightning Experience for performance and compliance.",
        "Ensuring seamless integration testing with third-party systems and APIs.",
        "Collaborating with developers, BAs, and stakeholders to define test strategies and automation best practices.",
      ],
    },
    {
      title: "Consultant",
      company: "Capgemini",
      logo: "/images/capgemini_logo.jpeg",
      period: "2023 - June,2025",
      description:
        "Specializing in Salesforce Quality Assurance, leading test automation and validation for enterprise Sales Cloud and Service Cloud solutions. Currently migrating WDIO test scripts to Playwright with TypeScript to enhance test efficiency and reliability.",
      technologies: [
        "Salesforce",
        "Playwright",
        "TypeScript",
        "WDIO",
        "Java",
        "Selenium",
      ],
      responsibilities: [
        "Developing and maintaining automated test frameworks using Java Selenium, WDIO (TypeScript), and Playwright.",
        "Performing functional, regression, and integration testing for Salesforce applications.",
        "Validating Lightning Web Components and Lightning Experience for performance and compliance.",
        "Ensuring seamless integration testing with third-party systems and APIs.",
        "Collaborating with developers, BAs, and stakeholders to define test strategies and automation best practices.",
      ],
    },
    {
      title: "Associate Consultant",
      company: "Capgemini",
      logo: "/images/capgemini_logo.jpeg",
      period: "2021 - 2023",
      description:
        "Contributed to Salesforce QA and automation efforts, supporting clients in optimizing CRM processes through testing and quality assurance",
      technologies: ["Salesforce", "Java", "Selenium", "WDIO", "Service Cloud"],
      responsibilities: [
        "Developed and executed automated test scripts using Java Selenium and WDIO for Salesforce applications.",
        "Conducted manual and automated testing for Apex classes, triggers, and custom configurations.",
        "Performed Service Cloud component validation and ensured proper functionality of custom objects.",
        "Assisted in identifying and resolving defects, performance issues, and integration challenges.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={cn("py-16 md:py-24", className)}
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
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Experience Header */}
                <div
                  className="p-6 md:p-8 cursor-pointer flex items-start justify-between"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-xl glass-dark flex items-center justify-center shadow-md flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="text-primary font-semibold">
                        {exp.company}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {exp.period}
                      </div>
                      <p className="text-muted-foreground mt-3">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                  >
                    {expandedIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </button>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 border-t border-white/10">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="glass-dark px-3 py-1.5 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;