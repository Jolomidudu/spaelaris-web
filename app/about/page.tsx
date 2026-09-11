import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#26301c]">
      <header className="border-b border-[#66703f]/15 bg-white/70 px-5 py-5 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <Link
            href="/explore"
            aria-label="Back to explore"
            className="rounded-full p-2 text-[#26301c] transition hover:bg-[#66703f]/10"
          >
            <ArrowLeft size={22} strokeWidth={1.8} />
          </Link>
          <h1 className="font-[var(--font-lora)] text-2xl font-semibold">About Spa Elaris</h1>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-3xl bg-[#26301c] sm:h-[440px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,196,135,0.24),transparent_42%),linear-gradient(135deg,#26301c,#66703f)]" />
          <Image
            src="/selogo.png"
            alt="Spa Elaris logo"
            width={320}
            height={220}
            priority
            className="relative z-10 h-auto w-48 object-contain brightness-0 invert sm:w-64"
          />
        </div>

        <article className="mt-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">The Spa Elaris standard</p>
          <h2 className="mt-4 max-w-2xl font-[var(--font-lora)] text-4xl font-medium leading-tight sm:text-6xl">
            Wellness, made personal.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[#606454]">
            <p>
              Spa Elaris is a modern wellness destination created for people who want their care to feel considered, calm and genuinely personal.
            </p>
            <p>
              Our spaces bring together advanced skin care, restorative body treatments and beauty rituals with the warmth of thoughtful human attention. Every appointment begins with listening and ends with you feeling more like yourself.
            </p>
            <p>
              From the first welcome to the final moment of your visit, our team is here to make well-being feel easy to return to.
            </p>
          </div>
        </article>

        <section className="mt-14 grid gap-4 border-t border-[#66703f]/15 pt-8 sm:grid-cols-3">
          {[
            ["01", "Thoughtful care", "Every treatment is shaped around you."],
            ["02", "Expert hands", "Skilled professionals, carefully chosen."],
            ["03", "Quiet confidence", "A peaceful space for lasting renewal."],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-2xl bg-white p-5 shadow-sm">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#66703f]">{number}</span>
              <h3 className="mt-5 font-[var(--font-lora)] text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#606454]">{description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}