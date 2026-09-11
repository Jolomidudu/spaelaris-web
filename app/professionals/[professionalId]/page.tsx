import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Clock3, MapPin, Star } from "lucide-react";
import { serviceCategories, formatPrice } from "@/data/services";
import ProfessionalSectionNav from "@/components/ProfessionalSectionNav";

type Professional = {
  name: string;
  role: string;
  rating: string;
  city: string;
  image: string;
  completed: string;
  clients: string;
  languages: string;
  featured: string[];
};

const professionals: Record<string, Professional> = {
  amara: {
    name: "Amara Okafor",
    role: "Skin specialist",
    rating: "4.9 (86 reviews)",
    city: "Lagos, Nigeria",
    image: "/facial.jpg",
    completed: "640+",
    clients: "410+",
    languages: "English, Yoruba, Igbo",
    featured: ["Advanced Glow Facials", "Hydra Facials", "Elaris Classic Facials"],
  },
  tomi: {
    name: "Tomi Adeyemi",
    role: "Wellness therapist",
    rating: "4.8 (72 reviews)",
    city: "Lagos, Nigeria",
    image: "/massage.jpg",
    completed: "520+",
    clients: "350+",
    languages: "English, Yoruba",
    featured: ["Deep Tissue Massage", "Relaxation Massage", "Hot Stone Massage"],
  },
  zainab: {
    name: "Zainab Bello",
    role: "Beauty professional",
    rating: "5.0 (64 reviews)",
    city: "Abuja, Nigeria",
    image: "/hot-stone.jpg",
    completed: "710+",
    clients: "460+",
    languages: "English, Hausa, Yoruba",
    featured: ["Signature Manicure", "Elaris Pedicure", "Beauty Ritual"],
  },
  nneka: {
    name: "Nneka Eze",
    role: "Wellness therapist",
    rating: "4.9 (58 reviews)",
    city: "Lagos, Nigeria",
    image: "/hero-spa.jpg",
    completed: "480+",
    clients: "320+",
    languages: "English, Igbo",
    featured: ["Aromatherapy Massage", "Relaxation Massage", "Couples Massage"],
  },
};

const reviewData = [
  { name: "Aisha", date: "12 Aug 2026", text: "Warm, thoughtful and incredibly skilled. I left feeling completely renewed." },
  { name: "Chinedu", date: "28 Jul 2026", text: "A calm experience from start to finish. I would happily book again." },
];

export default async function ProfessionalDetailPage({
  params,
}: {
  params: Promise<{ professionalId: string }>;
}) {
  const { professionalId } = await params;
  const professional = professionals[professionalId];

  if (!professional) {
    return null;
  }

  const services = serviceCategories
    .flatMap((category) => category.services)
    .filter((service) => professional.featured.includes(service.name) || service.duration)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-[#f7f6ef] pb-28 text-[#26301c]">
      <header className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-5 sm:px-8">
        <Link href="/explore" aria-label="Back to explore" className="rounded-full p-2 transition hover:bg-[#66703f]/10">
          <ArrowLeft size={22} strokeWidth={1.8} />
        </Link>
        <p className="text-sm font-medium text-[#606454]">Professional profile</p>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-10 text-center sm:px-8">
        <Image src={professional.image} alt={professional.name} width={144} height={144} className="mx-auto h-36 w-36 rounded-full object-cover shadow-md" priority />
        <h1 className="mt-5 font-[var(--font-lora)] text-3xl font-semibold text-black sm:text-4xl">{professional.name}</h1>
        <p className="mt-2 text-sm text-[#606454]">{professional.role}</p>
        <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-[#66703f]"><Star size={15} fill="currentColor" />{professional.rating}</div>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-[#606454]"><MapPin size={15} />{professional.city}</p>
      </section>

      <ProfessionalSectionNav />

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-10 sm:px-8">
        <section id="featured" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Featured</p>
          <h2 className="mt-3 font-[var(--font-lora)] text-3xl font-medium">Signature care by {professional.name.split(" ")[0]}.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {professional.featured.map((service) => <div key={service} className="rounded-2xl bg-white p-5 text-sm font-medium shadow-sm">{service}</div>)}
          </div>
        </section>

        <section id="profile" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Profile</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white p-4"><p className="text-2xl font-semibold">{professional.completed}</p><p className="mt-1 text-xs text-[#606454]">Appointments completed</p></div>
            <div className="rounded-2xl bg-white p-4"><p className="text-2xl font-semibold">{professional.clients}</p><p className="mt-1 text-xs text-[#606454]">Clients served</p></div>
            <div className="rounded-2xl bg-white p-4"><p className="text-2xl font-semibold">3</p><p className="mt-1 text-xs text-[#606454]">Languages</p></div>
          </div>
          <p className="mt-4 text-sm text-[#606454]">Speaks {professional.languages}</p>
        </section>

        <section id="services" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Services</p>
          <div className="mt-6 space-y-3">
            {services.map((service) => (
              <div key={service.name} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="min-w-0 flex-1"><h3 className="font-medium">{service.name}</h3><p className="mt-1 flex items-center gap-1 text-xs text-[#606454]"><Clock3 size={13} />{service.duration ?? "60 minutes"}</p><p className="mt-1 text-sm font-semibold text-[#66703f]">{formatPrice(service.price)}</p></div>
                <button type="button" className="shrink-0 rounded-full bg-[#26301c] px-4 py-2 text-xs font-medium text-white">Book</button>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Portfolio</p>
          <a href="#portfolio" className="mt-5 block rounded-2xl bg-[#26301c] p-6 text-sm font-medium text-white">View {professional.name.split(" ")[0]}&apos;s treatment portfolio <span aria-hidden="true">→</span></a>
        </section>

        <section id="reviews" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Reviews</p>
          <div className="mt-6 space-y-3">
            {reviewData.map((review) => <article key={review.name} className="rounded-2xl bg-white p-5"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#66703f] text-sm font-semibold text-white">{review.name[0]}</div><div><h3 className="text-sm font-semibold">{review.name}</h3><div className="mt-1 flex gap-0.5 text-[#d8a928]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" />)}</div></div></div><p className="mt-4 text-sm leading-6 text-[#606454]">{review.text}</p><p className="mt-3 text-xs text-[#909487]">{review.date}</p></article>)}
          </div>
        </section>
      </div>

      <div className="fixed bottom-3 left-3 right-3 z-40 mx-auto max-w-5xl"><button type="button" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#26301c] py-4 text-sm font-semibold text-white shadow-xl"><Check size={18} />Book with {professional.name.split(" ")[0]}</button></div>
    </main>
  );
}