
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';
import CertificateModal from '../ui/CertificateModal';

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
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications: CertificationProps[] = [
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      date: "2022",
      logo: "/images/salesforce_logo.jpeg",
      description: "Validates skills in developing custom applications on the Salesforce platform, including Apex and Visualforce.",
      link: "/certifications/SF_Platform_Developer_1.png"
    },
    {
      title: "Salesforce Certified Associate",
      issuer: "Salesforce",
      date: "2023",
      logo: "/images/salesforce_logo.jpeg",
      description: "Demonstrates foundational Salesforce knowledge, including navigating the platform, understanding key concepts, and basic user support.",
      link: "/certifications/SF_Certified_Associate.png"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "2024",
      logo: "/images/salesforce_logo.jpeg",
      description: "Validates proficiency in AI-powered CRM features, including data analysis, predictive modeling, and ethical AI use. It’s ideal for professionals who want to learn how to use AI to improve business operations in Salesforce.",
      link: "/certifications/SF_Certified_AI_Associate.png"
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

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={cn(
                "glass-card rounded-xl p-6 relative overflow-hidden transition-all duration-300 w-full max-w-sm",
                "hover:shadow-lg hover:-translate-y-1 glass-hover"
              )}
            >
              <div className="flex items-center mb-4">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-12 h-12 rounded-lg object-contain border border-white/10 glass-dark p-1"
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

              <button
                className="glass-dark text-sm font-medium text-white hover:bg-primary/90 transition-all flex items-center cursor-pointer px-3 py-1.5 rounded-full mt-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  // Don't highlight the card when viewing certificate
                  setSelectedCert(index);
                }}
                aria-label={`View ${cert.title} certificate`}
              >
                View Certificate
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>


            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Continuously expanding my knowledge and skills through certifications and professional development.
          </p>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert !== null && (
        <CertificateModal
          isOpen={selectedCert !== null}
          onClose={() => setSelectedCert(null)}
          certificateUrl={certifications[selectedCert].link || ''}
          title={certifications[selectedCert].title}
          issuer={certifications[selectedCert].issuer}
        />
      )}
    </section>
  );
};

export default Certifications;
