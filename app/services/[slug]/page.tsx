import Link from "next/link";
import { notFound } from "next/navigation";

import {
  serviceCategories,
  serviceSlug,
} from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceCategoryPage({ params }: Props) {
  const { slug } = await params;

  // Find the category that matches the URL
  const category = serviceCategories.find(
    (item) => item.id === slug
  );

  // If the category does not exist, show Next.js 404 page
  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f3eb] text-[#30382a]">

      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">

        {/* Background image */}
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a19] via-[#1f2a19]/55 to-[#1f2a19]/20" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[70vh] items-end px-6 py-16 md:px-10 md:py-20 lg:px-16">

           {/* BACK BUTTON */}
  <Link
    href="/services"
    className="absolute left-6 top-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/80 transition hover:text-white md:left-10 md:top-10 lg:left-16"
  >
    <span className="text-lg">←</span>
    <span>Back to treatments</span>
  </Link>

          <div className="mx-auto w-full max-w-7xl">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#d8c98c]">
              Elaris Collection {category.number}
            </p>

            <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
              {category.name}
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              {category.description}
            </p>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-2 md:items-end">

            <div>

              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#697750]">
                {category.shortName}
              </p>

              <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
                Discover your
                <br />
                <span className="italic">
                  perfect treatment.
                </span>
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-7 text-[#69705f] md:ml-auto">
              Explore the treatments available within this Elaris
              collection and choose the experience that feels right
              for you.
            </p>

          </div>

        </div>

      </section>


      {/* TREATMENTS */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#697750]">
              Treatments
            </p>

            <h2 className="mt-3 text-3xl font-light tracking-[-0.03em] md:text-5xl">
              {category.services.length} experiences
              <span className="italic text-[#697750]">
                {" "}to explore.
              </span>
            </h2>

          </div>


          {/* SERVICE LIST */}
          <div className="divide-y divide-[#30382a]/15 border-y border-[#30382a]/15">

            {category.services.map((service, index) => (

              <Link
  key={service.name}
  href={`/services/${category.id}/${serviceSlug(service.name)}`}
  className="group block"
>
  <article
    className="grid gap-8 py-10 md:grid-cols-[1fr_auto]
    md:items-start md:py-14"
  >
    {/* SERVICE INFORMATION */}
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center gap-4">
        <span
          className="text-[10px] tracking-[0.25em]
          text-[#697750]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="h-px w-8 bg-[#697750]/40" />

        <span
          className="text-[10px] uppercase tracking-[0.25em]
          text-[#697750]"
        >
          Elaris Treatment
        </span>
      </div>

      <h3
        className="text-2xl font-light tracking-[-0.02em]
        transition group-hover:text-[#697750]
        md:text-4xl"
      >
        {service.name}
      </h3>

      <p
        className="mt-4 max-w-2xl text-sm leading-7
        text-[#69705f] md:text-base"
      >
        {service.description}
      </p>
    </div>

    {/* PRICE */}
    <div className="md:min-w-[180px] md:text-right">
      <p
        className="text-[10px] uppercase tracking-[0.25em]
        text-[#697750]"
      >
        From
      </p>

      <p className="mt-2 text-2xl font-light md:text-3xl">
        ₦{service.price.toLocaleString()}
      </p>

      <span
        className="mt-5 inline-flex items-center gap-2
        text-[10px] uppercase tracking-[0.2em]
        text-[#30382a] underline underline-offset-4
        transition group-hover:text-[#697750]"
      >
        View treatment
        <span className="transition group-hover:translate-x-1">
          ↗
        </span>
      </span>
    </div>
  </article>
</Link>

            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE IMAGE / DESCRIPTION */}
      <section className="bg-[#e6e6d8] px-6 py-20 md:px-10 md:py-28 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#697750]">
                The Elaris Experience
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
                Designed around
                <br />
                <span className="italic text-[#697750]">
                  you.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#69705f]">
                Every Elaris treatment is created to give you a
                thoughtful wellness experience in a calm and
                restorative environment.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#344329] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#26331f]"
              >
                Book an Experience
              </Link>

            </div>


            <div className="relative overflow-hidden rounded-[28px]">

              <img
                src={category.image}
                alt={category.name}
                className="h-[400px] w-full object-cover md:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a19]/50 to-transparent" />

            </div>

          </div>

        </div>

      </section>


      {/* BACK TO SERVICES */}
      <section className="bg-[#344329] px-6 py-20 text-center text-white md:px-10 md:py-28">

        <div className="mx-auto max-w-3xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8c98c]">
            Explore more
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
            Discover another
            <br />
            <span className="italic text-[#d8c98c]">
              Elaris collection.
            </span>
          </h2>

          <Link
            href="/services"
            className="mt-8 inline-flex rounded-full bg-[#d8c98c] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#344329] transition hover:bg-[#eee2a9]"
          >
            View all treatments
          </Link>

        </div>

      </section>

    </main>
  );
}