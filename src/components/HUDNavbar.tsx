import { motion } from "framer-motion";
import { Volume2, VolumeX, Radio } from "lucide-react";

interface NavProps {
  isMuted: boolean;
  toggleMute: () => void;
  dockingMode: boolean;
  toggleDocking: () => void;
}

export const HUDNavbar = ({
  isMuted,
  toggleMute,
  dockingMode,
  toggleDocking,
}: NavProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-hud-amber/20 bg-space-black/80 backdrop-blur-sm h-16 flex items-center justify-between px-6">
      {/* Left: Callsign */}
      <div className="flex items-center gap-4">
        <div className="font-display font-bold text-2xl tracking-widest text-white">
          NKP{" "}
          <span className="text-hud-amber text-xs align-top opacity-80">
            SDET-01
          </span>
        </div>
        <div className="hidden md:flex h-4 w-[1px] bg-hud-dim"></div>
        <div className="hidden md:block font-mono text-xs text-hud-dim">
          T-MINUS: <span className="text-hud-amber">00:14:24</span>
        </div>
      </div>

      {/* Center: Mission Links */}
      <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-hud-dim">
        {["ABOUT", "MISSION LOG", "PROJECTS", "SKILLS"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="hover:text-hud-amber transition-colors duration-300 relative group py-2"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-hud-amber group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDocking}
          className={`flex items-center gap-2 font-mono text-[10px] border px-3 py-1 rounded-sm transition-all ${
            dockingMode
              ? "border-hud-amber text-hud-amber shadow-[0_0_10px_rgba(255,159,28,0.3)]"
              : "border-hud-dim text-hud-dim"
          }`}
        >
          <Radio size={12} className={dockingMode ? "animate-pulse" : ""} />
          {dockingMode ? "DOCKING ACTIVE" : "CRUISE MODE"}
        </button>

        <button
          onClick={toggleMute}
          className="text-hud-amber hover:text-white transition-colors"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </nav>
  );
};
