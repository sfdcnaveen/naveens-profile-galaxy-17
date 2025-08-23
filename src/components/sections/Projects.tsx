import { useRef } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { motion, useInView } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
}

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const projects: ProjectProps[] = [
    {
      title: "CMOS - Complaint Management Operating System",
      description:
        "Salesforce Service Cloud implementation for a financial services company, specifically focused on case management. This project was built using Financial Services Cloud (FSC) and involved handling both customer and non-customer complaints efficiently. The organization needed a system to manage complaints from both existing customers and non-customers, with distinct record types and various case statuses configured as per business needs.",
      image: "/images/salesforcelogo.jpg",
      technologies: [
        "Salesforce",
        "Service Cloud",
        "Financial Services Cloud",
        "Process Builder",
        "Flow",
        "Case Management",
        "Email-to-Case",
        "Web-to-Case",
      ],
      category: "salesforce",
    },
    {
      title: "Salesforce Test Automation Framework",
      description:
        "Developed a comprehensive test automation framework for Salesforce applications using Java Selenium, WDIO (JavaScript) and Playwright and TypeScript. The framework includes custom page objects, data-driven testing capabilities, and integration with CI/CD pipelines.",
      image: "/images/playwrightTpescriptLogo.jpg",
      technologies: ["Playwright", "TypeScript", "Salesforce", "CI/CD", "Jest"],
      category: "automation",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive personal portfolio website using React and TypeScript. The site features modern design elements including glassmorphism, animations, and interactive components.",
      image: "/images/portfolio.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
      category: "web",
    },
  ];

  return (
    <section
      id="projects"
      className={cn("py-6 md:py-10", className)}
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <AnimatedText
            text="Projects"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <AnimatedText
            text="A showcase of my technical projects and contributions."
            delay={100}
            className="text-lg text-muted-foreground"
          />
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
  isInView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isInView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-lg"
    >
      {/* Full-Width Project Image */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="glass-dark px-3 py-1 rounded-full text-xs font-medium text-white/90"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="glass-dark px-3 py-1 rounded-full text-xs font-medium text-white/90">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-muted-foreground mb-6 text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex justify-end items-center">
          <div className="flex gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="View Live"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="View Code"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
