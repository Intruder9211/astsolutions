"use client";

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import RoutesSection from '@/components/RoutesSection';
import Link from 'next/link';

const cars = [
  {
    id: "001",
    category: "SEDAN / COMPACT",
    title: "SWIFT DZIRE",
    price: "₹11 / KM",
    description: "All vehicles are commercially licensed, GPS tracked, fully air-conditioned, and maintained to the highest hygiene standards.",
    features: ["4 Passengers", "2 Large Bags", "AC"],
    image: "/images/gallery/1.webp",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20would%20like%20to%20book%20or%20inquire%20about%20Maruti+Suzuki+Swift+Dzire"
  },
  {
    id: "002",
    category: "MUV / FAMILY CAR",
    title: "ERTIGA",
    price: "₹14 / KM",
    description: "The perfect family MUV designed for comfort and space, offering a smooth highway ride and flexible 3rd-row seating for all your trips.",
    features: ["6 Passengers", "3 Bags", "Rear AC"],
    image: "/images/gallery/8.webp",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20would%20like%20to%20book%20or%20inquire%20about%20Maruti+Suzuki+Ertiga"
  },
  {
    id: "003",
    category: "LUXURY SUV",
    title: "INNOVA CRYSTA",
    price: "₹19 / KM",
    description: "Experience top luxury comfort with premium suspension, captain leather seats, and tri-zone climate control for an unmatched journey.",
    features: ["7 Passengers", "4 Bags", "Captain Seats"],
    image: "/images/gallery/9.webp",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20would%20like%20to%20book%20or%20inquire%20about%20Toyota+Innova+Crysta"
  },
  {
    id: "004",
    category: "PREMIUM MUV",
    title: "INNOVA (CLASSIC)",
    price: "₹17 / KM",
    description: "Highly reliable for long-distance travel, offering spacious boot space, dual AC, and driven by experienced chauffeurs.",
    features: ["7 Passengers", "3 Bags", "Dual AC"],
    image: "/images/gallery/10.webp",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20would%20like%20to%20book%20or%20inquire%20about%20Toyota+Innova+%28Classic%29"
  },
  {
    id: "005",
    category: "COMFORT SEDAN",
    title: "ETIOS",
    price: "₹11 / KM",
    description: "A comfort sedan with an extra-large boot and great fuel efficiency. Enjoy a clean cabin and a smooth city suspension.",
    features: ["4 Passengers", "3 Bags", "Clean Cabin"],
    image: "/images/gallery/3.webp",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20would%20like%20to%20book%20or%20inquire%20about%20Toyota+Etios"
  },
  {
    id: "006",
    category: "STANDARD MPV",
    title: "TAVERA",
    price: "₹15 / KM",
    description: "A budget-friendly option great for groups, featuring high ground clearance and rugged capabilities for hill driving.",
    features: ["8-9 Pax", "4 Bags", "Hill Ready"],
    image: "/images/gallery/12.webp",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20would%20like%20to%20book%20or%20inquire%20about%20Chevrolet+Tavera"
  }
];

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-sand-100 text-navy-900 pt-32 pb-24 font-inter selection:bg-ocean-500 selection:text-white relative">
      
      {/* PAGE HEADER */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16 text-center">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm font-medium text-navy-900/60 mb-6 bg-white/40 inline-flex px-4 py-2 rounded-full border border-navy-900/5 backdrop-blur-sm mx-auto w-max">
          <Link href="/" className="hover:text-ocean-600 transition-colors">Home</Link>
          <span className="text-navy-900/30">/</span>
          <span className="text-ocean-600 font-bold">Cars</span>
        </nav>
        
        <h1 
          className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-navy-900"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Our Premium Fleet
        </h1>
        <p className="text-lg md:text-xl text-navy-900/70 max-w-3xl mx-auto">
          Choose the Perfect Car for Your Trip. Commercially licensed, GPS tracked, and maintained to the highest standards.
        </p>
      </section>

      {/* STACKED CARDS WRAPPER */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto relative pb-32">
        {cars.map((car, index) => {
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
                {/* Element 1 */}
                <div className="group-hover:-top-10 bg-transparent -top-32 -left-32 absolute shadow-ocean-500 shadow-inner rounded-[3rem] transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64 opacity-60"></div>
                
                {/* Element 2 */}
                <div className="group-hover:top-[80%] bg-transparent top-[60%] left-[10%] absolute shadow-[#7b61ff] shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-48 h-48 opacity-50"></div>
                
                {/* Element 3 */}
                <div className="group-hover:-left-20 bg-transparent top-[30%] left-[80%] absolute shadow-sand-200 shadow-inner rounded-[4rem] transition-all ease-in-out group-hover:duration-1000 duration-1000 w-72 h-72 opacity-40"></div>
                
                {/* Element 4 */}
                <div className="group-hover:-top-[50%] bg-transparent top-[10%] left-[30%] absolute shadow-ocean-500 shadow-inner rounded-2xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-32 h-32 opacity-70"></div>
                
                {/* Element 5 */}
                <div className="group-hover:left-[60%] bg-transparent top-[20%] left-[15%] absolute shadow-[#7b61ff] shadow-inner rounded-[5rem] transition-all ease-in-out group-hover:duration-1000 duration-1000 w-96 h-96 opacity-30"></div>
                
                {/* Element 6 */}
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
