import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  animated?: boolean;
}

export function AnimatedText({
  text,
  className,
  once = true,
  delay = 0,
  animated = true,
}: AnimatedTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("animate-slide-right");
              element.style.opacity = "1";
            }, delay);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.classList.remove("animate-slide-right");
            element.style.opacity = "0";
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, delay, animated]);

  return (
    <div
      ref={elementRef}
      className={cn("opacity-0", className)}
      style={{ willChange: "transform, opacity" }}
    >
      {text}
    </div>
  );
}

export default AnimatedText;
