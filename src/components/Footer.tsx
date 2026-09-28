"use client";

import Link from "next/link";
import { 
  CheckCircle2, MapPin, Navigation, Phone, Mail, 
  ShieldCheck, Car, Clock, CreditCard, Building2, Map
} from "lucide-react";

export default function Footer() {
  const strengths = [
    { icon: <Car size={14} />, text: "Large fleet of clean and well-maintained vehicles" },
    { icon: <Map size={14} />, text: "Trained and verified drivers with local route knowledge" },
    { icon: <Clock size={14} />, text: "24/7 customer support and advance booking options" },
    { icon: <CreditCard size={14} />, text: "Competitive and transparent pricing" },
    { icon: <ShieldCheck size={14} />, text: "Focus on safety, comfort, and timely service" }
  ];

  const overview = [
    { label: "Company", value: "AST Solutions" },
    { label: "Founder", value: "Mr. Shrawan Kumar" },
    { label: "Location", value: "Vasant Kunj, New Delhi" },
    { label: "Fleet", value: "500+ Vehicles" },
    { label: "Services", value: "Local, Outstation, Airport, Corporate" },
    { label: "Coverage", value: "Delhi NCR & Pan India" }
  ];

  return (
    <footer className="bg-[#050505] text-[#94a3b8] pt-24 pb-8 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7b61ff]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
          
          {/* Column 1: Our Key Strengths */}
          <div className="lg:col-span-1.5 space-y-6">
            <h4 className="text-white font-display text-lg tracking-wide mb-6 flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#7b61ff]" />
              Our Key Strengths
            </h4>
            <ul className="space-y-4">
              {strengths.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <span className="mt-1 text-ocean-500 group-hover:text-[#7b61ff] transition-colors">{item.icon}</span>
                  <span className="text-sm leading-relaxed group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company Overview */}
          <div className="lg:col-span-1.5 space-y-6">
            <h4 className="text-white font-display text-lg tracking-wide mb-6 flex items-center gap-2">
              <Building2 size={18} className="text-[#7b61ff]" />
              Company Overview
            </h4>
            <ul className="space-y-3">
              {overview.map((item, idx) => (
                <li key={idx} className="text-sm">
                  <span className="text-white font-medium mr-2">{item.label}:</span>
                  <span className="leading-relaxed">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="space-y-6">
            <h4 className="text-white font-display text-lg tracking-wide mb-6 flex items-center gap-2">
              <Navigation size={18} className="text-[#7b61ff]" />
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7b61ff] hover:text-white hover:border-[#7b61ff] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7b61ff] hover:text-white hover:border-[#7b61ff] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7b61ff] hover:text-white hover:border-[#7b61ff] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7b61ff] hover:text-white hover:border-[#7b61ff] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7b61ff] hover:text-white hover:border-[#7b61ff] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-display text-lg tracking-wide mb-6 flex items-center gap-2">
              <Navigation size={18} className="text-ocean-500" />
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Cars', 'Gallery', 'Contact Us'].map((item) => (
                <Link key={item} href="#" className="text-sm hover:text-[#7b61ff] hover:translate-x-1 transition-all w-fit">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 5: Offices */}
          <div className="lg:col-span-1.5 space-y-8">
            {/* Branch Office */}
            <div className="space-y-4">
              <h4 className="text-white font-display text-lg tracking-wide flex items-center gap-2">
                <MapPin size={18} className="text-ocean-500" />
                Branch Office
              </h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+919717102985" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={14} className="text-white/40" /> +91-9717102985
                </a>
                <a href="tel:01144789804" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={14} className="text-white/40" /> +91-011-44789804
                </a>
                <a href="mailto:info.astcabdelhi.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={14} className="text-white/40" /> info.astcabdelhi.com
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-white/40 shrink-0 mt-1" />
                  <span className="leading-relaxed">Shop No. 15, Ground Floor, Masoodpur, Vasant Kunj, Delhi</span>
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div className="space-y-4">
              <h4 className="text-white font-display text-lg tracking-wide flex items-center gap-2">
                <Building2 size={18} className="text-[#7b61ff]" />
                Head Office
              </h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+919717806764" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={14} className="text-white/40" /> +91-9717806764
                </a>
                <a href="tel:01202821236" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={14} className="text-white/40" /> 0120-2821236
                </a>
                <a href="mailto:promotions.ast@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={14} className="text-white/40" /> promotions.ast@gmail.com
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-white/40 shrink-0 mt-1" />
                  <span className="leading-relaxed">Shop No. 06, Anshul Satyam Building, Rajnagar, Ghaziabad</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-xs bg-[#050505]">
          <p>© 2026 AST Solutions. All Rights Reserved | Designed by AST Technologies</p>
        </div>
      </div>
    </footer>
  );
}
