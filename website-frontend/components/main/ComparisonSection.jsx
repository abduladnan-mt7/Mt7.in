"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  Check,
  X,
  Zap,
  Shield,
  Layers,
  Users,
  TrendingUp,
  Rocket,
  BarChart,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const INFRASTRUCTURE_COMPARISON = [
  {
    feature: "Vendor Coordination",
    desc: "How multiple agencies are managed day-to-day.",
    mt7: "Single Point of Contact",
    legacy: "Founder Manages Everything",
    icon: <Users size={20} aria-hidden="true" />,
  },
  {
    feature: "Accountability System",
    desc: "How underperforming agencies are handled.",
    mt7: "3-Strike Replacement Guarantee",
    legacy: "Blame Shifting & Excuses",
    icon: <Shield size={20} aria-hidden="true" />,
  },
  {
    feature: "Agency Switching Cost",
    desc: "Time and money required to replace vendors.",
    mt7: "₹0 Cost, 7–15 Days",
    legacy: "₹50K+ & 2–3 Months",
    icon: <TrendingUp size={20} aria-hidden="true" />,
  },
  {
    feature: "Founder Time Spent",
    desc: "Weekly hours spent coordinating vendors.",
    mt7: "1–2 Hours / Week",
    legacy: "10–15+ Hours / Week",
    icon: <Zap size={20} aria-hidden="true" />,
  },
  {
    feature: "Operational Structure",
    desc: "How marketing, finance & HR are managed together.",
    mt7: "Centralized Ops Management",
    legacy: "Disconnected Agencies",
    icon: <Layers size={20} aria-hidden="true" />,
  },
];

