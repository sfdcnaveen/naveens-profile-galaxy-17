import React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-full",
        "bg-primary/10 hover:bg-primary/20 transition-all duration-300",
        "border border-primary/20 hover:border-primary/30",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon (Light Mode) */}
        <Sun
          className={cn(
            "absolute inset-0 w-5 h-5 text-primary transition-all duration-300 transform",
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        />

        {/* Moon Icon (Dark Mode) */}
        <Moon
          className={cn(
            "absolute inset-0 w-5 h-5 text-primary transition-all duration-300 transform",
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
