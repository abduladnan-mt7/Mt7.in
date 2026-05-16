"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/mainBackground/LoadingScreen";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let raf;

    Promise.all([
      document.fonts.ready, // wait for Geist + Montserrat
      new Promise((resolve) => {
        raf = requestAnimationFrame(() => {
          requestAnimationFrame(resolve); // wait for first paint
        });
      }),
    ]).then(() => {
      setLoading(false);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>
      {children}
    </>
  );
}
