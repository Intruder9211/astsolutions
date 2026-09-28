"use client";

import React, { useEffect, useRef, useState } from "react";

const ICONS = [
  { name: "Instagram", href: "#", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { name: "Facebook", href: "#", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { name: "Twitter", href: "#", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
  { name: "LinkedIn", href: "#", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { name: "WhatsApp", href: "#", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
  { name: "YouTube", href: "#", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg> }
];

export default function OrbitSocialIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angleOffset, setAngleOffset] = useState(0);
  const angleRef = useRef(0);
  const velocityRef = useRef(0.12);
  const BASE_SPEED = 0.12;
  const RADIUS = 150;
  
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    let rafId: number;

    const loop = () => {
      // Lerp velocity back to BASE_SPEED over time
      velocityRef.current += (BASE_SPEED - velocityRef.current) * 0.02;
      
      // Update global rotation angle
      angleRef.current = (angleRef.current + velocityRef.current) % 360;
      setAngleOffset(angleRef.current);
      
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    const handleWheel = (e: WheelEvent) => {
      // Adjust velocity based on scroll direction & speed
      let dv = e.deltaY * 0.015;
      // Clamp velocity surge
      dv = Math.max(-4, Math.min(dv, 4));
      velocityRef.current += dv;
    };

    // Attach to window so any scrolling anywhere spins the wheel interactively
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div 
      className="hidden md:block fixed top-1/2 right-[-170px] -translate-y-1/2 w-[340px] h-[340px] rounded-full z-50 pointer-events-none" 
      ref={containerRef}
    >
      {ICONS.map((icon, i) => {
        // Base angle spaced evenly across ~150 degrees, centered at 180 degrees (left-facing arc)
        // 180 - 75 = 105 to 180 + 75 = 255. Diff = 150. Space between 6 icons = 150 / 5 = 30.
        const baseAngle = 105 + (i * 30);
        const currentAngle = baseAngle + angleOffset;
        
        // Convert to radians
        const rad = (currentAngle * Math.PI) / 180;
        
        // Center of the 340px circle is (170, 170)
        const x = 170 + RADIUS * Math.cos(rad);
        const y = 170 + RADIUS * Math.sin(rad);

        return (
          <a
            key={icon.name}
            href={icon.href}
            title={icon.name}
            className="absolute flex items-center justify-center w-[54px] h-[54px] rounded-full bg-white text-ocean-500 shadow-xl hover:bg-coral-500 hover:text-white transition-colors duration-300 pointer-events-auto cursor-pointer"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)" // Center the button precisely on the trig coordinate
            }}
          >
            <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
              {icon.svg}
            </div>
          </a>
        );
      })}
    </div>
  );
}
