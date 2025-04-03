
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';
import ResumeDownload from '../ui/ResumeDownload';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section 
      id="home" 
      className={cn(
        "min-h-screen pt-20 flex items-center",
        "bg-gradient-to-b from-white to-background",
        className
      )}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div 
            className={cn(
              "flex flex-col text-center lg:text-left order-2 lg:order-1",
              "transition-all duration-700 transform",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="inline-block mb-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-slow"></span>
                Senior Associate | Salesforce Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
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
              text="Experienced Salesforce Developer with expertise in Sales Cloud and Service Cloud solutions, specializing in crafting robust and scalable applications."
              delay={300}
              className="text-xl text-muted-foreground mb-8"
            />
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-2">
              <ResumeDownload />
              <a 
                href="#contact" 
                className={cn(
                  "relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden",
                  "font-medium tracking-tight text-white rounded-full group",
                  "bg-primary hover:bg-primary/90",
                  "shadow-md hover:shadow-lg transition-all duration-300",
                )}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contact Me
                </span>
              </a>
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
                src="https://media.licdn.com/dms/image/v2/D5603AQHdnqbC4TOWZg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713788449905?e=1748476800&v=beta&t=F9DOg0AX1_vyANoQ1Q2ybqN1FpuSGCfAIhNYFpvFpQY"
                alt="Naveen Kumar Pasupuleti"
                className="absolute inset-6 rounded-full object-cover w-[calc(100%-48px)] h-[calc(100%-48px)] shadow-xl z-10"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute -bottom-2 -right-2 z-20 glass rounded-full p-3 shadow-lg">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C560BAQHZ9xYomLW7zg/company-logo_400_400/company-logo_400_400/0/1630658255326/salesforce_logo?e=1748476800&v=beta&t=MpI_GvGzjNVIAZ4Zd59Impvg3Xkc3eTza7ByOyTlCNY" 
                  alt="Salesforce" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="absolute -top-2 -left-2 z-20 glass rounded-full p-3 shadow-lg">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D0BAQH-ZV832H4sdA/company-logo_400_400/company-logo_400_400/0/1705572256355/capgemini_logo?e=1748476800&v=beta&t=JM-VMyuJyKen0ckcFq_L3YPdGBuVI6C6J4nmp575bG8" 
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
