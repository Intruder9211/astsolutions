"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sand-100 selection:bg-ocean-500 selection:text-white pt-32 pb-24">
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-medium text-navy-900/60 mb-8 bg-white/40 px-4 py-2 rounded-full border border-navy-900/5 backdrop-blur-sm">
            <a href="/" className="hover:text-ocean-600 transition-colors">Home</a>
            <span className="text-navy-900/30">/</span>
            <span className="text-ocean-600 font-bold">Contact Us</span>
          </nav>

          <span className="uppercase tracking-widest text-xs font-bold text-ocean-600 mb-4 block">
            Reach Out To Us
          </span>
          <h1 
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-navy-900"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Let's get in touch
          </h1>
          <p className="text-lg md:text-xl text-navy-900/70 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our fleet, pricing, or need to plan a custom trip, our team is ready to answer all your questions.
          </p>
        </div>

        {/* Main Card Container (Dribbble Style) */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-navy-900/5">
          
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-[45%] bg-navy-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="relative z-10">
              <h2 
                className="text-3xl md:text-4xl font-medium mb-4"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Contact Information
              </h2>
              <p className="text-white/70 mb-12 font-light text-lg">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <a href="tel:+919717806764" className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-ocean-500 transition-colors duration-300">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Phone</p>
                    <p className="text-lg font-medium">+91-9717806764</p>
                  </div>
                </a>

                <a href="mailto:promotions.ast@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-ocean-500 transition-colors duration-300">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Email</p>
                    <p className="text-lg font-medium">promotions.ast@gmail.com</p>
                  </div>
                </a>

                <a href="https://maps.google.com/?q=Rajnagar,Ghaziabad" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-ocean-500 transition-colors duration-300 shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Office</p>
                    <p className="text-lg font-medium leading-relaxed">
                      Shop No. 06, Anshul Satyam Building, <br/>
                      Rajnagar, Ghaziabad, UP
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-16 relative z-10">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-[55%] p-10 md:p-16 bg-white">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy-900/80 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full pb-3 border-b-2 border-navy-900/10 bg-transparent text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-ocean-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy-900/80 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full pb-3 border-b-2 border-navy-900/10 bg-transparent text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-ocean-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy-900/80 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full pb-3 border-b-2 border-navy-900/10 bg-transparent text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-ocean-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy-900/80 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full pb-3 border-b-2 border-navy-900/10 bg-transparent text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-ocean-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <label className="text-sm font-semibold text-navy-900/80 uppercase tracking-wider">What kind of vehicle do you need?</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="service" className="accent-ocean-600 w-4 h-4 cursor-pointer" defaultChecked />
                    <span className="text-navy-900/70 group-hover:text-navy-900">Tempo Traveller</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="service" className="accent-ocean-600 w-4 h-4 cursor-pointer" />
                    <span className="text-navy-900/70 group-hover:text-navy-900">Urbania Van</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="service" className="accent-ocean-600 w-4 h-4 cursor-pointer" />
                    <span className="text-navy-900/70 group-hover:text-navy-900">Outstation Taxi</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="service" className="accent-ocean-600 w-4 h-4 cursor-pointer" />
                    <span className="text-navy-900/70 group-hover:text-navy-900">Other</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-sm font-semibold text-navy-900/80 uppercase tracking-wider">Message</label>
                <textarea 
                  placeholder="Tell us about your trip details..." 
                  rows={4}
                  className="w-full pb-3 border-b-2 border-navy-900/10 bg-transparent text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-ocean-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-8 flex justify-end">
                <button 
                  type="submit"
                  className="bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-ocean-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
