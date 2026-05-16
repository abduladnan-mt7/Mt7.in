// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Montserrat } from "next/font/google";
// import { Mail, Lock, User, ArrowRight, Loader2, Briefcase, UserCircle } from "lucide-react";
// import Link from "next/link";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "900"],
//   display: "swap",
// });

// export default function RegisterForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "client", // Required: 'client' or 'agency'
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         console.log("Success:", data.message);
//         // Alert for feedback, then you can redirect to /login
//         alert("Registration Successful! Please Login.");
//       } else {
//         alert(data.message || "Registration failed");
//       }
//     } catch (error) {
//       console.error("Connection Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl antialiased"
//     >
//       <div className="mb-6 text-center">
//         <h1 className={`${montserrat.className} text-2xl md:text-3xl font-black text-white mb-2`}>
//           Create Account
//         </h1>
//         <p className="text-zinc-400 text-sm font-medium">Join the MT7 Internal Network</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Role Selection Toggle */}
//         <div className="space-y-2">
//           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">
//             I am a...
//           </label>
//           <div className="flex gap-3">
//             <button
//               type="button"
//               onClick={() => setFormData({ ...formData, role: "client" })}
//               className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border transition-all ${
//                 formData.role === "client" 
//                 ? "bg-[#d83b00] border-[#d83b00] text-white font-bold shadow-lg shadow-orange-900/20" 
//                 : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
//               }`}
//             >
//               <UserCircle size={18} /> Client
//             </button>
//             <button
//               type="button"
//               onClick={() => setFormData({ ...formData, role: "agency" })}
//               className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border transition-all ${
//                 formData.role === "agency" 
//                 ? "bg-[#d83b00] border-[#d83b00] text-white font-bold shadow-lg shadow-orange-900/20" 
//                 : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
//               }`}
//             >
//               <Briefcase size={18} /> Agency
//             </button>
//           </div>
//         </div>

//         {/* Name */}
//         <div className="space-y-1">
//           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">Full Name</label>
//           <div className="relative group">
//             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="text"
//               required
//               placeholder="John Doe"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none"
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="space-y-1">
//           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">Email</label>
//           <div className="relative group">
//             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="email"
//               required
//               placeholder="john@test.com"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none"
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="space-y-1">
//           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">Password</label>
//           <div className="relative group">
//             <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="password"
//               required
//               placeholder="••••••••"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none"
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             />
//           </div>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-70 mt-4"
//         >
//           {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Register <ArrowRight size={20} /></>}
//         </motion.button>
//       </form>

//       <div className="mt-6 text-center">
//         <p className="text-zinc-400 text-sm">
//           Already have an account? <Link href="/" className="text-[#d83b00] font-black hover:underline">Log in</Link>
//         </p>
//       </div>
//     </motion.div>
//   );
// }


//external endpoints removed fro testing 

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Mail, Lock, User, ArrowRight, Loader2, Briefcase, UserCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "client", // Required: 'client' or 'agency'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // MOCK REGISTRATION FLOW (Local Storage Only)
    setTimeout(() => {
      try {
        // 1. Save user data to localStorage so other pages can access it
        localStorage.setItem("user_session", JSON.stringify(formData));
        
        // 2. Mock a JWT token
        localStorage.setItem("token", "mock_token_mt7_testing");

        console.log("Mock Registration Success:", formData);
        
        // 3. Conditional Routing based on role
        if (formData.role === "client") {
          router.push("/setup/client");
        } else {
          router.push("/setup/agency");
        }
      } catch (error) {
        console.error("Mock Registration Error:", error);
        alert("Something went wrong with local storage.");
      } finally {
        setIsLoading(false);
      }
    }, 1500); // 1.5 second delay to show the loader
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl antialiased"
    >
      <div className="mb-6 text-center">
        <h1 className={`${montserrat.className} text-2xl md:text-3xl font-black text-white mb-2`}>
          Create Account
        </h1>
        <p className="text-zinc-400 text-sm font-medium">Join the MT7 Internal Network</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Role Selection Toggle */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">
            I am a...
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "client" })}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border transition-all ${
                formData.role === "client" 
                ? "bg-[#d83b00] border-[#d83b00] text-white font-bold shadow-lg shadow-orange-900/20" 
                : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
              }`}
            >
              <UserCircle size={18} /> Client
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "agency" })}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border transition-all ${
                formData.role === "agency" 
                ? "bg-[#d83b00] border-[#d83b00] text-white font-bold shadow-lg shadow-orange-900/20" 
                : "bg-black/20 border-white/5 text-zinc-500 hover:border-white/20"
              }`}
            >
              <Briefcase size={18} /> Agency
            </button>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">Email</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="email"
              required
              placeholder="john@test.com"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d83b00] ml-1">Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-70 mt-4"
        >
          {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Register <ArrowRight size={20} /></>}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-zinc-400 text-sm">
          Already have an account? <Link href="/" className="text-[#d83b00] font-black hover:underline">Log in</Link>
        </p>
      </div>
    </motion.div>
  );
}