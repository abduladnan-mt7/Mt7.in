// "use client";

// import React, { memo } from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { Montserrat } from "next/font/google";
// import { Quote, CheckCircle2 } from "lucide-react";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   display: "swap",
// });

// const CLIENT_LOGO_ROWS = [
//   [
//     { name: "GLOBAL HOMES", type: "Real Estate" },
//     { name: "CREATIVE", type: "Design Agency" },
//     { name: "LUXURY Homes", type: "Real Estate" },
//     { name: "Duplex Estates", type: "Real Estate" },
//     { name: "GREEN HOUSE", type: "Eco Tech" },
//   ],
//   [
//     { name: "TECHNOVA", type: "Technology" },
//     { name: "URBAN LIVING", type: "Property" },
//     { name: "INNOVATE", type: "Consulting" },
//     { name: "PRIME SPACES", type: "Real Estate" },
//     { name: "MODERN LIVING", type: "Interior Design" },
//   ],
// ];

// const CLIENT_STATS = [
//   { value: "150+", label: "Projects Completed" },
//   { value: "98%", label: "Client Satisfaction" },
//   { value: "24/7", label: "Support Available" },
//   { value: "50+", label: "Industries Served" },
// ];

// const founderQuotes = [
//   {
//     name: "Rahul M.",
//     role: "SaaS Founder, Bangalore",
//     quote:
//       "I'm managing 4 different agencies right now. Every Monday is 5 back-to-back calls. I don't have time to actually run my business.",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Priya S.",
//     role: "E-commerce Founder, Mumbai",
//     quote:
//       "Our marketing agency kept missing deadlines. When we tried to switch, they held our content hostage. Took 3 months to transition.",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Amit K.",
//     role: "Fintech Founder, Delhi",
//     quote:
//       "We're paying ₹3.5L/month across finance, marketing, and HR. No one talks to each other. It's complete chaos.",
//     img: "https://randomuser.me/api/portraits/men/65.jpg",
//   },
// ];

// const ClientsSection = () => {
//   const reduceMotion = useReducedMotion();

//   return (
//     // Updated padding from py-24 md:py-32 to py-10
//     <section id="clients" className="relative py-10 overflow-hidden bg-transparent">
//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.25, 0.45, 0.25] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-orange-900/10 blur-[120px]"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
//         {/* Header */}
//         <div className="max-w-3xl mb-20 text-left">
//           <div className="inline-block">
//             <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
//               WHAT FOUNDERS SAY
//             </p>
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
//               className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
//             />
//           </div>

//           <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-4 leading-tight
//             bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
//             bg-clip-text text-transparent
//             drop-shadow-[0_4px_12px_rgba(255,69,0,0.25)]`}
//           >
//             The Problem Every Startup Faces
//           </h2>
//           <p className="text-zinc-400 mt-4 leading-relaxed">
//             We spoke to dozens of founders about their operation struggles. The feedback was always the same.
//           </p>
//         </div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//         >
//           {CLIENT_STATS.map((stat) => (
//             <div
//               key={stat.label}
//               className="bg-black/40 border border-white/10 rounded-xl p-6 text-center"
//             >
//               <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                 {stat.value}
//               </div>
//               <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Marquees */}
//         <div className="overflow-hidden mb-24">
//           {[CLIENT_LOGO_ROWS[0], CLIENT_LOGO_ROWS[1]].map((row, idx) => (
//             <motion.div
//               key={idx}
//               className="flex gap-12 mb-10 will-change-transform"
//               animate={
//                 reduceMotion
//                   ? false
//                   : { x: idx === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }
//               }
//               transition={{
//                 duration: idx === 0 ? 40 : 45,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             >
//               {[...row, ...row].map((client, i) => (
//                 <div
//                   key={i}
//                   className="min-w-[200px] p-6 rounded-2xl bg-black/30 border border-white/10 text-center"
//                 >
//                   <div className="text-white font-bold">{client.name}</div>
//                   <div className="text-xs text-gray-400 mt-1">
//                     {client.type}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           ))}
//         </div>

//         {/* Founder Quote Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           {founderQuotes.map((t, index) => (
//             <motion.div
//               key={t.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-sm flex flex-col h-full"
//             >
//               <Quote size={40} className="text-orange-500/20 mb-6" />
//               <p className={`${montserrat.className} text-gray-300 italic mb-8 flex-1 leading-relaxed text-base`}>
//                 “{t.quote}”
//               </p>

//               <div className="flex items-center gap-4 pt-6 border-t border-white/5">
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   width={44}
//                   height={44}
//                   className="rounded-full grayscale group-hover:grayscale-0 transition-all"
//                 />
//                 <div>
//                   <p className="text-white font-bold text-sm">{t.name}</p>
//                   <p className="text-orange-500/80 text-[10px] uppercase font-bold tracking-widest">
//                     {t.role}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Area */}
//         <motion.div
//            initial={{ opacity: 0, scale: 0.95 }}
//            whileInView={{ opacity: 1, scale: 1 }}
//            className="p-10 rounded-[3rem] border border-orange-500/20 bg-gradient-to-br from-orange-600/5 to-transparent text-center flex flex-col items-center gap-6"
//         >
//           <p className={`${montserrat.className} text-zinc-300 text-xl font-medium`}>
//             These are the founders <span className="text-orange-500 font-bold">Mt7</span> was built for.
//           </p>

