import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FloatingEmojiProps {
  className?: string;
}

const FloatingEmoji = ({ className }: FloatingEmojiProps) => {
  const [currentEmoji, setCurrentEmoji] = useState(0);
  
  // Professional tech-related emojis that fit the SDET/QA theme
  const emojis = ["👨‍💻", "🚀", "⚡", "🎯", "🔧", "💡", "🧪", "🎨"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length);
    }, 3000); // Change emoji every 3 seconds

    return () => clearInterval(interval);
  }, [emojis.length]);

  return (
    <div
      className={cn(
        "fixed top-20 left-6 z-40 pointer-events-auto group cursor-pointer",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      {/* Main emoji container */}
      <div className="relative">
        {/* Background glow effect - only visible on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 rounded-full blur-xl transition-all duration-500 group-hover:animate-pulse" />
        
        {/* Main emoji */}
        <div className="relative glass-dark rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <span 
            className={cn(
              "text-2xl transition-all duration-500 ease-in-out transform",
              "group-hover:animate-bounce group-hover:scale-110"
            )}
            key={currentEmoji} // Forces re-render for smooth transition
          >
            {emojis[currentEmoji]}
          </span>
        </div>
        
        {/* Floating particles around the emoji - only visible on hover */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/0 group-hover:bg-primary/40 rounded-full transition-all duration-300 group-hover:animate-ping" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/0 group-hover:bg-primary/60 rounded-full transition-all duration-300 group-hover:animate-pulse" 
             style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-primary/0 group-hover:bg-primary/50 rounded-full transition-all duration-300 group-hover:animate-bounce" 
             style={{ animationDelay: "0.5s" }} />
      </div>
    </div>
  );
};

export default FloatingEmoji;