"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center text-white">

      {/* ================= BACKGROUND ANIMATION ================= */}
      <BackgroundAnimation />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-xl px-6 text-center">

        {/* LOGO BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-10"
        >
          <div className=" flex items-baseline gap-2 text-white text-5xl md:text-6xl">
            <span className="text-4xl">Mt7</span>
            <span className="text-3xl text-red-500">.in</span>
          </div>
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            text-[120px] md:text-[150px] font-extralight leading-none
            bg-linear-to-r from-[#ffefe0] via-[#ffb870] to-[#ff6a00]
            bg-size-[300%_300%]
            bg-clip-text text-transparent
          "
        >
          404
        </motion.h1>

        {/* MESSAGE */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 text-2xl font-light"
        >
          Page not found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-gray-400"
        >
          The page you’re looking for doesn’t exist or was moved.
          Don’t worry — let’s get you back on track.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-orange-600 transition"
            >
              Go Home
            </motion.button>
          </Link>

          {/* <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-md border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition"
            >
              Contact Us
            </motion.button>
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}

/* ================= BACKGROUND ================= */

function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#120200] to-black" />

      {/* SOFT GLOWS */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-125 h-125 rounded-full bg-orange-500/20 blur-[140px]"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-30 -right-30 w-112.5 h-112.5 rounded-full bg-red-600/25 blur-[160px]"
      />

      {/* FLOATING PARTICLES */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7 + i * 0.6,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-orange-400"
          style={{
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
        />
      ))}

      {/* FILM GRAIN */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
}
