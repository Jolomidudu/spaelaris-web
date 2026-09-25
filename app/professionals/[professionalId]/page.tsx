import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, MapPin, Star } from "lucide-react";
import ProfessionalSectionNav from "@/components/ProfessionalSectionNav";
import { formatDuration, formatPrice, getTherapists } from "@/lib/catalog";

export default async function ProfessionalDetailPage({
  params,
}: {
  params: Promise<{ professionalId: string }>;
}) {
  const { professionalId } = await params;
  const professionals = await getTherapists();
  const professional = professionals.find((item) => item.publicSlug === professionalId);

  if (!professional) notFound();

  const completedAppointments = professional.completedAppointments;
  const clientsServed = professional.clientsServed;

  return (
    <main className="min-h-screen bg-[#f7f6ef] pb-28 text-[#26301c]">
      <header className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-5 sm:px-8">
        <Link href="/professionals" aria-label="Back to professionals" className="rounded-full p-2 transition hover:bg-[#66703f]/10">
          <ArrowLeft size={22} strokeWidth={1.8} />
        </Link>
        <p className="text-sm font-medium text-[#606454]">Professional profile</p>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-10 text-center sm:px-8">
        <Image src={professional.photoUrl ?? "/hero-spa.jpg"} alt={professional.name} width={144} height={144} className="mx-auto h-36 w-36 rounded-full object-cover shadow-md" priority />
        <h1 className="mt-5 text-3xl font-semibold text-black sm:text-4xl">{professional.name}</h1>
        <p className="mt-2 text-sm text-[#606454]">{professional.displayTitle ?? professional.role}</p>
        {professional.rating !== null && <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-[#66703f]"><Star size={15} fill="currentColor" />{professional.rating.toFixed(1)}{professional.reviewCount ? ` (${professional.reviewCount} reviews)` : ""}</div>}
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-[#606454]"><MapPin size={15} />{professional.city}</p>
      </section>

      <ProfessionalSectionNav />

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-10 sm:px-8">
        <section id="featured" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Treatments</p>
          <h2 className="mt-3 text-3xl font-medium">Care by {professional.name.split(" ")[0]}.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {professional.services.map((service) => <div key={service.id} className="rounded-2xl bg-white p-5 text-sm font-medium shadow-sm">{service.name}</div>)}
          </div>
        </section>

        <section id="profile" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Profile</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white p-4"><p className="text-2xl font-semibold">{completedAppointments === null ? "-" : `${completedAppointments}+`}</p><p className="mt-1 text-xs text-[#606454]">Appointments completed</p></div>
            <div className="rounded-2xl bg-white p-4"><p className="text-2xl font-semibold">{clientsServed === null ? "-" : `${clientsServed}+`}</p><p className="mt-1 text-xs text-[#606454]">Clients served</p></div>
            <div className="rounded-2xl bg-white p-4"><p className="text-2xl font-semibold">{professional.languages.length}</p><p className="mt-1 text-xs text-[#606454]">Languages</p></div>
          </div>
          {professional.bio && <p className="mt-4 text-sm text-[#606454]">{professional.bio}</p>}
          {professional.languages.length > 0 && <p className="mt-2 text-sm text-[#606454]">Speaks {professional.languages.join(", ")}</p>}
        </section>

        <section id="services" className="scroll-mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66703f]">Services</p>
          <div className="mt-6 space-y-3">
            {professional.services.map((service) => (
              <article key={service.id} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium">{service.name}</h3>
                  {service.durationMinutes !== null && <p className="mt-1 flex items-center gap-1 text-xs text-[#606454]"><Clock3 size={13} />{formatDuration(service.durationMinutes)}</p>}
                  <p className="mt-1 text-sm font-semibold text-[#66703f]">{formatPrice(service.priceKobo)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Link href={`/professionals/${professional.publicSlug}#services`} aria-label={`View services by ${professional.name}`} title={`View services by ${professional.name}`} className="fixed bottom-[100px] right-5 z-40 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#26301c] text-[10px] font-semibold uppercase leading-tight text-white shadow-xl transition hover:bg-[#66703f]"><span>View</span><span>Services</span></Link>
    </main>
  );
}
