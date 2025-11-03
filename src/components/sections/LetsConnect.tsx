import React from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface LetsConnectProps {
  className?: string;
}

const LetsConnect = ({ className }: LetsConnectProps) => {
  const connectOptions = [
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:pasupulatink@gmail.com?subject=Professional%20Inquiry&body=Hi%20Naveen%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect...",
      color: "bg-blue-500/20 hover:bg-blue-500/30 text-blue-500",
      ariaLabel: "Send professional email"
    },
    {
      name: "WhatsApp",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      href: "https://wa.me/918500070061?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20professionally.",
      color: "bg-green-500/20 hover:bg-green-500/30 text-green-500",
      ariaLabel: "Connect via WhatsApp for professional discussion"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/naveenkumarpasupuleti/",
      color: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-600",
      ariaLabel: "Connect on LinkedIn"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/sfdcnaveen",
      color: "bg-gray-500/20 hover:bg-gray-500/30 text-gray-400",
      ariaLabel: "View GitHub Profile"
    }
  ];

  return (
    <section id="lets-connect" className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <AnimatedText
              text="Let's Connect!"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
            <AnimatedText
              text="I'm available for full-time opportunities, consulting projects, and technical discussions."
              delay={100}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            />
          </div>

          {/* Connect Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {connectOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex flex-col items-center justify-center p-6 rounded-2xl glass-card transition-all duration-300 hover:scale-105 hover:shadow-xl",
                  option.color
                )}
                aria-label={option.ariaLabel}
              >
                <div className="mb-4 p-3 rounded-full bg-background/20 group-hover:bg-background/30 transition-colors">
                  {option.icon}
                </div>
                <h4 className="font-semibold">{option.name}</h4>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Available For</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="glass-dark px-4 py-2 rounded-full text-sm font-medium">
                Full-time Opportunities
              </span>
              <span className="glass-dark px-4 py-2 rounded-full text-sm font-medium">
                Consulting Projects
              </span>
              <span className="glass-dark px-4 py-2 rounded-full text-sm font-medium">
                Technical Discussions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;