"use client";

import React, { use } from 'react';
import Image from 'next/image';
import { Phone, CheckCircle2, MapPin, Mail, Globe, ChevronRight, Home } from 'lucide-react';
import RoutesSection from '@/components/RoutesSection';
import Link from 'next/link';

// Helper for dynamic content generation based on slug
const getServiceContent = (slug: string) => {
  const rawTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  // Select a deterministic image from 1 to 40 based on slug length or character codes
  const imgIndex = (slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 35) + 1;
  const heroImg = `/images/gallery/${imgIndex}.webp`;
  // Special case for Delhi to Agra
  if (slug === 'delhi-to-agra-taxi') {
    return {
      title: "Reliable Taxi from Delhi to Agra",
      heroImg: "/images/gallery/13.webp",
      themeColor: "#e0e7ff", // Light Indigo
      intro: "Traveling from Delhi to Agra is one of the most popular journeys in India, whether for leisure, business, or family trips. Known worldwide for the majestic Taj Mahal, Agra attracts thousands of visitors daily. If you’re looking for a comfortable, safe, and affordable taxi from Delhi to Agra, look no further than AstCab.com – your trusted travel partner. At AstCab, we specialize in providing premium one-way and round-trip taxi services with professional drivers, well-maintained cars, and 24/7 customer support. Whether you’re planning a family outing, a same-day Taj Mahal tour, or a business trip, our taxis ensure a smooth ride.",
      sections: [
        {
          heading: "Why Choose AstCab for Delhi to Agra Taxi?",
          content: "",
          list: [
            "Experienced Drivers – Professional, courteous, and well-versed with Delhi–Agra routes.",
            "Clean & Comfortable Cars – Choose from Sedans, SUVs, Tempo Travellers, or Luxury Cars.",
            "Affordable Pricing – Transparent fares with no hidden charges.",
            "24/7 Booking Support – Book via call, WhatsApp, or email anytime.",
            "On-Time Pickup & Drop – We value your time and ensure punctual service.",
            "Safe Rides – Sanitized cars, GPS tracking, and reliable drivers."
          ]
        },
        {
          heading: "Delhi to Agra Distance and Travel Time",
          content: "Distance: ~230 km (via Yamuna Expressway)\nTravel Time: 3.5 – 4 hours depending on traffic\nRoute: Delhi → Greater Noida → Yamuna Expressway → Agra\n\nOur drivers take the fastest and safest route, ensuring you reach Agra comfortably without worrying about directions or road conditions.",
          list: []
        },
        {
          heading: "Delhi to Agra Taxi Options",
          content: "",
          list: [
            "One-Way Taxi from Delhi to Agra: Perfect if you only need a drop. Pay only for one side.",
            "Round-Trip Taxi: Ideal for tourists who want to return after sightseeing. Flexible return options.",
            "Same Day Agra Tour by Taxi: Visit the Taj Mahal and return by evening with a same-day package.",
            "Luxury Cars for Special Travel: Travel in style for corporate or special occasions.",
            "Tempo Traveller / Group Travel: Spacious and comfortable for large groups or families."
          ]
        },
        {
          heading: "Popular Attractions in Agra",
          content: "Our drivers can also suggest the best local eateries and shops during your trip.",
          list: [
            "Taj Mahal – Symbol of love and one of the Seven Wonders of the World.",
            "Agra Fort – A UNESCO World Heritage Site showcasing Mughal grandeur.",
            "Mehtab Bagh – A scenic garden offering breathtaking views of the Taj.",
            "Fatehpur Sikri – Historic city built by Emperor Akbar (optional stop).",
            "Agra Markets – Famous for marble crafts, sweets (Petha), and leather goods."
          ]
        }
      ]
    };
  }

  // Dynamic template for ANY other route
  return {
    title: `${rawTitle} – Affordable & Comfortable Travel with AST Cab`,
    heroImg: heroImg,
    themeColor: "#f3f4f6", // Gray 100
    intro: `When planning group travel or a quick outstation trip, comfort, affordability, and reliability are top priorities. Whether it’s a family outing, corporate travel, airport transfer, wedding function, or an outstation trip, AST Cab proudly offers the best ${rawTitle}. With years of experience in the travel industry, AST Cab is a trusted name for cab and tempo traveller rentals in Delhi, Ghaziabad, Noida, and nearby regions. Our well-maintained fleet, professional drivers, and transparent pricing make us the preferred choice.`,
    sections: [
      {
        heading: `Why Choose ${rawTitle}?`,
        content: `Booking ${rawTitle} is ideal when you want the perfect balance of space, comfort, and affordability. If you’re searching for a reasonable price, AST Cab offers value-for-money packages without compromising comfort.`,
        list: [
          "Spacious seating and optimal legroom for all passengers",
          "Comfortable push-back seats for long journeys",
          "Ample luggage space for heavy travel bags",
          "Air-conditioned interiors for all-weather comfort",
          "Suitable for both city rides and long-distance outstation travel"
        ]
      },
      {
        heading: `Pricing & Packages for ${rawTitle}`,
        content: "At AST Cab, we believe in transparent and competitive pricing. Our rental charges are designed to suit different travel needs and budgets with absolutely no hidden charges. Factors that affect pricing include:",
        list: [
          "Travel duration (hourly, daily, multi-day packages available)",
          "Distance covered (local city tours or outstation highway trips)",
          "Type of trip (airport transfers, sightseeing, corporate, wedding logistics)",
          "AC or Non-AC requirement"
        ]
      },
      {
        heading: "Local & Outstation Services",
        content: "Our packages are highly flexible. For local travel in Delhi NCR, explore popular places like India Gate, Red Fort, and Akshardham. For outstation trips, we offer comfortable rides to:",
        list: [
          "Jaipur & Agra (Golden Triangle Tours)",
          "Haridwar & Rishikesh (Pilgrimage & Adventure)",
          "Manali & Shimla (Hill Station Retreats)",
          "Mussoorie, Mathura & Vrindavan",
          "Chandigarh & Punjab Regions"
        ]
      },
      {
        heading: "Perfect for All Travel Needs",
        content: "",
        list: [
          "Family Trips: Comfortable travel with ample space for kids and elders",
          "Corporate Travel: Professional, punctual, and discrete service",
          "Airport Transfers: On-time pickup with dedicated luggage space",
          "Wedding & Events: Smooth guest transportation and logistics"
        ]
      },
      {
        heading: "Why AST Cab is the Best Choice in Delhi NCR",
        content: "Our repeat customers and positive reviews reflect our commitment to quality service. We offer the perfect balance of comfort, affordability, and professionalism.",
        list: [
          "Highly competitive pricing in the market",
          "Clean, sanitized, and well-maintained vehicles",
          "Experienced, courteous, and police-verified drivers",
          "24/7 customer support via Call and WhatsApp",
          "Easy and seamless booking process",
          "First-aid kits and safety measures in every vehicle"
        ]
      }
    ]
  };
}

