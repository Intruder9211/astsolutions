"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Fleet", href: "/cars" },
    { name: "Services", href: "/services", hasMegaMenu: true },
    { name: "Gallery", href: "/photo" },
  ];

  // 6 Distinct SVG Icons for each service
  const CarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H8.3a2 2 0 0 0-1.6.8L4 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM5 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/></svg>
  );
  
  const MapFoldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
  );

  const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
  );

  const TransitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="M8 19l-2 3"/><path d="M16 19l2 3"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/></svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );

  const BusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
  );

  const megaMenuContent = [
    { title: "Delhi to Agra Taxi", desc: "Premium outstation cabs", icon: <CarIcon /> },
    { title: "Delhi to Manali", desc: "Group tours & holidays", icon: <MapFoldIcon /> },
    { title: "Innova on Rent", desc: "Luxury SUV rentals", icon: <KeyIcon /> },
    { title: "12 Seater Traveller", desc: "Spacious family trips", icon: <TransitIcon /> },
    { title: "15 Seater Traveller", desc: "Extended group travel", icon: <UsersIcon /> },
    { title: "Mini Bus 20 Seater", desc: "Corporate & event transit", icon: <BusIcon /> },
  ];

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <div 
        className="w-full max-w-5xl bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-between shadow-2xl relative"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full p-0.5 shadow-sm">
            <img src="/images/ast_logo.png" alt="AST Solutions Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <span className="text-lg font-display font-medium text-white tracking-wide">
            AST Solutions
          </span>
        </Link>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative py-2"
              onMouseEnter={() => setHoveredMenu(link.hasMegaMenu ? link.name : null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-body transition-colors duration-200 flex items-center gap-1 ${
                  hoveredMenu === link.name ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {link.hasMegaMenu && (
                  <svg className={`w-3 h-3 transition-transform duration-300 ${hoveredMenu === link.name ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <div className="w-px h-5 bg-white/20" />
          
          <a
            href="tel:+919717806764"
            className="text-sm font-body text-white/80 hover:text-white transition-colors"
          >
            +91-9717806764
          </a>
          
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 relative group cursor-pointer">
            <img 
              src="/images/header_promo.jpg" 
              alt="Support" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
            className="bg-[#7b61ff] hover:bg-[#694deb] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200"
          >
            Book a Cab
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>

        {/* Animated Mega Menu for Services */}
        <AnimatePresence>
          {hoveredMenu === "Services" && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[700px] bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              onMouseEnter={() => setHoveredMenu("Services")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7b61ff]"></div>
                  <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#64748b' }}>All Services</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {megaMenuContent.map((item, idx) => (
                    <Link 
                      href="/services" 
                      key={idx} 
                      className="group flex gap-4 p-3 rounded-xl hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#7b61ff] group-hover:scale-110 group-hover:bg-[#7b61ff]/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-display font-medium group-hover:text-[#7b61ff] transition-colors mb-1" style={{ color: '#ffffff' }}>
                          {item.title}
                        </h4>
                        <p className="text-xs group-hover:text-[#cbd5e1] transition-colors" style={{ color: '#94a3b8' }}>
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 px-6 py-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm" style={{ color: '#94a3b8' }}>Need something else?</span>
                <Link href="/services" className="text-sm font-medium text-[#7b61ff] hover:text-white transition-colors flex items-center gap-1">
                  View full catalog <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
