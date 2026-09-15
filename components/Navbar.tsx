"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Leaf, Search, UserRound, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
   const handleScroll = () => {
  const currentScroll = window.scrollY;

  setShowBackToTop(currentScroll > 500);
};

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-[#26301c]/10 bg-white/65 shadow-sm backdrop-blur-md"
      >
        <div
          className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10"
        >
          <nav className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              onClick={closeMenu}
              className="relative z-50 flex shrink-0 items-center"
            >
              <Image
                src="/selogo.png"
                alt="Spa Elaris"
                width={200}
                height={140}
                className="h-[52px] w-auto object-contain sm:h-[58px] lg:h-[64px]"
                priority
              />
              <span className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-1">
                <span className="font-semibold leading-none tracking-[0.08em] text-[#26301c]">
                  SPA ELARIS
                </span>
                <span className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#66703f]">
                  
                  Premium Wellness Oasis
                  <Leaf size={11} strokeWidth={1.8} />
                </span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-7 lg:flex">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#3f4038] transition duration-300 hover:text-[#66703f]"
                >
                  {item.label}
                </Link>
              ))}

              {/* SEARCH */}
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#3f4038]/20 bg-white/40 text-[#3f4038] backdrop-blur-md transition duration-300 hover:border-[#66703f]/60 hover:text-[#66703f]"
              >
                <Search size={16} strokeWidth={1.6} />
              </button>

              <Link
                href="/profile"
                aria-label="Client login"
                title="Client login"
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#3f4038]/20 bg-white/40 text-[#3f4038] backdrop-blur-md transition duration-300 hover:border-[#66703f]/60 hover:text-[#66703f]"
              >
                <UserRound size={17} strokeWidth={1.7} />
              </Link>
            </div>

            {/* MOBILE CONTROLS */}
            <div className="flex items-center gap-2 lg:hidden">

              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md"
              >
                <Search size={18} strokeWidth={1.6} />
              </button>

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md"
              >
                {menuOpen ? (
                  <X size={20} strokeWidth={1.5} />
                ) : (
                  <div className="flex w-5 flex-col gap-1.5">
                    <span className="h-px w-full bg-white" />
                    <span className="h-px w-full bg-white" />
                    <span className="h-px w-full bg-white" />
                  </div>
                )}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#344329] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-28 sm:px-10">

          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-5 text-3xl font-light tracking-[-0.02em] text-white transition hover:text-[#d8c487]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">

            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#d8c487]">
              Your Elaris Experience
            </p>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-full bg-[#d8c487] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#344329] transition hover:bg-white"
            >
              Book an Experience
            </Link>
            <Link
              href="/profile"
              onClick={closeMenu}
              className="mt-4 block text-center text-xs uppercase tracking-[0.18em] text-white/70 transition hover:text-[#d8c487]"
            >
              Client login
            </Link>

          </div>
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] bg-[#26301c]/95 backdrop-blur-xl transition-all duration-300 ${
          searchOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-4xl flex-col px-6 py-8 sm:px-10">

          <div className="flex items-center justify-between">

            <p className="text-xs uppercase tracking-[0.25em] text-[#d8c487]">
              Spa Elaris Search
            </p>

            <button
              type="button"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#d8c487] hover:text-[#d8c487]"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

          </div>

          <div className="mt-24">

            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              What are you looking for?
            </p>

            <div className="mt-5 flex items-center border-b border-white/20 pb-4">

              <Search
                size={24}
                strokeWidth={1.4}
                className="mr-4 shrink-0 text-[#d8c487]"
              />

              <input
                autoFocus={searchOpen}
                type="search"
                placeholder="Search treatments, services..."
                className="w-full bg-transparent text-2xl font-light text-white outline-none placeholder:text-white/30 sm:text-4xl"
              />

            </div>

          </div>

          <div className="mt-12">

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Popular
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              {[
                "Massage",
                "Facials",
                "Body Rituals",
                "Wax",
                "Special Treatments",
              ].map((term) => (
                <button
                  key={term}
                  type="button"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-xs text-white/70 transition hover:border-[#d8c487] hover:text-[#d8c487]"
                >
                  {term}
                </button>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* BACK TO TOP */}
<button
  type="button"
  aria-label="Back to top"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className={`fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c487]/40 bg-[#344329]/90 text-[#d8c487] shadow-lg backdrop-blur-md transition-all duration-300 lg:hidden ${
    showBackToTop
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-4 opacity-0"
  }`}
>
  <ArrowUp size={17} strokeWidth={1.5} />
</button>
    </>
  );
}