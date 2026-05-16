"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  FiSearch,
  FiLayers,
  FiShield,
  FiArrowRight,
  FiArrowDown,
} from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const STEPS = [
  {
    id: "01",
    icon: <FiSearch className="text-[#d83b00]" aria-hidden="true" />,
    title: "WE FIND THE RIGHT AGENCIES",
    description:
      "Tell us your needs and budget. We match you with pre-vetted agencies (Budget tier to Premium).",
    footer: "No more endless research. We've done the vetting.",
  },
  {
    id: "02",
    icon: <FiLayers className="text-[#d83b00]" aria-hidden="true" />,
    title: "WE MANAGE EVERYTHING DAILY",
    description:
      "Your dedicated Mt7 manager coordinates all agencies, tracks deadlines, and checks quality.",
    footer: "You get weekly updates, not daily headaches.",
  },
  {
    id: "03",
    icon: <FiShield className="text-[#d83b00]" aria-hidden="true" />,
    title: "WE OPTIMIZE RESULTS",
    description:
      "Agency underperforming? We replace them within 7-15 days at zero cost to you.",
    footer: "3 strikes and they're out. You're never stuck.",
  },
];

const scrollToHowItWorks = () => {
  const el = document.getElementById("plans");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const FlowSection = () => {
  return (
    <section
      id="flow"
      className="relative py-10 bg-transparent overflow-hidden flex flex-col items-center w-full antialiased"
    >
      <div className="relative z-30 w-full max-w-7xl px-6 md:px-14 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-black text-[#d83b00] mb-2`}>
              HOW IT WORKS
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-[#d83b00] to-transparent"
              aria-hidden="true"
            />
          </div>
          <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-[1.15] bg-gradient-to-r from-white via-orange-200 to-[#d83b00] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(216,59,0,0.3)]`}>
            Your Complete Operations Team In 3 Simple Steps
          </h2>
        </div>

        {/* 3-STEP PROCESS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-8 rounded-[2rem] border border-white/10 bg-zinc-900/60 backdrop-blur-xl flex flex-col shadow-2xl"
            >
              <div className="absolute top-6 right-8 text-4xl font-black text-white/5 italic group-hover:text-[#d83b00]/10 transition-colors" aria-hidden="true">
                {step.id}
              </div>
              <div className="mb-6 p-4 w-fit rounded-2xl bg-[#d83b00]/10 border border-[#d83b00]/20 text-2xl">
                {step.icon}
              </div>
              <h3 className={`${montserrat.className} text-sm font-black text-white tracking-widest mb-4`}>
                {step.title}
              </h3>
              <p className={`${montserrat.className} text-zinc-100 text-sm leading-relaxed mb-6 font-medium`}>
                {step.description}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 italic text-xs text-[#d83b00] font-bold">
                {step.footer}
              </div>
            </motion.div>
          ))}
        </div>

        {/* VISUAL DIAGRAM AREA */}
        <div className="relative w-full max-w-[1100px] mx-auto p-6 md:py-10 md:px-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-center w-full gap-8 md:gap-0">
            {/* LEFT: YOU */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-zinc-600 bg-zinc-800 flex items-center justify-center text-white font-black shadow-lg text-sm md:text-base">
                  YOU
                </div>
                <span className="text-[9px] md:text-[10px] text-zinc-300 uppercase tracking-widest font-black">
                  Client
                </span>
              </div>

              <div className="flex-1 h-[2px] bg-[#d83b00]/20 hidden md:flex items-center justify-end relative min-w-[80px]" aria-hidden="true">
                <div className="absolute left-0 w-full h-full bg-gradient-to-r from-transparent to-[#d83b00]" />
                <FiArrowRight className="text-[#d83b00] text-xl relative z-10 translate-x-1 drop-shadow-[0_0_5px_rgba(216,59,0,0.8)]" />
              </div>

              <div className="md:hidden flex flex-col items-center py-2" aria-hidden="true">
                <FiArrowDown className="text-[#d83b00] text-2xl" />
              </div>
            </div>

            {/* CENTRE: MANAGER */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-5 md:p-6 px-8 md:px-14 rounded-2xl border-2 border-[#d83b00] bg-black shadow-[0_0_40px_rgba(216,59,0,0.3)] flex flex-col items-center gap-1 z-20 shrink-0 mx-auto"
            >
              <span className="text-[#d83b00] text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                Dedicated
              </span>
              <span className={`${montserrat.className} text-white font-black text-base md:text-xl tracking-tight text-center`}>
                MT7 MANAGER
              </span>
              <div className="md:absolute md:-bottom-10 mt-2 md:mt-0 text-[10px] md:text-xs text-zinc-300 font-medium italic whitespace-nowrap bg-black/60 px-3 py-1 rounded-full border border-white/5">
                One point of contact
              </div>
            </motion.div>

            {/* RIGHT: AGENCIES */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
              <div className="flex-1 h-[2px] bg-[#d83b00]/20 hidden md:flex items-center justify-end relative min-w-[80px]" aria-hidden="true">
                <div className="absolute left-0 w-full h-full bg-gradient-to-r from-transparent to-[#d83b00]" />
                <FiArrowRight className="text-[#d83b00] text-xl relative z-10 translate-x-1 drop-shadow-[0_0_5px_rgba(216,59,0,0.8)]" />
              </div>

              <div className="md:hidden flex flex-col items-center py-2" aria-hidden="true">
                <FiArrowDown className="text-[#d83b00] text-2xl" />
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto">
                {["Marketing Agency", "Finance Agency", "HR Agency"].map((agency, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-xl border border-white/20 bg-zinc-900 text-[11px] md:text-[12px] text-white font-black whitespace-nowrap shadow-xl border-l-4 border-l-[#d83b00] text-center md:text-left"
                  >
                    {agency}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-14 md:mt-16 flex justify-center w-full">
          <motion.button
            onClick={scrollToHowItWorks}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(216, 59, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className={`${montserrat.className} px-8 md:px-12 py-4 md:py-5 rounded-full bg-[#d83b00] text-white font-black flex items-center gap-3 shadow-[0_10px_30px_rgba(216,59,0,0.3)] cursor-pointer transition-all`}
          >
            See Our Plans & Pricing
            <FiArrowRight strokeWidth={3} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default memo(FlowSection);