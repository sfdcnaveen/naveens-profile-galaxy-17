import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import ResumeDownload from "../ui/ResumeDownload";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Photography", href: "#photography" },
  {
    label: "Resume",
    href: "https://naveen-kumar-pasupuleti-resume.vercel.app/",
    external: true,
  },
];

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // No longer needed: Detect active section based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-card/30 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "py-5 bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-medium">
          Naveen Kumar P.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.label}
              </a>
            )
          )}
          {/* ResumeDownload button removed from navbar, now a separate section */}
        </nav>

        {/* Mobile Menu Button (top right) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2 ml-auto"
          aria-label="Open menu"
          style={{ position: "absolute", right: "1.5rem", top: "1.25rem" }}
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "transform rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav
            className="bg-card/90 rounded-xl mx-4 mt-24 p-6 flex flex-col space-y-4 shadow-2xl"
            style={{ maxWidth: 320, alignSelf: "flex-end" }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
