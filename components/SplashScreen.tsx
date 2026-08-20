"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Onboarding from "@/components/Onboarding";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Prevent scrolling while splash screen is visible
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1800);

    const removeTimer = setTimeout(() => {
      // After splash animates out, show onboarding if not seen
      let onboarded = false;
      try {
        onboarded = Boolean(localStorage.getItem("spa-elaris-onboarded"));
      } catch (e) {}

      if (onboarded) {
        setMounted(false);
        document.body.style.overflow = "";
      } else {
        setShowOnboarding(true);
      }
    }, 2300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#344329] transition-all duration-500 ${
        visible
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`flex flex-col items-center transition-all duration-700 ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "-translate-y-3 scale-95 opacity-0"
        }`}
      >
        {/* LOGO */}
        <Image
          src="/se-logo1.png"
          alt="Spa Elaris"
          width={220}
          height={150}
          priority
          className="h-auto w-[150px] object-contain sm:w-[180px]"
        />

        {/* BRAND TEXT */}
        <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.4em] text-[#d8c487]">
          Wellness & Beauty
        </p>

        {/* LOADING INDICATOR */}
        <div className="mt-10 h-px w-16 overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left animate-[loading_1.4s_ease-in-out_infinite] bg-[#d8c487]" />
        </div>
      </div>

      {showOnboarding && (
        <Onboarding
          onFinish={() => {
            setShowOnboarding(false);
            setTimeout(() => setMounted(false), 220);
            document.body.style.overflow = "";
          }}
        />
      )}
    </div>
  );
}