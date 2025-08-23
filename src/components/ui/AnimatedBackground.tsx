import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className }: AnimatedBackgroundProps) => {
  const { theme } = useTheme();

  return (
    <div className={cn("fixed inset-0 z-[-1] overflow-hidden", className)}>
      {/* Sunrise Animation (Light Mode) */}
      {theme === "light" && (
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          {/* Sky gradient - sunrise colors */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-orange-300/80 via-yellow-200/70 to-blue-100/60 animate-pulse"
            style={{ animationDuration: "8s" }}
          />

          {/* Sun */}
          <div
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-2xl shadow-yellow-400/70"
            style={{ animationDuration: "6s" }}
          />

          {/* Floating clouds */}
          <div
            className="absolute top-32 left-20 w-20 h-10 bg-white/80 rounded-full animate-float shadow-lg"
            style={{ animationDelay: "0s", animationDuration: "10s" }}
          />
          <div
            className="absolute top-40 right-40 w-24 h-12 bg-white/70 rounded-full animate-float shadow-lg"
            style={{ animationDelay: "2s", animationDuration: "12s" }}
          />
          <div
            className="absolute top-28 left-1/2 w-18 h-8 bg-white/90 rounded-full animate-float shadow-lg"
            style={{ animationDelay: "4s", animationDuration: "8s" }}
          />

          {/* Light rays */}
          <div
            className="absolute top-20 right-20 w-1 h-32 bg-gradient-to-b from-yellow-300/50 to-transparent rotate-45 animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute top-20 right-20 w-1 h-32 bg-gradient-to-b from-yellow-300/50 to-transparent -rotate-45 animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-20 right-20 w-32 h-1 bg-gradient-to-r from-yellow-300/50 to-transparent animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "2s" }}
          />
          <div
            className="absolute top-20 right-20 w-32 h-1 bg-gradient-to-l from-yellow-300/50 to-transparent animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "3s" }}
          />
        </div>
      )}

      {/* Sunset Animation (Dark Mode) */}
      {theme === "dark" && (
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          {/* Sky gradient - sunset colors */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-orange-900/80 to-gray-900/70 animate-pulse"
            style={{ animationDuration: "10s" }}
          />

          {/* Moon */}
          <div
            className="absolute top-16 left-20 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full animate-pulse shadow-2xl shadow-gray-200/50"
            style={{ animationDuration: "8s" }}
          />

          {/* Stars */}
          <div
            className="absolute top-24 right-32 w-2 h-2 bg-white rounded-full animate-ping shadow-lg"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-ping shadow-lg"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
          <div
            className="absolute top-32 left-40 w-2 h-2 bg-white rounded-full animate-ping shadow-lg"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          />
          <div
            className="absolute top-20 left-1/2 w-2 h-2 bg-white rounded-full animate-ping shadow-lg"
            style={{ animationDelay: "3s", animationDuration: "5s" }}
          />
          <div
            className="absolute top-48 right-1/3 w-2 h-2 bg-white rounded-full animate-ping shadow-lg"
            style={{ animationDelay: "4s", animationDuration: "2.5s" }}
          />

          {/* Dark clouds */}
          <div
            className="absolute top-36 right-24 w-20 h-10 bg-gray-700/60 rounded-full animate-float shadow-lg"
            style={{ animationDelay: "0s", animationDuration: "15s" }}
          />
          <div
            className="absolute top-28 left-32 w-24 h-12 bg-gray-600/50 rounded-full animate-float shadow-lg"
            style={{ animationDelay: "3s", animationDuration: "18s" }}
          />

          {/* Sunset glow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600/20 to-transparent animate-pulse"
            style={{ animationDuration: "6s" }}
          />
        </div>
      )}
    </div>
  );
};

export default AnimatedBackground;
