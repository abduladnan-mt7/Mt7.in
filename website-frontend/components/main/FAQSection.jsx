"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Plus, Minus, HelpCircle } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const faqs = [
  {
    question: "How is this different from hiring agencies directly?",
    answer:
      "You get one coordinator managing all vendors, tracking performance, and replacing underperformers. Plus bundled pricing saves 20-30% vs hiring separately.",
  },
  {
    question: "What if I already have some agencies?",
    answer:
      "Perfect! Choose our Coordinator plan. We'll manage your existing vendors and only replace them if they're underperforming.",
  },
  {
    question: "How do you find agencies?",
    answer:
      "We've pre-vetted 50+ agencies across marketing, finance, and HR in budget, mid, and premium tiers. We match you based on your needs.",
  },
  {
    question: "What if the agency you assign isn't good?",
    answer:
      "3-strike system: Warning → Escalation → Replacement (7-15 days, ₹0 cost to you). Unlimited switches.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Custom pricing based on your needs. We get quotes from agencies, add transparent margin, present to you. No hidden costs.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "3-month minimum, then month-to-month. Cancel with 14 days notice. No refunds (services already rendered), but free agency switching anytime.",
  },
  {
    question: "How fast can we start?",
    answer:
      "7-10 days from payment to first deliverables. Includes agency matching, onboarding, and setup.",
  },
  {
    question: "Do you take equity or revenue share?",
    answer: "No. Flat monthly fee only. No backend deals.",
  },
  {
    question: "What if we need to add services later?",
    answer:
      "Anytime. We quote the addition, you approve, we add within 7 days.",
  },
  {
    question: "Can we speak directly with agencies?",
    answer:
      "Yes! We coordinate, but you can join calls or message agencies directly if you prefer.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-10 bg-transparent overflow-hidden antialiased">
      {/* Background Glow - Updated to #d83b00 */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#d83b00]/5 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex flex-col items-start">
            {/* Updated Header Label to #d83b00 */}
            <span
              className={`${montserrat.className} uppercase tracking-[0.28em] text-xs font-black text-[#d83b00] mb-2`}
            >
              Frequently Asked Questions
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
            className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-white via-zinc-200 to-[#d83b00] bg-clip-text text-transparent leading-tight`}
          >
            Everything You Need to Know
          </h2>
        </div>

        {/* ================= FAQ GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative rounded-[1.5rem] border transition-all duration-300 overflow-hidden
                ${
                  openIndex === index
                    ? "bg-zinc-950/80 border-[#d83b00]/40 shadow-xl shadow-[#d83b00]/10"
                    : "bg-zinc-900/40 border-white/5 hover:border-[#d83b00]/20 hover:bg-zinc-900/60"
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-start justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d83b00]/50 rounded-[1.5rem]"
              >
                <div className="flex items-start gap-4">
                  {/* Updated Icon Container Colors */}
                  <div 
                    className={`mt-1 p-2 rounded-xl transition-colors duration-300 ${
                      openIndex === index ? "bg-[#d83b00]/10 text-[#d83b00]" : "bg-white/5 text-zinc-400 group-hover:text-zinc-200"
                    }`}
                    aria-hidden="true"
                  >
                    <HelpCircle size={20} />
                  </div>
                  <span
                    className={`${montserrat.className} text-sm md:text-base font-bold text-white pr-4 pt-1.5 leading-tight`}
                  >
                    {faq.question}
                  </span>
                </div>
                
                {/* Updated Toggle Icon Color */}
                <div 
                  className={`mt-1 p-1 rounded-full transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#d83b00]" : "text-zinc-300"
                  }`}
                  aria-hidden="true"
                >
                   {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pl-[4.5rem] pr-8">
                      <p className={`${montserrat.className} text-zinc-100 text-sm leading-relaxed border-t border-white/5 pt-4 font-medium`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}