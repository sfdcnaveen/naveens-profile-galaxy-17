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
        "min-h-screen pt-0 flex items-center", // No top padding
        "bg-gradient-to-b from-background via-background to-background",
        className
      )}
    >
      <div className="container mx-auto px-6 pt-10">
        {" "}
        {/* Reduced top padding on container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div
            className={cn(
              "flex flex-col text-center lg:text-left order-2 lg:order-1",
              "transition-all duration-700 transform",
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="inline-block mb-2">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary glass-dark">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-slow"></span>
                SDET
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
              <AnimatedText
                text="Naveen Kumar"
                delay={100}
                className="inline-block"
              />
              <br />
              <AnimatedText
                text="Pasupuleti"
                delay={200}
                className="inline-block text-primary"
              />
            </h1>

            <AnimatedText
              text="Experienced Salesforce QA Engineer with expertise in Sales Cloud and Service Cloud, specializing in testing and validating scalable, high-performance Salesforce solutions. Skilled in manual and automated testing, defect tracking, and ensuring optimal system functionality. Passionate about delivering quality and collaborating with teams to achieve business goals."
              delay={300}
              className="text-xl text-muted-foreground mb-6"
            />

            {/* Date Time Display - Centered */}
            <div
              className={cn(
                "flex justify-center", // Center alignment
                "transition-all duration-500",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              )}
            >
              <div className="glass-dark rounded-lg py-1.5 px-3 shadow-sm inline-flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary/70 animate-pulse-slow"></div>
                  <span className="text-muted-foreground">{formattedDate}</span>
                </div>
                <div className="h-3 w-px bg-primary/20"></div>
                <div className="text-primary font-medium">
                  It's {formattedTime} in India
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "order-1 lg:order-2 mx-auto lg:mx-0",
              "transition-all duration-700 delay-300",
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 animate-spin-slow"></div>
              <div
                className="absolute inset-4 rounded-full bg-gradient-to-bl from-primary/10 to-primary/0 animate-spin-slow"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "12s",
                }}
              ></div>
              <img
                src="/images/profile-photo.jpeg"
                alt="Naveen Kumar Pasupuleti"
                className="absolute inset-6 rounded-full object-cover w-[calc(100%-48px)] h-[calc(100%-48px)] shadow-xl z-10"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute -bottom-2 -right-2 z-20 glass rounded-full p-3 shadow-lg">
                <img
                  src="/images/salesforce_logo.jpeg"
                  alt="Salesforce"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="absolute -top-2 -left-2 z-20 glass rounded-full p-3 shadow-lg">
                <img
                  src="/images/testvagrant_technologies_logo.jpeg"
                  alt="TestVagrant"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
