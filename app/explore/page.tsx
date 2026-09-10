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
  Star,
  Clock3,
  Bell,
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

const sectionLinks = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "specialists", label: "Specialists" },
  { id: "reviews", label: "Reviews" },
  { id: "more", label: "More" },
  { id: "contact", label: "Contact" },
];

// Spa Elaris opening hours: 8:00 AM - 6:00 PM (daily, Lagos time)
const OPEN_START_MINUTES = 8 * 60;
const OPEN_END_MINUTES = 18 * 60;

// Current wall-clock time at the business location (Africa/Lagos), in minutes since midnight
function getMinutesInLagos(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours === 0) return `${mins} min`;
  if (mins === 0) return `${hours} hr`;
  return `${hours} hr ${mins} min`;
}

export default function ExplorePage() {
  const [activeSection, setActiveSection] = useState("services");
  const [now, setNow] = useState(() => new Date());

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

  // Refresh the open/closed status every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  const cards = serviceCategories.map((category, index) => ({
      id: category.id,
      name: category.shortName,
      shortName: category.number,
      href: `/services/${category.id}`,
      image: category.image,
      Icon: categoryIcons[index],
    }));

  const nowMinutes = getMinutesInLagos(now);
  const isOpen = nowMinutes >= OPEN_START_MINUTES && nowMinutes < OPEN_END_MINUTES;
  const minutesUntilBoundary = (target: number) => {
    const diff = target - nowMinutes;
    return diff > 0 ? diff : diff + 24 * 60;
  };

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[#f7f6ef] pt-6 text-[#26301c] sm:pt-8 lg:pt-10">
      <div aria-hidden="true" className="explore-grain pointer-events-none absolute inset-x-0 top-0 -z-10 h-[650px] overflow-hidden sm:h-[720px] lg:h-[760px]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Spa Elaris home"
          >
            <Image
              src="/selogo.png"
              alt="Spa Elaris"
              width={200}
              height={140}
              priority
              className="h-[62px] w-auto object-contain"
            />
            <span className="font-[var(--font-manrope)] text-lg font-semibold tracking-[-0.02em] text-[#26301c] sm:text-xl">
              SPA ELARIS
            </span>
          </Link>
          <Link
            href="/notifications"
            aria-label="Notifications"
            className="rounded-full p-2 text-[#26301c] transition hover:bg-[#66703f]/10"
          >
            <Bell size={21} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-between gap-5 border-y border-[#66703f]/20 py-4 sm:mt-6 sm:py-5">
          <div className="flex items-center gap-2">
            <Star size={17} fill="currentColor" className="text-[#d8a928]" />
            <span className="text-sm font-semibold text-[#26301c]">4.9</span>
            <span className="text-sm text-[#606454]">(128 reviews)</span>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5">
              <Clock3 size={16} className="shrink-0 text-[#66703f]" />
              <p className="text-sm font-medium text-[#66703f]">
                {isOpen ? "Opened" : "Closed"}
              </p>
            </div>
            <div>
              <p className="mt-1 text-xs text-[#606454]">
                {isOpen
                  ? `Closing in ${formatDuration(minutesUntilBoundary(OPEN_END_MINUTES))}`
                  : `Opens in ${formatDuration(minutesUntilBoundary(OPEN_START_MINUTES))}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-30 mt-[30px] border-y border-[#66703f]/15 bg-white/65 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-6xl gap-7 overflow-x-auto [scrollbar-width:none] lg:justify-between lg:gap-0">
            {sectionLinks.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`shrink-0 border-b-2 py-4 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "border-[#66703f] text-[#26301c]"
                    : "border-transparent text-[#606454] hover:text-[#26301c]"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
      </nav>

      <section id="services" className="scroll-mt-16 bg-transparent">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-8">
            {cards.map(({ id, name, shortName, href, Icon }) => (
              <Link
                key={id}
                href={href}
                className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#66703f]/20 bg-white/55 shadow-lg backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-white/75 hover:shadow-2xl sm:rounded-3xl"
              >
                <div className="relative flex h-full flex-col justify-between p-3 text-[#26301c] sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                      <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#66703f] sm:text-xs">
                      {shortName}
                    </span>
                    <Icon size={20} strokeWidth={1.6} className="shrink-0 text-[#66703f]" />
                  </div>
                  <h2 className="max-w-[10rem] text-sm font-bold leading-tight text-[#26301c] sm:text-lg lg:text-xl">
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
          <div className="relative order-2 h-[360px] overflow-hidden rounded-3xl sm:h-[480px] lg:order-1">
            <Image src="/hero-spa.jpg" alt="Spa Elaris treatment room" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
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
          <div className="mt-12 flex gap-8 overflow-x-auto pb-5 [scrollbar-width:none]">
            {[
              { name: "Amara", rating: "4.9", role: "Skin specialist" },
              { name: "Tomi", rating: "4.8", role: "Wellness therapist" },
              { name: "Zainab", rating: "5.0", role: "Beauty professional" },
              { name: "Nneka", rating: "4.9", role: "Wellness therapist" },
            ].map((therapist) => (
              <article key={therapist.name} className="w-40 shrink-0 text-center sm:w-48">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#66703f] text-5xl font-light text-[#f7f6ef] sm:h-40 sm:w-40">
                  {therapist.name[0]}
                </div>
                <div className="mt-4 flex items-center justify-center gap-1 text-sm text-[#66703f]">
                  <Star size={14} fill="currentColor" />
                  <span>{therapist.rating}</span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-[#26301c]">{therapist.name}</h3>
                <p className="mt-1 text-xs text-[#606454]">{therapist.role}</p>
              </article>
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
