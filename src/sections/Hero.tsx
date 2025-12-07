import { motion } from "framer-motion";
import { ArrowDownCircle, ChevronRight } from "lucide-react";

export const Hero = ({ dockingMode }: { dockingMode: boolean }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* HUD Rings (The Endurance Docking UI) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: dockingMode ? 20 : 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-hud-amber/30 rounded-full border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: dockingMode ? 30 : 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/10 rounded-full"
        />
        {/* Accretion Disk Glow */}
        <div className="absolute w-[800px] h-[100px] bg-hud-amber/5 blur-[100px] rotate-12" />
      </div>

      {/* Content */}
      <div className="z-10 text-center space-y-6 max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="font-mono text-hud-amber text-sm tracking-[0.3em] uppercase">
            Crew Member Identification
          </span>
          <h1 className="font-display font-bold text-5xl md:text-8xl text-white uppercase tracking-tighter mt-4 mb-2">
            Naveen Kumar
            <br />
            Pasupuleti
          </h1>
          <h2 className="font-mono text-lg md:text-xl text-hud-dim tracking-widest">
            SDET &bull; SALESFORCE AUTOMATION &bull; QA ARCHITECT
          </h2>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 justify-center mt-12"
        >
          <a
            href="/resume.pdf"
            className="group relative px-8 py-3 bg-hud-amber/10 border border-hud-amber hover:bg-hud-amber/20 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 w-1 bg-hud-amber transition-all group-hover:w-full opacity-10"></div>
            <span className="relative font-mono text-hud-amber group-hover:text-white flex items-center gap-2">
              INITIATE DOCKING (RESUME) <ChevronRight size={16} />
            </span>
          </a>

          <a
            href="#projects"
            className="px-8 py-3 border border-hud-dim text-hud-dim hover:text-white hover:border-white transition-colors font-mono uppercase text-sm tracking-widest"
          >
            View Mission Data
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-hud-dim/50"
      >
        <ArrowDownCircle size={24} />
      </motion.div>
    </section>
  );
};
