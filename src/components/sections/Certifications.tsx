
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  description: string;
  link?: string;
}

interface CertificationsProps {
  className?: string;
}

const Certifications = ({ className }: CertificationsProps) => {
  const [activeCert, setActiveCert] = useState<number | null>(null);
  
  const certifications: CertificationProps[] = [
    {
      title: "Salesforce Certified Associate",
      issuer: "Salesforce",
      date: "2023",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHZ9xYomLW7zg/company-logo_400_400/company-logo_400_400/0/1630658255326/salesforce_logo?e=1748476800&v=beta&t=MpI_GvGzjNVIAZ4Zd59Impvg3Xkc3eTza7ByOyTlCNY",
      description: "Validates fundamental knowledge of the Salesforce platform, including admin setup, standard & custom objects, security, and business logic automation.",
      link: "#"
    },
    {
      title: "Copado Robotic Testing Certification",
      issuer: "Copado",
      date: "2023",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQFNt6AkjMBc_A/company-logo_400_400/company-logo_400_400/0/1630625195669/copado_solutions_sl_logo?e=1748476800&v=beta&t=80mSkw0Kpei7dHDsjbuBHQMxpFEaw_uFcnSgyGvPGcU",
      description: "Demonstrates proficiency in automated testing for Salesforce applications using Copado's testing platform.",
      link: "#"
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      date: "2022",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHZ9xYomLW7zg/company-logo_400_400/company-logo_400_400/0/1630658255326/salesforce_logo?e=1748476800&v=beta&t=MpI_GvGzjNVIAZ4Zd59Impvg3Xkc3eTza7ByOyTlCNY",
      description: "Validates skills in developing custom applications on the Salesforce platform, including Apex and Visualforce.",
      link: "#"
    }
  ];
  
  return (
    <section 
      id="certifications" 
      className={cn("py-16 md:py-24 bg-background", className)}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <AnimatedText 
            text="Certifications" 
            className="text-3xl md:text-4xl font-bold mb-6" 
          />
          <AnimatedText 
            text="Professional credentials that validate my expertise in Salesforce and related technologies."
            delay={100}
            className="text-lg text-muted-foreground" 
          />
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={cn(
                "glass rounded-xl p-6 relative overflow-hidden transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1",
                activeCert === index ? "ring-2 ring-primary" : ""
              )}
              onClick={() => setActiveCert(activeCert === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={cert.logo} 
                  alt={cert.issuer} 
                  className="w-12 h-12 rounded-lg object-contain border border-border p-1"
                />
                <div className="ml-3">
                  <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                  <div className="text-sm font-medium">{cert.date}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{cert.title}</h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {cert.description}
              </p>
              
              <a 
                href={cert.link} 
                className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center"
                onClick={(e) => e.stopPropagation()}
              >
                View Certificate
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <div 
                className={cn(
                  "absolute top-0 right-0 h-16 w-16 transition-opacity duration-300",
                  activeCert === index ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[64px] border-t-primary border-l-[64px] border-l-transparent"></div>
                <svg className="absolute top-2 right-2 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Continuously expanding my knowledge and skills through certifications and professional development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
