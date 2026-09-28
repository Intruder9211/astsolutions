"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Map, Users, Plane, Briefcase, Heart, CreditCard, Headphones } from "lucide-react";
import WhatWeOfferScroll from "@/components/WhatWeOfferScroll";

const servicesList = [
  { icon: <Map className="text-[#3b82f6]" size={24} />, bg: "bg-[#3b82f6]/10", title: "Local & Outstation Cab Service", desc: "City rides, intercity trips and point-to-point transfers with verified drivers." },
  { icon: <Users className="text-[#22c55e]" size={24} />, bg: "bg-[#22c55e]/10", title: "Tempo Traveller & Urbania", desc: "Comfortable vehicles for family tours, pilgrimages, corporate trips and group travel." },
  { icon: <Plane className="text-[#ef4444]" size={24} />, bg: "bg-[#ef4444]/10", title: "Airport & Railway Transfers", desc: "On-time airport and railway station pickup & drop services with professional drivers." },
  { icon: <Briefcase className="text-[#eab308]" size={24} />, bg: "bg-[#eab308]/10", title: "Corporate Travel", desc: "Dedicated business travel solutions with monthly billing and customized plans." },
  { icon: <Heart className="text-[#ec4899]" size={24} />, bg: "bg-[#ec4899]/10", title: "Wedding & Event Cars", desc: "Premium luxury cars and fleets for weddings, receptions and special occasions." },
  { icon: <CreditCard className="text-[#0ea5e9]" size={24} />, bg: "bg-[#0ea5e9]/10", title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges and the best value for every ride." },
  { icon: <Headphones className="text-[#6366f1]" size={24} />, bg: "bg-[#6366f1]/10", title: "24x7 Booking & Support", desc: "Call, WhatsApp or book online anytime with round-the-clock customer support." }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { value: "500+", label: "Premium Vehicles" },
    { value: "26+", label: "Years of Excellence" },
    { value: "92%", label: "Under 15m Pickups" },
    { value: "100%", label: "GPS Secured Rides" },
  ];

  const offerings = [
    { title: "City & Outstation Transfers", desc: "Seamless point-to-point travel across Pan-India with verified, professional chauffeurs.", image: "/images/city_transfer.jpg" },
    { title: "Premium Group Transit", desc: "Spacious Tempo Travellers and ultra-luxury Urbania coaches for group tours and pilgrimages.", image: "/images/premium_group.jpg" },
    { title: "Corporate Travel", desc: "Dedicated executive mobility solutions with transparent monthly billing and custom plans.", image: "/images/corporate_travel.jpg" },
    { title: "Airport Concierge", desc: "Punctual, stress-free airport and railway station pickups with flight tracking.", image: "/images/airport_concierge.jpg" },
    { title: "Wedding Fleets", desc: "Make a statement with our premium luxury sedans and SUVs for your special day.", image: "/images/wedding_fleet.jpg" },
    { title: "Transparent Pricing", desc: "Zero hidden charges. Get the absolute best value for every kilometer you travel.", image: "/images/transparent_pricing.jpg" },
  ];

  return (
    <main className="relative min-h-screen bg-sand-100 overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.8)_100%)] z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/14726179_2160_3840_30fps.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
          >
            Redefining Travel Across Pan-India
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Your Journey, <br />
            <span className="text-[#7b61ff] italic">Redefined.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-body"
          >
            From luxury city transfers to scenic outstation tours, experience unparalleled comfort and safety with our premium fleet and verified professional chauffeurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="tel:+919717806764" className="bg-white text-navy-900 hover:bg-sand-100 font-medium px-8 py-4 rounded-full transition-colors duration-300">
              Call +91 9717806764
            </a>
            <Link href="/fleet" className="bg-ocean-500 hover:bg-ocean-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
              Explore Fleet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-sand-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-navy-700/60 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-32 px-4 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-8 leading-tight">
            A Legacy of <span className="text-ocean-500">Safety & Trust.</span>
          </h2>
          <p className="text-lg md:text-xl text-navy-900/70 leading-relaxed font-body">
            Founded with a vision to redefine ground mobility, AST Solutions operates a meticulously maintained fleet of premium vehicles across Delhi NCR, Ghaziabad, Noida, and Gurgaon. Whether you require a swift city transfer in a prime sedan or a cross-country tour in an Ultra-Luxury Urbania, our highly trained chauffeurs ensure every mile is perfectly orchestrated.
          </p>
        </motion.div>
      </section>

      {/* What We Offer GSAP Scroll */}
      <WhatWeOfferScroll />

      {/* Offerings Grid */}
      <section className="py-32 bg-[#050505] text-white px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6">Built for every journey.</h2>
            <p className="text-[#94a3b8] text-xl max-w-2xl">Reliable, world-class transport solutions designed perfectly around your itinerary.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col h-[420px]"
              >
                {/* Spotlight Gradient - only on first card to mimic screenshot, or subtle on all */}
                {i === 0 && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 z-0 pointer-events-none" />
                )}
                
                {/* Top Visual Area (Image) */}
                <div className="relative flex-1 w-full h-full border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-[#0d0d0d]/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Bottom Text Area */}
                <div className="p-8 z-10 bg-[#0d0d0d] absolute bottom-0 w-full">
                  <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                    <h3 className="text-xl font-display font-medium tracking-tight text-white">{item.title}</h3>
                  </div>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="overflow-hidden">
                      <p className="text-[#94a3b8] text-sm leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">Seamless Booking in 3 Steps</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-sand-200 z-0"></div>
          
          {[
            { step: "01", title: "Request a Quote", desc: "Reach out via our platform, call, or WhatsApp to share your itinerary." },
            { step: "02", title: "Select Your Ride", desc: "Choose from our premium fleet of 500+ verified vehicles at transparent prices." },
            { step: "03", title: "Confirm & Travel", desc: "Receive instant confirmation and enjoy a safe, memorable journey with us." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative z-10 text-center bg-sand-100"
            >
              <div className="w-20 h-20 mx-auto bg-navy-900 text-white rounded-full flex items-center justify-center text-2xl font-bold font-display mb-6 shadow-xl">
                {item.step}
              </div>
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">{item.title}</h3>
              <p className="text-navy-900/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
