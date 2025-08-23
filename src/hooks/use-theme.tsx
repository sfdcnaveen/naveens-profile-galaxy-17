import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to determine if it's day or night in India (IST)
const isDayTime = () => {
  // Get current time properly in IST (Asia/Kolkata timezone)
  const now = new Date();
  
  // Create a date formatter for IST
  const istFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });
  
  // Get IST time parts
  const istTimeParts = istFormatter.formatToParts(now);
  const hour = parseInt(istTimeParts.find(part => part.type === 'hour')?.value || '0');
  
  // Format current IST time for logging
  const istTimeString = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(now);
  
  console.log('Current IST time:', istTimeString);
  console.log('Hour:', hour, 'isDayTime:', hour >= 6 && hour < 18);

  // Day time: 6:00 AM to 6:00 PM (IST) - Light theme
  // Night time: 6:00 PM to 6:00 AM (IST) - Dark theme
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
