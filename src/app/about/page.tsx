import React from 'react';
import { ShieldCheck, Award, Users, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7b61ff]/10 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 relative z-10">Our <span className="text-[#7b61ff]">Story</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-body relative z-10">
            Redefining luxury ground transportation across India with an unwavering commitment to safety, punctuality, and uncompromising comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full">
            <h2 className="text-3xl font-display font-bold mb-6">A Legacy of Excellence</h2>
            <p className="text-white/70 font-body leading-relaxed mb-6">
              Founded on the principles of trust and premium service, AST Solutions has grown from a boutique transport service into one of the region's most respected mobility partners. We believe that a journey is not just about moving between destinations—it's about the experience, the peace of mind, and the absolute certainty that you are in expert hands.
            </p>
            <p className="text-white/70 font-body leading-relaxed">
              Our rigorously vetted chauffeurs and flawlessly maintained fleet ensure that every ride, whether a short city transfer or a multi-day cross-country tour, is executed to perfection.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck size={32} className="text-[#7b61ff] mb-4" />, title: "Verified Drivers", desc: "Rigorous background checks" },
              { icon: <Award size={32} className="text-[#7b61ff] mb-4" />, title: "Premium Fleet", desc: "Latest luxury models" },
              { icon: <Users size={32} className="text-[#7b61ff] mb-4" />, title: "50,000+ Clients", desc: "Trusted globally" },
              { icon: <MapPin size={32} className="text-[#7b61ff] mb-4" />, title: "Pan India", desc: "Seamless outstation tours" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="text-xl font-display font-medium mb-2">{stat.title}</h3>
                <p className="text-sm text-white/60">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
