"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const scrollToHowItWorks = () => {
  const el = document.getElementById("flow");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function HeroSection() {
  const memberImages = [
    "/person1.jpg",
    "/person2.jpg",
    "/person3.jpg",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-transparent overflow-hidden flex items-center pt-24 pb-20 md:pb-0 antialiased"
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6"></div>
            <header>
              <motion.h1
                className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6`}
              >
                {/* EYEBROW - Updated to darkened orange #d83b00 */}
                <span className="block text-sm tracking-widest uppercase mb-3 bg-gradient-to-r from-white via-orange-300 to-[#d83b00] bg-clip-text text-transparent opacity-100">
                  For Startups Drowning in Agency Chaos
                </span>

                <span className="block bg-gradient-to-r from-white via-[#ffae42] to-[#d83b00] bg-clip-text text-transparent">
                  Stop Juggling Agencies.
                </span>

                <span className="block relative mt-2">
                  <span className="bg-gradient-to-r from-white via-[#ffae42] to-[#d83b00] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(216,59,0,0.3)]">
                    Start Growing Your Business.
                  </span>
                  <motion.span
                    className="absolute -bottom-3 left-0 h-1 bg-[#d83b00] rounded-full shadow-[0_0_15px_rgba(216,59,0,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: "220px" }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
                </span>
              </motion.h1>
            </header>

            <p
              className={`${montserrat.className} text-lg text-zinc-100 font-light leading-relaxed mb-10 max-w-xl`}
            >
              We find, vet, and manage all your Marketing, Finance & HR
              agencies— so you get professional operations without the
              headaches. One point of contact. One invoice. Zero vendor drama.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {memberImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-9 h-9 rounded-full border-2 border-black overflow-hidden bg-zinc-900"
                    >
                      <Image
                        src={src}
                        alt="Founding Team Member"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className={`${montserrat.className} text-zinc-200 text-sm font-medium`}>
                  Currently onboarding founding clients
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* BUTTON OPTION B: Darkened orange #d83b00 with White Text */}
                <motion.button
                  onClick={scrollToHowItWorks}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(216, 59, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Learn how our process works"
                  className={`${montserrat.className} px-8 py-4 bg-[#d83b00] text-white font-bold rounded-xl shadow-lg cursor-pointer transition-shadow`}
                >
                  See How It Works →
                </motion.button>

                <Link href="/lead" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${montserrat.className} px-8 py-4 border-2 border-[#d83b00] text-[#ffae42] font-bold rounded-xl cursor-pointer hover:bg-[#d83b00]/5 transition-colors`}
                  >
                    Book Free Consultation
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="relative mt-20 md:mt-12 lg:mt-0 mb-10 md:mb-0">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[320px] md:h-[450px] rounded-3xl overflow-hidden bg-red-950/10 backdrop-blur-xl border border-white/10 shadow-2xl shadow-red-500/10"
            >
              <Image
                src="/work.png"
                alt="Operational Management Dashboard Preview"
                fill
                priority 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050202] via-transparent to-transparent" />
            </motion.div>

            {/* 100+ AGENCY PARTNERS CARD */}
            <div className="absolute -bottom-6 md:-bottom-4 -left-3 md:-left-6 w-32 h-24 md:w-40 md:h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl border-2 md:border-4 border-[#d83b00]/30 blur-[1px] animate-pulse" />

              <div className="relative w-full h-full rounded-2xl bg-black/95 backdrop-blur-xl border-2 md:border-4 border-[#d83b00]/60 px-2 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(216,59,0,0.3)]">
                <div className="text-zinc-300 text-[8px] md:text-[10px] mb-1 font-bold tracking-widest uppercase">
                  Connected
                </div>
                <div className="text-xs md:text-base lg:text-lg font-black text-[#d83b00] drop-shadow-[0_0_8px_rgba(216,59,0,0.6)] text-center leading-tight">
                  100+ Agency <br /> Partners
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}