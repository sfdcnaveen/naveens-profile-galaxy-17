import React from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";

interface LetsConnectProps {
  className?: string;
}

const LetsConnect = ({ className }: LetsConnectProps) => {
  return (
    <section
      id="lets-connect"
      className={cn("py-10 md:py-16 bg-background", className)}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <AnimatedText
              text="Let's Connect!"
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            />
            <AnimatedText
              text="Ready to collaborate? I'm always open to discussing new opportunities, sharing insights, or simply having a great conversation about technology and innovation."
              delay={100}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            />
          </div>

          {/* Main Connect Card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-primary/5 rounded-full blur-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Connection Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Ready to Build Something Amazing?
                </h3>

                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                  Whether you're looking for a skilled SDET to join your team,
                  need consultation on test automation strategies, or want to
                  discuss the latest in Salesforce testing, I'd love to hear
                  from you.
                </p>

                {/* Connect Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                  {/* Professional Chat */}
                  <a
                    href="https://wa.me/918500070061?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20professionally."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 glass-dark hover:bg-green-500/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="Connect via WhatsApp for professional discussion"
                  >
                    <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <svg
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-green-500"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-green-500">
                        Quick Chat
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Direct message for quick discussion
                      </p>
                    </div>
                  </a>

                  {/* Professional Email */}
                  <a
                    href="mailto:pasupulatink@gmail.com?subject=Professional%20Inquiry&body=Hi%20Naveen%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect..."
                    className="group flex items-center gap-4 glass-dark hover:bg-blue-500/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="Send professional email"
                  >
                    <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-blue-500">Email Me</h4>
                      <p className="text-sm text-muted-foreground">
                        For detailed discussions
                      </p>
                    </div>
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/naveenkumarpasupuleti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/30 transition-all duration-300 hover:scale-110"
                    aria-label="Connect on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/sfdcnaveen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center hover:bg-gray-500/30 transition-all duration-300 hover:scale-110"
                    aria-label="View GitHub Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">
                      Available for:
                    </span>{" "}
                    Full-time opportunities, Consulting projects, Technical
                    discussions, Collaboration on open-source projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
