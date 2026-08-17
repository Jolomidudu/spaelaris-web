"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#252820]">
      {/* NAVIGATION */}

      
      

      
      {/* HERO */}
<section
  id="home"
  className="relative flex min-h-[100svh] items-center overflow-hidden"
>
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="/hero-spa.jpg"
      // src="url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2200&q=85')"
      
      alt="Spa Elaris wellness experience"
      className="h-full w-full object-cover"
    />

    {/* DARK LUXURY OVERLAY */}
    <div className="absolute inset-0 bg-[#182015]/55" />

    {/* SUBTLE GRADIENT */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#182015]/80 via-[#182015]/40 to-transparent" />

    {/* BOTTOM FADE */}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f6ef] to-transparent" />
  </div>

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-16">
    <div className="max-w-3xl">

      {/* EYEBROW */}
      <div className="mb-7 flex items-center gap-4">
        <span className="h-px w-10 bg-[#d8c487]" />

        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#d8c487]">
          Luxury Wellness & Beauty
        </p>
      </div>

      {/* HEADING */}
      <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[92px]">
        Relax.
        <br />

        <span className="font-serif italic text-[#d8c487]">
          Rejuvenate.
        </span>

        <br />

        Restore.
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-8 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
        A refined sanctuary for beauty, wellness and restorative experiences
        designed to help you slow down, reconnect and feel your very best.
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">

        <a
          href="/services"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d8c487] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#344329] transition duration-300 hover:bg-white"
        >
          Explore Services

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <a
          href="/about"
          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-[#344329]"
        >
          Discover Spa Elaris
        </a>

      </div>

    </div>

    {/* HERO BOTTOM INFORMATION */}
    <div className="mt-20 hidden items-end justify-between border-t border-white/15 pt-6 md:flex">

      <div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
          A place to slow down
        </p>

        <p className="mt-2 text-sm font-light text-white/70">
          Wellness · Beauty · Restoration
        </p>
      </div>

      <div className="text-right">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
          Explore
        </p>

        <p className="mt-2 text-sm font-light text-white/70">
          Treatments crafted around you
        </p>
      </div>

    </div>

  </div>

  {/* SCROLL INDICATOR */}
  <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

    <span className="text-[8px] uppercase tracking-[0.35em] text-white/50">
      Scroll
    </span>

    <span className="h-10 w-px bg-gradient-to-b from-[#d8c487] to-transparent" />

  </div>
</section>

      {/* INTRO */}
      {/* ABOUT EXPERIENCE */}
<section className="relative overflow-hidden bg-[#f7f6ef]">

  {/* TOP DECORATIVE LINE */}
  <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 lg:px-16">
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-[#344329]/30" />

      <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#344329]/60">
        The Spa Elaris Experience
      </span>
    </div>
  </div>

  <AboutExperience />

</section>

      {/* SERVICES PREVIEW */}
      {/* SERVICES */}
<section
  id="services"
  className="relative overflow-hidden bg-[#344329] py-24 text-white sm:py-32"
>
  <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

    {/* SECTION HEADER */}
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

      <div className="max-w-2xl">

        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#d8c487]" />

          <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#d8c487]">
            Curated Treatments
          </span>
        </div>

        <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          Wellness, beauty
          <br />
          <span className="font-serif italic text-[#d8c487]">
            thoughtfully curated.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
          Discover carefully selected treatments designed to restore your
          body, refresh your skin and create a deeper sense of wellbeing.
        </p>

      </div>

      {/* VIEW ALL */}
      <a
        href="/services"
        className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/20 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 transition duration-300 hover:border-[#d8c487] hover:text-[#d8c487] md:self-auto"
      >
        View all services

        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>

    </div>

    {/* SERVICE CARDS */}
    <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">

      {/* MASSAGE */}
      <div className="group relative min-h-[430px] overflow-hidden bg-[#3c4931] p-8 sm:p-10">

        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2418] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d8c487]">
              01
            </span>

            <h3 className="mt-6 text-3xl font-light tracking-[-0.02em]">
              Massage Therapy
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Restorative massage experiences designed to release tension,
              encourage relaxation and reconnect you with your body.
            </p>
          </div>

          <a
            href="/services"
            className="group/link mt-10 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-[#d8c487]"
          >
            Discover treatment

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </a>

        </div>
      </div>

      {/* FACIALS */}
      <div className="group relative min-h-[430px] overflow-hidden bg-[#46523a] p-8 sm:p-10">

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d8c487]">
              02
            </span>

            <h3 className="mt-6 text-3xl font-light tracking-[-0.02em]">
              Facial Rituals
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Skin-focused rituals combining thoughtful care and refined
              techniques for a fresh, radiant complexion.
            </p>
          </div>

          <a
            href="/services"
            className="group/link mt-10 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-[#d8c487]"
          >
            Discover treatment

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </a>

        </div>
      </div>

      {/* BODY WELLNESS */}
      <div className="group relative min-h-[430px] overflow-hidden bg-[#505c43] p-8 sm:p-10">

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d8c487]">
              03
            </span>

            <h3 className="mt-6 text-3xl font-light tracking-[-0.02em]">
              Body Wellness
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Body rituals and specialist treatments created to refresh,
              restore and leave you feeling renewed.
            </p>
          </div>

          <a
            href="/services"
            className="group/link mt-10 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-[#d8c487]"
          >
            Discover treatment

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </a>

        </div>
      </div>

    </div>

  </div>
