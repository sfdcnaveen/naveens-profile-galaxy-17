import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { useTheme } from "@/hooks/use-theme";
import { Download, Mail } from "lucide-react";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className={cn(
        "min-h-screen flex items-center justify-center pt-20",
        className
      )}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Introduction */}
          <div
            className={cn(
              "flex flex-col",
              "transition-all duration-700 transform",
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="mb-6">
              <AnimatedText
                text="Hello, I'm"
                delay={100}
                className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide"
              />
            </div>

            <h1
              className={cn(
                "text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight",
                theme === "light"
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-100 dark:text-gray-900"
              )}
            >
              <span className="sr-only">
                Naveen Kumar Pasupuleti - Software Development Engineer in Test
                (SDET) at TestVagrant Technologies | Salesforce Automation
                Expert | Playwright TypeScript Testing Professional
              </span>
              <AnimatedText
                text="Naveen Kumar"
                delay={200}
                className={cn(
                  "inline-block font-heading",
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                )}
              />
              <br />
              <AnimatedText
                text="Pasupuleti"
                delay={300}
                className={cn(
                  "inline-block font-heading",
                  theme === "light" ? "text-primary" : "text-primary"
                )}
              />
            </h1>

            <div className="mb-8">
              <AnimatedText
                text="SDET @ TestVagrant Technologies"
                delay={400}
                className={cn(
                  "text-lg md:text-xl font-semibold tracking-wide",
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                )}
              />
            </div>

            <div className="mb-10">
              <AnimatedText
                text="I build robust test automation frameworks and ensure quality in Salesforce applications—combining technical expertise with precision to deliver reliable, scalable solutions."
                delay={500}
                className={cn(
                  "text-base md:text-lg leading-relaxed max-w-2xl",
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                )}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://naveen-kumar-pasupuleti-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
              <a
                href="mailto:pasupulatink@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-transparent border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Professional Image/Visual */}
          <div
            className={cn(
              "flex justify-center",
              "transition-all duration-700 transform",
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">NP</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-secondary/10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;