import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  { src: "/hero-spa.jpg", alt: "Spa Elaris treatment room", className: "sm:row-span-2" },
  { src: "/massage.jpg", alt: "Restorative massage treatment" },
  { src: "/facial.jpg", alt: "Facial treatment at Spa Elaris" },
  { src: "/hot-stone.jpg", alt: "Hot stone wellness treatment" },
];

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] px-5 pb-20 pt-36 text-[#26301c] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Inside Spa Elaris</p><h1 className="mt-5 text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-7xl">A space to slow down.</h1></div>
          <p className="max-w-sm text-sm leading-7 text-[#606454]">Step into a considered space for quiet rituals, expert care and a little more room to breathe.</p>
        </div>
        <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 sm:auto-rows-[280px] lg:grid-cols-3">
          {images.map((image) => <div key={image.src} className={`relative overflow-hidden rounded-2xl ${image.className ?? ""}`}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" /></div>)}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-[#66703f]/20 pt-7 sm:flex-row sm:items-center"><p className="text-sm text-[#606454]">Your next visit can feel like this.</p><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#66703f]">Plan your visit <ArrowRight size={16} /></Link></div>
      </div>
    </main>
  );
}