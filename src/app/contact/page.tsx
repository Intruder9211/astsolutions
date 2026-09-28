import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7b61ff]/10 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 relative z-10">Get in <span className="text-[#7b61ff]">Touch</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-body relative z-10">
            Our luxury concierge team is available 24/7 to orchestrate your next journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#7b61ff]/10 flex items-center justify-center shrink-0">
                <Phone className="text-[#7b61ff]" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Call Us</h3>
                <p className="text-white/60 mb-2">Immediate bookings and 24/7 support.</p>
                <a href="tel:+919717806764" className="text-xl font-medium hover:text-[#7b61ff] transition-colors">+91-9717806764</a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#7b61ff]/10 flex items-center justify-center shrink-0">
                <Mail className="text-[#7b61ff]" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Email Us</h3>
                <p className="text-white/60 mb-2">For corporate tie-ups and general inquiries.</p>
                <a href="mailto:info@astsolutions.com" className="text-xl font-medium hover:text-[#7b61ff] transition-colors">info@astsolutions.com</a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#7b61ff]/10 flex items-center justify-center shrink-0">
                <MapPin className="text-[#7b61ff]" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Headquarters</h3>
                <p className="text-white/60 leading-relaxed">
                  AST Solutions Hub, Cyber City<br />
                  Phase 2, Gurugram, Haryana 122002<br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-display font-bold mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/60 mb-2">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#7b61ff] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#7b61ff] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#7b61ff] transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#7b61ff] transition-colors"></textarea>
              </div>
              <button type="button" className="w-full bg-[#7b61ff] hover:bg-[#694deb] text-white font-medium py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(123,97,255,0.3)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
