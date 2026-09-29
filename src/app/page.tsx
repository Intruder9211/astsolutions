"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Map, Users, Plane, Briefcase, Heart, CreditCard, Headphones, Car } from "lucide-react";
import WhatWeOfferScroll from "@/components/WhatWeOfferScroll";
import BestCabServices from "@/components/BestCabServices";
import GallerySection from "@/components/GallerySection";
import RoutesSection from "@/components/RoutesSection";

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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.95)_100%)] z-10" />
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
            Experience India in <br />
            <span className="text-[#7b61ff] italic">Unmatched Comfort.</span>
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
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-sand-200 relative overflow-hidden">
          
          {/* Outlined Travel Landscape Background */}
          <div className="absolute inset-0 z-0 opacity-[0.12] text-navy-900 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-full object-cover min-w-[1200px]" viewBox="0 0 1200 200" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              
              {/* Sky Elements */}
              <path d="M120 50 Q135 25 160 25 T200 50 Q220 65 200 80 H120 Q100 65 120 50 Z" />
              <path d="M820 60 Q830 40 850 40 T880 60 Q900 70 880 85 H820 Q800 70 820 60 Z" />
              <circle cx="550" cy="40" r="25" />
              
              {/* Birds */}
              <path d="M 650 30 Q 660 15 670 30 Q 680 15 690 30" />
              <path d="M 680 50 Q 690 35 700 50 Q 710 35 720 50" />
              
              {/* Ground */}
              <path d="M0 160 H1200" />
              
              {/* Mountains (Taller to cover more bg) */}
              <path d="M-50 160 L100 50 L220 130 L350 20 L520 160" />
              <path d="M80 75 L150 35 L250 110" strokeDasharray="4 4" />
              
              {/* Trees */}
              <path d="M140 160 v-15 M135 145 c0-8 10-8 10 0" />
              <path d="M170 160 v-25 M160 135 c0-12 20-12 20 0" />
              <path d="M190 160 v-15 M185 145 c0-8 10-8 10 0" />
              <path d="M530 160 v-35 M515 125 c0-15 30-15 30 0" />
              <path d="M1070 160 v-25 M1060 135 c0-12 20-12 20 0" />

              {/* City Skyline */}
              <path d="M580 160 v-80 h30 v-20 h20 v20 h30 v80" />
              <path d="M680 160 v-110 h40 v-15 h10 v15 h40 v110" />
              <path d="M690 140 h20 M690 120 h20 M690 100 h20 M690 80 h20 M740 140 h20 M740 120 h20 M740 100 h20 M740 80 h20" />
              
              {/* India Gate-like Structure */}
              <path d="M850 160 v-80 h80 v80 M870 160 v-50 a20 20 0 0 1 40 0 v50" />
              <path d="M860 80 h60 v15 h-60 z" />

              {/* Taj Mahal-like Dome */}
              <path d="M1120 160 v-50 h60 v50 M1130 110 c0-50 40-50 40 0 M1150 60 v-20" />

              {/* Tempo Traveller / Bus */}
              <path d="M380 160 v-35 a5 5 0 0 1 5-5 h70 a10 10 0 0 1 10 10 v30 h-85" />
              <path d="M390 125 h15 v15 h-15 z M410 125 h15 v15 h-15 z M430 125 h20 v15 h-20 z" />
              <circle cx="400" cy="160" r="6" fill="white" />
              <circle cx="450" cy="160" r="6" fill="white" />
              
              {/* Car */}
              <path d="M260 160 v-10 l10 -15 h30 l15 15 v10 h-55" />
              <path d="M275 135 h20 v15 h-25 l5 -15" />
              <circle cx="275" cy="160" r="5" fill="white" />
              <circle cx="305" cy="160" r="5" fill="white" />
            </svg>
          </div>

          {/* Stats Content */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.3, rotateY: -180, z: -100 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                whileHover={{ scale: 1.4, rotateX: 20, rotateY: 25, z: 100, textShadow: "0px 15px 30px rgba(0,0,0,0.4)" }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.15, type: "spring", bounce: 0.6 }}
                className="text-center cursor-pointer"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-2 drop-shadow-lg">{stat.value}</div>
                  <div className="text-sm font-medium text-navy-700/60 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-32 px-4 max-w-5xl mx-auto text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 150, rotateX: 45, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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

      {/* Best Cab Services Animated Grid */}
      <BestCabServices />

      {/* Cross-style Gallery Section */}
      <GallerySection />

      {/* Offerings Grid */}
      <section className="py-32 bg-[#050505] text-white px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -200, rotateY: 45, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-20"
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6">Built for every journey.</h2>
            <p className="text-[#94a3b8] text-xl max-w-2xl">Reliable, world-class transport solutions designed perfectly around your itinerary.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 150, rotateX: 60, scale: 0.6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                whileHover={{ scale: 1.15, rotateY: i % 2 === 0 ? 15 : -15, rotateX: 10, z: 120, boxShadow: "0 40px 60px rgba(0,0,0,0.8)" }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.15, type: "spring", bounce: 0.6 }}
                className="group relative bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col h-[420px] shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4 + (i * 0.5), repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.2, rotateZ: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">Seamless Booking in 3 Steps</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line with Animated Car */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] z-0">
            <div className="w-full border-t-2 border-dashed border-sand-300/60 relative">
              <motion.div
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3.5 -translate-x-1/2 text-ocean-500"
              >
                <Car size={24} strokeWidth={2} />
              </motion.div>
            </div>
          </div>
          
          {[
            { step: "01", title: "Request a Quote", desc: "Reach out via our platform, call, or WhatsApp to share your itinerary." },
            { step: "02", title: "Select Your Ride", desc: "Choose from our premium fleet of 500+ verified vehicles at transparent prices." },
            { step: "03", title: "Confirm & Travel", desc: "Receive instant confirmation and enjoy a safe, memorable journey with us." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -150 : i === 2 ? 150 : 0, y: i === 1 ? 150 : 0, rotateY: 90, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1 }}
              whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 5 : -5, z: 50, filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.2, delay: i * 0.2, type: "spring", bounce: 0.6 }}
              className="relative z-10 text-center bg-transparent"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }} 
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                className="w-20 h-20 mx-auto bg-navy-900 text-white rounded-full flex items-center justify-center text-2xl font-bold font-display mb-6 shadow-xl cursor-pointer"
              >
                {item.step}
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">{item.title}</h3>
              <p className="text-navy-900/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Routes & Services List with Popup */}
      <RoutesSection />

    </main>
  );
}
