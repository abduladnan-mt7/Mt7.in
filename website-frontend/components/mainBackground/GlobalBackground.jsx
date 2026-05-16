/////////////////////////////////////
// 1st Secton Background - Optimized for Performance and Smooth Scrolling
////////////////////////////////////

// /* eslint-disable react-hooks/purity */
// "use client";

// import React, { useEffect, useCallback, useMemo } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import LightPillar from './LightPillar';

// const GlobalBackground = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 150 };
//   const dx = useSpring(mouseX, springConfig);
//   const dy = useSpring(mouseY, springConfig);

//   const handleMouseMove = useCallback(
//     (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     },
//     [mouseX, mouseY],
//   );

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [handleMouseMove]);

//   // Performance: Memoize particles so they don't regenerate on every mouse move
//   const emberParticles = useMemo(() => {
//     return [...Array(20)].map((_, i) => ({
//       id: i,
//       randomDuration: 5 + Math.random() * 5,
//       randomDelay: Math.random() * 5,
//       randomScale: 0.8 + Math.random() * 0.5,
//       randomXDrift: (Math.random() - 0.5) * 150,
//       left: `${20 + Math.random() * 60}%`,
//     }));
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050202]">
//       {/* ================= LIGHT PILLAR (One instance for all sections) ================= */}
//       <div className="absolute inset-0 z-0">
//         <LightPillar
//           topColor="#FFA500"
//           bottomColor="#E65100"
//           intensity={1.1}
//           pillarWidth={0.5}
//           pillarHeight={1.0}
//           pillarRotation={103}
//           className="opacity-50"
//         />
//       </div>

//       {/* Interactive Cursor Glow */}
//       <motion.div
//         style={{
//           left: dx,
//           top: dy,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         className="absolute w-150 h-150 bg-orange-600/15 blur-[120px] rounded-full z-10 will-change-transform"
//       />

//       {/* Static Atmospheric Glows */}
//       <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/20 blur-[150px] rounded-full" />
//       <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[150px] rounded-full" />

//       {/* Realistic Fire Embers */}
//       {emberParticles.map((p) => (
//         <motion.div
//           key={p.id}
//           initial={{ opacity: 0, y: "105vh", scale: 0 }}
//           animate={{
//             opacity: [0, 1, 0.8, 0],
//             y: ["105vh", "10vh"],
//             x: [0, p.randomXDrift / 2, p.randomXDrift],
//             scale: [0, p.randomScale, p.randomScale * 0.5, 0],
//           }}
//           transition={{
//             duration: p.randomDuration,
//             repeat: Infinity,
//             delay: p.randomDelay,
//             ease: "easeOut",
//           }}
//           className="absolute w-0.75 h-0.75 bg-amber-200 rounded-full will-change-transform"
//           style={{
//             left: p.left,
//             boxShadow:
//               "0 0 6px rgba(255, 120, 0, 0.4), 0 0 12px rgba(255, 60, 0, 0.15)",

//             filter: "blur(0.5px)",
//           }}
//         />
//       ))}

//       {/* Added a bottom vignette to ground the sections */}
//       <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
//     </div>
//   );
// };

// export default GlobalBackground;


/////////////////////////////////////
// 2nd Secton Background 
////////////////////////////////////


// /* eslint-disable react-hooks/purity */
// "use client";

// import React, { useEffect, useCallback, useMemo } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// const GlobalBackground = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 150 };
//   const dx = useSpring(mouseX, springConfig);
//   const dy = useSpring(mouseY, springConfig);

//   const handleMouseMove = useCallback(
//     (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     },
//     [mouseX, mouseY],
//   );

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [handleMouseMove]);

//   // Floating particles (bottom → top)
//   const floatingParticles = useMemo(() => {
//     return [...Array(30)].map((_, i) => ({
//       id: i,
//       randomDuration: 3 + Math.random() * 2,
//       randomDelay: Math.random() * 2,
//       randomX: Math.random() * 100,
//     }));
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-gradient-to-br from-black via-gray-950 to-black">
//       {/* RADIAL GRADIENT GLOW */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent" />

//       {/* SCANNING LIGHT */}
//       <motion.div
//         className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff4500] to-transparent blur-sm"
//         animate={{ y: ["0%", "100%"] }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{ opacity: 0.4 }}
//       />

//       {/* INTERACTIVE CURSOR GLOW */}
//       <motion.div
//         style={{
//           left: dx,
//           top: dy,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         className="absolute w-96 h-96 bg-red-500/18 blur-[110px] rounded-full z-10 will-change-transform"
//       />

//       {/* FLOATING PARTICLES — bottom to top */}
//       {floatingParticles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="
//             absolute
//             w-[2px] h-[2px]
//             bg-red-400
//             rounded-full
//             shadow-[0_0_6px_rgba(255,69,0,0.6)]
//             will-change-transform
//           "
//           initial={{
//             x: `${p.randomX}vw`,
//             y: "110vh",
//             opacity: 0,
//           }}
//           animate={{
//             y: "-10vh",
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: p.randomDuration,
//             repeat: Infinity,
//             delay: p.randomDelay,
//             ease: "linear",
//           }}
//         />
//       ))}

