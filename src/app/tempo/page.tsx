"use client";

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import RoutesSection from '@/components/RoutesSection';
import Link from 'next/link';

const tempos = [
  {
    id: "001",
    category: "9 PASSENGERS + 1 DRIVER",
    title: "9 SEATER MAHARAJA",
    price: "₹24 / KM",
    description: "Ultra-luxury 1x1 Maharaja captain seats with massive legroom, ideal for VIP delegates or intimate family vacations. Driver Allowance: ₹600 / Day",
    features: ["Pushback Reclining Seats", "Dual AC", "Charging Points"],
    image: "/images/1.png",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20want%20to%20book%20the%209+Seater+Maharaja+Luxury"
  },
  {
    id: "002",
    category: "12 PASSENGERS + 1 DRIVER",
    title: "12 SEATER TEMPO",
    price: "₹26 / KM",
    description: "The most popular choice for weekend trips, family pilgrimages, and hill station tours like Shimla & Manali. Driver Allowance: ₹600 / Day",
    features: ["Pushback Reclining Seats", "Dual AC", "Charging Points"],
    image: "/images/2.png",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20want%20to%20book%20the%2012+Seater+Tempo+Traveller"
  },
  {
    id: "003",
    category: "16 PASSENGERS + 1 DRIVER",
    title: "16 SEATER AC TEMPO",
    price: "₹28 / KM",
    description: "Spacious 2x1 seating layout with top roof carrier for excess luggage and dual high-capacity AC cooling. Driver Allowance: ₹700 / Day",
    features: ["Pushback Reclining Seats", "Dual AC", "Charging Points"],
    image: "/images/3.png",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20want%20to%20book%20the%2016+Seater+AC+Tempo+Traveller"
  },
  {
    id: "004",
    category: "20 PASSENGERS + 1 DRIVER",
    title: "20 SEATER AC TEMPO",
    price: "₹32 / KM",
    description: "Ideal for wedding guest logistics, school picnics, and large group pilgrimage yatras across India. Driver Allowance: ₹800 / Day",
    features: ["Pushback Reclining Seats", "Dual AC", "Charging Points"],
    image: "/images/4.png",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20want%20to%20book%20the%2020+Seater+AC+Tempo+Traveller"
  },
  {
    id: "005",
    category: "26 PASSENGERS + 1 DRIVER",
    title: "26 SEATER TEMPO",
    price: "₹36 / KM",
    description: "Maximum capacity mini-bus coach with comfortable pushback seats, music system, and large boot. Driver Allowance: ₹800 / Day",
    features: ["Pushback Reclining Seats", "Dual AC", "Charging Points"],
    image: "/images/4.png",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20want%20to%20book%20the%2026+Seater+Tempo+Traveller"
  }
];

