import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "py-6 bg-card/30 backdrop-blur-lg border-t border-white/5",
        className
      )}
    >
      <div className="container mx-auto px-6">
        {/* Made with love text */}
        <div className="mt-3 pt-3 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with
            <span className="text-red-500 animate-pulse">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            love and inspiration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
