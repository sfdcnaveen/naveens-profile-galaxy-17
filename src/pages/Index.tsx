import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certifications from "../components/sections/Certifications";
import Photography from "../components/sections/Photography";
import ResumeSection from "../components/sections/Resume";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Photography />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
