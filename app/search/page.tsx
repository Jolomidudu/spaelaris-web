"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, X } from "lucide-react";
import { serviceCategories } from "@/data/services";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const categories = serviceCategories.map((c) => ({ name: c.shortName || c.name, slug: c.id }));

  const results = categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="min-h-screen bg-[#f7f6ef] pb-24 text-[#26301c]">
      <header className="bg-[#26301c] px-5 pb-8 pt-5 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <Link href="/explore" aria-label="Back to explore" className="rounded-full p-2 transition hover:bg-white/10">
              <ArrowLeft size={21} strokeWidth={1.8} />
            </Link>
            <Link href="/explore" aria-label="Close search" className="rounded-full p-2 transition hover:bg-white/10">
              <X size={22} strokeWidth={1.8} />
            </Link>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">Explore Spa Elaris</p>
          <h1 className="mt-3 font-[var(--font-lora)] text-3xl font-medium sm:text-4xl">Find your treatment.</h1>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pt-6 sm:px-8 lg:pt-10">
        <div className="relative flex items-center gap-3">
          <Search size={20} className="absolute left-4 text-[#66703f]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search treatments or services"
            className="w-full rounded-2xl border border-[#66703f]/20 bg-white px-12 py-4 text-base shadow-sm outline-none transition placeholder:text-[#606454]/65 focus:border-[#66703f] focus:ring-4 focus:ring-[#66703f]/10"
            autoFocus
          />
        </div>

        <div className="mt-6">
          {query === "" ? (
            <p className="text-sm text-[#606454]">
              Browse our treatment collections or start typing to search.
            </p>
          ) : (
            <div>
              {results.length === 0 ? (
                <p className="rounded-2xl bg-white p-6 text-sm text-[#606454]">No results found. Try another treatment or service.</p>
              ) : (
                results.map((r) => (
                  <Link href={`/services/${r.slug}`} key={r.slug} className="block border-b border-[#66703f]/10 py-4 transition hover:bg-white/60">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#66703f] text-sm font-semibold text-white">{r.name[0]}</div>
                      <div>
                        <div className="font-medium">{r.name}</div>
                        <div className="mt-1 text-sm text-[#606454]">Service category</div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
