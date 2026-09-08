"use client";

import { useState } from "react";
import { serviceCategories } from "@/data/services";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const categories = serviceCategories.map((c) => ({ name: c.shortName || c.name, slug: c.id }));

  const results = categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="mx-auto max-w-5xl px-5 pt-6 lg:px-10 lg:pt-12">
        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search treatments, spas, therapists..."
            className="w-full rounded-full border border-black/[0.06] px-4 py-3 text-base outline-none"
            autoFocus
          />
        </div>

        <div className="mt-6">
          {query === "" ? (
            <p className="text-sm text-black/50">
              Search for a treatment or service.
            </p>
          ) : (
            <div>
              {results.length === 0 ? (
                <p className="text-sm text-black/60">No results</p>
              ) : (
                results.map((r) => (
                  <div key={r.slug} className="py-3 border-b">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#eee]" />
                      <div>
                        <div className="font-medium">{r.name}</div>
                        <div className="text-sm text-black/60">Category</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
