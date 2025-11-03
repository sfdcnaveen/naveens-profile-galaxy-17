import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Let's Connect", href: "/contact" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        scrolled
          ? "py-3 bg-card/80 border-b border-white/10 shadow-lg"
          : "py-4 bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
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
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  "text-foreground hover:text-primary hover:bg-primary/10",
                  location.pathname === item.href && "text-primary bg-primary/10"
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  "text-foreground hover:text-primary hover:bg-primary/10",
                  location.pathname === item.href && "text-primary bg-primary/10"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="container mx-auto px-6 py-4 flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
          <nav
            className="flex flex-col space-y-2 px-6 py-4 flex-1"
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
                    "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                    "text-foreground hover:text-primary hover:bg-primary/10",
                    location.pathname === item.href && "text-primary bg-primary/10"
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                    "text-foreground hover:text-primary hover:bg-primary/10",
                    location.pathname === item.href && "text-primary bg-primary/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;