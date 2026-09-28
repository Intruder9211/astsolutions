"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  // If the user prefers reduced motion, we disable smooth scrolling
  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
