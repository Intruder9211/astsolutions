import React from 'react';

export default function FleetPage() {
  const categories = [
    { name: "Luxury Sedans", desc: "Perfect for corporate travel and airport transfers.", models: ["Toyota Camry", "Honda Accord", "Mercedes E-Class"] },
    { name: "Premium SUVs", desc: "Spacious comfort for small groups and family outstations.", models: ["Toyota Innova Crysta", "Toyota Fortuner", "Ford Endeavour"] },
    { name: "Group Transit", desc: "Unmatched luxury for large groups and wedding fleets.", models: ["Force Urbania", "Tempo Traveller", "Volvo Coaches"] },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7b61ff]/10 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 relative z-10">Our <span className="text-[#7b61ff]">Fleet</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-body relative z-10">
            A meticulously curated collection of world-class vehicles, maintained to the highest standards of safety and luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-display font-bold mb-4">{cat.name}</h2>
              <p className="text-white/60 font-body mb-8">{cat.desc}</p>
              <ul className="space-y-4">
                {cat.models.map((model, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-[#7b61ff]" />
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
