import React, { useEffect, useState, useRef } from "react";

interface CursorEffectProps {
  className?: string;
}

const CursorEffect: React.FC<CursorEffectProps> = ({ className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    // Create particles on mouse move
    if (particlesRef.current && isVisible) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random size between 5-15px
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position at cursor
      particle.style.left = `${position.x}px`;
      particle.style.top = `${position.y}px`;

      // Random opacity
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();

      // Random direction
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 60 + 20;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      // Add to DOM
      particlesRef.current.appendChild(particle);

      // Animate and remove
      let start: number | null = null;
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        if (progress < 1000) {
          // 1 second animation
          const x = parseFloat(particle.style.left) + vx * (progress / 1000);
          const y = parseFloat(particle.style.top) + vy * (progress / 1000);

          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
          particle.style.opacity = (
            parseFloat(particle.style.opacity) -
            progress / 1000
          ).toString();

          requestAnimationFrame(animate);
        } else {
          if (
            particlesRef.current &&
            particle.parentNode === particlesRef.current
          ) {
            particlesRef.current.removeChild(particle);
          }
        }
      };

      requestAnimationFrame(animate);
    }
  }, [position, isVisible]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isVisible ? 1 : 0})`,
          width: "30px",
          height: "30px",
          marginLeft: "-15px",
          marginTop: "-15px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 0 20px 5px rgba(30, 64, 175, 0.3)",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
      />
      <style jsx>{`
        .particle {
          position: absolute;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.8) 0%,
            rgba(59, 130, 246, 0) 70%
          );
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default CursorEffect;
