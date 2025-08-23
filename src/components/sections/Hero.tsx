import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { useTheme } from "@/hooks/use-theme";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);

    // Update time every second for more accurate display
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format date and time properly in IST
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata"
  };
  const formattedDate = currentTime.toLocaleDateString("en-IN", dateOptions);
  const formattedTime = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  }).format(currentTime);

  return (
    <section
      id="home"
      className={cn(
        "min-h-screen pt-20 flex items-center justify-center", // Full viewport height with transparent background for animations
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
                className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide"
              />
            </div>

            {/* Enhanced Name Formatting - Theme-aware Typography */}
            <h1
              className={cn(
                "text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight",
                theme === "light"
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-100 dark:text-gray-900"
              )}
            >
              <AnimatedText
                text="Naveen Kumar"
                delay={200}
                className={cn(
                  "inline-block font-extrabold",
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                )}
              />
              <br />
              <AnimatedText
                text="Pasupuleti"
                delay={300}
                className={cn(
                  "inline-block font-black",
                  theme === "light" ? "text-orange-600" : "text-blue-400"
                )}
              />
            </h1>

            {/* Professional Title - Theme-aware Design */}
            <div className="mb-10">
              <AnimatedText
                text="SDET @ TestVagrant Technologies"
                delay={400}
                className={cn(
                  "text-lg md:text-xl lg:text-2xl font-medium tracking-wide uppercase",
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                )}
              />
            </div>

            {/* Value Proposition - Theme-aware Layout */}
            <div className="mb-12">
              <AnimatedText
                text="I build robust test automation frameworks and ensure quality in Salesforce applications—combining technical expertise with precision to deliver reliable, scalable solutions."
                delay={500}
                className={cn(
                  "text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto",
                  theme === "light" ? "text-gray-700" : "text-gray-200"
                )}
              />
            </div>

            {/* Time Capsule - Theme-aware Design */}
            <div className="flex justify-center">
              <div
                className={cn(
                  "glass-dark rounded-lg py-2 px-4 shadow-sm inline-flex items-center gap-3 text-sm",
                  theme === "light"
                    ? "bg-white/20 border border-orange-200/30"
                    : "bg-black/20 border border-blue-200/30"
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full animate-ping",
                      theme === "light" ? "bg-orange-500/70" : "bg-blue-400/70"
                    )}
                  ></div>
                  <span
                    className={cn(
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    )}
                  >
                    {formattedDate}
                  </span>
                </div>
                <div
                  className={cn(
                    "h-4 w-px",
                    theme === "light" ? "bg-orange-300/20" : "bg-blue-300/20"
                  )}
                ></div>
                <div
                  className={cn(
                    "font-medium",
                    theme === "light" ? "text-orange-600" : "text-blue-400"
                  )}
                >
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
