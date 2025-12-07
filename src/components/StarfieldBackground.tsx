import { motion, useScroll, useTransform } from "framer-motion";

export const StarfieldBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -400]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Distant Stars */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-[url('/img/stars-sm.png')] opacity-40"
      />
      {/* Near Stars */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 bg-[url('/img/stars-lg.png')] opacity-60 mix-blend-screen"
      />
      {/* Nebula Haze Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-transparent to-space-black opacity-80" />
      <div className="absolute inset-0 bg-space-black/20" />{" "}
      {/* Grain overlay could go here */}
    </div>
  );
};
