"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const transition = window.setTimeout(() => {
      router.replace("/explore");
    }, 1800);

    return () => window.clearTimeout(transition);
  }, [router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[length:200%_200%] bg-gradient-to-br from-white via-[#f3f5e9] to-[#e7d9bf] px-5 py-10 text-center animate-[gradientShift_14s_ease_infinite] sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,196,135,0.3),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(102,112,63,0.16),transparent_38%)]" />

      <div className="relative z-10 animate-[welcomeRise_1100ms_ease-out_both]">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#66703f]">Spa Elaris</p>
        <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] text-[#26301c] sm:text-7xl lg:text-8xl">
          Welcome to
          <br />
          <span className="font-semibold italic text-[#66703f]">Spa Elaris</span>
        </h1>
        
      </div>
    </main>
  );
}
