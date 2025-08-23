import React from "react";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

interface TimeLocationIndicatorProps {
  className?: string;
}

const TimeLocationIndicator = ({ className }: TimeLocationIndicatorProps) => {
  const { theme, currentTime, location } = useTheme();

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full",
        "bg-primary/10 backdrop-blur-lg border border-primary/20",
        "text-sm text-muted-foreground",
        className
      )}
    >
      {/* Theme indicator */}
      <div className="flex items-center gap-1">
        {theme === "light" ? (
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
        ) : (
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        )}
        <span className="text-xs font-medium">
          {theme === "light" ? "Day" : "Night"}
        </span>
      </div>

      {/* Time */}
      <div className="flex items-center gap-1">
        <Clock className="w-3 h-3" />
        <span className="font-mono text-xs">{currentTime}</span>
      </div>

      {/* Location */}
      <div className="hidden sm:flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        <span className="text-xs">{location}</span>
      </div>
    </div>
  );
};

export default TimeLocationIndicator;
