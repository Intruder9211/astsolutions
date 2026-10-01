"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Users, Plane, Briefcase, Heart, CreditCard, Headphones, Car } from "lucide-react";
import WhatWeOfferScroll from "@/components/WhatWeOfferScroll";
import BestCabServices from "@/components/BestCabServices";
import GallerySection from "@/components/GallerySection";
import RoutesSection from "@/components/RoutesSection";
import BlogsSection from "@/components/BlogsSection";
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
  const [titleIndex, setTitleIndex] = useState(0);

  const heroTitles = [
    { line1: "Explore More.", line2: "Live More." },
    { line1: "Your Journey", line2: "Starts Here" },
    { line1: "Discover the World,", line2: "Your Way" },
    { line1: "Travel Beyond", line2: "the Ordinary" },
    { line1: "Go Far.", line2: "Dream Bigger." },
    { line1: "Where Every Journey", line2: "Becomes a Story" },
    { line1: "Pack Your Bags.", line2: "Adventure Awaits." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroTitles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  
  

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
    <main className="relative min-h-screen bg-sand-100 overflow-hidden" >
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.65)_0%,_rgba(0,0,0,1)_100%)] z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/14726179_2160_3840_30fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center mt-20">
          <div
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
          >
            Redefining Travel Across Pan-India
          </div>
          
          <div className="h-[100px] md:h-[160px] lg:h-[200px] flex items-center justify-center mb-8 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-[7.5vw] sm:text-[6vw] md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.2] tracking-tight w-full uppercase px-2"
              >
                <span className="block whitespace-nowrap">{heroTitles[titleIndex].line1}</span>
                <span className="block whitespace-nowrap">{heroTitles[titleIndex].line2}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-body"
          >
            From luxury city transfers to scenic outstation tours, experience unparalleled comfort and safety with our premium fleet and verified professional chauffeurs.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="tel:+919717806764" className="bg-white text-navy-900 hover:bg-sand-100 font-medium px-8 py-4 rounded-full transition-colors duration-300">
              Call +91 9717806764
            </a>
            <Link href="/cars" className="bg-ocean-500 hover:bg-ocean-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
              Explore Cars
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
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
              <div 
                key={i}
                className="text-center cursor-pointer"
              >
                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-2 drop-shadow-lg">{stat.value}</div>
                  <div className="text-sm font-medium text-navy-700/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-32 px-4 max-w-5xl mx-auto text-center overflow-hidden">
        <div
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-8 leading-tight">
            A Legacy of <span className="text-ocean-500">Safety & Trust.</span>
          </h2>
          <p className="text-lg md:text-xl text-navy-900/70 leading-relaxed font-body">
            Founded with a vision to redefine ground mobility, AST Solutions operates a meticulously maintained fleet of premium vehicles across Delhi NCR, Ghaziabad, Noida, and Gurgaon. Whether you require a swift city transfer in a prime sedan or a cross-country tour in an Ultra-Luxury Urbania, our highly trained chauffeurs ensure every mile is perfectly orchestrated.
          </p>
        </div>


      </section>

      {/* What We Offer GSAP Scroll */}
      <WhatWeOfferScroll />

      {/* Best Cab Services Animated Grid */}
      <BestCabServices />

      {/* Cross-style Gallery Section */}
      <GallerySection />

      {/* Blogs Section */}
      <BlogsSection />

      {/* How to Book */}
      <section className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">Seamless Booking in 3 Steps</h2>
        </div>
        
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
            <div
              key={i}
              className="relative z-10 text-center bg-transparent"
            >
              <div
                className="w-20 h-20 mx-auto bg-navy-900 text-white rounded-full flex items-center justify-center text-2xl font-bold font-display mb-6 shadow-xl cursor-pointer"
              >
                {item.step}
              </div>
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">{item.title}</h3>
              <p className="text-navy-900/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Routes & Services List with Popup */}
      <RoutesSection />

    </main>
  );
}


