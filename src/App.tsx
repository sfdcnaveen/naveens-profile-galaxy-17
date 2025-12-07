import { useState, useEffect } from "react";
import { HUDNavbar } from "./components/HUDNavbar";
import { StarfieldBackground } from "./components/StarfieldBackground";
import { Hero } from "./sections/Hero";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { useSound } from "./hooks/useSound";

function App() {
  const { isMuted, setIsMuted, dockingMode, setDockingMode, playClick } =
    useSound();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleToggleDocking = () => {
    playClick();
    setDockingMode(!dockingMode);
  };

  return (
    <div
      className={`min-h-screen bg-space-black text-hud-text selection:bg-hud-amber selection:text-black overflow-x-hidden ${
        dockingMode ? "brightness-110 contrast-110" : ""
      }`}
    >
      <StarfieldBackground />

      {/* Global Grain/Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[url('/img/noise.png')] opacity-[0.03]" />
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />

      <HUDNavbar
        isMuted={isMuted}
        toggleMute={() => setIsMuted(!isMuted)}
        dockingMode={dockingMode}
        toggleDocking={handleToggleDocking}
      />

      <main
        className="relative z-10 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <Hero dockingMode={dockingMode} />
        <div className="space-y-24 pb-24">
          <Experience />
          <Projects />
          <Skills />
        </div>

        <footer className="border-t border-hud-dim/20 py-12 text-center font-mono text-xs text-hud-dim">
          <p>FINAL TRANSMISSION // NAVEEN PASUPULETI &copy; 2024</p>
          <p className="mt-2 text-[10px] opacity-60">
            INSPIRED BY INTERSTELLAR
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
