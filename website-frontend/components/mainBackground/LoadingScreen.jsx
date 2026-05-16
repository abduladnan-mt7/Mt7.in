"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  "Initializing interface",
  "Loading core modules",
  "Compiling experience",
  "Preparing final output",
];

export default function LoadingScreen() {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  /* --------- MOUNT GUARD --------- */
  useEffect(() => {
    setMounted(true);
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  /* --------- STEP TEXT --------- */
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setStepIndex((prev) =>
        prev < steps.length - 1 ? prev + 1 : prev
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [mounted]);

  /* --------- PROGRESS --------- */
  useEffect(() => {
    if (!mounted) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const target = ((stepIndex + 1) / steps.length) * 100;
        const diff = target - prev;
        return prev + diff * 0.1;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [stepIndex, mounted]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden"
    >
      {/* RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent" />

      {/* SCANNING LINE */}
      <motion.div
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff4500] to-transparent blur-sm"
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 0.4 }}
      />

      {/* PARTICLES */}
      {[...Array(20)].map((_, i) => {
        const startX = Math.random() * viewport.width;
        const startY = Math.random() * viewport.height;
        const endY = Math.random() * viewport.height;

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{ x: startX, y: startY }}
            animate={{ y: [startY, endY], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        );
      })}

      {/* CONTENT */}
      <div className="relative flex flex-col items-center text-center px-6">
        {/* LOGO */}
        <div className="mb-12 flex items-baseline gap-2 relative">
          <div className="absolute inset-0 blur-2xl bg-red-500/20 scale-150" />
          <span className="text-5xl md:text-6xl font-light text-white relative">
            MT7
          </span>
          <span className="text-4xl md:text-5xl font-light text-red-500 relative">
            .in
          </span>
        </div>

        {/* STATUS TEXT */}
        <div className="h-6 overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={stepIndex}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-[0.3em] uppercase text-gray-400"
            >
              {steps[stepIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-64 md:w-80 h-1 bg-gray-900 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-500 mt-3 font-mono">
          {Math.floor(progress)}%
        </p>
      </div>
    </motion.div>
  );
}
