"use client";

import React, { useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const AboutPage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const timelineRef = useRef(null);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const focusAreas = [
    {
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-xl opacity-50" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      ),
      title: "AI Solutions",
      description: "Building intelligent systems that transform how businesses operate and scale"
    },
    {
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-50" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      ),
      title: "AI Agents",
      description: "Autonomous agents that handle complex workflows and decision-making processes"
    },
    {
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl blur-xl opacity-50" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>
      ),
      title: "Call Agents",
      description: "Next-generation voice AI that delivers human-like customer interactions"
    },
    {
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl blur-xl opacity-50" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      ),
      title: "Marketing Automation",
      description: "Smart marketing systems that drive growth and maximize ROI"
    }
  ];

  const milestones = [
    { year: "2012", event: "Vision Conceived", description: "The foundation of MT7.IO was planned" },
    { year: "2015", event: "Research Phase", description: "Deep dive into networking and AI technologies" },
    { year: "2019", event: "Prototype Development", description: "Building the core infrastructure" },
    { year: "2022", event: "Market Entry", description: "Launch of our first commercial solutions" },
    { year: "2025", event: "Full Launch", description: "MT7.IO platform goes live after 13 years" }
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-transparent overflow-hidden"
    >
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6">
              <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-3`}>
                Our Story
              </p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent"
              />
            </div>

            <motion.h1 
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]"
                style={{
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {"13 Years in the Making".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                    whileHover={{
                      y: -10,
                      scale: 1.2,
                      color: "#ff4500",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <p className={`${montserrat.className} text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto`}>
              What started as a vision in 2012 has evolved into a comprehensive platform for building the future of business through AI and intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN STORY SECTION */}
      <section className="relative py-20 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* LEFT: Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent`}>
                Building the Future of Business
              </h2>
              
              <div className={`${montserrat.className} text-gray-300 space-y-6 leading-relaxed font-light`}>
                <p className="text-lg">
                  While we&apos;ve collaborated with numerous companies across industries, our true passion lies in <span className="text-orange-400 font-medium">building companies from the ground up</span>—particularly those leveraging AI, intelligent agents, and automation.
                </p>
                
                <p className="text-lg">
                  MT7.IO was conceptualized 13 years ago when we recognized that the future of business would be powered by intelligent systems that could think, adapt, and scale autonomously. What seemed like science fiction then is now our reality.
                </p>
                
                <p className="text-lg">
                  Over more than a decade, we&apos;ve invested in research, development, and real-world testing to create a platform that doesn&apos;t just support businesses—it <span className="text-orange-400 font-medium">builds them</span>.
                </p>

                <p className="text-lg">
                  Today, MT7.IO stands as a testament to patience, vision, and unwavering commitment to excellence in the age of artificial intelligence.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 bg-zinc-900/50 backdrop-blur-md group">
                <Image
                  src="/aboutus.png"
                  alt="MT7 Vision"
                  fill
                  className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Stats Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                      13+
                    </div>
                    <div className={`${montserrat.className} text-white text-xl font-medium tracking-wider`}>
                      Years of Vision
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* TIMELINE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
            ref={timelineRef}
          >
            <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent`}>
              Our Journey
            </h2>

            <div className="relative">
              {/* Base Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800/50 transform md:-translate-x-1/2" />

              {/* Glowing Progress Line with Scroll */}
              <ScrollLine containerRef={timelineRef} />

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
                      <div className="inline-block p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.05] transition-colors">
                        <div className={`${montserrat.className} text-orange-400 font-bold text-2xl mb-2`}>
                          {milestone.year}
                        </div>
                        <div className={`${montserrat.className} text-white font-semibold text-lg mb-2`}>
                          {milestone.event}
                        </div>
                        <div className={`${montserrat.className} text-gray-400 text-sm`}>
                          {milestone.description}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-black shadow-[0_0_20px_rgba(255,69,0,0.6)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FOCUS AREAS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent`}>
                What We Build
              </h2>
              <p className={`${montserrat.className} text-gray-300 text-lg font-light max-w-3xl mx-auto`}>
                Our core focus is creating intelligent systems that power the next generation of businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className={`${montserrat.className} p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all hover:border-orange-500/30`}
                >
                  <div className="mb-6">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 px-6 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 rounded-3xl bg-gradient-to-br from-orange-950/30 to-red-950/20 backdrop-blur-xl border border-orange-500/20">
            <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-6 text-white`}>
              Ready to Build the Future?
            </h2>
            <p className={`${montserrat.className} text-gray-300 text-lg mb-8 font-light`}>
              Join us in creating intelligent, scalable businesses powered by cutting-edge AI technology
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 69, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className} px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-900/30`}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

/* ================= SCROLL LINE COMPONENT ================= */
const ScrollLine = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleY }}
      className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 origin-top bg-gradient-to-b from-orange-500 via-orange-600 to-red-600 shadow-[0_0_20px_rgba(255,69,0,0.8),0_0_40px_rgba(255,69,0,0.4)]"
    />
  );
};

export default AboutPage;