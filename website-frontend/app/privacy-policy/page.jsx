"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-transparent text-white">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1
            className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4`}
          >
            <span className="bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p
            className={`${montserrat.className} text-gray-400 text-sm`}
          >
            Last updated: January 2026
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${montserrat.className} space-y-14 text-gray-200 leading-relaxed`}
        >

          {/* INTRO */}
          <section>
            <p className="text-lg font-light">
              At <span className="text-[#ffae42] font-medium">MT7.in</span>, your
              privacy is not an afterthought. This policy explains what data we
              collect, why we collect it, and how we protect it. If you don’t
              agree with any part of this policy, you should not use our
              services.
            </p>
          </section>

          {/* INFO WE COLLECT */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>
                Personal details such as name, email address, and contact
                information when you submit forms or contact us.
              </li>
              <li>
                Usage data including pages visited, device type, browser, and
                interaction patterns.
              </li>
              <li>
                Any information you voluntarily provide through communication
                or service usage.
              </li>
            </ul>
          </section>

          {/* HOW WE USE DATA */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>To provide, operate, and improve our services.</li>
              <li>To communicate with you regarding updates or support.</li>
              <li>To analyze usage trends and improve user experience.</li>
              <li>To prevent fraud, abuse, or security threats.</li>
            </ul>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Cookies & Tracking
            </h2>
            <p className="text-gray-300">
              We may use cookies or similar technologies to enhance functionality
              and understand how users interact with our platform. You can
              control cookie usage through your browser settings.
            </p>
          </section>

          {/* DATA SHARING */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Data Sharing
            </h2>
            <p className="text-gray-300">
              We do not sell your personal data. Information may be shared only
              when required to operate services, comply with legal obligations,
              or protect our rights.
            </p>
          </section>

          {/* SECURITY */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Data Security
            </h2>
            <p className="text-gray-300">
              We use industry-standard security measures to protect your data.
              However, no method of transmission over the internet is 100%
              secure. Use our services at your own risk.
            </p>
          </section>

          {/* USER RIGHTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Your Rights
            </h2>
            <p className="text-gray-300">
              You have the right to access, update, or request deletion of your
              personal information. Contact us if you want to exercise these
              rights.
            </p>
          </section>

          {/* POLICY UPDATES */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Policy Updates
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Continued use
              of our services after updates means you accept the changes.
            </p>
          </section>

          {/* CONTACT */}
          <section className="pt-6 border-t border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Contact Us
            </h2>
            <p className="text-gray-300">
              If you have questions about this Privacy Policy, reach out via our{" "}
              <Link
                href="/contact"
                className="text-[#ffae42] hover:text-[#ff4500] transition"
              >
                Contact page
              </Link>
              .
            </p>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
