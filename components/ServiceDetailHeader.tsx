"use client";

import Link from "next/link";
import { ArrowLeft, MoreVertical, X } from "lucide-react";
import { useState } from "react";

type ServiceDetailHeaderProps = {
  backHref: string;
  categoryName: string;
};

export default function ServiceDetailHeader({
  backHref,
  categoryName,
}: ServiceDetailHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b border-black/[0.08] px-5 py-5 sm:px-8">
        <Link
          href={backHref}
          aria-label={`Back to ${categoryName}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DEC8B0] text-[#354329] shadow-sm transition hover:bg-[#d6b894]"
        >
          <ArrowLeft size={21} strokeWidth={2.2} />
        </Link>
        <p className="text-sm font-medium text-black/60">{categoryName}</p>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="mr-[-30px] flex h-11 w-11 items-center justify-center rounded-full text-[#354329] transition hover:bg-[#DEC8B0]/50"
        >
          <MoreVertical size={22} strokeWidth={2.6} />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-[#26301c] px-6 pb-10 pt-8 text-white">
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
    </>
  );
}