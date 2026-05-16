"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { FiAlertCircle, FiShield, FiRefreshCw, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const STRIKES = [
  {
    step: "Strike 1",
    title: "Written Warning",
    desc: "Agency gets formal notice. 48 hours to correct the issue.",
    icon: <FiAlertCircle className="text-[#d83b00]" aria-hidden="true" />,
  },
  {
    step: "Strike 2",
    title: "Management Escalation",
    desc: "Internal audit by Mt7. Backup agency is prepared for takeover.",
    icon: <FiShield className="text-[#d83b00]" aria-hidden="true" />,
  },
  {
    step: "Strike 3",
    title: "Immediate Replacement",
    desc: "Agency removed. 7-15 day transition to new partner at ₹0 cost.",
    icon: <FiRefreshCw className="text-[#d83b00]" aria-hidden="true" />,
  },
];

const scrollToPlans = () => {
  const el = document.getElementById("plans");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Guarantee = () => {
  return (
    <section 
      id="guarantee" 
      className="relative py-10 overflow-hidden flex flex-col items-center w-full bg-transparent antialiased"
    >
      {/* Background Atmosphere - Flame Gradient using Dark Orange #d83b00 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#d83b00]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-30 w-full max-w-7xl px-6 md:px-14 mx-auto">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-black text-[#d83b00] mb-2`}>
              Performance Guarantee
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
              className="h-[2px] bg-gradient-to-r from-[#d83b00] to-transparent"
              aria-hidden="true"
            />
          </div>

          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-4 leading-tight
            bg-gradient-to-r from-white via-zinc-200 to-[#d83b00]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(216,59,0,0.25)]`}
          >
            You’re Never Stuck With <br />
            <span className="text-[#d83b00]">Bad Vendors</span>
          </h2>
          <p className="text-zinc-200 mt-4 font-medium opacity-90">
            Our unique 3-Strike Replacement System ensures your business never loses momentum.
          </p>
        </div>

        {/* STRIKES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {STRIKES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-[2.5rem] border border-white/10 bg-zinc-950/40 backdrop-blur-xl group hover:border-[#d83b00]/40 transition-all shadow-xl"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <span className="text-zinc-300 text-[10px] font-black uppercase tracking-widest">{item.step}</span>
              <h3 className={`${montserrat.className} text-xl font-bold text-white mt-2 mb-4`}>{item.title}</h3>
              <p className="text-zinc-100 text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* COMPARISON BOX */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-10 md:p-16 rounded-[3rem] border border-[#d83b00]/30 bg-black/40 backdrop-blur-md text-center relative overflow-hidden shadow-2xl"
        >
          <FiCheckCircle 
            className="absolute -top-10 -right-10 text-[200px] text-[#d83b00]/5 rotate-12" 
            aria-hidden="true" 
          />

          <h4 className={`${montserrat.className} text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed`}>
            Unlike agencies that lock you into 12-month contracts, <br />
            <span className="text-[#d83b00]">we work month-to-month.</span>
          </h4>
          
          <div className="space-y-4 mb-10">
            <p className="text-zinc-100 text-lg font-medium">
              If we&apos;re not adding value, cancel with <span className="font-black text-white underline decoration-[#d83b00] decoration-2 underline-offset-4">14 days notice.</span>
            </p>
            <p className="text-zinc-400 text-sm uppercase tracking-widest font-black opacity-80">
              No Penalties • No Breakup Fees
            </p>
          </div>

          <p className="text-zinc-300 italic text-sm font-medium">
            &quot;We only succeed when you succeed. That&apos;s why we guarantee quality.&quot;
          </p>
        </motion.div>

        {/* CTA BUTTON */}
        <div className="mt-12 flex justify-center w-full">
          <motion.button
            onClick={scrollToPlans}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(216, 59, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#d83b00] to-red-700 text-white font-black flex items-center gap-3 shadow-[0_10px_30px_rgba(216,59,0,0.3)] transition-all cursor-pointer"
          >
            See Plans & Pricing
            <FiArrowRight strokeWidth={3} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;