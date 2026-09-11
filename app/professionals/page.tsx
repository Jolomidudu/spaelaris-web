"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Star } from "lucide-react";
import { useState } from "react";

const professionals = [
  { name: "Amara", rating: "4.9", role: "Skin specialist", image: "/facial.jpg" },
  { name: "Tomi", rating: "4.8", role: "Wellness therapist", image: "/massage.jpg" },
  { name: "Zainab", rating: "5.0", role: "Beauty professional", image: "/hot-stone.jpg" },
  { name: "Nneka", rating: "4.9", role: "Wellness therapist", image: "/hero-spa.jpg" },
];

export default function ProfessionalsPage() {
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f6ef] px-5 pb-24 text-[#26301c] sm:px-8 lg:px-12">
      <header className="mx-auto flex max-w-6xl items-center gap-4 py-5">
        <Link
          href="/explore"
          aria-label="Back to explore"
          className="rounded-full p-2 text-[#26301c] transition hover:bg-[#66703f]/10"
        >
          <ArrowLeft size={22} strokeWidth={1.8} />
        </Link>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Spa Elaris</p>
          <h1 className="mt-1 font-[var(--font-lora)] text-2xl font-semibold sm:text-3xl">Select Professional</h1>
        </div>
      </header>

      <section className="mx-auto max-w-6xl border-t border-[#66703f]/15 pt-8">
        <p className="max-w-xl text-sm leading-6 text-[#606454]">
          Choose a member of our care team for your next Spa Elaris experience.
        </p>
        <div className="mt-8 grid gap-3 lg:grid-cols-4 lg:gap-5">
          {professionals.map((professional) => (
            <article
              key={professional.name}
              className={`flex items-center gap-4 rounded-2xl border p-3 shadow-sm transition-colors lg:flex-col lg:items-center lg:gap-3 lg:p-5 lg:text-center ${
                selectedProfessional === professional.name
                  ? "border-[#66703f] bg-[#66703f]/10"
                  : "border-[#66703f]/15 bg-white"
              }`}
            >
              <Image
                src={professional.image}
                alt={professional.name}
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 rounded-full object-cover lg:h-28 lg:w-28"
              />
              <div className="min-w-0 flex-1 lg:w-full lg:flex-none">
                <h2 className="truncate text-base font-semibold text-[#26301c]">{professional.name}</h2>
                <p className="mt-0.5 truncate text-xs text-[#606454]">{professional.role}</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-[#66703f] lg:justify-center">
                  <Star size={13} fill="currentColor" />
                  <span>{professional.rating}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  setSelectedProfessional((current) =>
                    current === professional.name ? null : professional.name,
                  )
                }
                aria-label={`${selectedProfessional === professional.name ? "Deselect" : "Select"} ${professional.name}`}
                className={`flex h-9 shrink-0 items-center justify-center rounded-full transition lg:mt-1 ${
                  selectedProfessional === professional.name
                    ? "w-9 bg-[#66703f] text-white"
                    : "bg-[#26301c] px-4 text-xs font-medium text-white hover:bg-[#66703f]"
                }`}
              >
                {selectedProfessional === professional.name ? <Check size={17} strokeWidth={2.2} /> : "Select"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}