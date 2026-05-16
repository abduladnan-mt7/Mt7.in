"use client";

import React from "react";
import Hero3D from "@/components/main/Hero3D";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export default function AlternativePage() {
  return (
    <main className="bg-[#050202] text-white selection:bg-[#d83b00] selection:text-white">
      <Navbar />
      <Hero3D />
      
      {/* Additional Premium Sections could go here */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h3 className="text-[#d83b00] text-xl font-bold mb-4">Vetted Agencies</h3>
            <p className="text-zinc-400">We only work with the top 3% of agencies in Marketing, HR, and Finance.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h3 className="text-[#d83b00] text-xl font-bold mb-4">Single Invoice</h3>
            <p className="text-zinc-400">Simplify your accounting. One payment for all your third-party vendors.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h3 className="text-[#d83b00] text-xl font-bold mb-4">Real-time Matching</h3>
            <p className="text-zinc-400">Our algorithm matches your specific needs with the perfect partner in seconds.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
