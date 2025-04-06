
import React, { useRef } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className={cn("py-16 md:py-24 bg-background", className)}
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <AnimatedText
            text="About Me"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <AnimatedText
            text="Passionate Salesforce QA Engineer with a strong focus on ensuring the quality and reliability of Salesforce solutions through rigorous testing and automation. Dedicated to identifying and resolving complex business challenges with efficient testing strategies and best practices."
            delay={100}
            className="text-lg text-muted-foreground"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-6 interactive-card glass-hover">
            <div className="glass-dark rounded-full w-12 h-12 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Background</h3>
            <p className="text-muted-foreground mb-4">
              Consultant at Capgemini, specializing in Salesforce QA. Experienced in testing, validating, and ensuring reliable Salesforce solutions with manual and automated testing, defect management, and team collaboration.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Consultant at Capgemini (2023 - Present)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Associate Consultant at Capgemini (2021 - 2023)</span>
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6 interactive-card glass-hover">
            <div className="glass-dark rounded-full w-12 h-12 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="flex items-start mb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/C560BAQGn-IEnvdYHnQ/company-logo_400_400/company-logo_400_400/0/1630599281371/jntua_college_of_engineering_anantapur_logo?e=1748476800&v=beta&t=CVSXf5aO0oo758s9m3sKfEZDHctDVNotB7hn4tFNYuU"
                alt="JNTU Anantapur"
                className="w-10 h-10 rounded-md object-contain mr-3"
              />
              <div>
                <h4 className="font-medium">JNTU Anantapur</h4>
                <p className="text-sm text-muted-foreground">Bachelor of Technology</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Specialized in Electronics and Communication Engineering, building a strong foundation in technical problem-solving and analytical thinking.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 interactive-card glass-hover">
            <div className="glass-dark rounded-full w-12 h-12 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Specializations</h3>
            <p className="text-muted-foreground mb-4">
              I specialize in Salesforce development and implementation, focusing on creating innovative solutions that drive business value.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Salesforce Sales Cloud & Service Cloud Testing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lightning Web Components Validation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Apex Functionality Testing & Integration QA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-dark rounded-xl inline-block px-6 py-3 mx-auto">
            <p className="text-lg italic text-muted-foreground">
              "I strive to create value and impact within organizations through innovative solutions, effective communication, and technical excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
