import React from 'react';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Demo content mapping based on slug
  const blogs = {
    "tempo-traveler-group-trips": {
      title: "Why Tempo Travelers Are Perfect for Group Trips",
      date: "10 Oct 2026",
      image: "https://picsum.photos/1200/600?grayscale&random=1",
      content: "Discover the unparalleled comfort and convenience of booking a Tempo Traveler for your next family vacation or corporate outing. From spacious seating to ample luggage room, here is everything you need to know. Tempo travelers provide a unique combination of personal space and group togetherness. Whether you're navigating winding hill station roads or cruising down the highway, they offer safety, entertainment systems, and luxurious reclining seats."
    },
    "weekend-getaways-from-delhi": {
      title: "Top 5 Weekend Getaways from Delhi by Tempo Traveler",
      date: "12 Oct 2026",
      image: "https://picsum.photos/1200/600?grayscale&random=2",
      content: "Planning a quick escape from the city? Explore these top 5 destinations that are perfect for a weekend trip in a comfortable Tempo Traveler. 1. Jaipur - The Pink City. 2. Agra - The City of Taj. 3. Rishikesh - For adventure seekers. 4. Manali - For snow lovers. 5. Shimla - The Queen of Hills. Traveling in a group makes these trips exponentially more fun and budget-friendly!"
    },
    "choosing-right-tempo-traveler": {
      title: "How to Choose the Right Tempo Traveler Size",
      date: "15 Oct 2026",
      image: "https://picsum.photos/1200/600?grayscale&random=3",
      content: "9-seater, 12-seater, or 16-seater? Choosing the right size can make or break your group trip. Learn the differences and pick the best one for your travel needs. For small families, a 9-seater Maharaja Tempo Traveler offers ultra-luxury seats. For medium groups, a 12-seater is ideal. If you're traveling with extended family or a corporate group, a 16-seater ensures everyone travels together without feeling cramped."
    }
  };

  const blog = blogs[params.slug as keyof typeof blogs] || {
    title: "Blog Post Not Found",
    date: "",
    image: "https://picsum.photos/1200/600?grayscale",
    content: "Sorry, the article you are looking for does not exist."
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-ocean-500 hover:underline mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-80 object-cover rounded-3xl mb-12 shadow-2xl" 
        />
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
          {blog.title}
        </h1>
        <p className="text-[#94a3b8] mb-12">{blog.date}</p>
        <div className="text-lg leading-relaxed text-[#d1d5db]">
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
}
