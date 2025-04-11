
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Photography from '../components/sections/Photography';
import Contact from '../components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Naveen Kumar Pasupuleti | Salesforce QA Engineer | Automation Tester';

    // Smooth scroll for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement;
      let anchor: HTMLAnchorElement | null = null;

      // Traverse up the DOM tree to find the anchor element
      while (target && !(target instanceof HTMLAnchorElement)) {
          target = target.parentNode as HTMLElement;
      }

      anchor = target as HTMLAnchorElement;

      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);

    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, []);

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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
