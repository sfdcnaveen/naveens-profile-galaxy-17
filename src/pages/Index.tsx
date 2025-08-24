import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certifications from "../components/sections/Certifications";
import LetsConnect from "../components/sections/LetsConnect";

interface IndexProps {
  section?: string;
}

const Index: React.FC<IndexProps> = ({ section }) => {
  const location = useLocation();

  // Update page title and meta description based on the current section
  useEffect(() => {
    const updateMetaTags = () => {
      const titles: Record<string, string> = {
        "/": "Naveen Pasupuleti - SDET",
        "/about": "About Naveen Pasupuleti - SDET",
        "/experience": "Experience - Naveen Pasupuleti - SDET",
        "/projects": "Projects - Naveen Pasupuleti - SDET",
        "/skills": "Skills - Naveen Pasupuleti - SDET",
        "/certifications": "Certifications - Naveen Pasupuleti - SDET",
        "/contact": "Contact Naveen Pasupuleti - SDET",
      };

      const descriptions: Record<string, string> = {
        "/": "SDET with expertise in Salesforce automation, Playwright, TypeScript, and test framework development. View my portfolio and projects.",
        "/about":
          "Learn about Naveen Pasupuleti's background, passion for technology, and journey as an SDET specializing in Salesforce automation.",
        "/experience":
          "Explore Naveen Pasupuleti's professional experience in software testing, test automation, and quality assurance engineering.",
        "/projects":
          "View Naveen Pasupuleti's portfolio of test automation projects, Salesforce testing solutions, and quality assurance tools.",
        "/skills":
          "Discover Naveen Pasupuleti's technical skills in Playwright, TypeScript, Salesforce automation, and modern testing technologies.",
        "/certifications":
          "View Naveen Pasupuleti's professional certifications in Salesforce, test automation, and software quality assurance.",
        "/contact":
          "Get in touch with Naveen Pasupuleti for SDET opportunities, test automation consulting, or collaboration on quality assurance projects.",
      };

      const currentPath = location.pathname;
      document.title = titles[currentPath] || titles["/"];

      // Update meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          descriptions[currentPath] || descriptions["/"]
        );
      }

      // Scroll to section if specified or scroll to home for root path
      if (section) {
        setTimeout(() => {
          const element = document.getElementById(
            section === "contact" ? "lets-connect" : section
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else if (currentPath === "/") {
        // Scroll to home section when navigating to root path
        setTimeout(() => {
          const homeElement = document.getElementById("home");
          if (homeElement) {
            homeElement.scrollIntoView({ behavior: "smooth" });
          } else {
            // Fallback: scroll to top if home element not found
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      }
    };

    updateMetaTags();
  }, [location.pathname, section]);
  return (
    <div className="min-h-screen flex flex-col relative z-10">
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <LetsConnect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
