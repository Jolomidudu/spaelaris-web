"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, MoreVertical, X } from "lucide-react";
import {
  serviceCategories,
  formatPrice,
} from "@/data/services";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f2e9] text-[#354329]">
      <header className={`sticky top-0 z-40 flex items-center justify-between rounded-b-2xl px-5 py-3 transition-colors duration-300 lg:hidden ${headerScrolled ? "border-b border-white/40 bg-white/70 shadow-sm backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Back to home"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DEC8B0] text-[#354329] shadow-sm transition hover:bg-[#d6b894]"
          >
            <ArrowLeft size={18} />
          </Link>
          <h1 className="text-base font-semibold text-[#26301c]">OUR SERVICES</h1>
        </div>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="mr-[-30px] flex h-9 w-9 items-center justify-center rounded-full text-[#26301c] transition hover:bg-[#66703f]/10"
        >
          <MoreVertical size={21} strokeWidth={2.5} />
        </button>
      </header>
      
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#DEC8B0] px-6 py-[2.8rem] text-[#354329] md:px-12 md:py-16 lg:px-20">
        <Image src="/hero-spa.jpg" alt="Spa Elaris treatment space" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-white/45" />
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            aria-label="Back to home"
            className="mb-10 hidden items-center gap-2 rounded-full border border-[#354329]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#354329] transition hover:bg-white/40 lg:inline-flex"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <p className="relative mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#354329]">
            The Elaris Menu
          </p>

          <h1 className="relative max-w-4xl text-[21px] font-light leading-[0.95] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Explore Our Services
           
          </h1>

          
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-5 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
           

            
          </div>

         
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {serviceCategories.map((category) => (
            <Link
              key={category.id}
              href={`/services/${category.id}`}
              className="group relative min-h-[172px] overflow-hidden rounded-[28px] bg-[#414f30]"
            >
              {/* IMAGE */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#182016]/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182016]/95 via-[#182016]/55 to-[#182016]/20" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                

                <h3 className="text-lg font-light text-white md:text-2xl">
                  {category.name}
                </h3>

                {/* <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  {category.description}
                </p> */}

                <div className="mt-6 flex items-center gap-3 text-xs text-white">
                 

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-[#354329]">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED TREATMENTS */}
      <section className="bg-[#e9e8d9] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#697750]">
                Signature experiences
              </p>

              <h2 className="text-3xl font-light tracking-[-0.03em] md:text-5xl">
                Some of our
                <span className="italic"> favourites.</span>
              </h2>
            </div>

            <Link
              href="#collections"
              className="text-xs uppercase tracking-[0.15em] underline underline-offset-8"
            >
              View all treatments
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              serviceCategories[0].services[2],
              serviceCategories[2].services[0],
              serviceCategories[4].services[0],
            ].map((service) => (
              <div
                key={service.name}
                className="rounded-3xl bg-[#f8f7f1] p-7"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#697750]">
                  Featured Treatment
                </p>

                <h3 className="mt-8 text-xl font-light">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#69705f]">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#354329]/10 pt-5">
                  <span className="text-sm">
                    {formatPrice(service.price)}
                  </span>

                  <span className="text-lg">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#354329] px-6 py-28 text-center text-[#f4f2e9] md:px-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8c98c]">
          Your wellness journey
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight md:text-6xl">
          Find the treatment
          <br />
          <span className="italic text-[#d8c98c]">made for you.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/60">
          Take your time exploring the Elaris collection.
          Your perfect wellness experience is waiting.
        </p>

        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-full bg-[#d8c98c] px-7 py-3 text-xs font-medium text-[#354329] transition hover:bg-white"
        >
          Contact Spaelaris ↗
        </Link>
      </section>
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
    </main>
  );
}