"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-16">
        <nav className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-50 text-xl font-light tracking-[0.18em] text-white"
          >
            <Image
    src="/logo.jpeg"
    alt="Spa Elaris"
    width={180}
    height={120}
    className="h-[70px] w-auto object-contain"
    priority
  />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="text-[11px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[11px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-[11px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/gallery"
              className="text-[11px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="text-[11px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Contact
            </Link>

            {/* BOOK NOW */}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-[#d8c98c] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#344329] transition hover:bg-[#eee2a9]"
            >
              Book Now
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <div className="flex w-6 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#344329] transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-32">

          <div className="flex flex-col">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-3xl font-light text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-3xl font-light text-white"
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-3xl font-light text-white"
            >
              Services
            </Link>

            <Link
              href="/gallery"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-3xl font-light text-white"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-3xl font-light text-white"
            >
              Contact
            </Link>

          </div>

          <div className="mt-auto">

            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#d8c98c]">
              Your Elaris Experience
            </p>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-full bg-[#d8c98c] px-7 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#344329] transition hover:bg-[#eee2a9]"
            >
              Book an Experience
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
}