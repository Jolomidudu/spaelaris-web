"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const locations = ["Lagos", "Abuja"];

function BackIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

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
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.5a7 7 0 0 0-7 7c0 5.1 7 12 7 12s7-6.9 7-12a7 7 0 0 0-7-7Zm0 9.7a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
    </svg>
  );
}

export default function LocationPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(search.toLowerCase())
  );

  const selectLocation = (location: string) => {
    localStorage.setItem("spa-elaris-location", location);

    router.push("/");
  };

  return (
    <main className="min-h-screen bg-white px-5 pt-8 text-[#111111] sm:px-8">
      <div className="mx-auto max-w-xl">
        {/* HEADER */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back"
            className="flex h-10 w-10 items-center justify-center"
          >
            <BackIcon />
          </button>

          <h1 className="text-[32px] font-semibold tracking-[-0.03em]">
            Location
          </h1>
        </div>

        {/* SEARCH */}
        <div className="mt-8 flex h-[92px] items-center rounded-[22px] border-2 border-[#7356E8] px-6">
          <SearchIcon />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search location"
            className="ml-5 min-w-0 flex-1 bg-transparent text-[20px] outline-none placeholder:text-black/25"
          />
        </div>

        {/* CURRENT LOCATION */}
        <button
          type="button"
          className="mt-8 flex w-full items-center gap-5 rounded-2xl py-2 text-left"
        >
          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#7356E8]/[0.08] text-[#7356E8]">
            <LocationIcon />
          </div>

          <span className="text-[20px] font-medium">
            Current location
          </span>
        </button>

        {/* CITY OPTIONS */}
        <div className="mt-8">
          <p className="mb-3 px-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/40">
            Choose your location
          </p>

          {filteredLocations.map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => selectLocation(location)}
              className="flex w-full items-center justify-between border-b border-black/[0.08] px-1 py-5 text-left transition hover:bg-black/[0.02]"
            >
              <span className="text-[19px] font-medium">
                {location}
              </span>

              <span className="text-black/30">›</span>
            </button>
          ))}

          {filteredLocations.length === 0 && (
            <p className="px-1 py-5 text-sm text-black/40">
              No locations found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}