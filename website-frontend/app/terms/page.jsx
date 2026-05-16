"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function TermsAndConditionsPage() {
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
              Terms & Conditions
            </span>
          </h1>

          <p className={`${montserrat.className} text-gray-400 text-sm`}>
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
              These Terms & Conditions govern your access to and use of{" "}
              <span className="text-[#ffae42] font-medium">MT7.in</span>.
              By using our website or services, you agree to be bound by these
              terms. If you do not agree, do not use our services.
            </p>
          </section>

          {/* ELIGIBILITY */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Eligibility
            </h2>
            <p className="text-gray-300">
              You must be at least 18 years old to use our services. By accessing
              MT7.in, you confirm that you meet this requirement.
            </p>
          </section>

          {/* USE OF SERVICES */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Use of Services
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>You agree to use our services only for lawful purposes.</li>
              <li>
                You must not misuse, disrupt, or attempt to gain unauthorized
                access to our systems.
              </li>
              <li>
                We reserve the right to suspend or terminate access if misuse is
                detected.
              </li>
            </ul>
          </section>

          {/* INTELLECTUAL PROPERTY */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Intellectual Property
            </h2>
            <p className="text-gray-300">
              All content, branding, designs, code, and materials on MT7.in are
              the intellectual property of MT7 unless stated otherwise. You may
              not copy, reproduce, or distribute any material without prior
              written permission.
            </p>
          </section>

          {/* DISCLAIMERS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Disclaimers
            </h2>
            <p className="text-gray-300">
              Our services are provided on an “as is” and “as available” basis.
              We make no guarantees regarding accuracy, reliability, or
              availability. Use the platform at your own risk.
            </p>
          </section>

          {/* LIMITATION OF LIABILITY */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Limitation of Liability
            </h2>
            <p className="text-gray-300">
              MT7 shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of our services, even
              if we were advised of the possibility of such damages.
            </p>
          </section>

          {/* TERMINATION */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Termination
            </h2>
            <p className="text-gray-300">
              We reserve the right to suspend or terminate your access to our
              services at any time, without prior notice, if you violate these
              terms.
            </p>
          </section>

          {/* CHANGES */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Changes to Terms
            </h2>
            <p className="text-gray-300">
              We may update these Terms & Conditions at any time. Continued use
              of MT7.in after changes are posted constitutes acceptance of the
              revised terms.
            </p>
          </section>

          {/* GOVERNING LAW */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Governing Law
            </h2>
            <p className="text-gray-300">
              These terms are governed by and construed in accordance with the
              laws applicable in your jurisdiction, without regard to conflict
              of law principles.
            </p>
          </section>

          {/* CONTACT */}
          <section className="pt-6 border-t border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Contact Information
            </h2>
            <p className="text-gray-300">
              If you have any questions about these Terms & Conditions, contact
              us via our{" "}
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
