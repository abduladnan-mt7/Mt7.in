// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Montserrat } from "next/font/google";
// import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
// import Link from "next/link";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "900"],
//   display: "swap",
// });

// export default function LoginForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // API call to Endpoint #2 (Login)
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         // SUCCESS: API Docs say we get a "token"
//         localStorage.setItem("token", data.token);
//         console.log("Login successful! Token saved.");
//         // You would typically redirect to dashboard here
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Error connecting to server:", error);
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
//       <div className="mb-10 text-center">
//         <h1 className={`${montserrat.className} text-2xl md:text-3xl font-black text-white mb-2`}>
//           Welcome Back
//         </h1>
//         <p className="text-zinc-400 text-sm font-medium">
//           Access your MT7 Internal Dashboard
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-2">
//           <label className="text-xs font-black uppercase tracking-widest text-[#d83b00] ml-1">
//             Email Address
//           </label>
//           <div className="relative group">
//             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="email"
//               required
//               placeholder="john@test.com"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none transition-all"
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <div className="flex justify-between items-center px-1">
//             <label className="text-xs font-black uppercase tracking-widest text-[#d83b00]">
//               Password
//             </label>
//           </div>
//           <div className="relative group">
//             <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
//             <input
//               type="password"
//               required
//               placeholder="••••••••"
//               className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none transition-all"
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             />
//           </div>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-70"
//         >
//           {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Sign In <ArrowRight size={20} /></>}
//         </motion.button>
//       </form>

//       <div className="mt-8 text-center">
//         <p className="text-zinc-400 text-sm font-medium">
//           Don&apos;t have an account?{" "}
//           <Link href="/register" className="text-[#d83b00] font-black hover:underline underline-offset-4">
//             Create one now
//           </Link>
//         </p>
//       </div>
//     </motion.div>
//   );
// }


//external api removed for testing :

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // MOCK LOGIN FLOW (Local Storage Only)
    setTimeout(() => {
      // 1. Check if a user actually registered in this browser session
      const savedUser = JSON.parse(localStorage.getItem("user_session"));

      // 2. Generate mock token for auth-protected pages
      localStorage.setItem("token", "mock_token_mt7_testing");

      console.log("Mock Login Attempt with:", formData.email);

      // 3. Routing Logic: 
      // If we have a saved user, go to their specific setup. 
      // If not (e.g., cleared cache), default to client setup for testing.
      if (savedUser && savedUser.role === "agency") {
        router.push("/setup/agency");
      } else {
        router.push("/setup/client");
      }

      setIsLoading(false);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl antialiased"
    >
      <div className="mb-10 text-center">
        <h1 className={`${montserrat.className} text-2xl md:text-3xl font-black text-white mb-2`}>
          Welcome Back
        </h1>
        <p className="text-zinc-400 text-sm font-medium">
          Access your MT7 Internal Dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-[#d83b00] ml-1">
            Email Address
          </label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="email"
              required
              placeholder="john@test.com"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-xs font-black uppercase tracking-widest text-[#d83b00]">
              Password
            </label>
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#d83b00]" size={18} />
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#d83b00]/50 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-[#d83b00] hover:bg-[#b33100] text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Sign In <ArrowRight size={20} /></>}
        </motion.button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-zinc-400 text-sm font-medium">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#d83b00] font-black hover:underline underline-offset-4">
            Create one now
          </Link>
        </p>
      </div>
    </motion.div>
  );
}