"use client";

import React, { useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import LightPillar from './LightPillar';

const GlobalBg = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e) => {
      window.requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const emberParticles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      scale: 0.8 + Math.random() * 0.5,
      drift: (Math.random() - 0.5) * 100,
      left: `${15 + Math.random() * 70}%`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050202] transform-gpu">
      
      {/* ================= LIGHT PILLAR ================= */}
      <div className="absolute inset-0 z-0 opacity-[0.5]">
        <LightPillar
          topColor="#d83b00" 
          bottomColor="#8b2600"
          intensity={1.3} 
          pillarWidth={0.6}
          pillarHeight={0.4}
          pillarRotation={103}
        />
      </div>

      {/* Interactive Cursor Glow - Brand Color #d83b00 */}
      <motion.div
        style={{
          left: dx,
          top: dy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-96 h-96 bg-[#d83b00]/[0.12] blur-[100px] rounded-full z-10 will-change-transform pointer-events-none"
      />

      {/* Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-950/[0.15] blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#d83b00]/[0.08] blur-[120px] rounded-full" />

      {/* Fire Embers */}
      {emberParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: "100vh", x: 0 }}
          animate={{
            opacity: [0, 0.8, 0.4, 0],
            y: ["100vh", "-10vh"],
            x: [0, p.drift],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{ left: p.left, scale: p.scale }}
          className="absolute w-1 h-1 bg-amber-200 rounded-full transform-gpu will-change-transform"
        >
          <div 
            className="w-full h-full rounded-full shadow-[0_0_8px_#d83b00]"
            style={{ filter: "blur(0.5px)" }}
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  );
};

export default GlobalBg;