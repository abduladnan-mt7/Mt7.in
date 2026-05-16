"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const LOGOS = [
  { name: "Discord", src: "/logos/discord.svg" },
  { name: "Webflow", src: "/logos/webflow.svg" },
  { name: "Asana", src: "/logos/asana.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Atlassian", src: "/logos/atlassian.svg" },
  { name: "Jira", src: "/logos/jira.svg" },
];

const LogoSection = () => {
  return (
    <section className="relative py-10 bg-transparent overflow-hidden flex justify-center w-full antialiased">
      <div className="relative z-10 w-full min-w-[80vw] max-w-[1400px] px-6 md:px-14">
        {/* GLASS CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] border border-white/10 bg-zinc-950/40 backdrop-blur-xl p-12 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block mb-6">
              {/* Updated to Dark Orange #d83b00 */}
              <p
                className={`${montserrat.className} uppercase tracking-[0.4em] text-[10px] font-black text-[#d83b00]`}
              >
                Trusted Partners
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1.5px] bg-[#d83b00] rounded-full shadow-[0_0_10px_rgba(216,59,0,0.5)] mt-1"
                aria-hidden="true"
              />
            </div>

            <h2
              className={`
                ${montserrat.className}
                text-2xl md:text-3xl lg:text-4xl font-bold leading-tight
                bg-gradient-to-r from-white via-zinc-200 to-zinc-400
                bg-clip-text text-transparent
              `}
            >
              Powering the next generation
              <br className="hidden md:block" /> of digital ecosystems.
            </h2>
          </div>

          {/* LOGO TICKER */}
          <div className="relative mt-10">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-16 md:gap-24 items-center whitespace-nowrap transform-gpu"
              >
                {/* First Set */}
                {LOGOS.map((logo, i) => (
                  <div
                    key={`logo-1-${i}`}
                    className="flex items-center gap-5 group transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#d83b00]/20 group-hover:border-[#d83b00]/50"
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={28}
                        height={28}
                        className="opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <span
                      className={`${montserrat.className} text-lg md:text-xl font-bold text-zinc-300 group-hover:text-white transition-colors`}
                    >
                      {logo.name}
                    </span>
                  </div>
                ))}
                {/* Duplicate Set for Loop */}
                {LOGOS.map((logo, i) => (
                  <div
                    key={`logo-2-${i}`}
                    aria-hidden="true"
                    className="flex items-center gap-5 group transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#d83b00]/20 group-hover:border-[#d83b00]/50"
                    >
                      <Image
                        src={logo.src}
                        alt=""
                        width={28}
                        height={28}
                        className="opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <span
                      className={`${montserrat.className} text-lg md:text-xl font-bold text-zinc-300 group-hover:text-white transition-colors`}
                    >
                      {logo.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* FOOTER TEXT */}
          <p
            className={`${montserrat.className} text-center mt-16 text-zinc-100 text-xs font-black tracking-widest uppercase opacity-80`}
          >
            Integrated with over 50+ enterprise tools & platforms
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;