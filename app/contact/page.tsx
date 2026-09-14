import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

const locations = [
  { city: "Lagos", address: "Victoria Island, Lagos", phone: "+234 800 000 0000" },
  { city: "Abuja", address: "Maitama, Abuja", phone: "+234 800 000 0000" },
];

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] px-5 pb-20 pt-36 text-[#26301c] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Plan your visit</p>
          <h1 className="mt-5 text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-7xl">We would love to welcome you.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#606454]">Tell us what kind of care you are looking for, and our team will help you find the right treatment and location.</p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {locations.map((location) => (
            <section key={location.city} className="border-t border-[#66703f]/20 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#66703f]">Spa Elaris {location.city}</p>
              <h2 className="mt-4 text-3xl font-light">Your time, well spent.</h2>
              <div className="mt-7 space-y-4 text-sm text-[#606454]">
                <p className="flex items-center gap-3"><MapPin size={17} className="text-[#66703f]" />{location.address}</p>
                <p className="flex items-center gap-3"><Phone size={17} className="text-[#66703f]" />{location.phone}</p>
                <p className="flex items-center gap-3"><Clock3 size={17} className="text-[#66703f]" />Monday to Friday, 9:00 AM - 7:00 PM</p>
              </div>
              <a href={`tel:${location.phone.replaceAll(" ", "")}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#26301c] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#66703f]">Call this studio <ArrowRight size={15} /></a>
            </section>
          ))}
        </div>

        <section className="mt-20 grid gap-8 border-t border-[#66703f]/20 pt-8 sm:grid-cols-2">
          <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#66703f]">General enquiries</p><a href="mailto:hello@spaelariswellness.com" className="mt-4 inline-flex items-center gap-3 text-lg underline decoration-[#66703f]/40 underline-offset-8"><Mail size={19} />hello@spaelariswellness.com</a></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#66703f]">Ready to choose a treatment?</p><Link href="/services" className="mt-4 inline-flex items-center gap-2 text-lg text-[#66703f]">Browse the menu <ArrowRight size={18} /></Link></div>
        </section>
      </div>
    </main>
  );
}