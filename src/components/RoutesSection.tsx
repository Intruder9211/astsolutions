"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Calendar, User, MapPin } from "lucide-react";

export const routesList = [
  "6 Seater Tempo Traveller on Rent",
  "6 Seater Traveller in Delhi",
  "7 Seater Car Booking in Delhi",
  "7 Seater Car for Rent in Delhi",
  "7 Seater Car on Rent in Delhi",
  "7 Seater Innova on Rent",
  "7 Seater Luxury Tempo Traveller",
  "7 Seater Tempo Traveller in Delhi",
  "8 Seater Car Rental in Delhi",
  "8 Seater Taxi on Rent",
  "8 Seater Innova on Rent in Delhi",
  "8 Seater Luxury Tempo Traveller on Rent",
  "9 Seater Cab in Ghaziabad",
  "9 Seater Car Booking in Delhi",
  "9 Seater Car for Rent in Bangalore",
  "9 Seater Car Taxi in Chennai",
  "10 Seater Cab Booking in Delhi",
  "10 Seater Mini Bus for Rent",
  "10 Seater Tempo Traveller on Rent in Delhi",
  "10 Seater Bus Rental in Delhi",
  "11 Seater Mini Bus Hire",
  "11 Seater Tempo Traveller on Rent",
  "11 Seater Bus on Rent",
  "11 Seater Car Rental",
  "12 Seater AC Tempo Traveller",
  "12 Seater Bus Rent",
  "12 Seater Cab in Ghaziabad",
  "12 Seater Car Booking",
  "12 Seater Tempo Traveller in Chandigarh",
  "12 Seater Tempo Traveller Delhi to Rishikesh",
  "12 Seater Tempo Traveller Hire in Jaipur",
  "12 Seater Tempo Traveller Near Me",
  "13 Seater Tempo Traveller",
  "13 Seater Traveller Booking",
  "13 Seater Traveller on Rent",
  "14 Seat Traveller on Rent",
  "14 Seater Bus on Rent",
  "14 Seater Car for Rent in Delhi",
  "14 Seater Tempo Traveller on Rent",
  "15 Seater Bus in Ghaziabad",
  "15 Seater Bus on Rent",
  "15 Seater Force Traveller on Rent",
  "15 Seater Luxury Tempo Traveller on Rent",
  "15 Seater Tempo Traveller on Rent in Delhi"
];

export default function RoutesSection() {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted for: ${selectedRoute}`);
    setSelectedRoute(null);
  };

  return (
    <section className="py-32 bg-sand-100 px-4 relative z-20 border-t border-sand-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#f59e0b]/10 text-[#f59e0b] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <MapPin size={14} /> PAN INDIA NETWORK
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900">
              Popular City Cabs & Tempo Traveller Routes
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-700/60 font-medium text-sm md:text-base max-w-sm text-left md:text-right"
          >
            Click any destination or vehicle capacity to explore fares & booking options
          </motion.p>
        </div>

        {/* Scrollable Grid of Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-sand-200"
        >
          {/* Inner scroll container */}
          <div className="h-[320px] overflow-y-auto overscroll-auto custom-scrollbar pr-2 md:pr-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {routesList.map((route, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedRoute(route)}
                  className="flex items-center justify-between text-left w-full border border-sand-200 rounded-xl px-4 py-3 text-sm md:text-base font-medium text-navy-700 hover:text-ocean-500 hover:border-ocean-500/30 transition-colors group bg-white shadow-sm"
                >
                  <span className="truncate pr-4">{route}</span>
                  <ChevronRightIcon className="w-4 h-4 text-sand-300 group-hover:text-ocean-500 flex-shrink-0 transition-colors" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Booking Modal Popup */}
      <AnimatePresence>
        {selectedRoute && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/40 backdrop-blur-sm p-4"
            onClick={() => setSelectedRoute(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-sand-100 p-6 md:p-8 border-b border-sand-200 relative">
                <button 
                  onClick={() => setSelectedRoute(null)}
                  className="absolute top-6 right-6 text-navy-900/40 hover:text-navy-900 transition-colors bg-white rounded-full p-1 shadow-sm"
                >
                  <X size={20} />
                </button>
                <h3 className="text-2xl font-display font-bold text-navy-900 pr-8">
                  Book Your Ride
                </h3>
                <p className="text-ocean-500 font-medium mt-2 flex items-center gap-2">
                  <span className="bg-ocean-500/10 px-3 py-1 rounded-full text-sm">
                    {selectedRoute}
                  </span>
                </p>
              </div>

              {/* Modal Body: Form */}
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-900/40" size={18} />
                      <input required type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-3 bg-sand-100 border-none rounded-xl focus:ring-2 focus:ring-ocean-500 outline-none transition-all text-navy-900" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-900/40" size={18} />
                      <input required type="tel" placeholder="+91 9876543210" className="w-full pl-10 pr-4 py-3 bg-sand-100 border-none rounded-xl focus:ring-2 focus:ring-ocean-500 outline-none transition-all text-navy-900" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1">PickUp Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-900/40" size={18} />
                        <input required type="date" className="w-full pl-10 pr-4 py-3 bg-sand-100 border-none rounded-xl focus:ring-2 focus:ring-ocean-500 outline-none transition-all text-navy-900" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1">DropOff Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-900/40" size={18} />
                        <input required type="date" className="w-full pl-10 pr-4 py-3 bg-sand-100 border-none rounded-xl focus:ring-2 focus:ring-ocean-500 outline-none transition-all text-navy-900" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button type="submit" className="flex-1 bg-navy-900 text-white font-bold py-3.5 rounded-xl hover:bg-ocean-500 transition-colors shadow-md">
                      Request Quote
                    </button>
                    <a href="tel:+919717806764" className="flex-1 bg-green-500 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition-colors shadow-md flex items-center justify-center gap-2">
                      <Phone size={18} /> Call Now
                    </a>
                  </div>
                </form>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
