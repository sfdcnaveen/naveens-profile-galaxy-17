import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { useTheme } from "@/hooks/use-theme";

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
        <div className="max-w-4xl mx-auto text-center">
          {/* Introduction */}
          <div
            className={cn(
              "flex flex-col items-center",
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
                  "text-base md:text-lg leading-relaxed max-w-2xl mx-auto",
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;