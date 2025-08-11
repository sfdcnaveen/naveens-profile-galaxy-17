import React from "react";
import ResumeDownload from "../ui/ResumeDownload";

const ResumeSection = () => (
  <section id="resume" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Download My Resume
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Click the button below to download my latest resume and learn more about
        my professional experience and skills.
      </p>
      <ResumeDownload className="px-6 py-3 rounded-full text-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300 inline-block" />
    </div>
  </section>
);

export default ResumeSection;
