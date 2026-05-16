// components/ComingSoonPage.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { FiMail } from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 250 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
      {/* Ultra Minimal Background */}
      {/* <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          style={{
            left: dx,
            top: dy,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-orange-600/8 to-red-600/4 blur-[100px] rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900" />
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center">
              <span className="text-sm font-bold">MT7</span>
            </div>
            <h1 className={`${montserrat.className} text-3xl font-bold`}>
              MT7<span className="text-orange-500">.IO</span>
            </h1>
          </div>
          <p className="text-zinc-400 text-sm">Next-generation business networking</p>
        </motion.header>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-12"
          >
            <div className="px-4 py-2 border border-orange-500/30 rounded-full">
              <span className="text-orange-500 text-sm font-medium">Coming Soon</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`${montserrat.className} text-5xl md:text-6xl font-bold mb-6`}
          >
            <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Building the
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Future of Networks
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-zinc-400 mb-12 max-w-lg mx-auto"
          >
            A modern platform for business connectivity, collaboration, and growth.
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="max-w-md mx-auto"
          >
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/5 border border-orange-500/20 rounded-lg"
                >
                  <p className="text-sm text-orange-300">Thank you! We'll contact you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={`${montserrat.className} w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors text-center`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-medium hover:from-orange-600 hover:to-red-700 transition-all"
              >
                Get Early Access
              </button>
            </form>
            <p className="text-zinc-500 text-sm mt-4">
              Be the first to know when we launch
            </p>
          </motion.div>
        </div>

        {/* Simple Animated Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-32 flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 rounded-full border border-orange-500/20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-orange-500/10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-32 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} MT7.IO</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default ComingSoonPage;