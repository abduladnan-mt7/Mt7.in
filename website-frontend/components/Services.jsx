"use client";

import React, { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Terminal, Cpu, Cloud, Layout, ShieldCheck } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const services = [
  {
    id: 1,
    title: "Product Engineering",
    desc: "We design and build scalable web platforms.",
    details:
      "Full-stack development using Next.js, robust API integrations, and real-time database management.",
    icon: <Terminal className="text-orange-500" size={20} />,
  },
  {
    id: 2,
    title: "System Architecture",
    desc: "Fast and resilient microservices.",
    details:
      "High-availability clusters, load balancing, and distributed system design.",
    icon: <Cpu className="text-red-500" size={20} />,
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    desc: "Pipelines built for real-world scale.",
    details:
      "AWS/GCP automation, Kubernetes orchestration, and automated CI/CD security.",
    icon: <Cloud className="text-orange-400" size={20} />,
  },
  {
    id: 4,
    title: "UI/UX Engineering",
    desc: "Premium, intuitive interfaces.",
    details:
      "Motion design, accessibility-first components, and design system architecture.",
    icon: <Layout className="text-red-400" size={20} />,
  },
];

const Services = forwardRef(function Services(_, ref) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-20 bg-transparent overflow-hidden flex justify-center w-full"
    >
      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-14">
        {/* HEADER */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}
            >
              Services
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2
            className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-8 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}
          >
            Built for teams that want to scale without chaos.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT */}
          <motion.div
            layout
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {services.map((service) => (
              <motion.div
                layout
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                transition={{
                  layout: { type: "spring", stiffness: 200, damping: 25 },
                }}
                className={`group relative p-6 rounded-[1.2rem] 
                  bg-zinc-900/40 backdrop-blur-md
                  border border-white/5 overflow-hidden
                  ${
                    hoveredId === service.id
                      ? "border-orange-500/40 bg-zinc-800/60"
                      : ""
                  }
                `}
              >
                <div className="relative z-10">
                  <motion.div
                    layout
                    className="mb-3 p-2 w-fit rounded-lg bg-white/5 border border-white/10"
                  >
                    {service.icon}
                  </motion.div>

                  <motion.h3
                    layout
                    className={`${montserrat.className} text-base font-bold text-white mb-1`}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    layout
                    className={`${montserrat.className} text-zinc-400 text-xs leading-relaxed`}
                  >
                    {service.desc}
                  </motion.p>

                  <AnimatePresence>
                    {hoveredId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-white/10">
                          <p
                            className={`${montserrat.className} text-[10px] text-zinc-300 italic leading-relaxed`}
                          >
                            {service.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* CTA CARD */}
            <motion.div
              layout
              className="md:col-span-2 p-6 rounded-[1.2rem] bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-4 mt-2"
            >
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-orange-500" size={24} />
                <h3
                  className={`${montserrat.className} text-sm font-bold text-white`}
                >
                  AI & Technical Consulting
                </h3>
              </div>
              <button
                className={`${montserrat.className} px-5 py-2 rounded-full bg-white text-black text-[10px] font-bold hover:bg-orange-500 hover:text-white transition-all`}
              >
                Book call
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:col-span-5 relative h-full min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/services.png"
                alt="Services Visual"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
