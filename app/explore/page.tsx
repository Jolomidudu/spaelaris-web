"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Heart,
  Hand,
  HandHeart,
  PersonStanding,
  Sparkles,
  Droplets,
  ScanLine,
  Webhook,
} from "lucide-react";
import { serviceCategories } from "@/data/services";

const categoryIcons = [
  Webhook,
  Hand,
  HandHeart,
  Sparkles,
  PersonStanding,
  Droplets,
  ScanLine,
  Heart,
];

const colorThemes = [
  "from-[#3f4a2c] to-[#7b8a4b]",
  "from-[#6c493d] to-[#c18c6b]",
  "from-[#314b50] to-[#6d9b98]",
  "from-[#705b32] to-[#c5a65d]",
  "from-[#425d3f] to-[#8ca878]",
  "from-[#5b3e4f] to-[#b47e9b]",
  "from-[#34516d] to-[#78a0bc]",
  "from-[#6d4939] to-[#c49372]",
  "from-[#26301c] to-[#8c9a68]",
];

const sectionLinks = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "reviews", label: "Reviews" },
  { id: "others", label: "Others" },
];

export default function ExplorePage() {
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    const sections = sectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.24;
      const currentSection = sections
        .filter((section) => section.getBoundingClientRect().top <= readingLine)
        .sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top)[0];

      setActiveSection(currentSection?.id ?? "services");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const cards = serviceCategories.map((category, index) => ({
      id: category.id,
      name: category.shortName,
      shortName: category.number,
      href: `/services/${category.id}`,
      image: category.image,
      Icon: categoryIcons[index],
    }));

  return (
    <main className="min-h-screen overflow-x-clip bg-white pt-6 text-[#26301c] sm:pt-8 lg:pt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex" aria-label="Spa Elaris home">
          <Image
            src="/se-logo.png"
            alt="Spa Elaris"
            width={180}
            height={120}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>
      </div>

      <nav className="sticky top-0 z-30 mt-[30px] border-y border-[#26301c]/10 bg-white/95 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-6xl gap-7 overflow-x-auto [scrollbar-width:none]">
            {sectionLinks.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`shrink-0 border-b-2 py-4 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "border-[#66703f] text-[#26301c]"
                    : "border-transparent text-[#26301c]/45 hover:text-[#26301c]"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
      </nav>

      <section id="services" className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {cards.map(({ id, name, shortName, href, image, Icon }, index) => (
              <Link
                key={id}
                href={href}
                className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#26301c]/15 bg-black/10 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-75"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${colorThemes[index]}/90 mix-blend-multiply`} />
                <div className="relative flex h-full flex-col justify-between p-3 text-white sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 sm:text-xs">
                      {shortName}
                    </span>
                    <Icon size={18} strokeWidth={1.6} className="shrink-0 text-[#f4d99a]" />
                  </div>
                  <h2 className="max-w-[12rem] text-sm font-medium leading-tight sm:text-lg lg:text-xl">
                    {name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-16 bg-[#f7f6ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative h-[360px] overflow-hidden rounded-3xl sm:h-[480px]">
            <Image src="/hero-spa.jpg" alt="Spa Elaris treatment room" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">About Spa Elaris</p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">A calmer way to care for yourself.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#606454]">Thoughtfully curated treatments, personal attention and a peaceful space designed around how you want to feel.</p>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-16 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Your care team</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">Experienced hands. Considered care.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {["Skin specialists", "Wellness therapists", "Beauty professionals"].map((member, index) => (
              <div key={member} className="overflow-hidden rounded-3xl bg-[#f4f2e9]">
                <div className="relative h-64">
                  <Image src={["/facial.jpg", "/massage.jpg", "/hot-stone.jpg"][index]} alt="" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <h3 className="p-5 text-xl font-medium">{member}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-16 bg-[#e9e8d9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Guest reviews</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["A beautiful experience from start to finish.", "The calmest space and the most thoughtful service.", "I left feeling completely renewed."].map((review, index) => (
              <blockquote key={review} className="rounded-3xl bg-white p-7">
                <p className="text-xl leading-8 text-[#26301c]">“{review}”</p>
                <footer className="mt-7 text-xs uppercase tracking-[0.2em] text-[#66703f]">Spa Elaris guest {index + 1}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="others" className="scroll-mt-16 bg-[#26301c] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">More from Spa Elaris</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight sm:text-6xl">Make space for feeling well.</h2>
          </div>
          <Link href="/location" className="inline-flex w-fit rounded-full bg-[#d8c487] px-6 py-3 text-sm font-medium text-[#26301c]">Choose your location</Link>
        </div>
      </section>
    </main>
  );
}