export default function TempoPage() {
  return (
    <main className="min-h-screen bg-sand-100 text-navy-900 pt-32 pb-24 font-inter selection:bg-ocean-500 selection:text-white relative">
      
      {/* PAGE HEADER */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16 text-center">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm font-medium text-navy-900/60 mb-6 bg-white/40 inline-flex px-4 py-2 rounded-full border border-navy-900/5 backdrop-blur-sm mx-auto w-max">
          <Link href="/" className="hover:text-ocean-600 transition-colors">Home</Link>
          <span className="text-navy-900/30">/</span>
          <span className="text-ocean-600 font-bold">Tempo</span>
        </nav>
        
        <span className="uppercase tracking-widest text-xs font-semibold text-ocean-500 mb-4 block">
          North India's Leading Fleet
        </span>
        <h1 
          className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-navy-900"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Luxury Maharaja & Standard Tempo Travellers
        </h1>
        <p className="text-lg md:text-xl text-navy-900/70 max-w-4xl mx-auto mb-6 leading-relaxed">
          Planning a weekend trip to Manali, Shimla, Jaipur, Agra, or Char Dham Yatra with family or friends? AST Cab Service provides the cleanest, most comfortable, and reliable 9 to 26 Seater Tempo Travellers with plush 1x1 or 2x1 pushback Maharaja recliners.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Pushback Recliners", "Dual High-Cool AC", "LED TV & Sound", "USB Mobile Ports", "Roof Carrier Space", "First Aid & Ice Box"].map((amenity, idx) => (
            <span key={idx} className="bg-white px-4 py-2 rounded-full text-xs font-bold text-navy-900 shadow-sm border border-navy-900/10">
              ✓ {amenity}
            </span>
          ))}
        </div>
      </section>

      {/* STACKED CARDS WRAPPER */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto relative pb-32">
        {tempos.map((car, index) => {
          // Calculate sticky top offset based on index to create stack effect
          const stickyTop = 120 + (index * 30);
          
          return (
            <div 
              key={car.id} 
              className="sticky mb-12 flex justify-center items-center w-full"
              style={{ top: `${stickyTop}px`, zIndex: index + 10 }}
            >
              {/* The Uiverse Animated Card Adapted to AST Theme */}
              <div className="cursor-pointer group overflow-hidden p-0 md:p-6 duration-1000 hover:duration-1000 relative w-full h-auto min-h-[450px] bg-navy-900 rounded-[2rem] shadow-2xl border border-white/10 flex items-center justify-center">
                
                {/* UIVERSE ANIMATED SHADOW DIVS - Adapted sizes for a large card */}
                <div className="group-hover:-top-10 bg-transparent -top-32 -left-32 absolute shadow-ocean-500 shadow-inner rounded-[3rem] transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64 opacity-60"></div>
                <div className="group-hover:top-[80%] bg-transparent top-[60%] left-[10%] absolute shadow-[#7b61ff] shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-48 h-48 opacity-50"></div>
                <div className="group-hover:-left-20 bg-transparent top-[30%] left-[80%] absolute shadow-sand-200 shadow-inner rounded-[4rem] transition-all ease-in-out group-hover:duration-1000 duration-1000 w-72 h-72 opacity-40"></div>
                <div className="group-hover:-top-[50%] bg-transparent top-[10%] left-[30%] absolute shadow-ocean-500 shadow-inner rounded-2xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-32 h-32 opacity-70"></div>
                <div className="group-hover:left-[60%] bg-transparent top-[20%] left-[15%] absolute shadow-[#7b61ff] shadow-inner rounded-[5rem] transition-all ease-in-out group-hover:duration-1000 duration-1000 w-96 h-96 opacity-30"></div>
                <div className="group-hover:-left-10 bg-transparent -top-[20%] -left-[10%] absolute shadow-sand-200 shadow-inner rounded-3xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-[500px] h-[500px] opacity-20"></div>

                {/* Actual Content Container */}
                <div className="w-full h-full p-8 md:p-12 bg-navy-900/40 backdrop-blur-md rounded-[1.5rem] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center z-10 border border-white/5 relative">
                  
                  {/* Left: Image Box */}
                  <div className="w-full lg:w-[45%] h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-ocean-500/20 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent z-10"></div>
                    <Image 
                      src={car.image} 
                      alt={car.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-ocean-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg">
                        {car.price}
                      </span>
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="w-full lg:w-[55%] flex flex-col justify-center text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-ocean-500 text-sm font-bold tracking-widest uppercase">{car.category}</span>
                      <span className="text-white/30 font-mono text-sm">[{car.id}]</span>
                    </div>

                    <h2 
                      className="text-4xl md:text-5xl font-medium mb-4 tracking-wide group-hover:text-ocean-500 transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-fraunces)' }}
                    >
                      {car.title}
                    </h2>
                    
                    <p className="text-white/70 text-base leading-relaxed mb-6">
                      {car.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {car.features.map((feat, i) => (
                        <span key={i} className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-md text-sm text-white/90 font-medium">
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto">
                      <a 
                        href={car.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[160px] text-center bg-[#25D366] text-white px-6 py-4 rounded-xl text-sm font-bold hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"
                      >
                        Book WhatsApp
                      </a>
                      <a 
                        href="tel:+919717806764"
                        className="flex-1 min-w-[160px] text-center flex items-center justify-center gap-2 bg-white text-navy-900 px-6 py-4 rounded-xl text-sm font-bold hover:bg-sand-100 transition-all hover:scale-105"
                      >
                        <Phone size={16} />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12 relative z-[999] bg-sand-100 pt-12">
        <RoutesSection />
      </div>
    </main>
  );
}