//       {/* CORNER ACCENTS */}
//       {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => {
//         const positions = {
//           "top-left": "top-0 left-0",
//           "top-right": "top-0 right-0 rotate-90",
//           "bottom-left": "bottom-0 left-0 -rotate-90",
//           "bottom-right": "bottom-0 right-0 rotate-180",
//         };

//         return (
//           <motion.div
//             key={corner}
//             className={`absolute ${positions[corner]} w-24 h-24 opacity-20 z-20`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.2 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <div className="w-full h-[2px] bg-gradient-to-r from-red-500 to-transparent" />
//             <div className="w-[2px] h-full bg-gradient-to-b from-red-500 to-transparent" />
//           </motion.div>
//         );
//       })}

//       {/* ATMOSPHERIC GLOWS */}
//       <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/10 blur-[140px] rounded-full" />
//       <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[140px] rounded-full" />

//       {/* VIGNETTE */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-45" />
//     </div>
//   );
// };

// export default GlobalBackground;


/////////////////////////////////////
// Ronit Final Version of Global Background - Balanced for Visual Appeal and Performance
////////////////////////////////////


//NEW CODE WITH BG AND OPTIMISED FOR SMOOTHER SCOLLING


"use client";

/* eslint-disable react-hooks/purity */
import React, { useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import LightPillar from './LightPillar';

const GlobalBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Slightly increased damping to prevent "over-stiffness" lag
  const springConfig = { damping: 30, stiffness: 120 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e) => {
      // Use requestAnimationFrame for smoother updates
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

  // Reduced to 15 particles for better performance on mobile/low-end devices
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
      {/* Increased opacity from 0.4 to 0.44 (10% increase) */}
      <div className="absolute inset-0 z-0 opacity-[0.44]">
        <LightPillar
          topColor="#FFA500"
          bottomColor="#E65100"
          intensity={1.21} // Increased intensity by 10%
          pillarWidth={0.5}
          pillarHeight={1.0}
          pillarRotation={103}
        />
      </div>

      {/* Interactive Cursor Glow - Increased opacity from 0.1 to 0.11 */}
      <motion.div
        style={{
          left: dx,
          top: dy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-96 h-96 bg-orange-600/[0.11] blur-[100px] rounded-full z-10 will-change-transform pointer-events-none"
      />

      {/* Static Atmospheric Glows - Increased alpha values by ~10% */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/[0.17] blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/[0.06] blur-[120px] rounded-full" />

      {/* Realistic Fire Embers */}
      {emberParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: "105vh", x: 0 }}
          animate={{
            opacity: [0, 0.8, 0.4, 0],
            y: ["105vh", "-10vh"],
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
          className="absolute w-1 h-1 bg-amber-200 rounded-full transform-gpu will-change-transform"
        >
          <div 
            className="w-full h-full rounded-full shadow-[0_0_8px_#ff7800]"
            style={{ filter: "blur(0.5px)" }}
          />
        </motion.div>
      ))}

      {/* Bottom vignette - Reduced opacity slightly to let more light through at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
    </div>
  );
};

export default GlobalBackground;



/////////////////////////////////////
// Sahil Final Version of Global Background - Balanced for Visual Appeal and Performance
////////////////////////////////////


// "use client";

// import { motion } from "framer-motion";

// export default function GlobalBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

//       {/* BASE GRADIENT */}
//       <div className="absolute inset-0 bg-linear-to-br from-black via-[#120200] to-black" />

//       {/* PRIMARY WARM GLOW */}
//       <motion.div
//         animate={{ opacity: [0.25, 0.4, 0.25] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-40 -left-40 w-125 h-125 rounded-full bg-orange-500/20 blur-[140px]"
//       />

//       {/* SECONDARY RED GLOW */}
//       <motion.div
//         animate={{ opacity: [0.2, 0.35, 0.2] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -bottom-30 -right-30 w-112.5 h-112.5 rounded-full bg-red-600/25 blur-[160px]"
//       />

//       {/* FLOATING PARTICLES */}
//       {[...Array(14)].map((_, i) => (
//         <motion.span
//           key={i}
//           animate={{
//             y: [0, -50, 0],
//             opacity: [0.2, 0.6, 0.2],
//           }}
//           transition={{
//             duration: 7 + i * 0.6,
//             delay: i * 0.4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute w-1 h-1 rounded-full bg-orange-400"
//           style={{
//             left: `${(i * 11) % 100}%`,
//             top: `${(i * 17) % 100}%`,
//           }}
//         />
//       ))}

//       {/* FILM GRAIN */}
//       <motion.div
//         className="absolute inset-0 opacity-[0.05]"
//         animate={{ opacity: [0.03, 0.06, 0.03] }}
//         transition={{ duration: 5, repeat: Infinity }}
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
//           backgroundSize: "18px 18px",
//         }}
//       />
//     </div>
//   );
// }
