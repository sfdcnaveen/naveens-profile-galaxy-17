import React from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn(
        "min-h-screen pt-20 flex items-center justify-center",
        className
      )}
    >
      <div className="container mx-auto px-6 py-8">
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
