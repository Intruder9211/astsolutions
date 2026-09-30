"use client";

import { useRef } from "react";

const services = [
  { title: "Intercity cab service", image: "/images/premium_group.jpg" },
  { title: "Outstation cab service", image: "/images/city_transfer.jpg" },
  { title: "One way cab service", image: "/images/corporate_travel.jpg" },
  { title: "Cab On Hire For One Way", image: "/images/wedding_fleet.jpg" },
  { title: "Car On Hire Corporate", image: "/images/airport_concierge.jpg" },
  { title: "24 Hours Taxi Services", image: "/images/transparent_pricing.jpg" },
  { title: "Local car rental", image: "/images/city_transfer.jpg" },
  { title: "Airport Pickup & Drop", image: "/images/airport_concierge.jpg" },
  { title: "Car Hire For Outstation", image: "/images/premium_group.jpg" },
  { title: "Mini Coach", image: "/images/wedding_fleet.jpg" },
  { title: "Tempo Traveller", image: "/images/corporate_travel.jpg" },
  { title: "Urbania", image: "/images/transparent_pricing.jpg" },
];

export default function BestCabServices() {
  const containerRef = useRef(null);

  return (
    <section className="py-32 bg-sand-100 px-4 relative z-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-ocean-500 uppercase tracking-widest mb-2 block font-display">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900">Our Best Cab Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 perspective-[2000px]">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-sand-200 flex flex-col group cursor-pointer transform-gpu"
            >
              {/* Image Container with inner zoom effect on hover */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col items-start bg-white relative z-20">
                <h3 className="text-xl md:text-2xl font-display font-bold text-navy-900 mb-6">{service.title}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.dispatchEvent(new CustomEvent('openBookingModal'));
                  }}
                  className="w-full bg-navy-900 hover:bg-ocean-500 text-white text-base font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-sm mt-auto font-display"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

