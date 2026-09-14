import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

const reviews = [
  { name: "Aisha", service: "Hydra Facials", date: "12 Aug 2026", image: "/facial.jpg", note: "A beautiful experience from start to finish." },
  { name: "Chinedu", service: "Deep Tissue Massage", date: "28 Jul 2026", image: "/massage.jpg", note: "The calmest space and the most thoughtful service." },
  { name: "Mariam", service: "Hot Stone Massage", date: "05 Jul 2026", image: "/hot-stone.jpg", note: "I left feeling completely renewed." },
];

export const metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#e9e8d9] px-5 pb-20 pt-28 text-[#26301c] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/" aria-label="Back to home" className="inline-flex rounded-full p-2 transition hover:bg-[#66703f]/10"><ArrowLeft size={22} /></Link>
        <div className="mt-8 flex items-end justify-between gap-5">
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Guest experiences</p><h1 className="mt-4 text-5xl font-light sm:text-7xl">Reviews</h1></div>
          <div className="flex items-center gap-2 text-[#66703f]"><Star size={17} fill="currentColor" /><span className="font-semibold">5.0</span></div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => <blockquote key={review.name} className="rounded-3xl bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><Image src={review.image} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" /><div><p className="font-semibold">{review.name}</p><p className="mt-1 text-xs text-[#66703f]">{review.service}</p></div></div><p className="mt-6 text-base leading-7">“{review.note}”</p><footer className="mt-5 text-xs uppercase tracking-[0.15em] text-[#606454]">{review.date}</footer></blockquote>)}
        </div>
      </div>
    </main>
  );
}