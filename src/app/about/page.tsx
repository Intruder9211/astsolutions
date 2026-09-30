"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import RoutesSection from '@/components/RoutesSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] pt-32 pb-24 font-inter selection:bg-[#1A1A1A] selection:text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* HERO SECTION */}
        <section className="mb-24 md:mb-40 border-b border-[#1A1A1A]/10 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/60 mb-6 bg-white/40 inline-flex px-4 py-2 rounded-full border border-[#1A1A1A]/5">
                <Link href="/" className="hover:text-[#1A1A1A] transition-colors flex items-center gap-1">
                  Home
                </Link>
                <span className="text-[#1A1A1A]/30">/</span>
                <span className="text-[#1A1A1A] font-bold">About Us</span>
              </nav>

              <span className="uppercase tracking-widest text-xs font-semibold text-[#1A1A1A]/60 mb-6 block">
                [ About AST Cab Service ]
              </span>
              <h1 className="text-5xl md:text-8xl font-display font-medium leading-[1.05] tracking-tight mb-8">
                Every great journey <br className="hidden md:block"/>
                begins with a <br className="hidden md:block"/>
                <span className="italic text-gray-500">reliable ride.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#1A1A1A]/70 max-w-2xl font-light leading-relaxed">
                Best Taxi Service with Affordable Prices.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="shrink-0 pb-2"
            >
              <a href="tel:+919717806764" className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                <Phone size={16} />
                Call +91 97178 06764
              </a>
            </motion.div>
          </div>
        </section>

        {/* IMAGE BREAK & INTRO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 h-[400px] md:h-[600px] relative rounded-2xl overflow-hidden group"
          >
            <Image 
              src="/images/gallery/33.webp" 
              alt="AST Luxury Fleet"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-display font-medium mb-8 leading-tight">
              Based in Vasant Kunj, Delhi NCR, with branches in Ghaziabad, Noida, and Gurgaon.
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 font-light leading-relaxed mb-8">
              We have been providing safe, comfortable, and dependable cab services for years. Founded by Shrawan Kumar, AST Cab Service operates a fleet of more than 50 premium vehicles.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-[1px] bg-[#1A1A1A] mt-3"></div>
              <p className="text-sm uppercase tracking-widest font-medium">Shrawan Kumar<br/><span className="text-[#1A1A1A]/50">Founder</span></p>
            </div>
          </motion.div>
        </section>

        {/* FLEET EXPERTISE - GRID */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-12 border-b border-[#1A1A1A]/10 pb-6"
          >
            <h2 className="text-4xl font-display font-medium">Our Diverse Fleet</h2>
            <Link href="/fleet" className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
              View All Vehicles <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: '/images/gallery/1.webp', title: 'Premium Cars', desc: 'Sedans, Prime Sedans, SUVs, and Prime SUVs perfect for city rides and airport transfers.', delay: 0 },
              { img: '/images/gallery/34.webp', title: 'Innova Series', desc: 'Innova Crysta and Innova Hycross for comfortable family trips and corporate travel.', delay: 0.1 },
              { img: '/images/gallery/46.webp', title: 'Tempo Travellers', desc: 'Spacious Tempo Travellers and Luxury Travellers for group outings and outstation tours.', delay: 0.2 },
              { img: '/images/gallery/32.webp', title: 'Urbania & Coaches', desc: 'Urbania Luxury, Ultra Luxury Urbania, Mini Coaches, and Luxury Buses for ultimate comfort.', delay: 0.3 }
            ].map((fleet, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: fleet.delay }}
                className="group border border-[#1A1A1A]/10 p-8 rounded-2xl hover:bg-[#1A1A1A] hover:text-white transition-all duration-500"
              >
                <div className="h-40 relative mb-6 rounded-lg overflow-hidden mix-blend-multiply group-hover:mix-blend-normal">
                  <Image src={fleet.img} alt={fleet.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-medium mb-3">{fleet.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {fleet.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMMITMENT SECTION */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1A1A1A] text-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Our Commitment to You</h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
              Our professional drivers are experienced, courteous, and committed to your safety. Every vehicle is regularly maintained, cleaned, and inspected to ensure a comfortable and punctual travel experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Check size={16} />
                </div>
                <span className="text-sm font-medium">Experienced Drivers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Check size={16} />
                </div>
                <span className="text-sm font-medium">Regularly Inspected</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Check size={16} />
                </div>
                <span className="text-sm font-medium">Punctual Service</span>
              </div>
            </div>
          </div>
          
          <div className="shrink-0 flex flex-col items-center justify-center bg-white/5 border border-white/10 p-10 rounded-2xl text-center">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Ready to travel?</p>
            <p className="text-3xl font-display font-medium mb-6">Call Anytime</p>
            <a href="tel:+919717806764" className="inline-flex bg-white text-[#1A1A1A] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              +91 97178 06764
            </a>
          </div>
        </motion.section>
        
      </div>

      <RoutesSection />
    </main>
  );
}
