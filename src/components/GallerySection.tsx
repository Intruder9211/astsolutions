"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

const allImages = [
  "/images/gallery/1.webp",
  "/images/gallery/2.webp",
  "/images/gallery/3.webp",
  "/images/gallery/4.webp",
  "/images/gallery/5.webp",
  "/images/gallery/6.webp",
  "/images/gallery/7.webp",
  "/images/gallery/8.webp",
  "/images/gallery/9.webp",
  "/images/gallery/10.webp",
  "/images/gallery/11.webp",
  "/images/gallery/12.webp",
  "/images/gallery/13.webp",
  "/images/gallery/15.webp",
  "/images/gallery/16.webp",
  "/images/gallery/18.webp",
  "/images/gallery/26.webp",
  "/images/gallery/32.webp",
  "/images/gallery/33.webp",
  "/images/gallery/34.webp",
  "/images/gallery/39.webp",
  "/images/gallery/43.webp",
  "/images/gallery/46.webp",
  "/images/gallery/62.webp"
];

export default function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % allImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4">
        {/* Main Header */}
        <div
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
            Immerse Yourself In Premium Travel
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div
            className="w-full lg:w-1/4 space-y-8 z-10"
          >
            <p className="text-lg text-navy-700 font-body leading-relaxed relative">
              <span className="absolute -top-4 -left-4 text-ocean-500 opacity-50">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v16m-8-8h16"/></svg>
              </span>
              Connecting You with Comfort That Moves You. A Journey Through Premium Travel.
            </p>
            
            <Link 
              href="/gallery"
              className="flex items-center gap-4 text-navy-900 font-bold hover:text-ocean-500 transition-colors group w-fit"
            >
              Explore Now
              <span className="bg-sand-200 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-ocean-500 group-hover:text-white transition-all">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Center Masonry Collage (Cross/Diamond Layout using all 24 images) */}
          <div
            className="w-full lg:w-2/4"
          >
            <div className="flex justify-center gap-2 md:gap-3 lg:gap-4 items-center">
              {/* Column 1 (2 images) */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-1/6">
                {allImages.slice(0, 2).map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-md cursor-pointer"><img src={src} onClick={() => setSelectedIdx(i)} className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500" alt="Gallery" /></div>
                ))}
              </div>
              
              {/* Column 2 (4 images) */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-1/6">
                {allImages.slice(2, 6).map((src, i) => (
                  <div key={i + 2} className="rounded-xl overflow-hidden shadow-md cursor-pointer"><img src={src} onClick={() => setSelectedIdx(i + 2)} className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500" alt="Gallery" /></div>
                ))}
              </div>

              {/* Column 3 (6 images) */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-1/6">
                {allImages.slice(6, 12).map((src, i) => (
                  <div key={i + 6} className="rounded-xl overflow-hidden shadow-md cursor-pointer"><img src={src} onClick={() => setSelectedIdx(i + 6)} className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500" alt="Gallery" /></div>
                ))}
              </div>

              {/* Column 4 (6 images) */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-1/6">
                {allImages.slice(12, 18).map((src, i) => (
                  <div key={i + 12} className="rounded-xl overflow-hidden shadow-md cursor-pointer"><img src={src} onClick={() => setSelectedIdx(i + 12)} className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500" alt="Gallery" /></div>
                ))}
              </div>

              {/* Column 5 (4 images) */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-1/6">
                {allImages.slice(18, 22).map((src, i) => (
                  <div key={i + 18} className="rounded-xl overflow-hidden shadow-md cursor-pointer"><img src={src} onClick={() => setSelectedIdx(i + 18)} className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500" alt="Gallery" /></div>
                ))}
              </div>

              {/* Column 6 (2 images) */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-1/6">
                {allImages.slice(22, 24).map((src, i) => (
                  <div key={i + 22} className="rounded-xl overflow-hidden shadow-md cursor-pointer"><img src={src} onClick={() => setSelectedIdx(i + 22)} className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500" alt="Gallery" /></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div
            className="w-full lg:w-1/4 flex flex-col justify-between items-center lg:items-end h-auto lg:h-[400px] gap-8 lg:gap-0 z-10 mt-8 lg:mt-0 relative"
          >
            <div className="text-center lg:text-right">
              <h3 className="text-6xl md:text-8xl font-display font-bold text-ocean-500 opacity-80 mb-2">26+</h3>
              <p className="text-lg text-navy-900 font-medium">Years of Excellence & Trust</p>
            </div>

            <div className="relative mt-auto text-center lg:text-right flex flex-col items-center lg:items-end">
              {/* Spinning Text Effect Approximation */}
              <div className="relative lg:absolute lg:-top-24 lg:right-0 w-24 h-24 lg:w-32 lg:h-32 mb-4 lg:mb-0 animate-[spin_10s_linear_infinite] opacity-30 lg:opacity-100 self-center lg:self-end">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[10px] tracking-widest font-bold fill-navy-900/50 uppercase">
                    <textPath href="#circlePath">AST Solutions • Premium Travel •</textPath>
                  </text>
                </svg>
              </div>

              <h4 className="text-3xl md:text-3xl font-display font-bold text-navy-900 lg:mt-12">
                Where Every <span className="text-ocean-500">Ride</span> Tells a Story.
              </h4>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Popup */}
      
        {selectedIdx !== null && (
          <div
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-12 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-colors z-[110]"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Current Image */}
            <img
              key={selectedIdx}
              src={allImages[selectedIdx]}
              alt="Gallery Fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-12 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-colors z-[110]"
            >
              <ChevronRight size={32} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              {selectedIdx + 1} / {allImages.length}
            </div>
          </div>
        )}
      
    </section>
  );
}