export default function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = use(params).slug;
  const content = getServiceContent(slug);
  const rawTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-sand-100 text-navy-900 selection:bg-ocean-500 selection:text-white pb-0">
      
      {/* HERO SECTION */}
      <section 
        className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden"
        style={{ backgroundColor: content.themeColor }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-[55%]">
            
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm font-medium text-navy-900/60 mb-6 bg-white/40 inline-flex px-4 py-2 rounded-full backdrop-blur-sm border border-navy-900/5">
              <Link href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
                <Home size={14} />
                Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-ocean-600 transition-colors">
                Services
              </Link>
              <ChevronRight size={14} />
              <span className="text-ocean-600 font-bold truncate max-w-[200px]">{rawTitle}</span>
            </nav>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight mb-6 text-navy-900"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              {content.title}
            </h1>
            <p className="text-base md:text-lg text-navy-900/80 font-light mb-8 max-w-xl leading-relaxed">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`https://api.whatsapp.com/send?phone=919717806764&text=Hello%20AST%20Cab,%20I%20want%20to%20know%20more%20about%20${content.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
              >
                Book on WhatsApp
              </a>
              <a 
                href="tel:+919717806764"
                className="bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
              <Image 
                src={content.heroImg} 
                alt={content.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM CONTENT SECTIONS */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto bg-white my-12 rounded-[2rem] shadow-sm border border-navy-900/5">
        <div className="p-4 md:p-8 space-y-16">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-6">
              <h2 
                className="text-3xl md:text-4xl font-medium text-ocean-600 border-b border-ocean-600/20 pb-4"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                {sec.heading}
              </h2>
              
              {sec.content && (
                <div className="text-lg text-navy-900/80 leading-relaxed font-light whitespace-pre-wrap">
                  {sec.content}
                </div>
              )}
              
              {sec.list && sec.list.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {sec.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-sand-100/50 rounded-xl border border-navy-900/5">
                      <CheckCircle2 className="text-ocean-500 shrink-0 mt-1" size={20} />
                      <span className="font-medium text-navy-900/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="bg-navy-900 py-16 px-4 md:px-8 text-center text-white">
        <h2 
          className="text-4xl font-medium mb-6"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Contact AST Cab Today
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
          Book your {content.title} with AST Cab today and enjoy affordable, safe, and comfortable travel.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          <a href="/" className="flex items-center gap-3 hover:text-ocean-500 transition-colors">
            <Globe className="text-ocean-500" />
            <span>astcab.com</span>
          </a>
          <a href="tel:+919717806764" className="flex items-center gap-3 hover:text-ocean-500 transition-colors">
            <Phone className="text-ocean-500" />
            <span>+91-9717806764</span>
          </a>
          <a href="mailto:promotions.ast@gmail.com" className="flex items-center gap-3 hover:text-ocean-500 transition-colors">
            <Mail className="text-ocean-500" />
            <span>promotions.ast@gmail.com</span>
          </a>
          <a href="https://maps.google.com/?q=Rajnagar,Ghaziabad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-ocean-500 transition-colors">
            <MapPin className="text-ocean-500" />
            <span>Rajnagar, Ghaziabad</span>
          </a>
        </div>
      </section>

      {/* ROUTES SECTION */}
      <div className="bg-sand-100 py-16">
        <RoutesSection />
      </div>

    </main>
  );
}
