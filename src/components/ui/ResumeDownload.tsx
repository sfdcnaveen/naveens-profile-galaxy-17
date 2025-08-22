import React from "react";
import { cn } from "@/lib/utils";

interface ResumeDownloadProps {
  className?: string;
}

const ResumeDownload = ({ className }: ResumeDownloadProps) => {
  return (
    <a
      href="https://naveen-kumar-pasupuleti-resume.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden",
        "font-medium tracking-tight glass-dark text-foreground rounded-full group",
        "shadow-md hover:shadow-lg transition-all duration-300",
        "after:absolute after:inset-0 after:bg-primary after:rounded-full",
        "after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 after:ease-in-out",
        "hover:text-white",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-y-1"
        >
          <path
            d="M12 15L12 3M12 15L8 11M12 15L16 11M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Resume
      </span>
    </a>
  );
};

export default ResumeDownload;
