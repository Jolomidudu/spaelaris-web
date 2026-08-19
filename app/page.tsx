
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";



const categories = [
  {
    name: "Med Facials",
    slug: "med-facials",
    icon: "face",
  },
  {
    name: "Foot & Hand Care",
    slug: "foot-hand-care",
    icon: "hand",
  },
  {
    name: "Elaris Massage",
    slug: "service-menu",
    icon: "bed",
  },
   {
    name: "Special Treatment",
    slug: "special-treatment",
    icon: "beauty",
  },
  {
    name: "Body Rituals",
    slug: "body-ritual",
    icon: "body",
  },
  {
    name: "Elaris Wax",
    slug: "wax",
    icon: "wax",
  },
  {
    name: "Elaris Lazer",
    slug: "lazer",
    icon: "steam",
  },
  {
    name: "Couple Packages",
    slug: "couple-packages",
    icon: "wellness",
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

function CategoryIcon({ type }: { type: string }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "grid") {
    return (
      <svg {...common}>
        <rect x="8" y="8" width="12" height="12" rx="1" />
        <rect x="28" y="8" width="12" height="12" rx="1" />
        <rect x="8" y="28" width="12" height="12" rx="1" />
        <rect x="28" y="28" width="12" height="12" rx="1" />
      </svg>
    );
  }

  if (type === "massage") {
    return (
      <svg {...common}>
        <path d="M10 29c7-7 14-9 27-7" />
        <path d="M13 34c5-2 10-2 15 0" />
        <path d="M29 10c-5 0-9 4-9 9v7" />
        <path d="M29 10h8c2 0 3 2 3 4v5c0 2-2 3-4 3l-7-1" />
      </svg>
    );
  }

  if (type === "facial") {
    return (
      <svg {...common}>
        <path d="M15 38c0-13 4-22 9-22s9 9 9 22" />
        <path d="M19 18c0-5 2-8 5-8s5 3 5 8" />
        <path d="M12 39h24" />
      </svg>
    );
  }

  if (type === "body") {
    return (
      <svg {...common}>
        <path d="M11 33c4-6 9-9 15-9s10 3 13 9" />
        <path d="M16 25c2-6 6-9 10-9s8 3 10 9" />
        <circle cx="24" cy="13" r="3" />
      </svg>
    );
  }

  if (type === "wax") {
    return (
      <svg {...common}>
        <path d="M14 38c4-10 6-17 10-26" />
        <path d="M25 12c2 1 5 3 7 6" />
        <path d="M11 40h18" />
        <path d="M14 38h13" />
      </svg>
    );
  }

  if (type === "steam") {
    return (
      <svg {...common}>
        <path d="M16 39c-2-4 3-6 1-10-2-4 3-6 1-10" />
        <path d="M24 39c-2-4 3-6 1-10-2-4 3-6 1-10" />
        <path d="M32 39c-2-4 3-6 1-10-2-4 3-6 1-10" />
      </svg>
    );
  }

  if (type === "beauty") {
    return (
      <svg {...common}>
        <path d="M19 10h10" />
        <path d="M20 10v27h8V10" />
        <path d="M18 37h12" />
        <path d="M21 6h6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="24" cy="24" r="14" />
      <path d="M24 10v14l9 6" />
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
            <CategoryIcon type={category.icon} />
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