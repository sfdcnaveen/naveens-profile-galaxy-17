import { useState, useEffect, useRef } from "react";

// Note: In production, use real audio file paths.
// For this demo, we assume files exist in /public/audio/
export const useSound = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [dockingMode, setDockingMode] = useState(false);

  const bgMusic = useRef<HTMLAudioElement | null>(null);
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    bgMusic.current = new Audio("/audio/ambient-space.mp3");
    bgMusic.current.loop = true;
    bgMusic.current.volume = 0.2;

    hoverSound.current = new Audio("/audio/hud-blip.mp3");
    hoverSound.current.volume = 0.1;

    clickSound.current = new Audio("/audio/dock-latch.mp3");
    clickSound.current.volume = 0.3;

    return () => {
      bgMusic.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (bgMusic.current) {
      if (isMuted) {
        bgMusic.current.pause();
      } else {
        bgMusic.current.play().catch((e) => console.log("Autoplay blocked", e));
        // Increase intensity if docking mode is on
        bgMusic.current.playbackRate = dockingMode ? 1.05 : 1.0;
      }
    }
  }, [isMuted, dockingMode]);

  const playHover = () => {
    if (!isMuted && hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(() => {});
    }
  };

  const playClick = () => {
    if (!isMuted && clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
  };

  return {
    isMuted,
    setIsMuted,
    dockingMode,
    setDockingMode,
    playHover,
    playClick,
  };
};
