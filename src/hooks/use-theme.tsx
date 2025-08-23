import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to determine if it's day or night in India (IST)
const isDayTime = () => {
  const now = new Date();
  // Convert to IST (UTC+5:30)
  const istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
  const hour = istTime.getHours();

  // Day time: 6:00 AM to 6:00 PM (IST)
  // Night time: 6:00 PM to 6:00 AM (IST)
  return hour >= 6 && hour < 18;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Update theme based on time
  const updateTheme = () => {
    const newTheme = isDayTime() ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    // Initial theme setup
    updateTheme();

    // Update theme every minute
    const interval = setInterval(updateTheme, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove previous theme class
    root.classList.remove("light", "dark");

    // Add current theme class
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
