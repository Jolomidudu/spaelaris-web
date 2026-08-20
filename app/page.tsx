
"use client";

import { useEffect, useState } from "react";
import {
 Webhook,
  Hand,
  HandHeart,
  Sparkles,
  Star,
  PersonStanding,
  Droplets,
  ScanLine,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";



const categories = [
  {
    name: "Med Facials",
    slug: "med-facials",
    icon: Webhook,
  },
  {
    name: "Foot & Hand Care",
    slug: "foot-hand-care",
    icon: Hand,
  },
  {
    name: "Elaris Massage",
    slug: "service-menu",
    icon: HandHeart,
  },
  {
    name: "Special Treatment",
    slug: "special-treatment",
    icon: Sparkles,
  },
  {
    name: "Body Rituals",
    slug: "body-ritual",
    icon: PersonStanding,
  },
  {
    name: "Elaris Wax",
    slug: "wax",
    icon: Droplets,
  },
  {
    name: "Elaris Lazer",
    slug: "lazer",
    icon: ScanLine,
  },
  {
    name: "Couple Packages",
    slug: "couple-packages",
    icon: Heart,
  },
];

const recommendations = [
  {
    title: "Signature Massage",
    location: "Spa Elaris",
    rating: "4.9",
    price: "₦50,000",
    image: "/massage.jpg",
  },
  {
    title: "Elaris Facial Ritual",
    location: "Spa Elaris",
    rating: "4.8",
    price: "₦35,000",
    image: "/facial.jpg",
  },
  {
    title: "Hot Stone Wellness",
    location: "Spa Elaris",
    rating: "4.9",
    price: "₦60,000",
    image: "/hot-stone.jpg",
  },
];

function SearchIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>

  );
}

function LocationIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.5a7 7 0 0 0-7 7c0 5.1 7 12 7 12s7-6.9 7-12a7 7 0 0 0-7-7Zm0 9.7a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}



export default function Home() {
 
  const [location, setLocation] = useState("Pick A Location");
const [activeCategory, setActiveCategory] = useState("All");
const [search, setSearch] = useState("");

  useEffect(() => {
    const savedLocation = localStorage.getItem("spa-elaris-location");

    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white pb-24 text-[#111111]">
      {/* TOP AREA */}
      <section className="px-5 pb-8 pt-8 sm:px-8 lg:mx-auto lg:max-w-7xl">
        {/* LOCATION */}

       <div className="mb-7">
  <Link
    href="/location"
    className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
  >
    <span className="text-[#7356E8]">
      <LocationIcon />
    </span>

    <span className="text-[16px] font-medium">
      {location}
    </span>

    <span className="ml-1">
      <ChevronDown />
    </span>
  </Link>
</div>

        {/* SEARCH */}
        <div className="flex h-[68px] items-center rounded-full border border-black/[0.12] bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
          <div className="ml-5 text-black">
            <SearchIcon />
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Browse all treatments"
            className="min-w-0 flex-1 bg-transparent px-4 text-[17px] outline-none placeholder:text-black/40"
          />

          <button
            type="button"
            className="h-[56px] rounded-full bg-[#111111] px-7 text-[16px] font-medium text-white transition hover:bg-black/80"
          >
            Search
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
    {/* CATEGORIES */}
<section className="px-5 sm:px-8 lg:mx-auto lg:max-w-7xl">
  <div className="grid grid-cols-4 gap-x-4 gap-y-7">
    {categories.map((category) => {
      const active = activeCategory === category.name;

      return (
        <Link
  key={category.slug}
  href={
    category.slug === "all"
      ? "/services"
      : `/services/${category.slug}`
  }
  onClick={() => setActiveCategory(category.name)}
>
          <div
            className={`flex h-[92px] w-full max-w-[124px] items-center justify-center rounded-[28px] border transition ${
              active
                ? "border-[#7356E8] bg-[#7356E8]/[0.06]"
                : "border-black/[0.08] bg-[#f7f7f7]"
            }`}
          >
            <category.icon
  size={40}
  strokeWidth={1.8}
  className="text-[#111111]"
/>
          </div>

          <span
            className={`mt-3 max-w-[120px] text-[14px] leading-5 ${
              active ? "font-semibold" : "font-medium"
            }`}
          >
            {category.name}
          </span>
        </Link>
      );
    })}
  </div>
</section>

      {/* RECOMMENDED */}
      <section className="mt-12">
        <div className="px-5 sm:px-8 lg:mx-auto lg:max-w-7xl">
          <h2 className="text-[30px] font-semibold tracking-[-0.03em]">
            Recommended
          </h2>
        </div>

        <div className="mt-5 flex gap-5 overflow-x-auto px-5 pb-5 [scrollbar-width:none] sm:px-8 lg:mx-auto lg:max-w-7xl">
          {recommendations.map((item) => (
            <Link
              href="/services"
              key={item.title}
              className="group min-w-[320px] max-w-[320px] flex-none sm:min-w-[370px] sm:max-w-[370px]"
            >
              <div className="relative h-[350px] overflow-hidden rounded-[24px] bg-[#eeeeee]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 370px, 320px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[14px] font-medium shadow-sm">
                  Featured
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[19px] font-semibold leading-6">
                    {item.title}
                  </h3>

                  <span className="flex shrink-0 items-center gap-1 text-[16px] font-semibold">
                    <span className="text-[#F5B900]">★</span>
                    {item.rating}
                  </span>
                </div>

                <p className="mt-1 text-[14px] text-black/50">
                  {item.location}
                </p>

                <p className="mt-2 text-[15px] font-medium">
                  {item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCATION INFO */}
      <section className="mx-5 mt-8 rounded-3xl bg-[#344329] p-6 text-white sm:mx-8 lg:mx-auto lg:max-w-7xl">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c487]">
          Spa Elaris
        </p>

        <h2 className="mt-3 text-2xl font-medium">
          Wellness experiences in {location}.
        </h2>

        <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
          Discover treatments and rituals designed around how you want
          to feel.
        </p>
      </section>

      <BottomNav />
    </main>
  );
}