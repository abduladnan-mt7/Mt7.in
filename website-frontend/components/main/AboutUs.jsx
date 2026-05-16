"use client";

import React, { useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Clock,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const AboutSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY],
  );

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-10 bg-transparent overflow-hidden flex justify-center w-full antialiased"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" />

      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-14">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-[#d83b00] mb-2`}>
              About Mt7
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-[#d83b00] to-transparent"
            />
          </div>

          <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-[1.15] bg-gradient-to-r from-white via-orange-200 to-[#d83b00] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(216,59,0,0.2)] tracking-tight`}>
            The 7 Layers Multi Tasking Company
          </h2>

          <p className={`${montserrat.className} text-zinc-100 text-sm md:text-base leading-relaxed font-medium`}>
            We exist because founders shouldn&apos;t waste time managing agencies.
          </p>
        </div>

        {/* --- Narrative Grid --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* THE PROBLEM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-[1.2rem] border border-white/10 bg-zinc-900/60 backdrop-blur-md shadow-xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-red-500/20 rounded-full text-red-400">
                <Clock size={20} />
              </div>
              <h3 className={`${montserrat.className} text-xl font-bold text-white`}>
                The Problem We Saw
              </h3>
            </div>
            <p className={`${montserrat.className} text-zinc-200 text-sm leading-relaxed mb-6 font-medium`}>
              Every startup we talked to had the same pain. Founders were
              spending more time managing vendors than building their business.
            </p>
            <ul className="space-y-4">
              {[
                "Managing 5 different agencies simultaneously",
                "15+ hours per week lost on coordination",
                "No accountability when things go wrong",
                "Expensive and painful to switch vendors",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-100 text-xs md:text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* THE SOLUTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-[1.2rem] border border-[#d83b00]/30 bg-gradient-to-br from-[#d83b00]/[0.08] to-transparent backdrop-blur-md relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d83b00]/10 blur-[50px] rounded-full" aria-hidden="true" />

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-orange-500/20 rounded-full text-orange-400">
                <ShieldCheck size={20} />
              </div>
              <h3 className={`${montserrat.className} text-xl font-bold text-white`}>
                Our Solution
              </h3>
            </div>

            <p className={`${montserrat.className} text-zinc-200 text-sm leading-relaxed mb-6 font-medium`}>
              Mt7 is not an agency or a marketplace. We are a business
              operations system acting as your single operational manager.
            </p>

            <div className="space-y-3">
              {[
                { title: "Find & Vet", desc: "Access to agencies across all budget tiers." },
                { title: "Daily Management", desc: "A single point of contact for everything." },
                { title: "Guaranteed Quality", desc: "Free replacement if standards drop." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d83b00] text-white font-black text-[10px]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-zinc-100 text-[10px] sm:text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- OUR APPROACH --- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
              Our Approach
            </h3>
            <p className={`${montserrat.className} text-zinc-200 text-sm md:text-base max-w-2xl mx-auto font-medium`}>
              The &quot;7 Layers&quot; represent our systematic approach to
              covering every operational need of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Marketing", items: ["Social Media", "Content", "SEO", "Ads"] },
              { title: "Finance", items: ["Bookkeeping", "CFO Services", "Tax", "Reporting"] },
              { title: "HR & Ops", items: ["Payroll", "Benefits", "Compliance", "Recruiting"] },
            ].map((domain, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-[1.2rem] border border-white/10 bg-zinc-900/60 flex flex-col items-center text-center hover:border-[#d83b00]/40 transition-colors"
              >
                <Layers className="text-[#d83b00]" size={28} />
                <h4 className="text-white font-extrabold text-lg mt-4 mb-3 tracking-tight">
                  {domain.title}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {domain.items.map((tag) => (
                    <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/10 text-white font-semibold border border-white/5 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- VALUES GRID --- */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Transparency", desc: "You see what agencies cost + our margin." },
              { title: "Quality", desc: "3-strike system ensures high standards." },
              { title: "Flexibility", desc: "Month-to-month, no lock-ins." },
              { title: "Alignment", desc: "We only succeed when you succeed." },
            ].map((val, idx) => (
              <div key={idx} className="p-5 rounded-[1rem] bg-zinc-900/60 border border-white/10 hover:border-[#d83b00]/40 transition-colors shadow-lg">
                <CheckCircle2 className="text-[#d83b00] mb-3" size={20} />
                <h4 className="text-white font-bold text-sm mb-1">{val.title}</h4>
                <p className="text-zinc-100 text-xs leading-relaxed font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="flex flex-col items-center justify-center text-center pb-10">
          <h2 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight`}>
            Ready to simplify your operations?
          </h2>
          <Link href="/lead" passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(216, 59, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className} px-10 py-5 bg-[#d83b00] text-white font-black text-sm md:text-base rounded-full shadow-lg shadow-orange-900/40 cursor-pointer flex items-center gap-3 transition-all`}
            >
              Book Free Consultation
              <ArrowRight size={20} strokeWidth={3} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;