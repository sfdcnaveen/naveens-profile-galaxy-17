import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="about"
      className={cn(
        "min-h-screen pt-20 flex items-center justify-center bg-background",
        className,
      )}
      ref={containerRef}
    >
      <div className="container mx-auto px-6 py-8">
        {/* Profile Photo Header */}
        <div className="flex flex-col items-center mb-12">
          <div
            className={cn(
              "relative w-48 h-48 md:w-56 md:h-56 mb-8",
              "transition-all duration-700 transform",
              isLoaded
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-10 opacity-0 scale-95",
            )}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 animate-spin-slow"></div>
            <div
              className="absolute inset-3 rounded-full bg-gradient-to-bl from-primary/10 to-primary/0 animate-spin-slow"
              style={{
                animationDirection: "reverse",
                animationDuration: "12s",
              }}
            ></div>
            <img
              src="/images/profile-photo.jpeg"
              alt="Naveen Kumar Pasupuleti"
              className="absolute inset-4 rounded-full object-cover w-[calc(100%-32px)] h-[calc(100%-32px)] shadow-xl z-10"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute -bottom-1 -right-1 z-20 glass rounded-full p-2 shadow-lg">
              <img
                src="/images/salesforce_logo.jpeg"
                alt="Salesforce"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="absolute -top-1 -left-1 z-20 glass rounded-full p-2 shadow-lg">
              <img
                src="/images/testvagrant_technologies_logo.jpeg"
                alt="TestVagrant"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <AnimatedText
            text="About Me"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <AnimatedText
            text="As of July 2025, I have joined TestVagrant Technologies as an SDET, where I am automating Salesforce applications using Playwright and JavaScript, including API automation. Currently working here, I am passionate about building robust test automation frameworks and ensuring high-quality Salesforce solutions. Previously, I focused on Salesforce QA and business process validation."
            delay={100}
            className="text-lg text-muted-foreground"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
