"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const cardCss = `
.parent {
  width: 100%;
  max-width: 320px;
  height: 360px;
  perspective: 1200px;
  margin: 0 auto;
}

.card {
  height: 100%;
  border-radius: 40px;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f8fafc 100%
  );
  transition: all 0.6s ease-in-out;
  transform-style: preserve-3d;
  box-shadow:
    rgba(30, 30, 60, 0) 40px 50px 25px -40px,
    rgba(30, 30, 60, 0.2) 0px 25px 25px -5px;
}

.glass {
  transform-style: preserve-3d;
  position: absolute;
  inset: 10px;
  border-radius: 45px;
  border-top-left-radius: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(0, 0, 0, 0.05) 100%
  );
  transform: translate3d(0px, 0px, 30px);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.6s ease-in-out;
}

.content {
  padding: 90px 40px 0px 30px;
  transform: translate3d(0, 0, 31px);
}

.content .title {
  display: block;
  color: var(--navy-900);
  font-family: var(--font-fraunces);
  font-weight: 700;
  font-size: 26px;
  line-height: 1.1;
}

.content .text {
  display: block;
  color: rgba(17, 24, 39, 0.7);
  font-size: 14px;
  margin-top: 15px;
  line-height: 1.5;
}

.bottom {
  padding: 12px 15px;
  transform-style: preserve-3d;
  position: absolute;
  bottom: 25px;
  left: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate3d(0, 0, 31px);
}

