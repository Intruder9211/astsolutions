"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "tempo-traveler-group-trips",
    title: "Why Tempo Travelers Are Perfect for Group Trips",
    date: "10 Oct 2026",
    image: "https://picsum.photos/600/400?grayscale&random=1",
    author: "AST Solutions",
    excerpt: "Discover the unparalleled comfort and convenience of booking a Tempo Traveler for your next family vacation or corporate outing. From spacious seating to ample luggage room, here is everything you need to know.",
  },
  {
    slug: "weekend-getaways-from-delhi",
    title: "Top 5 Weekend Getaways from Delhi by Tempo Traveler",
    date: "12 Oct 2026",
    image: "https://picsum.photos/600/400?grayscale&random=2",
    author: "AST Solutions",
    excerpt: "Planning a quick escape from the city? Explore these top 5 destinations that are perfect for a weekend trip in a comfortable Tempo Traveler. Perfect for large groups and families.",
  },
  {
    slug: "choosing-right-tempo-traveler",
    title: "How to Choose the Right Tempo Traveler Size",
    date: "15 Oct 2026",
    image: "https://picsum.photos/600/400?grayscale&random=3",
    author: "AST Solutions",
    excerpt: "9-seater, 12-seater, or 16-seater? Choosing the right size can make or break your group trip. Learn the differences and pick the best one for your travel needs.",
  }
];

export default function BlogsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpanded(expanded === slug ? null : slug);
  };

  return (
    <section className="py-32 bg-[#050505] text-white px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto mb-20 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6 text-white text-center">Travel Insights & Stories</h2>
        <p className="text-[#94a3b8] text-xl max-w-2xl text-center">Discover expert tips, travel guides, and inspiring stories for your next journey with our tempo travelers and premium fleet.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <article 
            key={blog.slug}
            className="group relative bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            {/* Top Visual Area (Image) */}
            <div className="relative w-full h-64 overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 bg-[#0d0d0d]/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
              
              {/* Expand Button */}
              <button 
                onClick={() => toggleExpand(blog.slug)}
                className="absolute bottom-0 right-0 w-16 h-16 bg-[#0d0d0d] rounded-tl-[2rem] flex items-center justify-center text-white hover:text-ocean-500 transition-colors z-20 border-t border-l border-white/5"
              >
                {expanded === blog.slug ? <Minus size={24} /> : <Plus size={24} />}
              </button>
            </div>

            {/* Content Area */}
            <div className="p-8 pb-6 flex flex-col flex-1">
              <p className="text-ocean-500 text-sm font-medium mb-3">{blog.date}</p>
              <h3 className="text-2xl font-display font-medium tracking-tight text-white leading-snug">{blog.title}</h3>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${expanded === blog.slug ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
              >
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
                <Link href={`/blogs/${blog.slug}`} className="text-ocean-500 font-medium text-sm hover:text-ocean-400 transition-colors flex items-center gap-2">
                  Read Full Article <ArrowRight size={16} />
                </Link>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#94a3b8]">
                  <span className="text-ocean-500 font-medium">@</span> {blog.author}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-center">
         <Link href="/blogs" className="inline-flex items-center justify-center px-8 py-4 bg-ocean-500 hover:bg-ocean-600 text-white rounded-full font-medium transition-colors duration-300 gap-2">
            View All Blogs <ArrowRight size={18} />
         </Link>
      </div>
    </section>
  );
}
