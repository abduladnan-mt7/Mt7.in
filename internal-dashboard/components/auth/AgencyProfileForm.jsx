// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Montserrat } from "next/font/google";
// import { Building2, Users, Briefcase, IndianRupee, History, ChevronRight, Loader2, Globe } from "lucide-react";
// import { useRouter } from "next/navigation";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "900"],
// });

// export default function AgencyProfileForm() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     agencyName: "",
//     services: [], // Array for Endpoint #4
//     industries: [], // Array for Endpoint #4
//     pricingRange: "₹2L – ₹5L",
//     teamSize: 1,
//     experienceYears: 1,
//     description: "",
//   });

//   const serviceOptions = ["Marketing", "SEO", "Branding", "Development", "UI/UX"];
//   const industryOptions = ["SaaS", "FinTech", "E-commerce", "HealthTech", "Web3"];

//   const handleToggle = (list, item, field) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: list.includes(item)
//         ? list.filter((i) => i !== item)
//         : [...list, item],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // MOCK SUBMISSION
//     setTimeout(() => {
//       // Save Agency Profile to Local Storage
//       localStorage.setItem("agency_profile", JSON.stringify(formData));
//       setIsLoading(false);
      
//       // Route to Agency Dashboard (Endpoint #6/7 context)
//       router.push("/dashboard/agency");
//     }, 1500);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl antialiased my-10"
//     >
//       <div className="mb-10">
//         <h1 className={`${montserrat.className} text-3xl font-black text-white mb-2`}>
//           Agency Onboarding
//         </h1>
//         <p className="text-zinc-400 font-medium">Showcase your expertise to attract high-value clients.</p>
//       </div>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Agency Name */}
//         <div className="col-span-full space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Agency Name</label>
//           <div className="relative group">
//             <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="text" required placeholder="Growth Marketing Co"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50"
//               onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Team Size & Experience */}
//         <div className="space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Team Size</label>
//           <div className="relative">
//             <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
//             <input
//               type="number" min="1" required
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50"
//               onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) })}
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Years of Exp.</label>
//           <div className="relative">
//             <History className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
//             <input
//               type="number" min="0" required
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50"
//               onChange={(e) => setFormData({ ...formData, experienceYears: parseInt(e.target.value) })}
//             />
//           </div>
//         </div>

//         {/* Services Multi-Select */}
//         <div className="col-span-full space-y-3">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Services Offered</label>
//           <div className="flex flex-wrap gap-2">
//             {serviceOptions.map((s) => (
//               <button
//                 key={s} type="button"
//                 onClick={() => handleToggle(formData.services, s, "services")}
//                 className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all ${
//                   formData.services.includes(s) ? "bg-[#d83b00] border-[#d83b00] text-white" : "bg-black/20 border-white/5 text-zinc-500"
//                 }`}
//               >
//                 {s}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Industries Multi-Select */}
//         <div className="col-span-full space-y-3">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Specialized Industries</label>
//           <div className="flex flex-wrap gap-2">
//             {industryOptions.map((i) => (
//               <button
//                 key={i} type="button"
//                 onClick={() => handleToggle(formData.industries, i, "industries")}
//                 className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all ${
//                   formData.industries.includes(i) ? "bg-[#d83b00] border-[#d83b00] text-white" : "bg-black/20 border-white/5 text-zinc-500"
//                 }`}
//               >
//                 {i}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Description */}
//         <div className="col-span-full space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">About the Agency</label>
//           <textarea
//             required rows={3} placeholder="Describe your agency's unique value..."
//             className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 resize-none"
//             onChange={(e) => setFormData({...formData, description: e.target.value})}
//           />
//         </div>

//         {/* Submit */}
//         <div className="col-span-full pt-4">
//           <motion.button
//             whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
//             type="submit" disabled={isLoading}
//             className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/20"
//           >
//             {isLoading ? <Loader2 className="animate-spin" /> : <>Finish Setup <ChevronRight size={20} /></>}
//           </motion.button>
//         </div>
//       </form>
//     </motion.div>
//   );
// }

//removed external api for testing:

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Building2, Users, History, ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function AgencyProfileForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    agencyName: "",
    services: [], 
    industries: [], 
    pricingRange: "₹2L – ₹5L",
    teamSize: 1,
    experienceYears: 1,
    description: "",
  });

  const serviceOptions = ["Marketing", "SEO", "Branding", "Development", "UI/UX"];
  const industryOptions = ["SaaS", "FinTech", "E-commerce", "HealthTech", "Web3"];

  const handleToggle = (list, item, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: list.includes(item)
        ? list.filter((i) => i !== item)
        : [...list, item],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // MOCK SUBMISSION (No API endpoint)
    setTimeout(() => {
      // 1. Save Agency Profile to Local Storage for UI verification
      localStorage.setItem("agency_profile", JSON.stringify(formData));
      
      // 2. Mark profile as complete in the session
      const session = JSON.parse(localStorage.getItem("user_session") || "{}");
      localStorage.setItem("user_session", JSON.stringify({ ...session, profileComplete: true }));

      console.log("Mock Agency Profile Saved:", formData);
      setIsLoading(false);
      
      // 3. Route to the dashboard
      router.push("/dashboard/agency");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl antialiased my-10"
    >
      <div className="mb-10">
        <h1 className={`${montserrat.className} text-3xl font-black text-white mb-2`}>
          Agency Onboarding
        </h1>
        <p className="text-zinc-400 font-medium">Showcase your expertise to attract high-value clients.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Agency Name */}
        <div className="col-span-full space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Agency Name</label>
          <div className="relative group">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="text" required placeholder="Growth Marketing Co"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 transition-all"
              onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
            />
          </div>
        </div>

        {/* Team Size */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Team Size</label>
          <div className="relative group">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="number" min="1" required
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 transition-all"
              onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) || 0 })}
            />
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Years of Exp.</label>
          <div className="relative group">
            <History className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="number" min="0" required
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 transition-all"
              onChange={(e) => setFormData({ ...formData, experienceYears: parseInt(e.target.value) || 0 })}
            />
          </div>
        </div>

        {/* Services Multi-Select */}
        <div className="col-span-full space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Services Offered</label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((s) => (
              <button
                key={s} type="button"
                onClick={() => handleToggle(formData.services, s, "services")}
                className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all ${
                  formData.services.includes(s) 
                  ? "bg-[#d83b00] border-[#d83b00] text-white shadow-lg shadow-orange-900/20" 
                  : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Industries Multi-Select */}
        <div className="col-span-full space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Specialized Industries</label>
          <div className="flex flex-wrap gap-2">
            {industryOptions.map((i) => (
              <button
                key={i} type="button"
                onClick={() => handleToggle(formData.industries, i, "industries")}
                className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all ${
                  formData.industries.includes(i) 
                  ? "bg-[#d83b00] border-[#d83b00] text-white shadow-lg shadow-orange-900/20" 
                  : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="col-span-full space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">About the Agency</label>
          <textarea
            required rows={3} placeholder="Describe your agency's unique value..."
            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 resize-none transition-all"
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        {/* Submit */}
        <div className="col-span-full pt-4">
          <motion.button
            whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
            type="submit" disabled={isLoading}
            className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/20 disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Finish Setup <ChevronRight size={20} /></>}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}