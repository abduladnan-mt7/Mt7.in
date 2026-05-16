"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function GetQuotesButton() {
  const router = useRouter();

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3"
      animate={{
        y: [0, -12, 0, 10, 0],
        x: [0, 6, -6, 4, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* BUTTON */}
      <motion.button
        onClick={() => router.push("/lead")}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Get Quotes"
        className="
          relative w-14 h-14 rounded-full
          flex items-center justify-center
          bg-gradient-to-br from-black via-zinc-950 to-black
          border border-red-500/20
          shadow-[0_0_30px_rgba(255,69,0,0.25)]
          overflow-hidden
        "
      >
        {/* INNER GLOW */}
        <div
          className="absolute inset-0 rounded-full
                     bg-[radial-gradient(circle_at_30%_30%,rgba(255,69,0,0.25),transparent_60%)]"
        />

        {/* LOGO */}
        <div className="relative flex items-baseline gap-0.5 font-semibold leading-none">
          <span className="text-white text-base">MT7</span>
          <span className="text-red-500 text-sm">.in</span>
        </div>
      </motion.button>

      {/* MESSAGE PILL */}
      <div
        className="hidden md:block bg-black/80 text-white text-sm px-4 py-2 rounded-full
                   border border-white/10 backdrop-blur-lg
                   shadow-[0_0_20px_rgba(255,69,0,0.25)]"
      >
        Get Quotes
      </div>
    </motion.div>
  );
}
