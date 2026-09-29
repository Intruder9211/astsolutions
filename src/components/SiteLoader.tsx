"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Car, Bus, Truck, Compass, Plane } from "lucide-react";

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [iconIndex, setIconIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const loadingIcons = [Car, Bus, Truck, Plane, Compass];

  useEffect(() => {
    // Simulate loading progress
    let start = 0;
    const duration = 2500; // 2.5 seconds
    const interval = 20; // 20ms updates
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, interval);

    const iconTimer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % 5); // cycles 0 through 4
    }, 150);

    return () => {
      clearInterval(timer);
      clearInterval(iconTimer);
    };
  }, []);

  return (
    <>
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#7b61ff] origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[10000] bg-[#0d0d0d] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Handwritten AST Animation */}
            <div className="relative w-48 h-32 mb-8">
              <svg
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-white"
              >
                {/* A */}
                <motion.path
                  d="M40 80 Q50 15 60 20 Q70 15 80 80 M52 55 L68 55"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {/* S */}
                <motion.path
                  d="M120 25 C100 10 80 40 105 50 C130 60 120 90 95 85"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                />
                {/* T */}
                <motion.path
                  d="M130 20 Q155 10 180 20 M155 15 L155 80 Q155 85 165 80"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
                />
              </svg>
            </div>

            {/* Cycling Icons */}
            <div className="text-ocean-500 h-16 flex items-center justify-center">
              {(() => {
                const CurrentIcon = loadingIcons[iconIndex];
                return <CurrentIcon size={48} strokeWidth={1.5} />;
              })()}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-white/50 text-sm tracking-[0.3em] uppercase"
            >
              Preparing your journey
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
