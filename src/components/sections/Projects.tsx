import { useRef } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
      title: "Aldar",
      description:
        "Test Automation Consultant for Aldar Sales and Post-Sales applications based on Salesforce Sales Cloud and Service Cloud for Dubai-based real estate company.",
      image: "/images/salesforcelogo.jpg",
      technologies: [
        "Salesforce",
        "Sales Cloud",
        "Service Cloud",
        "Test Automation",
        "Consulting",
      ],
      category: "salesforce",
    },
    {
      title: "CMOS - Complaint Management Operating System",
      description:
        "Salesforce Service Cloud implementation for ANZ Bank in Australia, focused on case management using Financial Services Cloud (FSC) for efficient complaint handling.",
      image: "/images/salesforcelogo.jpg",
      technologies: [
        "Salesforce",
        "Service Cloud",
        "Financial Services Cloud",
        "Process Builder",
        "Flow",
        "Case Management",
      ],
      category: "salesforce",
    },
    {
      title: "Salesforce Test Automation Framework",
      description:
        "Comprehensive test automation framework for Salesforce applications using Playwright and TypeScript with custom page objects and CI/CD integration.",
      image: "/images/playwrightTpescriptLogo.jpg",
      technologies: ["Playwright", "TypeScript", "Salesforce", "CI/CD", "Jest"],
      category: "automation",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive personal portfolio website built with React and TypeScript featuring modern design elements and interactive components.",
      image: "/images/portfolio.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
      category: "web",
      link: "https://www.naveenpasupuleti.com/",
      github: "https://github.com/sfdcnaveen/naveens-profile-galaxy-17",
    },
  ];

  return (
    <section
      id="projects"
      className={cn("py-16 md:py-24", className)}
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="glass-dark px-2.5 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="glass-dark px-2.5 py-1 rounded-full text-xs font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-end gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark p-2 rounded-lg hover:bg-primary/20 transition-colors"
              aria-label="View Live"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark p-2 rounded-lg hover:bg-primary/20 transition-colors"
              aria-label="View Code"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
