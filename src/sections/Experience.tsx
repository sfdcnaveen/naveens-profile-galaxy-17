import { motion } from "framer-motion";

const missions = [
  {
    company: "TestVagrant",
    role: "SDET - II",
    mission: "MISSION: ALDAR REAL ESTATE",
    period: "2022 - Present",
    desc: "Architected scalable test frameworks for high-value real estate platforms.",
    stack: ["Playwright", "TypeScript", "Appium"],
  },
  {
    company: "Capgemini",
    role: "Consultant",
    mission: "MISSION: ANZ BANKING GROUP",
    period: "2019 - 2022",
    desc: "Executed critical regression protocols for secure banking infrastructure.",
    stack: ["Selenium", "Java", "Salesforce"],
  },
];

export const Experience = () => {
  return (
    <section id="mission-log" className="py-24 px-6 relative max-w-6xl mx-auto">
      <div className="mb-16 border-b border-hud-dim/20 pb-4">
        <h2 className="font-display text-4xl text-white uppercase tracking-tight">
          Mission Log
        </h2>
        <p className="font-mono text-hud-amber text-sm mt-2">
          FLIGHT HISTORY & DEPLOYMENTS
        </p>
      </div>

      <div className="relative border-l border-hud-dim/30 ml-4 md:ml-10 space-y-16">
        {missions.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-8 md:pl-16"
          >
            {/* Timeline Node */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-space-black border border-hud-amber rounded-full shadow-[0_0_10px_#FF9F1C]" />

            <div className="bg-space-gray/30 border border-hud-dim/20 p-6 md:p-8 backdrop-blur-sm hover:border-hud-amber/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl text-white group-hover:text-hud-amber transition-colors">
                    {job.company}
                  </h3>
                  <div className="font-mono text-xs text-hud-dim uppercase tracking-wider mt-1">
                    {job.mission}
                  </div>
                </div>
                <div className="font-mono text-hud-amber text-sm mt-2 md:mt-0 border border-hud-amber/30 px-2 py-1 rounded">
                  {job.period}
                </div>
              </div>

              <p className="text-gray-400 mb-6 font-light leading-relaxed">
                {job.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] bg-hud-dim/10 text-hud-dim px-2 py-1 rounded border border-transparent hover:border-hud-dim/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
