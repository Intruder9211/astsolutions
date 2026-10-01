import React from 'react';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "tempo-traveler-group-trips",
    title: "Why Tempo Travelers Are Perfect for Group Trips",
    date: "10 Oct 2026",
    image: "https://picsum.photos/600/400?grayscale&random=1",
    author: "AST Solutions",
    excerpt: "Discover the unparalleled comfort and convenience of booking a Tempo Traveler for your next family vacation or corporate outing.",
  },
  {
    slug: "weekend-getaways-from-delhi",
    title: "Top 5 Weekend Getaways from Delhi by Tempo Traveler",
    date: "12 Oct 2026",
    image: "https://picsum.photos/600/400?grayscale&random=2",
    author: "AST Solutions",
    excerpt: "Planning a quick escape from the city? Explore these top 5 destinations that are perfect for a weekend trip in a comfortable Tempo Traveler.",
  },
  {
    slug: "choosing-right-tempo-traveler",
    title: "How to Choose the Right Tempo Traveler Size",
    date: "15 Oct 2026",
    image: "https://picsum.photos/600/400?grayscale&random=3",
    author: "AST Solutions",
    excerpt: "9-seater, 12-seater, or 16-seater? Choosing the right size can make or break your group trip. Learn the differences and pick the best one.",
  }
];

export default function BlogsArchive() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-display font-medium mb-6">Our Travel Blogs</h1>
        <p className="text-[#94a3b8] text-xl max-w-2xl mx-auto">
          Explore all our articles, tips, and guides for planning your perfect journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <article 
            key={blog.slug}
            className="group relative bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            {/* Top Visual Area (Image) */}
            <Link href={`/blogs/${blog.slug}`} className="relative w-full h-64 overflow-hidden border-b border-white/5 block">
              <div className="absolute inset-0 bg-[#0d0d0d]/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
            </Link>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-1">
              <p className="text-ocean-500 text-sm font-medium mb-3">{blog.date}</p>
              <Link href={`/blogs/${blog.slug}`}>
                <h3 className="text-2xl font-display font-medium tracking-tight text-white leading-snug hover:text-ocean-500 transition-colors">{blog.title}</h3>
              </Link>
              
              <div className="mt-4 flex-1 flex flex-col">
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-1">
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

      {/* Pagination UI */}
      <div className="flex justify-center items-center mt-16 gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/50 cursor-not-allowed">
          &larr;
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-ocean-500 text-white font-medium">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
          &rarr;
        </button>
      </div>
    </div>
  );
}
