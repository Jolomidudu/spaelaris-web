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
        <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[440px]">
          <Image
            src="/hero-spa.jpg"
            alt="Spa Elaris treatment room"
            fill
            priority
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <article className="mt-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Our philosophy</p>
          <h2 className="mt-4 font-[var(--font-lora)] text-4xl font-medium leading-tight sm:text-6xl">
            A calmer way to care for yourself.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[#606454]">
            <p>
              Spa Elaris is a considered space for rest, renewal and meaningful self-care. Every detail is shaped to help you slow down and return to yourself.
            </p>
            <p>
              From restorative body treatments and advanced skin care to quiet wellness rituals, our team creates experiences around how you want to feel, not just what you want to change.
            </p>
            <p>
              Thoughtful guidance, personal attention and a peaceful environment come together to make each visit feel unhurried and entirely yours.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}