const scrollToHowItWorks = () => {
  const el = document.getElementById("flow");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const ComparisonSection = () => {
  return (
    <section id="comparison-section" className="relative py-10 bg-transparent overflow-hidden flex justify-center w-full antialiased">
      <div id="comparison" className="absolute top-0 left-0 h-px w-px" aria-hidden="true" />

      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-14">
        {/* Header */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            {/* Updated to Dark Orange #d83b00 */}
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-black text-[#d83b00] mb-2`}>
              Comparison
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-[#d83b00] to-transparent"
              aria-hidden="true"
            />
          </div>

          <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-[1.15] bg-gradient-to-r from-white via-zinc-200 to-[#d83b00] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(216,59,0,0.2)]`}>
            The Mt7 Difference
          </h2>

          <p className={`${montserrat.className} text-zinc-100 text-sm md:text-base leading-relaxed font-medium opacity-90`}>
            Managing agencies directly drains founder time and kills focus. Mt7
            replaces chaos with a single, accountable operations layer.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-zinc-950/80 backdrop-blur-md mb-20 shadow-2xl">
          
          {/* Table Header - Aligned for Mobile */}
          <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.03]">
            <div className="col-span-5 md:col-span-5 p-4 md:p-8">
              <span className="text-[10px] md:text-xs font-black tracking-widest text-zinc-400 uppercase">Area</span>
            </div>
            {/* Restored exact heading: Mt7 Managed */}
            <div className="col-span-3 md:col-span-3 p-4 md:p-8 border-l border-white/10 bg-[#d83b00]/10 flex items-center justify-center">
              <span className="text-[9px] md:text-xs font-black tracking-widest text-[#d83b00] uppercase flex items-center gap-1 md:gap-2 text-center leading-tight">
                Mt7 Managed <Zap size={12} className="fill-[#d83b00] shrink-0" aria-hidden="true" />
              </span>
            </div>
            {/* Restored exact heading: Direct Agencies */}
            <div className="col-span-4 md:col-span-4 p-4 md:p-8 border-l border-white/10 flex items-center justify-center">
              <span className="text-[9px] md:text-xs font-black tracking-widest text-white uppercase text-center leading-tight">
                Direct Agencies
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {INFRASTRUCTURE_COMPARISON.map((row, idx) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-12 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="col-span-5 md:col-span-5 p-4 md:p-8 flex gap-3 md:gap-6 items-start">
                  <div className="hidden md:flex w-10 h-10 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-zinc-400 group-hover:text-[#d83b00] group-hover:border-[#d83b00]/30 transition-all shadow-inner">
                    {row.icon}
                  </div>
                  <div>
                    <h4 className={`${montserrat.className} text-white font-bold text-[11px] md:text-base mb-1`}>
                      {row.feature}
                    </h4>
                    <p className={`${montserrat.className} text-zinc-300 text-[11px] md:text-xs leading-relaxed hidden md:block opacity-80`}>
                      {row.desc}
                    </p>
                  </div>
                </div>

                <div className="col-span-3 md:col-span-3 p-4 md:p-8 border-l border-white/10 bg-[#d83b00]/[0.02] flex flex-col justify-center items-center">
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <Check size={16} className="text-[#d83b00] stroke-[3px] shrink-0" aria-hidden="true" />
                    <span className={`${montserrat.className} text-white font-black text-[9px] md:text-sm leading-tight text-center`}>
                      {row.mt7}
                    </span>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-4 p-4 md:p-8 border-l border-white/10 flex flex-col justify-center items-center">
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <X size={16} className="text-zinc-400 stroke-[2px] shrink-0" aria-hidden="true" />
                    <span className={`${montserrat.className} text-zinc-100 font-bold text-[9px] md:text-sm leading-tight opacity-90 text-center`}>
                      {row.legacy}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Founders Choose Mt7 */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black text-white mb-4`}>
              Why Founders Choose Mt7
            </h3>
            <p className={`${montserrat.className} text-zinc-200 text-sm md:text-base max-w-2xl mx-auto font-medium`}>
              Professional operations without hiring in-house or managing chaos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Users, title: "Single POC", description: "One manager instead of 5 agencies" },
              { icon: Shield, title: "Guaranteed Quality", description: "3-strike system with free replacement" },
              { icon: TrendingUp, title: "Founder Time Saved", description: "10–15 hours saved every week" },
              { icon: Layers, title: "All Ops Covered", description: "Marketing, Finance & HR managed together" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-[1.2rem] bg-zinc-950/60 border border-white/10 hover:border-[#d83b00]/40 transition-all shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d83b00]/10 flex items-center justify-center mb-4 text-[#d83b00]">
                  <item.icon size={20} aria-hidden="true" />
                </div>
                <h4 className={`${montserrat.className} text-white font-bold text-sm mb-2`}>
                  {item.title}
                </h4>
                <p className={`${montserrat.className} text-zinc-100 text-xs leading-relaxed font-medium opacity-80`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ready Section - Updated CTA to Option B #d83b00 */}
        <div className="bg-zinc-950/60 p-6 md:p-12 rounded-[2rem] border border-white/10 mb-20 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black text-white mb-4`}>
              Ready to Stop Managing Agencies?
            </h3>
            <p className={`${montserrat.className} text-zinc-100 text-sm md:text-base mb-8 font-medium`}>
              Get professional operations without long contracts or vendor drama.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/lead" passHref>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(216, 59, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`${montserrat.className} px-8 py-4 bg-[#d83b00] text-white font-black text-sm rounded-full transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#b33100]`}
                >
                  <Rocket className="w-5 h-5" aria-hidden="true" />
                  Book Free Consultation
                </motion.button>
              </Link>

              <motion.button
                onClick={scrollToHowItWorks}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${montserrat.className} px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-sm rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer`}
              >
                <BarChart className="w-5 h-5" aria-hidden="true" />
                See How It Works
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-10 border-t border-white/10">
              {[{ v: "10–15h", l: "Saved Weekly" }, { v: "₹0", l: "Switching Cost" }, { v: "7–10 Days", l: "To Go Live" }].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`${montserrat.className} text-2xl font-black text-white mb-1`}>{stat.v}</div>
                  <div className={`${montserrat.className} text-xs text-zinc-300 font-bold uppercase tracking-widest`}>{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;