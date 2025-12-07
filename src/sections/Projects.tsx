import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-space-dark/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl text-white uppercase tracking-tight mb-12 text-right">
          Active Dossiers{" "}
          <span className="block font-mono text-sm text-hud-amber mt-2">
            PROJECT ARCHIVE
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02, rotateX: 2 }}
              className="group relative h-80 bg-space-black border border-hud-dim/30 overflow-hidden"
            >
              {/* Image / Viewport */}
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" />

              {/* HUD Overlay */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="absolute top-4 right-4 font-mono text-[10px] text-hud-amber border border-hud-amber px-2 py-0.5">
                  SYS.ADMIN
                </div>

                <h3 className="font-display text-2xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  AUTOMATION FRAMEWORK {item}
                </h3>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                  <p className="text-gray-400 text-sm mb-4">
                    High-performance testing suite built with Playwright and TS.
                  </p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-xs font-mono text-hud-amber hover:text-white uppercase">
                      <Github size={14} /> Source Code
                    </button>
                    <button className="flex items-center gap-2 text-xs font-mono text-hud-amber hover:text-white uppercase">
                      <ExternalLink size={14} /> Deployment
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Marks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-hud-amber/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-hud-amber/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
