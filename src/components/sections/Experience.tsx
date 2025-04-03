
import React from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';

interface ExperienceProps {
  className?: string;
}

const Experience = ({ className }: ExperienceProps) => {
  const experiences = [
    {
      title: "Senior Associate",
      company: "Capgemini",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQH-ZV832H4sdA/company-logo_400_400/company-logo_400_400/0/1705572256355/capgemini_logo?e=1748476800&v=beta&t=JM-VMyuJyKen0ckcFq_L3YPdGBuVI6C6J4nmp575bG8",
      period: "2023 - Present",
      description: "Leading Salesforce development initiatives for enterprise clients, focusing on Sales Cloud and Service Cloud solutions.",
      responsibilities: [
        "Design and development of custom Salesforce solutions",
        "Implementation of Lightning Web Components & Lightning Experience",
        "Integration with third-party systems and APIs",
        "Client consultation and requirement gathering",
        "Team mentoring and knowledge sharing"
      ]
    },
    {
      title: "Associate Consultant",
      company: "Capgemini",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQH-ZV832H4sdA/company-logo_400_400/company-logo_400_400/0/1705572256355/capgemini_logo?e=1748476800&v=beta&t=JM-VMyuJyKen0ckcFq_L3YPdGBuVI6C6J4nmp575bG8",
      period: "2021 - 2023",
      description: "Contributed to Salesforce implementations and customizations, supporting clients in optimizing their CRM processes.",
      responsibilities: [
        "Development of Apex classes and triggers",
        "Configuration of Sales Cloud components",
        "Creation and maintenance of custom objects",
        "Testing and quality assurance"
      ]
    }
  ];
  
  return (
    <section 
      id="experience" 
      className={cn("py-16 md:py-24 bg-background", className)}
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
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-6 relative"
                >
                  {/* Company logo for timeline */}
                  <div className="flex-none hidden md:block z-10">
                    <div className="h-16 w-16 rounded-full glass flex items-center justify-center shadow-md">
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="glass rounded-2xl p-6 md:ml-8 interactive-card flex-1">
                    <div className="flex items-center flex-wrap gap-4 mb-4">
                      <div className="md:hidden h-12 w-12 rounded-full glass flex items-center justify-center shadow-md">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
