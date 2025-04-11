import { useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';
import { motion, useInView } from 'framer-motion';

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
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const projects: ProjectProps[] = [
    {
      title: "Salesforce Service Cloud Implementation for Financial Services",
      description: "I worked on a Salesforce Service Cloud implementation for a financial services company, specifically focused on case management. This project was built using Financial Services Cloud (FSC) and involved handling both customer and non-customer complaints efficiently. The organization needed a system to manage complaints from both existing customers and non-customers, with distinct record types and various case statuses configured as per business needs.",
      image: "/images/salesforcelogo.jpg",
      technologies: ["Salesforce", "Service Cloud", "Financial Services Cloud", "Process Builder", "Flow", "Case Management", "Email-to-Case", "Web-to-Case"],
      category: "salesforce"
    },
    {
      title: "Salesforce Test Automation Framework",
      description: "Developed a comprehensive test automation framework for Salesforce applications using Playwright and TypeScript. The framework includes custom page objects, data-driven testing capabilities, and integration with CI/CD pipelines.",
      image: "/images/playwrightTpescriptLogo.jpg",
      technologies: ["Playwright", "TypeScript", "Salesforce", "CI/CD", "Jest"],
      category: "automation"
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive personal portfolio website using React and TypeScript. The site features modern design elements including glassmorphism, animations, and interactive components.",
      image: "/images/portfolio.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "web"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'salesforce', label: 'Salesforce' },
    { id: 'automation', label: 'Test Automation' },
    { id: 'web', label: 'Web Development' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      className={cn("py-16 md:py-24 bg-background", className)}
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "glass-dark text-white"
                  : "glass-card hover:glass-dark"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isActive={activeProject === index}
              onClick={() => setActiveProject(activeProject === index ? null : index)}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
  isActive: boolean;
  onClick: () => void;
  isInView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isActive, onClick, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "glass-card rounded-xl overflow-hidden transition-all duration-300 group",
        isActive ? "ring-2 ring-primary" : ""
      )}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-card/80 to-card/30" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className={cn(
            "flex items-center justify-center rounded-lg transition-transform duration-500 group-hover:scale-110",
            project.title.includes("Salesforce") ? "bg-white/10 backdrop-blur-sm p-4 w-[85%] h-[85%]" : "",
            project.title.includes("Automation") ? "bg-white/10 backdrop-blur-sm p-3 w-[90%] h-[90%]" : "",
            project.title.includes("Portfolio") ? "bg-white/10 backdrop-blur-sm p-3 w-[90%] h-[90%]" : ""
          )} style={{ transform: 'scale(1.05)' }}>
            <img
              src={project.image}
              alt={project.title}
              className={cn(
                "w-auto h-auto object-contain transition-all duration-300",
                project.title.includes("Salesforce") ? "max-w-[90%] max-h-[90%]" : "",
                project.title.includes("Automation") ? "max-w-[95%] max-h-[95%]" : "",
                project.title.includes("Portfolio") ? "max-w-[95%] max-h-[95%]" : ""
              )}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="glass-dark px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="glass-dark px-3 py-1 rounded-full text-xs font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

        <div className="flex justify-between items-center">
          <button
            className="text-primary text-sm font-medium flex items-center"
            onClick={onClick}
          >
            {isActive ? (
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

          <div className="flex gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="View Live"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isActive ? 'auto' : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-4"
        >
          <div className="pt-4 border-t border-border">
            <h4 className="font-medium mb-2">All Technologies:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="glass-dark px-3 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {project.title === "Salesforce Service Cloud Implementation for Financial Services" ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Business Use Case:</h4>
                  <p className="text-muted-foreground mb-2">The organization needed a system to manage complaints from both existing customers and non-customers. We implemented two case record types:</p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Customer Complaint – for complaints raised by customers within the organization.</li>
                    <li>Non-Customer Complaint – for issues reported by external individuals.</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 mb-2">We also configured various case statuses as per business needs, such as:</p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Open</li>
                    <li>Under Investigation</li>
                    <li>Escalated</li>
                    <li>Reopened</li>
                    <li>Closed</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Features Implemented:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">Email-to-Case & Web-to-Case</p>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Configured Email-to-Case to automatically create cases from customer emails.</li>
                        <li>Configured Web-to-Case to allow non-customers to submit complaints via an online form.</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Case Notifications</p>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Implemented automated notifications to customers upon complaint creation.</li>
                        <li>Configured email alerts for case status updates.</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Case Escalation & Assignment Rules</p>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Defined escalation rules to ensure high-priority cases get assigned to the right teams.</li>
                        <li>Implemented case assignment rules based on complaint type and customer segment.</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Service-Level Agreements (SLAs)</p>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Defined response and resolution timelines for different types of cases.</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Reporting & Dashboards</p>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Created custom reports and dashboards for tracking case trends, resolution times, and agent performance.</li>
                      </ul>
                    </li>
                  </ol>
                </div>



                <div>
                  <h4 className="font-medium mb-2">Results & Impact:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Improved case resolution efficiency by 30% through automation.</li>
                    <li>Reduced manual case creation effort using Email-to-Case & Web-to-Case.</li>
                    <li>Enhanced customer satisfaction by implementing real-time case notifications and status tracking.</li>
                  </ul>
                </div>
              </div>

            ) : (
              <p className="text-muted-foreground">{project.description}</p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
