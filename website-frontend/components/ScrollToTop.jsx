"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: showScrollTop ? 1 : 0,
        scale: showScrollTop ? 1 : 0.8
      }}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 p-2 md:p-3 rounded-full bg-[#d83b00] hover:bg-[#b33100] border border-[#d83b00]/30 shadow-lg shadow-orange-900/30 transition-all duration-200 group cursor-pointer flex items-center justify-center"
      aria-label="Scroll to top"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp className="text-white group-hover:-translate-y-0.5 transition-transform" size={20} strokeWidth={3} />
    </motion.button>
  );
}