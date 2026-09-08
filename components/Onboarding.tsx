"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  onFinish?: () => void;
};

const slides = [
  {
    title: "Discover treatments",
    desc: "Explore massages, facials, body rituals and more curated for you.",
    image: "/facial.jpg",
  },
  {
    title: "Choose your experience",
    desc: "Browse services and find the treatment that suits how you want to feel.",
    image: "/massage.jpg",
  },
  {
    title: "Relax & book",
    desc: "Select your treatment, pick a time and book your appointment in seconds.",
    image: "/hot-stone.jpg",
  },
];

export default function Onboarding({ onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, []);

  function next() {
    if (index < slides.length - 1) {
      setIndex((i) => i + 1);
    } else {
      finish();
    }
  }

  function skip() {
    finish();
  }

  function finish() {
    onFinish?.();
  }

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) next();
      else setIndex((i) => Math.max(0, i - 1));
    }
    startX.current = null;
  }

  const current = slides[index];

  return (
    <div className="fixed inset-0 z-[10000] flex h-screen w-full flex-col bg-white lg:flex-row">
      {/* ===== IMAGE AREA (top) ===== */}
      <div
        className="relative flex-[1.15] overflow-hidden lg:flex-1"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.title} className="relative h-full w-full flex-none">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={s === slides[0]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-2 lg:left-8 lg:top-8">
          <Image
            src="/se-logo1.png"
            alt="Spa Elaris"
            width={40}
            height={28}
            className="object-contain"
          />
        </div>

        {/* Large overlapping title */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-16 z-10 px-6 text-center">
          <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-6xl">
            <span className="text-white/90">Spa</span>{" "}
            <span className="text-[#7356E8]">Elaris</span>
          </h1>
        </div> */}
      </div>

      {/* ===== CURVED BOTTOM PANEL ===== */}
      <div className="relative z-20 -mt-10 flex flex-[0.85] flex-col lg:mt-0 lg:w-[38%] lg:flex-none">
        {/* Edge-to-edge curve – solid #3C492F */}
        <svg
          className="absolute -top-10 left-0 h-12 w-full text-[#3C492F] lg:hidden"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,48 L0,24 C360,0 1080,0 1440,24 L1440,48 Z"
          />
        </svg>

        {/* Solid panel */}
        <div className="flex flex-1 flex-col bg-[#3C492F] px-6 pb-8 pt-6 text-white lg:justify-center lg:px-12 lg:py-16 xl:px-16">
          {/* Title + description */}
          <div className="mt-2 flex-1">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              {current.title}
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
              {current.desc}
            </p>
          </div>

          {/* Dots */}
          <div className="mb-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Skip + Next on the same row */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={skip}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Skip
            </button>

            <button
              onClick={next}
              className="rounded-2xl bg-[#F5F9F6] px-8 py-3.5 text-base font-semibold text-[#3C492F] shadow-lg transition active:scale-[0.98]"
            >
              {index === slides.length - 1 ? "Get Started" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}