import { motion } from "framer-motion";

const skills = [
  { name: "Salesforce Automation", level: 90 },
  { name: "Playwright / TS", level: 85 },
  { name: "Java / Selenium", level: 80 },
  { name: "CI/CD Pipelines", level: 75 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Technical Systems Console */}
        <div>
          <h3 className="font-mono text-hud-dim mb-6 uppercase tracking-widest border-b border-hud-dim/20 pb-2">
            System Diagnostics
          </h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2 font-display uppercase text-sm text-gray-300">
                  <span>{skill.name}</span>
                  <span className="text-hud-amber">
                    {skill.level}% EFFICIENCY
                  </span>
                </div>
                <div className="h-2 bg-space-gray rounded-full overflow-hidden relative">
                  {/* Grid Lines on Bar */}
                  <div className="absolute inset-0 z-10 w-full h-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhZWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-20" />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-hud-amber shadow-[0_0_10px_#FF9F1C]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Console */}
        <div>
          <h3 className="font-mono text-hud-dim mb-6 uppercase tracking-widest border-b border-hud-dim/20 pb-2">
            Crew Certifications
          </h3>
          <div className="space-y-4">
            {[
              "Salesforce Certified Administrator",
              "Salesforce Platform Dev I",
              "ISTQB Certified",
            ].map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 border border-hud-dim/30 bg-space-gray/10 hover:bg-space-gray/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-sm bg-hud-amber/20 flex items-center justify-center border border-hud-amber text-hud-amber">
                  <span className="font-mono text-xs">{idx + 1}</span>
                </div>
                <div>
                  <div className="font-display text-white uppercase text-sm">
                    {cert}
                  </div>
                  <div className="font-mono text-[10px] text-hud-dim">
                    VERIFIED: 202{idx + 2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
