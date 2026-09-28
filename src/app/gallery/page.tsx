import React from 'react';

export default function GalleryPage() {
  const images = [
    { src: "/images/premium_group.jpg", alt: "Premium Group Transit" },
    { src: "/images/corporate_travel.jpg", alt: "Corporate Travel" },
    { src: "/images/city_transfer.jpg", alt: "City Transfer" },
    { src: "/images/wedding_fleet.jpg", alt: "Wedding Fleet" },
    { src: "/images/airport_concierge.jpg", alt: "Airport Concierge" },
    { src: "/images/transparent_pricing.jpg", alt: "Transparent Pricing" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7b61ff]/10 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 relative z-10">Visual <span className="text-[#7b61ff]">Journey</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-body relative z-10">
            A glimpse into the extraordinary experiences and world-class vehicles that define AST Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 border border-white/10">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-2xl font-display font-bold">{img.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
