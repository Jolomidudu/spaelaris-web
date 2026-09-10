import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] pb-24 text-[#252820]">
      <header className="border-b border-[#66703f]/15 bg-white/70 px-5 py-5 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-2xl items-center gap-4">
          <Link
            href="/explore"
            aria-label="Back to explore"
            className="rounded-full p-2 text-[#252820] transition hover:bg-[#66703f]/10"
          >
            <ArrowLeft size={22} strokeWidth={1.8} />
          </Link>
          <h1 className="font-[var(--font-lora)] text-2xl font-semibold">Notifications</h1>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-92px)] max-w-2xl flex-col items-center justify-center px-6 pb-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#66703f]/10 text-[#66703f]">
          <Bell size={34} strokeWidth={1.5} />
        </div>
        <h2 className="mt-6 font-[var(--font-lora)] text-2xl font-semibold">No notifications yet</h2>
        <p className="mt-3 max-w-xs text-sm leading-6 text-[#606454]">
          We&apos;ll let you know about new offers, appointments and updates here.
        </p>
        <Link
          href="/explore"
          className="mt-8 rounded-full bg-[#26301c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#66703f]"
        >
          Explore services
        </Link>
      </section>
    </main>
  );
}