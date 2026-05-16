"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  Rocket,
  Users,
  Layers,
  Clock,
  TrendingUp,
  XCircle,
  ArrowRight,
  Check,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const idealProfiles = [
  {
    icon: <Rocket className="text-[#d83b00]" size={28} aria-hidden="true" />,
    title: "Funded Startups",
    subtitle: "Seed to Series B",
    desc: "You have capital (₹50L – ₹100Cr) but need operational speed to hit your next milestone.",
  },
  {
    icon: <Users className="text-blue-400" size={28} aria-hidden="true" />,
    title: "Scaling SMEs",
    subtitle: "10–100 Employees",
    desc: "You are too big to DIY everything, but too small to hire full-time VP-level ops heads.",
  },
  {
    icon: <Layers className="text-purple-400" size={28} aria-hidden="true" />,
    title: "The Multi-Vendor Founder",
    subtitle: "Managing 3+ Agencies",
    desc: "You are drowning in coordination with Marketing, Finance, and HR vendors simultaneously.",
  },
];

const painPoints = [
  {
    icon: <Clock className="text-red-400" size={24} aria-hidden="true" />,
    text: "Teams wasting 10+ hrs/week coordinating contractors.",
  },
  {
    icon: <TrendingUp className="text-green-400" size={24} aria-hidden="true" />,
    text: "Companies preparing for a massive scale-up phase.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section 
      id="who-this-for" 
      className="relative py-10 bg-transparent overflow-hidden antialiased"
    >
      {/* Background Glow - Updated to d83b00 */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d83b00]/5 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex flex-col items-start">
            <span
              className={`${montserrat.className}
                uppercase tracking-[0.28em] text-xs font-black text-[#d83b00]`}
            >
              Is MT7 Right For You?
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut", delay: 0.25 }}
              className="origin-left mt-2 h-[2px] w-full bg-gradient-to-r from-[#d83b00] to-transparent"
              aria-hidden="true"
            />
          </div>

          <h2
            className={`${montserrat.className}
              text-3xl md:text-4xl font-bold mt-4
              bg-gradient-to-r from-white via-zinc-200 to-[#d83b00]
              bg-clip-text text-transparent
              leading-tight
            `}
          >
            Built for Growing Startups & SMEs
          </h2>
        </div>

        {/* ================= PERSONA GRID ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {idealProfiles.map((profile, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[1.5rem] bg-zinc-950/60 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl hover:border-[#d83b00]/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d83b00]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem]" aria-hidden="true" />

              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:border-[#d83b00]/20 transition-colors shadow-inner">
                  {profile.icon}
                </div>

                <h3 className={`${montserrat.className} text-xl font-bold text-white mb-1`}>
                  {profile.title}
                </h3>
                <p className={`${montserrat.className} text-[#d83b00] text-xs font-black uppercase tracking-widest mb-4`}>
                  {profile.subtitle}
                </p>
                <p className="text-zinc-100 text-sm leading-relaxed font-medium">
                  {profile.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= SECONDARY FIT BARS ================= */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-lg"
            >
              <div className="shrink-0">{point.icon}</div>
              <p className="text-zinc-100 text-sm font-bold opacity-90">{point.text}</p>
              <div className="ml-auto" aria-hidden="true">
                <Check size={18} className="text-[#d83b00] stroke-[3px]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= "NOT RIGHT FOR" SECTION ================= */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="absolute inset-0 bg-red-500/5 blur-3xl -z-10 rounded-full" aria-hidden="true" />

          <div className="bg-zinc-950/90 border border-red-500/20 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-center md:text-left">
              <h4 className={`${montserrat.className} text-white font-black text-xl mb-2`}>
                Who is this <span className="text-red-500">NOT</span> for?
              </h4>
              <p className="text-zinc-300 text-sm max-w-xs font-medium opacity-90">
                We believe in transparency. We are likely not a good fit if you
                are:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {[
                "Enterprise (500+ Staff)",
                "Zero Budget Solopreneur",
                "Need 100% In-House Control",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-100 text-xs font-black uppercase tracking-tighter shadow-sm"
                >
                  <XCircle size={14} className="text-red-500" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA - Updated with Darkened Orange #d83b00 ================= */}
        <div className="text-center pb-10">
          <Link href="/lead" passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(216, 59, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className}
                inline-flex items-center gap-3
                px-12 py-5 rounded-full
                bg-[#d83b00] text-white
                font-black text-lg uppercase tracking-tight
                shadow-xl shadow-[#d83b00]/40
                hover:bg-[#b33100] transition-all cursor-pointer
              `}
            >
              Let’s Talk
              <ArrowRight size={20} strokeWidth={3} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}