"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Briefcase, 
  IndianRupee, 
  Clock, 
  ChevronRight, 
  Loader2,
  Search,
  LayoutGrid
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

// Mock Data: Sample Clients representing Endpoint #6
const MOCK_CLIENTS = [
  {
    id: "c1",
    name: "Aman Gupta",
    company: "Finflow AI",
    budget: "₹5L – ₹10L",
    services: ["Development", "SaaS"],
    stage: "Series A",
    description: "Building a scalable fintech backend and need specialized AI integration.",
    urgency: "ASAP"
  },
  {
    id: "c2",
    name: "Sarah Jenkins",
    company: "EcoStore",
    budget: "₹2L – ₹5L",
    services: ["Marketing", "SEO"],
    stage: "Seed",
    description: "Sustainable e-commerce brand looking to scale organic traffic via SEO.",
    urgency: "1 Month"
  },
  {
    id: "c3",
    name: "Vikram Rathore",
    company: "HealthTrack",
    budget: "₹10L+",
    services: ["Full Stack", "Design"],
    stage: "Growth",
    description: "Complete UI/UX overhaul and mobile app development for health monitoring.",
    urgency: "3 Months"
  }
];

export default function AgencyDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [agencyName, setAgencyName] = useState("Agency");

  useEffect(() => {
    // Simulate API Fetch Delay for Endpoint #6
    const timer = setTimeout(() => {
      const session = JSON.parse(localStorage.getItem("user_session") || "{}");
      const agencyProfile = JSON.parse(localStorage.getItem("agency_profile") || "{}");
      
      setAgencyName(agencyProfile.agencyName || session.name || "Agency");
      setClients(MOCK_CLIENTS);
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <Loader2 className="animate-spin text-[#d83b00] mb-4" size={40} />
        <p className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Loading client leads...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-[2rem]">
          <div className="flex items-center gap-4 mb-2 text-zinc-400">
            <Users size={20} /> <span className="text-xs font-black uppercase tracking-widest">Active Leads</span>
          </div>
          <div className="text-3xl font-black text-white">24</div>
        </div>
        <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-[2rem]">
          <div className="flex items-center gap-4 mb-2 text-zinc-400">
            <Target size={20} /> <span className="text-xs font-black uppercase tracking-widest">Matches</span>
          </div>
          <div className="text-3xl font-black text-[#d83b00]">12</div>
        </div>
        <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-[2rem]">
          <div className="flex items-center gap-4 mb-2 text-zinc-400">
            <TrendingUp size={20} /> <span className="text-xs font-black uppercase tracking-widest">Conversion</span>
          </div>
          <div className="text-3xl font-black text-white">18%</div>
        </div>
      </div>

      {/* Main Title */}
      <div className="mb-10">
        <h1 className={`${montserrat.className} text-4xl font-black text-white mb-2 uppercase italic`}>
          Client Pipeline
        </h1>
        <p className="text-zinc-400 font-medium tracking-tight">
          Welcome, <span className="text-white font-bold">{agencyName}</span>. Browse and connect with businesses looking for your expertise.
        </p>
      </div>

      {/* Client List (Endpoint #6 Logic) */}
      <div className="space-y-4">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-zinc-900/30 backdrop-blur-md border border-white/5 hover:border-[#d83b00]/30 rounded-[2.5rem] p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all"
          >
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-[#d83b00]/10 border border-[#d83b00]/20 rounded-full text-[10px] font-black text-[#d83b00] uppercase tracking-widest">
                  {client.stage}
                </div>
                <div className="flex items-center gap-1 text-zinc-500 text-xs font-bold">
                  <Clock size={14} /> {client.urgency}
                </div>
              </div>
              
              <div>
                <h3 className={`${montserrat.className} text-2xl font-bold text-white group-hover:text-[#d83b00] transition-colors`}>
                  {client.company}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-1 mt-1 font-medium">{client.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {client.services.map(s => (
                  <span key={s} className="text-[10px] font-black py-1 px-3 bg-white/5 border border-white/5 rounded-lg text-zinc-300 uppercase italic">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8 w-full lg:w-auto border-t lg:border-t-0 border-white/5 pt-6 lg:pt-0">
              <div className="text-right">
                <div className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-1">Budget Range</div>
                <div className="text-xl font-black text-white">{client.budget}</div>
              </div>
              
              <button className="flex-1 lg:flex-none p-5 bg-[#d83b00] text-white rounded-2xl hover:bg-[#b33100] transition-all shadow-lg shadow-orange-900/20">
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}