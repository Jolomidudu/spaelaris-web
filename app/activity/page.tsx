import Link from "next/link";
import { CalendarDays, CheckCircle2, ChevronRight, Clock3, MapPin } from "lucide-react";

const bookings = [
  {
    name: "Signature Massage",
    detail: "Friday, June 12, 2026 · 2:00 PM",
    location: "Spa Elaris, Lagos",
    status: "Upcoming",
    tone: "bg-[#66703f] text-white",
  },
  {
    name: "Elaris Facial Ritual",
    detail: "Thursday, April 2, 2026 · 11:30 AM",
    location: "Spa Elaris, Abuja",
    status: "Completed",
    tone: "bg-[#e7e7d9] text-[#66703f]",
  },
];

export default function ActivityPage() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] pb-28 text-[#26301c]">
      <header className="bg-[#26301c] px-5 pb-9 pt-8 text-white sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">Your Spa Elaris journey</p>
          <h1 className="mt-3 font-[var(--font-lora)] text-4xl font-medium">Activity</h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/65">Keep track of the moments you have made time for yourself.</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-10">
        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <CalendarDays size={20} className="text-[#66703f]" />
            <p className="mt-4 text-2xl font-semibold">01</p>
            <p className="mt-1 text-xs text-[#606454]">Upcoming visit</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <CheckCircle2 size={20} className="text-[#66703f]" />
            <p className="mt-4 text-2xl font-semibold">01</p>
            <p className="mt-1 text-xs text-[#606454]">Completed visit</p>
          </div>
        </section>

        <div className="mt-10 flex items-center gap-6 border-b border-[#66703f]/15">
          <button type="button" className="border-b-2 border-[#66703f] pb-3 text-sm font-semibold text-[#26301c]">All activity</button>
          <button type="button" className="pb-3 text-sm text-[#606454]">Upcoming</button>
          <button type="button" className="pb-3 text-sm text-[#606454]">Past visits</button>
        </div>

        <div className="mt-6 space-y-4">
          {bookings.map((booking) => (
            <article key={booking.name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className={`flex items-center justify-between gap-4 px-5 py-3 text-xs font-semibold ${booking.tone}`}>
                <span>{booking.status}</span>
                <span>Spa Elaris</span>
              </div>
              <div className="flex items-start justify-between gap-5 p-5">
                <div>
                  <h2 className="font-[var(--font-lora)] text-xl font-medium">{booking.name}</h2>
                  <p className="mt-3 flex items-center gap-2 text-sm text-[#606454]"><Clock3 size={15} />{booking.detail}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-[#606454]"><MapPin size={15} />{booking.location}</p>
                </div>
                <Link href="/services" aria-label={`View ${booking.name}`} className="rounded-full p-2 text-[#66703f] transition hover:bg-[#66703f]/10"><ChevronRight size={20} /></Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-[#66703f]/25 p-6 text-center">
          <p className="text-sm text-[#606454]">Ready for your next reset?</p>
          <Link href="/services" className="mt-3 inline-flex rounded-full bg-[#26301c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#66703f]">Explore treatments</Link>
        </div>
      </div>
    </main>
  );
}
