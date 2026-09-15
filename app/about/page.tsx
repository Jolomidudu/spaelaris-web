"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MoreVertical, X } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#26301c]">
      <header className="sticky top-0 z-40 flex min-h-[72px] items-center border-b border-black/[0.08] bg-white/50 px-5 py-3 shadow-sm backdrop-blur-xl lg:hidden">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Back to home" className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#DEC8B0] text-[#354329] shadow-sm transition hover:bg-[#d6b894]">
            <ArrowLeft size={21} strokeWidth={2.2} />
          </Link>
          <h1 className="text-[17px] font-semibold text-[#111]">About Spa Elaris</h1>
        </div>
        <button type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="absolute right-[50px] flex h-[42px] w-[42px] items-center justify-center rounded-full text-[#354329] transition hover:bg-[#DEC8B0]/50">
          <MoreVertical size={22} strokeWidth={2.6} />
        </button>
      </header>

      <header className="hidden border-b border-[#66703f]/15 bg-white/70 px-5 py-5 backdrop-blur-xl lg:block sm:px-8">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <Link
            href="/"
            aria-label="Back to explore"
            className="rounded-full p-2 text-[#26301c] transition hover:bg-[#66703f]/10"
          >
            <ArrowLeft size={22} strokeWidth={1.8} />
          </Link>
          <h1 className="text-2xl font-semibold">About Spa Elaris</h1>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-[#26301c] px-6 pb-10 pt-8 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">Spa Elaris</span>
            <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="rounded-full p-2 text-white/80 hover:bg-white/10"><X size={22} /></button>
          </div>
          <nav className="mt-12 flex flex-col">
            {[{ label: "Home", href: "/" }, { label: "About us", href: "/about" }, { label: "Services", href: "/services" }, { label: "Gallery", href: "/gallery" }, { label: "Contact", href: "/contact" }, { label: "Client login", href: "/profile" }].map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-5 text-3xl font-light">{item.label}</Link>
            ))}
          </nav>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[440px]">
          <Image
            src="/seoffice.png"
            alt="Spa Elaris office"
            fill
            priority
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <article className="mt-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">The Spa Elaris standard</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight sm:text-6xl">
            Wellness, made personal.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[#606454]">
            <p>
              Spa Elaris is a modern wellness destination created for people who want their care to feel considered, calm and genuinely personal.
            </p>
            <p>
              Our spaces bring together advanced skin care, restorative body treatments and beauty rituals with the warmth of thoughtful human attention. Every appointment begins with listening and ends with you feeling more like yourself.
            </p>
            <p>
              From the first welcome to the final moment of your visit, our team is here to make well-being feel easy to return to.
            </p>
          </div>
        </article>

        <section className="mt-14 grid gap-4 border-t border-[#66703f]/15 pt-8 sm:grid-cols-3">
          {[
            ["01", "Thoughtful care", "Every treatment is shaped around you."],
            ["02", "Expert hands", "Skilled professionals, carefully chosen."],
            ["03", "Quiet confidence", "A peaceful space for lasting renewal."],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-2xl bg-white p-5 shadow-sm">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#66703f]">{number}</span>
              <h3 className="mt-5 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#606454]">{description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}