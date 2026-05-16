"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Footer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubscribe = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email) return;

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
            email,
            subject: "New Newsletter Subscription",
            from_name: "MT7 Website",
          }),
        });

        if (!res.ok) throw new Error("Request failed");

        setToast({
          type: "success",
          message: "Subscribed successfully 🚀",
        });
        setEmail("");
      } catch {
        setToast({
          type: "error",
          message: "Something went wrong. Try again.",
        });
      }

      setTimeout(() => setToast(null), 3000);
    },
    [email],
  );

  const footerLinks = {
    Quick: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/#pricing" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Contact", href: "/register" },
    ],
    Services: [
      { label: "Coordinator", href: "/services/coordinator" },
      { label: "Sourcing", href: "/services/sourcing" },
      { label: "Full Stack", href: "/services/full-stack" },
      { label: "Mini (Beta)", href: "/services/mini" },
    ],
    Company: [
      { label: "About", href: "/#about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund", href: "/refund-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Follow us on Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Follow us on Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "Connect with us on LinkedIn" },
    { isWhatsApp: true, href: "https://wa.me/917800007500", label: "Message us on WhatsApp" },
  ];

  return (
    <>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl text-sm font-bold shadow-2xl
              ${toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative bg-zinc-950/40 backdrop-blur-md pt-14 pb-6 overflow-hidden antialiased border-t border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d83b00]/40 to-transparent" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/"
                  className={`${montserrat.className} text-3xl font-bold text-white w-fit mr-6`}
                >
                  Mt7<span className="text-[#d83b00]">.in</span>
                </Link>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#d83b00]/50 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {social.isWhatsApp ? (
                        <FaWhatsapp size={17} className="text-zinc-300 hover:text-[#25D366]" />
                      ) : (
                        <social.icon size={17} className="text-zinc-300 hover:text-white" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* DESCRIPTION: High contrast zinc-300 for accessibility */}
              <p className="text-zinc-300 text-sm max-w-xl leading-relaxed font-medium">
                <strong className="text-white font-bold">Mt7 Pvt. Ltd.</strong> — The 7
                Layers Multi Tasking Company. Your business operations system
                for marketing, finance, and HR management.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="flex-1 relative">
                  <label htmlFor="footer-email" className="sr-only">Email Address</label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d83b00]/50 transition-all"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="px-6 py-2.5 bg-[#d83b00] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-center shadow-lg shadow-[#d83b00]/20"
                  whileHover={{ scale: 1.02, backgroundColor: "#b33100" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe <ArrowRight size={15} strokeWidth={3} />
                </motion.button>
              </form>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-white text-[10px] uppercase tracking-widest font-black mb-5">
                    {title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-zinc-300 text-sm hover:text-white transition-colors font-medium"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" aria-hidden="true" />

          <div className="flex flex-col items-center gap-6 text-center text-sm text-zinc-300 font-medium">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              <a href="mailto:founder@Mt7.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-[#d83b00]" aria-hidden="true" />
                founder@Mt7.in
              </a>
              <a href="mailto:support@Mt7.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-[#d83b00]" aria-hidden="true" />
                support@Mt7.in
              </a>
              <a href="tel:+917800007500" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-[#d83b00]" aria-hidden="true" />
                +91 7800007500
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MapPin size={14} className="text-[#d83b00]" aria-hidden="true" />
                Bahraich, UP, India
              </a>
            </div>

            <div className="text-xs text-zinc-300 space-y-1">
              <div>Mt7 Pvt. Ltd. | GSTIN: 09AATCM9258Q1Z2</div>
              <div>Services delivered through vetted agency partners.</div>
            </div>

            {/* COPYRIGHT: Bumped contrast to zinc-300 to pass accessibility audits */}
            <div className="text-[10px] text-zinc-300 uppercase tracking-widest font-bold">
              © 2026 Mt7 Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}