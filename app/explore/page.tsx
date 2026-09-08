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
  { id: "specialists", label: "Specialists" },
  { id: "reviews", label: "Reviews" },
  { id: "more", label: "More" },
  { id: "contact", label: "Contact" },
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
                  className="absolute inset-0 h-full w-full object-cover opacity-45 brightness-110 transition duration-700 group-hover:scale-110 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-white/25" />
                <div className={`absolute inset-0 ${colorThemes[index]}/45 mix-blend-multiply`} />
                <div className="relative flex h-full flex-col justify-between p-3 text-white sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                      <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#26301c] sm:text-xs">
                      {shortName}
                    </span>
                    <Icon size={18} strokeWidth={1.6} className="shrink-0 text-[#f4d99a]" />
                  </div>
                  <h2 className="max-w-[12rem] text-sm font-bold leading-tight sm:text-lg text-[#26301c] lg:text-xl">
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

      <section id="specialists" className="scroll-mt-16 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
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

      <section id="more" className="scroll-mt-16 bg-[#26301c] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">Opening hours</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight sm:text-6xl">Find time to feel well.</h2>
          <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {[
              ["Monday", "9:00 AM - 7:00 PM"],
              ["Tuesday", "9:00 AM - 7:00 PM"],
              ["Wednesday", "9:00 AM - 7:00 PM"],
              ["Thursday", "9:00 AM - 7:00 PM"],
              ["Friday", "9:00 AM - 7:00 PM"],
              ["Saturday", "10:00 AM - 6:00 PM"],
              ["Sunday", "12:00 PM - 5:00 PM"],
            ].map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between gap-6 py-4 text-sm sm:text-base">
                <span className="text-white/75">{day}</span>
                <span className="font-medium text-[#d8c487]">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 bg-[#f7f6ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Get in touch</p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">We would love to welcome you.</h2>
          </div>
          <div className="space-y-5 text-base text-[#606454]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#66703f]">Locations</p>
              <p className="mt-2">Lagos and Abuja</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#66703f]">Email</p>
              <a href="mailto:hello@spaelaris.com" className="mt-2 inline-block underline underline-offset-4">hello@spaelaris.com</a>
            </div>
            <Link href="/location" className="inline-flex rounded-full bg-[#26301c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#66703f]">Choose your location</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
