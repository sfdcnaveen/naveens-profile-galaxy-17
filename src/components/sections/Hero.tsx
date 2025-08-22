import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsLoaded(true);

    // Update time every second for more accurate display
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentTime.toLocaleDateString(undefined, dateOptions);
  const formattedTime = `${currentTime.getHours()}:${currentTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <section
      id="home"
      className={cn(
        "min-h-screen pt-20 flex items-center justify-center", // Full viewport height with top padding for navbar
        "bg-gradient-to-b from-background via-background to-background",
        className
      )}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <div
            className={cn(
              "flex flex-col text-center",
              "transition-all duration-700 transform",
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            {/* Clean Introduction */}
            <div className="text-center mb-6">
              <AnimatedText
                text="Hello, I'm"
                delay={100}
                className="text-2xl md:text-3xl text-muted-foreground"
              />
            </div>

            {/* Enhanced Name Formatting */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight">
              <AnimatedText
                text="Naveen Kumar"
                delay={200}
                className="inline-block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              />
              <br />
              <AnimatedText
                text="Pasupuleti"
                delay={300}
                className="inline-block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent font-black"
              />
            </h1>

            {/* Professional Title */}
            <div className="mb-10">
              <AnimatedText
                text="SDET @ TestVagrant Technologies"
                delay={400}
                className="text-xl md:text-2xl font-semibold text-muted-foreground tracking-wide"
              />
            </div>

            {/* Value Proposition */}
            <div className="mb-12">
              <AnimatedText
                text="I build robust test automation frameworks and ensure quality in Salesforce applications—combining technical expertise with precision to deliver reliable, scalable solutions."
                delay={500}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              />
            </div>

            {/* Time Capsule - Moved below text */}
            <div className="flex justify-center">
              <div className="glass-dark rounded-lg py-2 px-4 shadow-sm inline-flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary/70 animate-ping"></div>
                  <span className="text-muted-foreground">{formattedDate}</span>
                </div>
                <div className="h-4 w-px bg-primary/20"></div>
                <div className="text-primary font-medium">
                  It's {formattedTime} in India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
