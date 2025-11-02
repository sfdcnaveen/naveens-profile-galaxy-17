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
      {/* Simplified Light Mode Background */}
      {theme === "light" && (
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        </div>
      )}

      {/* Simplified Dark Mode Background */}
      {theme === "dark" && (
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          {/* Clean dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950" />
        </div>
      )}
    </div>
  );
};

export default AnimatedBackground;