</section>

      {/* GALLERY PLACEHOLDER */}
     {/* GALLERY */}
<section
  id="gallery"
  className="relative overflow-hidden bg-[#f7f6ef] py-24 sm:py-32"
>
  <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

    {/* HEADER */}
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

      <div className="max-w-2xl">

        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#344329]/30" />

          <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#344329]/60">
            A Glimpse Inside
          </span>
        </div>

        <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] text-[#344329] sm:text-5xl lg:text-6xl">
          A space designed
          <br />
          <span className="font-serif italic text-[#8d8050]">
            for your wellbeing.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#344329]/60 sm:text-base">
          Step into an atmosphere created for stillness, beauty and
          restoration. Explore a glimpse of the Spa Elaris experience.
        </p>

      </div>

      <a
        href="/gallery"
        className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-[#344329]/20 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#344329]/70 transition duration-300 hover:border-[#344329] hover:text-[#344329] md:self-auto"
      >
        View gallery

        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>

    </div>

    {/* GALLERY PREVIEW */}
    <div className="mt-16">
      <GalleryPreview />
    </div>

  </div>
</section>

      {/* MEMBERSHIP */}
     {/* MEMBERSHIP */}
<section
  id="membership"
  className="relative overflow-hidden bg-[#ede9d8] py-24 sm:py-32"
>
  <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">

      {/* LEFT CONTENT */}
      <div>

        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#344329]/30" />

          <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#344329]/60">
            Elaris Membership
          </span>
        </div>

        <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#344329] sm:text-5xl lg:text-6xl">
          Make wellbeing
          <br />
          <span className="font-serif italic text-[#8d8050]">
            part of your ritual.
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-sm leading-7 text-[#344329]/65 sm:text-base">
          Our membership experience is designed for those who want to make
          self-care a regular part of life. Enjoy considered treatments,
          thoughtful benefits and a more personal Spa Elaris experience.
        </p>

        <a
          href="/contact"
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#344329] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#26301c]"
        >
          Explore Membership

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

      </div>

      {/* RIGHT CARD */}
      <div className="relative">

        <div className="relative overflow-hidden rounded-[2rem] bg-[#344329] p-8 text-white shadow-[0_25px_80px_rgba(52,67,41,0.18)] sm:p-10">

          {/* DECORATIVE CIRCLE */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#d8c487]/20" />

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#d8c487]/10" />

          <div className="relative z-10">

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#d8c487]">
              Membership
            </p>

            <h3 className="mt-6 text-3xl font-light leading-tight">
              Your time.
              <br />
              Your ritual.
              <br />
              <span className="font-serif italic text-[#d8c487]">
                Your Elaris.
              </span>
            </h3>

            <div className="my-8 h-px bg-white/10" />

            <ul className="space-y-4">

              {[
                "Thoughtfully selected wellness experiences",
                "Member-focused benefits",
                "A more personal spa journey",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-6 text-white/65"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8c487]" />
                  {benefit}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* FINAL CTA */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#344329] py-28 text-white sm:py-36"
>
  <div className="absolute inset-0 opacity-30">
    <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#d8c487]/20" />
    <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#d8c487]/10" />
  </div>

  <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">

    <div className="mx-auto mb-7 flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-[#d8c487]" />

      <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#d8c487]">
        Your Elaris Experience
      </span>

      <span className="h-px w-10 bg-[#d8c487]" />
    </div>

    <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
      Make time for
      <br />
      <span className="font-serif italic text-[#d8c487]">
        yourself.
      </span>
    </h2>

    <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
      Step away from the everyday and into an experience created around
      your wellbeing. Your next moment of restoration begins here.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

      <a
        href="/contact"
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d8c487] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#344329] transition duration-300 hover:bg-white"
      >
        Book Your Experience

        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>

      <a
        href="/services"
        className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 transition duration-300 hover:border-white hover:bg-white hover:text-[#344329]"
      >
        Explore Treatments
      </a>

    </div>

  </div>
</section>

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
      {/* FOOTER */}
<footer className="bg-[#1f281a] text-white">

  <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">

    <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">

      {/* BRAND */}
      <div>

        <Link
          href="/"
          className="inline-block"
        >
          <Image
            src="/logo.jpeg"
            alt="Spa Elaris"
            width={180}
            height={120}
            className="h-[60px] w-auto object-contain"
          />
        </Link>

        <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
          A refined sanctuary for beauty, wellness and restorative
          experiences.
        </p>

      </div>

      {/* EXPLORE */}
      <div>

        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#d8c487]">
          Explore
        </p>

        <div className="mt-6 flex flex-col gap-4">

          <Link
            href="/"
            className="text-sm text-white/55 transition hover:text-[#d8c487]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-white/55 transition hover:text-[#d8c487]"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-sm text-white/55 transition hover:text-[#d8c487]"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            className="text-sm text-white/55 transition hover:text-[#d8c487]"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="text-sm text-white/55 transition hover:text-[#d8c487]"
          >
            Contact
          </Link>

        </div>

      </div>

      {/* CONTACT */}
      <div>

        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#d8c487]">
          Connect
        </p>

        <div className="mt-6 space-y-4 text-sm text-white/55">

          <p>
            Your wellness journey
            <br />
            begins with a conversation.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#d8c487] transition hover:text-white"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between">

      <p>
        © {new Date().getFullYear()} Spa Elaris. All rights reserved.
      </p>

      <p>
        Wellness · Beauty · Restoration
      </p>

    </div>

  </div>

</footer>
    </main>
  );
}