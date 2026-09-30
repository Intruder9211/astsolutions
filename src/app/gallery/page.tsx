"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const allImages = [
  "/images/1.png",
  "/images/1_1.png",
  "/images/2.png",
  "/images/2_1.png",
  "/images/3.png",
  "/images/3_1.png",
  "/images/4.png",
  "/images/airport_concierge.jpg",
  "/images/Chevrolet-Tavera.jpg",
  "/images/city_transfer.jpg",
  "/images/corporate_travel.jpg",
  "/images/hero_bg.jpg",
  "/images/Innova.jpg",
  "/images/premium_group.jpg",
  "/images/Suzuki-Dezre.jpg",
  "/images/Suzuki-Ertiga.jpg",
  "/images/Toyota-Etio.jpg",
  "/images/Toyota-Innova.jpg",
  "/images/transparent_pricing.jpg",
  "/images/wedding_fleet.jpg",
  "/images/gallery/1.webp",
  "/images/gallery/10.webp",
  "/images/gallery/11.webp",
  "/images/gallery/12.webp",
  "/images/gallery/13.webp",
  "/images/gallery/15.webp",
  "/images/gallery/16.webp",
  "/images/gallery/18.webp",
  "/images/gallery/2.webp",
  "/images/gallery/26.webp",
  "/images/gallery/3.webp",
  "/images/gallery/32.webp",
  "/images/gallery/33.webp",
  "/images/gallery/34.webp",
  "/images/gallery/39.webp",
  "/images/gallery/4.webp",
  "/images/gallery/43.webp",
  "/images/gallery/46.webp",
  "/images/gallery/5.webp",
  "/images/gallery/6.webp",
  "/images/gallery/62.webp",
  "/images/gallery/7.webp",
  "/images/gallery/8.webp",
  "/images/gallery/9.webp"
];

// Shuffle array so it looks more organic
const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(12);
  const observerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for Infinite Scrolling
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && visibleCount < shuffledImages.length) {
        // Add artificial delay for smooth loading feel
        setTimeout(() => {
          setVisibleCount((prev) => Math.min(prev + 8, shuffledImages.length));
        }, 500);
      }
    }, {
      root: null,
      rootMargin: "400px", // Load 400px before the user reaches the bottom
      threshold: 0.1
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [visibleCount]);

  return (
    <main className="min-h-screen bg-sand-100 text-navy-900 pt-32 pb-24 px-4 selection:bg-ocean-500 selection:text-white">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-16 relative">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm font-medium text-navy-900/60 mb-8 bg-white/40 inline-flex px-4 py-2 rounded-full border border-navy-900/5 backdrop-blur-sm mx-auto w-max">
            <a href="/" className="hover:text-ocean-600 transition-colors">Home</a>
            <span className="text-navy-900/30">/</span>
            <span className="text-ocean-600 font-bold">Gallery</span>
          </nav>

          <span className="uppercase tracking-widest text-xs font-bold text-ocean-600 mb-4 block">
            Our Fleet & Memories
          </span>
          <h1 
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-navy-900"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            AST Gallery
          </h1>
          <p className="text-lg md:text-xl text-navy-900/70 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the extraordinary experiences, premium vehicles, and world-class service that define AST Cab Service.
          </p>
        </div>

        {/* MASONRY GRID CSS */}
        <style dangerouslySetInnerHTML={{__html: `
          .masonry-grid {
            column-count: 1;
            column-gap: 1.5rem;
          }
          @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
          @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
          @media (min-width: 1280px) { .masonry-grid { column-count: 4; } }
          
          .masonry-item {
            break-inside: avoid;
            margin-bottom: 1.5rem;
          }
        `}} />

        <div className="masonry-grid">
          {shuffledImages.slice(0, visibleCount).map((src, i) => (
            <div 
              key={i} 
              className="masonry-item group relative overflow-hidden rounded-2xl bg-navy-900/5 border border-navy-900/10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Note: We use a standard img tag for masonry auto-height support rather than next/image fill */}
              <img 
                src={src} 
                alt={`AST Cab Gallery Image ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* LOADING SENTINEL */}
        <div ref={observerRef} className="w-full h-24 flex items-center justify-center mt-8">
          {visibleCount < shuffledImages.length && (
            <div className="flex items-center gap-2 text-ocean-600 font-medium animate-pulse">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-ocean-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading more images...
            </div>
          )}
          {visibleCount >= shuffledImages.length && (
            <p className="text-navy-900/40 text-sm font-medium">You've reached the end of the gallery.</p>
          )}
        </div>

      </div>
    </main>
  );
}
