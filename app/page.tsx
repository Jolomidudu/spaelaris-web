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
  MoreVertical,
  ChevronDown,
  ChevronRight,
  Mail,
  X,
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
  { id: "team", label: "Team" },
  { id: "reviews", label: "Reviews" },
  { id: "more", label: "More" },
  { id: "contact", label: "Contact" },
];

const OPEN_START_MINUTES = 8 * 60;
const OPEN_END_MINUTES = 18 * 60;

function getMinutesInLagos(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value ?? 0,
  );
  return hour * 60 + minute;
}

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours === 0) return `${mins} min`;
  if (mins === 0) return `${hours} hr`;
  return `${hours} hr ${mins} min`;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("services");
  const [now, setNow] = useState(() => new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const sections = sectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.24;
      const currentSection = sections
        .filter((section) => section.getBoundingClientRect().top <= readingLine)
        .sort(
          (a, b) =>
            b.getBoundingClientRect().top - a.getBoundingClientRect().top,
        )[0];
      setActiveSection(currentSection?.id ?? "services");
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    const updateScrollCue = () => setShowScrollCue(window.scrollY < 120);
    window.addEventListener("scroll", updateScrollCue, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("scroll", updateScrollCue);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const activeLink = document.querySelector<HTMLElement>(
      `[data-section-link="${activeSection}"]`,
    );
    activeLink?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection]);

  const cards = serviceCategories.map((category, index) => ({
    id: category.id,
    name: category.shortName,
    shortName: category.number,
    href: `/services/${category.id}`,
    Icon: categoryIcons[index],
  }));
  const nowMinutes = getMinutesInLagos(now);
  const isOpen =
    nowMinutes >= OPEN_START_MINUTES && nowMinutes < OPEN_END_MINUTES;
  const minutesUntilBoundary = (target: number) => {
    const diff = target - nowMinutes;
    return diff > 0 ? diff : diff + 24 * 60;
  };

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[#f7f6ef] pt-0 text-[#26301c]">
      <div
        aria-hidden="true"
        className="explore-grain pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden"
      />
      <div className="mx-auto max-w-6xl px-5 pt-5 sm:px-8 lg:hidden lg:pt-0">
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
            <span className="text-lg font-semibold tracking-[-0.02em] text-[#26301c] sm:text-xl">
              SPA ELARIS
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/notifications"
              aria-label="Notifications"
              className="rounded-full p-2 text-[#26301c] transition hover:bg-[#66703f]/10"
            >
              <Bell size={21} strokeWidth={1.8} />
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="rounded-full p-2 text-[#26301c] transition hover:bg-[#66703f]/10"
            >
              <MoreVertical size={21} strokeWidth={1.8} />
            </button>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between gap-5 py-3 sm:mt-3 sm:py-4">
          <div className="flex items-center gap-2">
            <Star size={17} fill="currentColor" className="text-[#d8a928]" />
            <span className="text-sm font-semibold text-[#26301c]">4.9</span>
            <span className="text-sm text-[#606454]">(128 reviews)</span>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5">
              <Clock3 size={16} className="shrink-0 text-[#66703f]" />
              <p className="text-sm font-medium text-[#26301c]">
                {isOpen ? "Opened" : "Closed"}
              </p>
            </div>
            <p className="mt-1 text-xs text-[#606454]">
              {isOpen
                ? `Closing in ${formatDuration(minutesUntilBoundary(OPEN_END_MINUTES))}`
                : `Opens in ${formatDuration(minutesUntilBoundary(OPEN_START_MINUTES))}`}
            </p>
          </div>
        </div>
      </div>
      <nav className="sticky top-0 z-30 mt-4 bg-white/90 px-5 text-[#26301c] shadow-sm backdrop-blur-xl sm:px-8 lg:hidden">
        <div className="mx-auto flex max-w-6xl gap-7 overflow-x-auto [scrollbar-width:none]">
          {sectionLinks.map((section) => (
            <a
              key={section.id}
              data-section-link={section.id}
              href={`#${section.id}`}
              className={`shrink-0 py-3 text-sm font-medium transition-colors ${activeSection === section.id ? "font-semibold text-[#26301c]" : "text-[#606454] hover:text-[#26301c]"}`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>
      <section id="services" className="scroll-mt-16 bg-transparent">
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-[7px] sm:px-8 sm:pt-3 lg:px-12 lg:py-10 lg:pt-[30vh]">
          <div className="mb-3 flex items-center justify-between gap-4 sm:mb-6">
            <h2 className="ml-[15px] text-[12px] font-medium text-[#26301c] sm:ml-0 sm:text-2xl">
              SELECT A SERVICE TO START
            </h2>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#66703f] transition hover:text-[#26301c]"
            >
              See all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="mx-auto grid w-[95%] grid-cols-2 gap-x-[0.97rem] gap-y-[1.15rem] sm:gap-x-[1.61rem] sm:gap-y-[1.4rem] lg:w-auto lg:max-w-[69.1rem] lg:grid-cols-4 lg:gap-[2.24rem]">
            {cards.map(({ id, name, href, Icon }) => (
              <Link
                key={id}
                href={href}
                className="group relative aspect-[1.71] overflow-hidden rounded-2xl border border-[#c7ad91] bg-[#DEC8B0] shadow-lg transition duration-500 hover:-translate-y-2 hover:bg-[#d6b894] hover:shadow-2xl sm:rounded-3xl"
              >
                <div className="relative flex h-full flex-col justify-between p-3 text-[#3f4038] sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-white shadow-sm"
                    />
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#3f4038]"
                    />
                  </div>
                  <h2 className="max-w-[10rem] text-sm font-medium leading-tight text-[#3f4038] sm:text-lg lg:text-xl">
                    {name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="curved-section scroll-mt-16 bg-[#f7f6ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">
              ABOUT US
            </p>
            <Link
              href="/about"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#66703f]"
            >
              More <ChevronRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div className="relative order-2 h-[360px] overflow-hidden rounded-3xl sm:h-[480px] lg:order-1">
              <Image
                src="/hero-spa.jpg"
                alt="Spa Elaris treatment room"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">
                A calmer way to care for yourself.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#606454]">
                Thoughtfully curated treatments, personal attention and a
                peaceful space designed around how you want to feel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="team"
        className="curved-section scroll-mt-16 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">
              OUR TEAM
            </p>
            <Link
              href="/professionals"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#66703f]"
            >
              See All <ChevronRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
          <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">
            Experienced hands. Considered care.
          </h2>
          <div className="mt-12 flex gap-8 overflow-x-auto pb-5 [scrollbar-width:none]">
            {[
              {
                name: "Amara",
                slug: "amara",
                rating: "4.9",
                role: "Skin specialist",
              },
              {
                name: "Tomi",
                slug: "tomi",
                rating: "4.8",
                role: "Wellness therapist",
              },
              {
                name: "Zainab",
                slug: "zainab",
                rating: "5.0",
                role: "Beauty professional",
              },
              {
                name: "Nneka",
                slug: "nneka",
                rating: "4.9",
                role: "Wellness therapist",
              },
            ].map((therapist) => (
              <Link
                key={therapist.name}
                href={`/professionals/${therapist.slug}`}
                className="w-40 shrink-0 text-center sm:w-48"
              >
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#66703f] text-2xl font-light text-[#f7f6ef] sm:h-20 sm:w-20">
                  {therapist.name[0]}
                </div>
                <div className="mt-4 flex items-center justify-center gap-1 text-sm text-[#66703f]">
                  <Star size={14} fill="currentColor" />
                  <span>{therapist.rating}</span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-[#26301c]">
                  {therapist.name}
                </h3>
                <p className="mt-1 text-xs text-[#606454]">{therapist.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        id="reviews"
        className="scroll-mt-16 bg-[#e9e8d9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">
              Reviews
            </h2>
            <Link
              href="/reviews"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#66703f] transition hover:text-[#26301c]"
            >
              See all <ChevronRight size={17} />
            </Link>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[#66703f]">
            <div
              className="flex items-center gap-0.5"
              aria-label="5.0 out of 5 stars"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
          <div className="mt-10 flex gap-5 overflow-x-auto pb-5 [scrollbar-width:none]">
            {[
              {
                name: "Aisha",
                service: "Hydra Facials",
                date: "12 Aug 2026",
                image: "/facial.jpg",
                note: "A beautiful experience from start to finish.",
              },
              {
                name: "Chinedu",
                service: "Deep Tissue Massage",
                date: "28 Jul 2026",
                image: "/massage.jpg",
                note: "The calmest space and the most thoughtful service.",
              },
              {
                name: "Mariam",
                service: "Hot Stone Massage",
                date: "05 Jul 2026",
                image: "/hot-stone.jpg",
                note: "I left feeling completely renewed.",
              },
            ].map((review) => (
              <blockquote
                key={review.name}
                className="w-[290px] shrink-0 rounded-3xl bg-white p-6 shadow-sm sm:w-[340px]"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#26301c]">
                      {review.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#66703f]">
                      {review.service}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-7 text-[#26301c]">
                  “{review.note}”
                </p>
                <footer className="mt-5 text-xs uppercase tracking-[0.15em] text-[#606454]">
                  {review.date}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <section
        id="more"
        className="scroll-mt-16 bg-[#26301c] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">
            Opening hours
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight sm:text-6xl">
            Find time to feel well.
          </h2>
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
              <div
                key={day}
                className="flex items-center justify-between gap-6 py-4 text-sm sm:text-base"
              >
                <span className="text-white/75">{day}</span>
                <span className="font-medium text-[#d8c487]">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="scroll-mt-16 bg-[#f7f6ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">
            Get in touch
          </p>
          <h2 className="mt-4 max-w-3xl text-2xl font-light leading-tight tracking-[-0.03em] sm:text-4xl">
            We would love to welcome you.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5">
            {[
              { name: "Lagos", query: "Spa Elaris Lagos Nigeria" },
              { name: "Abuja", query: "Spa Elaris Abuja Nigeria" },
            ].map((location) => (
              <div key={location.name}>
                <div className="overflow-hidden rounded-2xl border border-[#66703f]/15 bg-white shadow-sm">
                  <iframe
                    title={`${location.name} map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(location.query)}&output=embed`}
                    className="h-32 w-full border-0 sm:h-56"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#66703f]">
                  {location.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-7 border-t border-[#66703f]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#66703f]">
                Email
              </p>
              <a
                href="mailto:hello@spaelariswellness.com"
                className="mt-2 inline-flex items-center gap-2 text-base text-[#606454] underline underline-offset-4"
              >
                <Mail size={17} strokeWidth={1.8} />
                hello@spaelariswellness.com
              </a>
            </div>
            <div
              className="mt-5 flex w-full items-center justify-between sm:mt-0 sm:w-auto sm:justify-start sm:gap-3"
              aria-label="Social links"
            >
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26301c] text-[11px] font-bold text-white transition hover:bg-[#66703f]"
              >
                IG
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26301c] text-[11px] font-bold text-white transition hover:bg-[#66703f]"
              >
                IN
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26301c] text-[11px] font-bold text-white transition hover:bg-[#66703f]"
              >
                FB
              </a>
              <a
                href="#snapchat"
                aria-label="Snapchat"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26301c] text-xs font-bold text-white transition hover:bg-[#66703f]"
              >
                SC
              </a>
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26301c] text-xs font-bold text-white transition hover:bg-[#66703f]"
              >
                TK
              </a>
            </div>
          </div>
        </div>
      </section>
      {showScrollCue && (
        <a
          href="#about"
          aria-label="Scroll to learn more"
          className="scroll-cue fixed bottom-24 right-4 z-40 flex flex-col items-center gap-1 text-[#66703f] lg:right-5"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
            Scroll
          </span>
          <ChevronDown size={18} strokeWidth={1.5} />
        </a>
      )}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-[#26301c] px-6 pb-10 pt-8 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">
              Spa Elaris
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2 text-white/80 hover:bg-white/10"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="mt-12 flex flex-col">
            {[
              { label: "Home", href: "#services" },
              { label: "About us", href: "#about" },
              { label: "Our team", href: "#team" },
              { label: "Reviews", href: "#reviews" },
              { label: "Contact", href: "#contact" },
              { label: "Client login", href: "/profile" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 text-3xl font-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </main>
  );
}