//           <div className="flex flex-col items-center gap-4">
//             <h4 className="text-white text-lg font-bold">Ready to end the chaos?</h4>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-lg shadow-orange-900/20 flex items-center gap-2 group"
//             >
//               Book Free Consultation
//               <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
//                 →
//               </motion.span>
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Footer Offer */}
//         <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 transition-all duration-500">
//              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
//                 <CheckCircle2 size={14} className="text-orange-500" /> Founder pricing (30% off)
//              </div>
//              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
//                 <CheckCircle2 size={14} className="text-orange-500" /> Priority Onboarding
//              </div>
//              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
//                 <CheckCircle2 size={14} className="text-orange-500" /> Lifetime Benefits
//              </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(ClientsSection);

//NEW CLIENTS CODE :

"use client";

import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { CheckCircle2, Quote } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const CLIENT_STATS = [
  { value: "50+", label: "Industries Vetted" },
  { value: "30%", label: "Avg. OpEx Saved" },
  { value: "24/7", label: "Operations Support" },
  { value: "10", label: "Founding Slots" },
];

const INDUSTRIES = [
  "SaaS",
  "E-commerce",
  "Fintech",
  "Healthtech",
  "D2C Brands",
];

const founderQuotes = [
  {
    name: "Rahul M.",
    role: "SaaS Founder, Bangalore",
    quote:
      "I'm managing 4 different agencies right now. Every Monday is 5 back-to-back calls. I don't have time to actually run my business.",
    img: "/founders/rahul.jpg",
  },
  {
    name: "Priya S.",
    role: "E-commerce Founder, Mumbai",
    quote:
      "Our marketing agency kept missing deadlines. When we tried to switch, they held our content hostage. Took 3 months to transition.",
    img: "/founders/priya.jpg",
  },
  {
    name: "Amit K.",
    role: "Fintech Founder, Delhi",
    quote:
      "We're paying ₹3.5L/month across finance, marketing, and HR. No one talks to each other. It's complete chaos.",
    img: "/founders/amit.jpg",
  },
];

const ClientsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="clients"
      className="relative py-10 overflow-hidden bg-transparent antialiased"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={
            reduceMotion ? { opacity: 0.35 } : { opacity: [0.25, 0.45, 0.25] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-[#d83b00]/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-black text-[#d83b00] mb-2`}
            >
              CURRENTLY ONBOARDING
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

          <h2
            className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-4 leading-tight
            bg-gradient-to-r from-white via-zinc-200 to-[#d83b00]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(216,59,0,0.25)]`}
          >
            Building Our Founding <br />
            <span className="text-[#d83b00]">Client Portfolio</span>
          </h2>
          <p className="text-zinc-200 mt-4 font-medium opacity-90">
            We are currently hand-picking 10 ambitious companies to join our
            founding cohort. No fake testimonials, just real results for real
            founders.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {CLIENT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-950/60 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:border-[#d83b00]/40 transition-all shadow-xl"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-[#d83b00] to-red-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-zinc-300 text-[10px] uppercase font-black tracking-widest mt-2 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Founder Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {founderQuotes.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-[2.5rem] bg-zinc-950/80 border border-white/10 backdrop-blur-xl flex flex-col h-full shadow-2xl"
            >
              <Quote size={40} className="text-[#d83b00]/20 mb-6" aria-hidden="true" />
              <p
                className={`${montserrat.className} text-zinc-100 italic mb-8 flex-1 leading-relaxed text-base font-medium`}
              >
                “{t.quote}”
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.img}
                  alt={`Founder ${t.name}`}
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="rounded-full grayscale group-hover:grayscale-0 transition-all object-cover aspect-square border border-white/10"
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#d83b00] text-[10px] font-black uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Main Onboarding Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 rounded-[3rem] border border-[#d83b00]/20 bg-zinc-950/40 backdrop-blur-md overflow-hidden text-center shadow-2xl"
        >
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-white text-lg font-black uppercase tracking-tight">
              Industries We Serve
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {INDUSTRIES.map((industry) => (
                <span
                  key={industry}
                  className="px-5 py-2 rounded-full border border-[#d83b00]/30 bg-[#d83b00]/10 text-white text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>

            <div className="h-px w-24 bg-zinc-800 my-4" aria-hidden="true" />

            <div className="space-y-4">
              <p
                className={`${montserrat.className} text-white text-xl font-bold tracking-tight`}
              >
                Interested in being featured here?
              </p>
              <p className="text-zinc-200 text-sm max-w-lg mx-auto font-medium">
                Join our founding cohort to receive lifetime preferred pricing
                and priority 1-on-1 operational oversight.
              </p>
            </div>

            <Link href="/lead" passHref>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(216, 59, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-10 py-5 bg-gradient-to-r from-[#d83b00] to-red-700 text-white font-black rounded-full shadow-lg flex items-center gap-3 group cursor-pointer transition-all"
              >
                Apply for Founding Status
                <FiArrowRight strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          <FiZap className="absolute -bottom-10 -left-10 text-[200px] text-[#d83b00]/5 -rotate-12" aria-hidden="true" />
        </motion.div>

        {/* Benefits Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex items-center gap-2 text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em]">
            <CheckCircle2 size={14} className="text-[#d83b00]" aria-hidden="true" />
            Founder Pricing (30% Off)
          </div>
          <div className="flex items-center gap-2 text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em]">
            <CheckCircle2 size={14} className="text-[#d83b00]" aria-hidden="true" />
            Priority Onboarding
          </div>
          <div className="flex items-center gap-2 text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em]">
            <CheckCircle2 size={14} className="text-[#d83b00]" aria-hidden="true" />
            Lifetime Benefits
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ClientsSection);

