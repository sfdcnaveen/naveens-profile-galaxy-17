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
        "py-8 bg-card/30 backdrop-blur-lg border-t border-white/5",
        className,
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-medium">
              Naveen Kumar P.
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              SDET | TestVagrant Technologies
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Naveen Kumar Pasupuleti. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
