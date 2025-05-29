import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';
import ResumeDownload from '../ui/ResumeDownload';

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
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = currentTime.toLocaleDateString(undefined, dateOptions);
  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`;

  return (
    <section
      id="home"
      className={cn(
        "min-h-screen pt-0 flex items-center", // No top padding
        "bg-gradient-to-b from-background via-background to-background",
        className
      )}
    >
      <div className="container mx-auto px-6 pt-10"> {/* Reduced top padding on container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div
            className={cn(
              "flex flex-col text-center lg:text-left order-2 lg:order-1",
              "transition-all duration-700 transform",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="inline-block mb-2">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary glass-dark">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-slow"></span>
                Consultant
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
              text="Experienced Salesforce QA Engineer with expertise in Sales Cloud and Service Cloud, specializing in testing and validating scalable, high-performance Salesforce solutions. Skilled in manual and automated testing, defect tracking, and ensuring optimal system functionality."
              delay={300}
              className="text-xl text-muted-foreground mb-6"
            />

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-2 mb-6">
              <ResumeDownload />
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden",
                  "font-medium tracking-tight text-white rounded-full group",
                  "bg-primary hover:bg-primary/90",
                  "shadow-md hover:shadow-lg transition-all duration-300",
                )}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  WhatsApp Me
                </span>
              </a>
            </div>

            {/* Date Time Display - Moved below buttons with left alignment */}
            <div className={cn(
              "flex justify-start", // Left alignment
              "transition-all duration-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}>
              <div className="glass-dark rounded-lg py-1.5 px-3 shadow-sm inline-flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary/70 animate-pulse-slow"></div>
                  <span className="text-muted-foreground">{formattedDate}</span>
                </div>
                <div className="h-3 w-px bg-primary/20"></div>
                <div className="text-primary font-medium">It's {formattedTime} in India</div>
              </div>
            </div>
          </div>

          <div className={cn(
            "order-1 lg:order-2 mx-auto lg:mx-0",
            "transition-all duration-700 delay-300",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-primary/10 to-primary/0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
              <img
                src="/images/profile-photo.jpeg"
                alt="Naveen Kumar Pasupuleti"
                className="absolute inset-6 rounded-full object-cover w-[calc(100%-48px)] h-[calc(100%-48px)] shadow-xl z-10"
                style={{ objectPosition: 'center top' }}
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
                  src="/images/capgemini_logo.jpeg"
                  alt="Capgemini"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <span className="mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
