"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
          >
            {/* Taiji Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mb-8"
            >
              <svg width="80" height="80" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2"
                />
                <path
                  d="M50 2 A48 48 0 0 1 50 50 A48 48 0 0 0 50 98 A48 48 0 0 1 50 2Z"
                  fill="#C9A84C"
                />
                <circle cx="50" cy="26" r="8" fill="#1A1A1A" />
                <circle cx="50" cy="74" r="8" fill="#C9A84C" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gold font-serif text-2xl md:text-3xl tracking-widest"
            >
              Mystic Orient
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-parchment-dark text-xs tracking-[0.3em] uppercase mt-3"
            >
              Ancient Wisdom &middot; Modern Life
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
