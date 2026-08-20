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
    // prevent background scroll while onboarding is visible
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
    if (onFinish) onFinish();
  }

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        // swipe left => next
        next();
      } else {
        // swipe right => prev
        setIndex((i) => Math.max(0, i - 1));
      }
    }
    startX.current = null;
  }

  return (
    <div className="fixed inset-0 z-[10000] flex h-screen w-full items-start bg-white">
      <div className="flex h-full w-full flex-col">
        <header className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <Image src="/se-logo1.png" alt="Spa Elaris" width={44} height={30} className="object-contain" />
            <span className="font-medium">SPA ELARIS</span>
          </div>

          <button onClick={skip} className="text-sm text-black/60">
            Skip
          </button>
        </header>

        <div
          className="relative flex-1 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex h-full w-full transition-transform duration-400"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={s.title} className="flex w-full flex-none flex-col items-center justify-start gap-4 p-4">
                      <div className="relative h-[30vh] sm:h-[38vh] w-full max-w-lg overflow-hidden rounded-2xl bg-[#eee]">
                        <Image src={s.image} alt={s.title} fill sizes="(min-width:640px) 420px, 360px" className="object-cover" />
                      </div>

                      <h3 className="text-center text-2xl font-semibold">{s.title}</h3>
                      <p className="max-w-md text-center text-sm text-black/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex items-center justify-between gap-4 p-5">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-[#7356E8]" : "bg-black/10"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIndex((i) => Math.max(0, i - 1))} className="text-sm text-black/60">
              Prev
            </button>

            <button
              onClick={next}
              className="rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white"
            >
              {index === slides.length - 1 ? "Get Started" : "Next"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