.bottom .view-more {
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-end;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.bottom .view-more:hover {
  transform: translate3d(0, 0, 15px);
}

.bottom .view-more .view-more-button {
  background: none;
  border: none;
  color: var(--navy-900);
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
}

.bottom .view-more .svg {
  fill: none;
  stroke: var(--navy-900);
  stroke-width: 2.5px;
  max-height: 14px;
  margin-left: 4px;
}

.bottom .social-buttons-container {
  display: flex;
  gap: 12px;
  transform-style: preserve-3d;
}

.bottom .social-buttons-container .social-button {
  width: 40px;
  aspect-ratio: 1;
  padding: 8px;
  background: #25D366;
  border-radius: 50%;
  border: none;
  display: grid;
  place-content: center;
  box-shadow: rgba(37, 211, 102, 0.4) 0px 8px 6px -5px;
  transition: transform 0.3s ease-in-out 0.2s, box-shadow 0.3s ease-in-out 0.2s;
}

.bottom .social-buttons-container .social-button .svg {
  width: 20px;
  fill: #ffffff;
}

.bottom .social-buttons-container .social-button:hover {
  background: #20bd5a;
}

.bottom .social-buttons-container .call-button {
  width: 40px;
  aspect-ratio: 1;
  padding: 8px;
  background: var(--ocean-600);
  border-radius: 50%;
  border: none;
  display: grid;
  place-content: center;
  box-shadow: rgba(30, 30, 60, 0.2) 0px 8px 6px -5px;
  transition: transform 0.3s ease-in-out 0.3s, box-shadow 0.3s ease-in-out 0.3s;
}

.bottom .social-buttons-container .call-button .svg {
  width: 18px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bottom .social-buttons-container .call-button:hover {
  background: var(--navy-700);
}

.logo {
  position: absolute;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
}

.logo .circle {
  display: block;
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 0;
  left: 0;
  box-shadow: rgba(255, 255, 255, 0.05) 10px 10px 20px 0px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.6s ease-in-out;
}

.logo .circle1 {
  width: 160px;
  transform: translate3d(0, 0, 25px);
  top: 10px;
  left: 10px;
}

.logo .circle2 {
  width: 130px;
  transform: translate3d(0, 0, 45px);
  top: 12px;
  left: 12px;
  transition-delay: 0.1s;
}

.logo .circle3 {
  width: 100px;
  transform: translate3d(0, 0, 65px);
  top: 15px;
  left: 15px;
  transition-delay: 0.2s;
}

.logo .circle4 {
  width: 70px;
  transform: translate3d(0, 0, 85px);
  top: 20px;
  left: 20px;
  transition-delay: 0.3s;
}

.logo .circle5 {
  width: 40px;
  transform: translate3d(0, 0, 105px);
  top: 25px;
  left: 25px;
  display: grid;
  place-content: center;
  transition-delay: 0.4s;
  background: var(--ocean-600);
}

.logo .circle5 .svg {
  width: 18px;
  fill: #ffffff;
}

.parent:hover .card {
  transform: rotate3d(1, -1, 0, 25deg);
  box-shadow:
    rgba(0, 0, 0, 0.3) 30px 50px 25px -40px,
    rgba(0, 0, 0, 0.15) 0px 25px 30px 0px;
}

.parent:hover .card .bottom .social-buttons-container .social-button,
.parent:hover .card .bottom .social-buttons-container .call-button {
  transform: translate3d(0, 0, 60px);
  box-shadow: rgba(0, 0, 0, 0.25) 5px 20px 10px 0px;
}

.parent:hover .card .logo .circle2 {
  transform: translate3d(0, 0, 65px);
}

.parent:hover .card .logo .circle3 {
  transform: translate3d(0, 0, 85px);
}

.parent:hover .card .logo .circle4 {
  transform: translate3d(0, 0, 105px);
}

.parent:hover .card .logo .circle5 {
  transform: translate3d(0, 0, 125px);
}
`;

const servicesList = [
  { title: "Delhi to Agra Taxi", desc: "Premium outstation cabs for Taj Mahal tours.", slug: "delhi-to-agra-taxi" },
  { title: "Delhi to Manali", desc: "Comfortable rides for group tours & holidays.", slug: "delhi-to-manali" },
  { title: "Innova on Rent", desc: "Luxury SUV rentals for family and business.", slug: "innova-on-rent" },
  { title: "12 Seater Traveller", desc: "Spacious tempo traveller for family trips.", slug: "12-seater-traveller" },
  { title: "15 Seater Traveller", desc: "Extended group travel across North India.", slug: "15-seater-traveller" },
  { title: "Mini Bus 20 Seater", desc: "Perfect for corporate & event transit.", slug: "mini-bus-20-seater" },
  { title: "6 Seater Tempo Traveller", desc: "Compact group travel solutions for weekend trips.", slug: "6-seater-tempo-traveller" },
  { title: "7 Seater Luxury Tempo", desc: "Premium travel for smaller VIP groups.", slug: "7-seater-luxury-tempo" },
  { title: "9 Seater Maharaja", desc: "Ultra-luxury reclining captain seats.", slug: "9-seater-maharaja-tempo" },
  { title: "8 Seater Innova on Rent", desc: "Reliable and spacious SUV rental in Delhi NCR.", slug: "8-seater-innova-on-rent" },
  { title: "Airport Transfers", desc: "Punctual drops and pickups from Delhi IGI.", slug: "airport-transfers" },
  { title: "Corporate Taxi Service", desc: "Dedicated fleets for business professionals.", slug: "corporate-taxi-service" },
];

export default function ServicesPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };
  
  return (
    <main className="min-h-screen bg-sand-100 pt-32 pb-24 selection:bg-ocean-500 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: cardCss }} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm font-medium text-navy-900/60 mb-6 bg-white/40 inline-flex px-4 py-2 rounded-full border border-navy-900/5 backdrop-blur-sm mx-auto w-max">
          <Link href="/" className="hover:text-ocean-600 transition-colors">Home</Link>
          <span className="text-navy-900/30">/</span>
          <span className="text-ocean-600 font-bold">Services</span>
        </nav>

        <span className="uppercase tracking-widest text-xs font-semibold text-ocean-600 mb-4 block">
          Comprehensive Fleet
        </span>
        <h1 
          className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-navy-900"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Explore All Services
        </h1>
        <p className="text-lg md:text-xl text-navy-900/70 max-w-2xl mx-auto">
          Discover our wide range of premium travel options. Select any route or vehicle to view details and book instantly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {servicesList.slice(0, visibleCount).map((service, idx) => (
            <div className="parent" key={idx}>
              <div className="card">
                <div className="logo">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="circle circle3"></span>
                  <span className="circle circle4"></span>
                  <span className="circle circle5">
                    {/* Map Fold Icon representing travel */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="svg"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
                      <line x1="9" y1="3" x2="9" y2="18"/>
                      <line x1="15" y1="6" x2="15" y2="21"/>
                    </svg>
                  </span>
                </div>
                <div className="glass"></div>
                
                <div className="content">
                  <span className="title">{service.title}</span>
                  <span className="text">{service.desc}</span>
                </div>
                
                <div className="bottom">
                  <div className="social-buttons-container">
                    <a 
                      href={`https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20want%20to%20know%20more%20about%20${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                      title="WhatsApp"
                    >
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 44.9 11.6 87.2 32.1 123.9L0 512l136-31.5c35.4 19.3 76 29.5 119.9 29.5 141.4 0 256-114.6 256-256S397.4 0 256 0zM388.9 359c-6.1 17.2-34.9 33.1-48.4 34.6-10.7 1.2-24.8 2.3-43-3.6-10.7-3.4-23.7-8.1-40-15.6-34.7-16-60.6-37.1-84.3-64.8-19.1-22.3-36.9-49.8-36.9-80.1 0-35.3 16.5-56.1 23-64 7.6-9.2 19-11.8 26-11.8 4.2 0 8 .4 11.4 1.2 7.7 2 10.3 3.1 15.3 15.3 6.5 16 19 46.5 20.6 49.8 2.3 4.6 3.8 9.9 .8 15.3-2.3 4.6-4.2 7.3-8 11.4-3.8 4.2-8.1 9.2-11.4 12.6-3.8 3.8-8 8.1-3.4 16 10.3 17.6 23.3 32.8 37.8 44.7 18.7 15.3 36.6 25.2 56.5 32.1 8 2.7 14.5 2.3 19.8-3.4 6.9-7.3 16.8-21.4 23.3-30.5 4.6-6.5 11.4-7.3 18.7-4.6 7.6 2.7 48.4 22.9 56.5 27.1 8 3.8 13.7 6.1 15.6 9.5 2.2 4.1 2.2 20.5-3.9 37.7z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a 
                      href="tel:+919717806764"
                      className="call-button"
                      title="Call Now"
                    >
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </a>
                  </div>
                  <Link href={`/services/${service.slug}`} className="view-more">
                    <button className="view-more-button">View Details</button>
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {visibleCount < servicesList.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="bg-navy-900 text-white px-8 py-3 rounded-full font-bold hover:bg-ocean-600 transition-colors shadow-lg hover:scale-105 active:scale-95 duration-200"
            >
              Load More Services
            </button>
          </div>
        )}
      </div>
      
    </main>
  );
}
