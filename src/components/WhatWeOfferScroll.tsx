"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Map, Users, Plane, Briefcase, Heart, CreditCard, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  { icon: <Map className="text-[#3b82f6]" size={24} />, bg: "bg-[#3b82f6]/10", title: "Local & Outstation Cab Service", desc: "City rides, intercity trips and point-to-point transfers with verified drivers." },
  { icon: <Users className="text-[#22c55e]" size={24} />, bg: "bg-[#22c55e]/10", title: "Tempo Traveller & Urbania", desc: "Comfortable vehicles for family tours, pilgrimages, corporate trips and group travel." },
  { icon: <Plane className="text-[#ef4444]" size={24} />, bg: "bg-[#ef4444]/10", title: "Airport & Railway Transfers", desc: "On-time airport and railway station pickup & drop services with professional drivers." },
  { icon: <Briefcase className="text-[#eab308]" size={24} />, bg: "bg-[#eab308]/10", title: "Corporate Travel", desc: "Dedicated business travel solutions with monthly billing and customized plans." },
  { icon: <Heart className="text-[#ec4899]" size={24} />, bg: "bg-[#ec4899]/10", title: "Wedding & Event Cars", desc: "Premium luxury cars and fleets for weddings, receptions and special occasions." },
  { icon: <CreditCard className="text-[#0ea5e9]" size={24} />, bg: "bg-[#0ea5e9]/10", title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges and the best value for every ride." },
  { icon: <Headphones className="text-[#6366f1]" size={24} />, bg: "bg-[#6366f1]/10", title: "24x7 Booking & Support", desc: "Call, WhatsApp or book online anytime with round-the-clock customer support." }
];

export default function WhatWeOfferScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const strip = stripRef.current;
    if (!sec || !strip) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      // Calculate distance to scroll based on track width vs viewport width
      const dist = () => Math.max(0, strip.scrollWidth - window.innerWidth + 100); 
      
      gsap.to(strip, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => "+=" + Math.round(Math.max(3000, dist() * 1.4)),
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#050505] text-white overflow-hidden flex flex-col justify-center min-h-screen py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7b61ff]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 mb-16 relative z-10 flex justify-between items-end gap-5 flex-wrap">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">What We Offer</h2>
          <p className="text-white/60 font-body">Reliable transport solutions for every requirement</p>
        </div>
      </div>
      
      <div className="w-full md:overflow-visible overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide relative z-10 pl-4 md:pl-12">
        <div ref={stripRef} className="flex gap-6 w-max will-change-transform pr-4 md:pr-12">
          {servicesList.map((item, idx) => (
            <div key={idx} className="w-[85vw] md:w-[45vw] lg:w-[400px] shrink-0 snap-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group flex flex-col justify-start">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-3">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 md:px-12 mt-8 md:mt-16">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))} className="bg-[#7b61ff] hover:bg-[#694deb] text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(123,97,255,0.4)]">
            Book a Cab
          </button>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))} className="bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 w-full sm:w-auto backdrop-blur-md">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
