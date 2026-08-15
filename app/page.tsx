"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import AboutExperience from "@/components/AboutExperience";
import GalleryPreview from "@/components/GalleryPreview";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#252820]">
      {/* NAVIGATION */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            className="relative z-50 text-2xl font-semibold tracking-[0.18em] text-white sm:text-3xl"
          >
            SPAELARIS
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-white/90 transition hover:text-[#d8c487]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-3 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-[#3f4a2c]"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-md lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-[#3f4a2c]/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 py-4 text-lg text-white/90 transition hover:text-[#d8c487]"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#d8c487] px-5 py-4 font-medium text-[#303822]"
                >
                  Contact Us
                  <ArrowUpRight size={17} />
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2200&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Olive gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#26301c]/95 via-[#3f4a2c]/75 to-[#66703f]/55" />

        {/* Soft atmospheric glow */}
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#b7bd8a]/20 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            {/* Small label */}
            <div className="mb-7 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#d8c487]">
              <Sparkles size={17} />
              <span>Luxury Wellness & Beauty</span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
              Relax.
              <br />
              <span className="font-medium italic text-[#d8c487]">
                Rejuvenate.
              </span>
              <br />
              Restore.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              Discover a sanctuary where beauty, wellness and tranquility
              come together. A carefully curated experience designed around
              you.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#d8c487] px-7 py-4 text-sm font-semibold text-[#303822] transition duration-300 hover:bg-white"
              >
                Explore Services
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#about"
                className="flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#3f4a2c]"
              >
                Discover Spaelaris
              </a>
            </div>
          </div>

          {/* Bottom hero detail */}
          <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 text-white/70 sm:flex-row sm:items-center">
            <p className="text-xs uppercase tracking-[0.2em]">
              A sanctuary for body & mind
            </p>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
              <span className="h-px w-10 bg-[#d8c487]" />
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <AboutExperience />

      {/* SERVICES PREVIEW */}
      <section
        id="services"
        className="bg-[#3f4a2c] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#d8c487]">
                Our Treatments
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-[-0.03em] text-white sm:text-5xl">
                Signature services
              </h2>
            </div>

            <a
              href="#services"
              className="flex items-center gap-2 text-sm text-white/80 transition hover:text-[#d8c487]"
            >
              View all services
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Massage Therapy",
                text: "Relax your body and release everyday tension.",
                image:
                  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Facial Rituals",
                text: "Thoughtful treatments designed to restore your glow.",
                image:
                  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Body Wellness",
                text: "Nourishing treatments for complete relaxation.",
                image:
                  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[2rem] bg-[#66703f]"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#26301c]/80 to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-light text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/70">
                    {service.text}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d8c487]"
                  >
                    Discover treatment
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
     <GalleryPreview />

      {/* MEMBERSHIP */}
      <section
        id="membership"
        className="bg-[#ecebdd] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#66703f]">
              Membership
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.03em] text-[#3f4a2c] sm:text-5xl">
              Make wellness part of your lifestyle.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Silver", "Gold", "Platinum"].map((plan, index) => (
              <div
                key={plan}
                className={`rounded-[2rem] p-8 ${
                  index === 1
                    ? "bg-[#3f4a2c] text-white"
                    : "bg-white text-[#3f4a2c]"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.2em] opacity-60">
                  Membership
                </p>

                <h3 className="mt-5 text-3xl font-light">{plan}</h3>

                <p className="mt-5 leading-7 opacity-70">
                  Exclusive wellness benefits designed to keep you feeling
                  your best.
                </p>

                <button className="mt-8 flex items-center gap-2 text-sm font-semibold">
                  Learn more
                  <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-[#26301c] via-[#3f4a2c] to-[#66703f] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#b7bd8a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d8c487]">
            Begin your journey
          </p>

          <h2 className="mt-5 text-5xl font-light tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Your wellness journey
            <br />
            <span className="italic text-[#d8c487]">starts here.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-white/70">
            Step into Spaelaris and discover a moment created entirely for
            you.
          </p>

          <a
            href="mailto:hello@spaelaris.com"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#d8c487] px-8 py-4 text-sm font-semibold text-[#303822] transition hover:bg-white"
          >
            Contact Spaelaris
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#252820] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-2xl tracking-[0.18em]">SPAELARIS</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                Luxury wellness, beauty and relaxation designed around you.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-[#d8c487]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-7 text-xs text-white/40 sm:flex-row">
            <p>© 2026 Spaelaris. All rights reserved.</p>
            <p>Luxury Wellness & Beauty</p>
          </div>
        </div>
      </footer>
    </main>
  );
}