"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-ocean-500 uppercase tracking-widest mb-2 block font-display">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900">Our Best Cab Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-[2000px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateX: -45, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                type: "spring", 
                bounce: 0.4 
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-sand-200 flex flex-col group cursor-pointer transform-gpu"
            >
              {/* Image Container with inner zoom effect on hover */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <motion.img 
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
