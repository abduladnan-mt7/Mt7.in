// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Montserrat } from "next/font/google";
// import { Building2, Phone, IndianRupee, Rocket, ListChecks, Clock, ChevronRight, Loader2 } from "lucide-react";
// import { useRouter } from "next/navigation";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "900"],
// });

// export default function ClientProfileForm() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     company: "",
//     phone: "",
//     budget: "₹2L – ₹5L", // Default as per API Doc
//     plan: "Full Stack",
//     stage: "Seed",
//     services: [], // Array required by API
//     description: "",
//     urgency: "ASAP",
//   });

//   const availableServices = ["Marketing", "Development", "Design", "SEO", "Branding"];

//   const handleServiceToggle = (service) => {
//     setFormData((prev) => ({
//       ...prev,
//       services: prev.services.includes(service)
//         ? prev.services.filter((s) => s !== service)
//         : [...prev.services, service],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const token = localStorage.getItem("token"); // Get token from Login

//     try {
//       const response = await fetch("http://localhost:5000/api/client-profile", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`, // Required by API Auth
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         router.push("/dashboard/client"); // Redirect to matching dashboard
//       } else {
//         alert(data.message || "Failed to create profile");
//       }
//     } catch (error) {
//       console.error("Profile Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl antialiased my-10"
//     >
//       <div className="mb-10">
//         <h1 className={`${montserrat.className} text-3xl font-black text-white mb-2`}>
//           Complete Your Profile
//         </h1>
//         <p className="text-zinc-400 font-medium">Tell us about your business to find the best agency matches.</p>
//       </div>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Company Name */}
//         <div className="space-y-2 col-span-full md:col-span-1">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Company Name</label>
//           <div className="relative group">
//             <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="text" required placeholder="AI Startup"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50"
//               onChange={(e) => setFormData({ ...prev, company: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Phone */}
//         <div className="space-y-2 col-span-full md:col-span-1">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Phone Number</label>
//           <div className="relative group">
//             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="tel" required placeholder="9999999999"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50"
//               onChange={(e) => setFormData({ ...prev, phone: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Budget Selection */}
//         <div className="space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Budget Range</label>
//           <select 
//             className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 appearance-none"
//             value={formData.budget}
//             onChange={(e) => setFormData({...formData, budget: e.target.value})}
//           >
//             <option>₹50K – ₹2L</option>
//             <option>₹2L – ₹5L</option>
//             <option>₹5L – ₹10L</option>
//             <option>₹10L+</option>
//           </select>
//         </div>

//         {/* Startup Stage */}
//         <div className="space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Startup Stage</label>
//           <select 
//             className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50"
//             value={formData.stage}
//             onChange={(e) => setFormData({...formData, stage: e.target.value})}
//           >
//             <option>Ideation</option>
//             <option>Seed</option>
//             <option>Series A</option>
//             <option>Growth</option>
//           </select>
//         </div>

//         {/* Services Multi-Select */}
//         <div className="col-span-full space-y-3">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Required Services</label>
//           <div className="flex flex-wrap gap-2">
//             {availableServices.map((service) => (
//               <button
//                 key={service} type="button"
//                 onClick={() => handleServiceToggle(service)}
//                 className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all ${
//                   formData.services.includes(service)
//                     ? "bg-[#d83b00] border-[#d83b00] text-white shadow-lg shadow-orange-900/20"
//                     : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
//                 }`}
//               >
//                 {service}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Description */}
//         <div className="col-span-full space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Project Description</label>
//           <textarea
//             required rows={3} placeholder="Briefly describe your needs..."
//             className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 resize-none"
//             onChange={(e) => setFormData({...formData, description: e.target.value})}
//           />
//         </div>

//         {/* Submit */}
//         <div className="col-span-full pt-4">
//           <motion.button
//             whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
//             type="submit" disabled={isLoading}
//             className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all"
//           >
//             {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Create Profile <ChevronRight size={20} /></>}
//           </motion.button>
//         </div>
//       </form>
//     </motion.div>
//   );
// }

//removed external api for testing :

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Building2, Phone, ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function ClientProfileForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    phone: "",
    budget: "₹2L – ₹5L", 
    plan: "Full Stack",
    stage: "Seed",
    services: [], 
    description: "",
    urgency: "ASAP",
  });

  const availableServices = ["Marketing", "Development", "Design", "SEO", "Branding"];

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // MOCK SUBMISSION (No API endpoint)
    setTimeout(() => {
      try {
        // 1. Save Client Profile to Local Storage
        localStorage.setItem("client_profile", JSON.stringify(formData));
        
        // 2. Mark profile as complete in the session
        const session = JSON.parse(localStorage.getItem("user_session") || "{}");
        localStorage.setItem("user_session", JSON.stringify({ ...session, profileComplete: true }));

        console.log("Mock Client Profile Saved:", formData);
        setIsLoading(false);
        
        // 3. Route to the client dashboard (Match results)
        router.push("/dashboard/client");
      } catch (error) {
        console.error("Mock Save Error:", error);
        alert("Failed to save data locally.");
      }
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
          Complete Your Profile
        </h1>
        <p className="text-zinc-400 font-medium">Tell us about your business to find the best agency matches.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="space-y-2 col-span-full md:col-span-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Company Name</label>
          <div className="relative group">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="text" required placeholder="AI Startup"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 transition-all"
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2 col-span-full md:col-span-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="tel" required placeholder="9999999999"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 transition-all"
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
        </div>

        {/* Budget Selection */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Budget Range</label>
          <select 
            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 appearance-none transition-all cursor-pointer"
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
          >
            <option>₹50K – ₹2L</option>
            <option>₹2L – ₹5L</option>
            <option>₹5L – ₹10L</option>
            <option>₹10L+</option>
          </select>
        </div>

        {/* Startup Stage */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Startup Stage</label>
          <select 
            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 transition-all cursor-pointer"
            value={formData.stage}
            onChange={(e) => setFormData(prev => ({ ...prev, stage: e.target.value }))}
          >
            <option>Ideation</option>
            <option>Seed</option>
            <option>Series A</option>
            <option>Growth</option>
          </select>
        </div>

        {/* Services Multi-Select */}
        <div className="col-span-full space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Required Services</label>
          <div className="flex flex-wrap gap-2">
            {availableServices.map((service) => (
              <button
                key={service} type="button"
                onClick={() => handleServiceToggle(service)}
                className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all ${
                  formData.services.includes(service)
                    ? "bg-[#d83b00] border-[#d83b00] text-white shadow-lg shadow-orange-900/20"
                    : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="col-span-full space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#d83b00] ml-1">Project Description</label>
          <textarea
            required rows={3} placeholder="Briefly describe your needs..."
            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 px-4 text-white outline-none focus:ring-2 focus:ring-[#d83b00]/50 resize-none transition-all"
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>

        {/* Submit */}
        <div className="col-span-full pt-4">
          <motion.button
            whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
            type="submit" disabled={isLoading}
            className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-xl shadow-orange-900/20"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Create Profile <ChevronRight size={20} /></>}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}