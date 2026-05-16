"use client";

import React, { useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import LightPillar to reduce initial bundle size
const LightPillar = dynamic(() => import('./LightPillar'), { ssr: false });

const GlobalBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Optimized spring config for smoother, less CPU-intensive movement
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Reduced particle count to 10 for maximum performance
  const emberParticles = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: i,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 5,
      scale: 0.5 + Math.random() * 0.5,
      drift: (Math.random() - 0.5) * 80,
      left: `${10 + Math.random() * 80}%`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050202] transform-gpu">
      {/* 1. Optimized Light Pillar */}
      <div className="absolute inset-0 z-0 opacity-40">
        <LightPillar
          topColor="#d83b00"
          bottomColor="#1a0a05"
          intensity={1.1}
          pillarWidth={0.4}
          pillarHeight={0.8}
          pillarRotation={103}
        />
      </div>

      {/* 2. Interactive Cursor Glow (Simplified) */}
      <motion.div
        style={{
          left: dx,
          top: dy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-80 h-80 bg-orange-600/5 blur-[80px] rounded-full z-10 will-change-transform"
      />

      {/* 3. Static Atmospheric Glows (Optimized) */}
      <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-red-900/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-orange-900/5 blur-[100px] rounded-full" />

      {/* 4. Optimized Fire Embers */}
      {emberParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: "110vh" }}
          animate={{
            opacity: [0, 0.6, 0.3, 0],
            y: ["110vh", "-10vh"],
            x: [0, p.drift],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            left: p.left,
            scale: p.scale,
          }}
          className="absolute w-1 h-1 bg-amber-100/40 rounded-full transform-gpu will-change-transform"
        />
      ))}

      {/* 5. Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  );
};

export default GlobalBackground;
