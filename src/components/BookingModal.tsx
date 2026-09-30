"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { useEffect } from "react";
import { routesList } from "./RoutesSection";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [tripType, setTripType] = useState("Round Trip");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openBookingModal", handleOpen);
    return () => window.removeEventListener("openBookingModal", handleOpen);
  }, []);

  const onClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#111111] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
              <h2 className="text-xl font-display font-medium text-white">Let's Ride Now</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 1L1 13M1 1l12 12"/></svg>
              </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-6">
              {/* Trip Type */}
              <div className="flex bg-[#1a1a1a] p-1 rounded-xl border border-white/5">
                {["Round Trip", "One Way", "Local"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTripType(type)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      tripType === type ? "bg-[#7b61ff] text-white shadow-lg" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Locations */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60">PickUp Location</label>
                  <input type="text" placeholder="Enter pickup..." className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b61ff] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60">Drop Off Location</label>
                  <input type="text" placeholder="Enter drop..." className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b61ff] transition-colors" />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60">PickUp Date</label>
                  <input type="date" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7b61ff] transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60">DropOff Date</label>
                  <input type="date" disabled={tripType === "One Way"} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7b61ff] transition-colors disabled:opacity-50 [&::-webkit-calendar-picker-indicator]:invert" />
                </div>
              </div>

              {/* Contact & Vehicle */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60">Phone No.</label>
                  <input type="tel" placeholder="+91" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b61ff] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60">Vehicle Type</label>
                  <select defaultValue="" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7b61ff] transition-colors appearance-none scrollbar-thin scrollbar-thumb-white/20">
                    <option value="" disabled>Select a vehicle...</option>
                    <option value="sedan" className="py-2">Sedan (Swift Dzire)</option>
                    <option value="suv" className="py-2">SUV (Innova)</option>
                    <option value="traveller" className="py-2">Tempo Traveller</option>
                    <option value="bus" className="py-2">Mini Bus</option>
                    <optgroup label="Popular Routes & Vehicles" className="mt-2 text-white/50">
                      {routesList.map((route, i) => (
                        <option key={i} value={route} className="py-2 text-white">{route}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button className="w-full bg-[#7b61ff] hover:bg-[#694deb] text-white font-medium py-3.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(123,97,255,0.3)] active:scale-[0.98]">
                Submit Booking
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
