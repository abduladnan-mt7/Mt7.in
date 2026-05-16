"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { ShieldCheck, Star, Zap, Search, LayoutGrid, Filter, Loader2 } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

// Mock Data: Sample Agencies representing Endpoint #5
const MOCK_AGENCIES = [
  { id: "1", name: "Alpha Digital", services: ["Marketing", "SEO"], score: 95, color: "#d83b00" },
  { id: "2", name: "Nexus Dev Studio", services: ["Development", "Design"], score: 88, color: "#0078d4" },
  { id: "3", name: "Branding Bloom", services: ["Branding", "Design"], score: 72, color: "#8b2600" },
  { id: "4", name: "Growth Lab", services: ["Marketing", "SEO", "Development"], score: 65, color: "#d83b00" },
];

export default function ClientDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState([]);
  const [clientName, setClientName] = useState("Client");

  useEffect(() => {
    // Simulate API Fetch Delay
    const timer = setTimeout(() => {
      const savedProfile = JSON.parse(localStorage.getItem("client_profile") || "{}");
      const session = JSON.parse(localStorage.getItem("user_session") || "{}");
      
      setClientName(session.name || "Client");

      // Mock Matching Logic: Rank agencies that have at least one matching service
      const clientServices = savedProfile.services || [];
      const rankedMatches = MOCK_AGENCIES.map(agency => {
        const common = agency.services.filter(s => clientServices.includes(s));
        // Boost score if services match
        const finalScore = common.length > 0 ? Math.min(agency.score + 5, 100) : agency.score - 20;
        return { ...agency, matchScore: finalScore };
      }).sort((a, b) => b.matchScore - a.matchScore);

      setMatches(rankedMatches);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <Loader2 className="animate-spin text-[#d83b00] mb-4" size={40} />
        <p className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Finding best matches...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className={`${montserrat.className} text-4xl font-black text-white mb-2 uppercase italic`}>
            Agency Matches
          </h1>
          <p className="text-zinc-400 font-medium">
            Based on your profile, {clientName}, we've ranked these partners for you.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <ShieldCheck className="text-[#d83b00]" />
            <span className="text-white font-bold text-sm tracking-tight">Verified Partners</span>
          </div>
        </div>
      </div>

      {/* Grid of Matches (Endpoint #5 Response structure) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((agency, index) => (
          <motion.div
            key={agency.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-[#d83b00]/50 rounded-[2rem] p-8 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="text-[#d83b00]" size={24} fill="#d83b00" />
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-1">Match Score</div>
                <div className="text-2xl font-black text-white">{agency.matchScore}%</div>
              </div>
            </div>

            <h3 className={`${montserrat.className} text-xl font-bold text-white mb-2`}>{agency.name}</h3>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {agency.services.map(s => (
                <span key={s} className="text-[10px] font-bold py-1 px-3 bg-black/40 border border-white/10 rounded-full text-zinc-400">
                  {s}
                </span>
              ))}
            </div>

            <button className="w-full py-4 bg-white/5 hover:bg-[#d83b00] text-white font-black rounded-2xl transition-all border border-white/5 hover:border-[#d83b00]">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}