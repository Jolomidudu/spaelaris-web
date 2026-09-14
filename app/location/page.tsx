"use client";

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

export default function LocationPage() {
  const router = useRouter();

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

          <h3 className="text-[20px] font-semibold tracking-[-0.03em]">
           Select Your Location
          </h3>
        </div>

        {/* CITY OPTIONS */}
        <div className="mt-8">
          <p className="mb-3 px-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/40">
            Choose your location
          </p>

          {locations.map((location) => (
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

        </div>
      </div>
    </main>
  );
}