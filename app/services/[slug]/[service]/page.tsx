import Link from "next/link";
import { notFound } from "next/navigation";
import {
  serviceCategories,
  serviceSlug,
  formatPrice,
} from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
    service: string;
  }>;
};

export function generateStaticParams() {
  return serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      slug: category.id,
      service: serviceSlug(service.name),
    }))
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug, service: serviceParam } = await params;

  const category = serviceCategories.find(
    (item) => item.id === slug
  );

  if (!category) {
    notFound();
  }

  const service = category.services.find(
    (item) => serviceSlug(item.name) === serviceParam
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f3eb] text-[#30382a]">
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src={category.image}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t
          from-[#1f2a19] via-[#1f2a19]/65
          to-[#1f2a19]/20"
        />

        {/* BACK TO CATEGORY */}
        <Link
          href={`/services/${category.id}`}
          className="absolute left-6 top-8 z-20
          inline-flex items-center gap-3 text-xs
          uppercase tracking-[0.18em] text-white/80
          transition hover:text-white md:left-10
          md:top-10 lg:left-16"
        >
          <span className="text-lg">←</span>
          <span>Back to {category.shortName}</span>
        </Link>

        <div
          className="relative z-10 flex min-h-[70vh]
          items-end px-6 py-16 md:px-10 md:py-20
          lg:px-16"
        >
          <div className="mx-auto w-full max-w-7xl">
            <p
              className="mb-5 text-[10px] uppercase
              tracking-[0.35em] text-[#d8c98c]"
            >
              {category.name}
            </p>

            <h1
              className="max-w-5xl text-5xl font-light
              leading-[0.95] tracking-[-0.04em]
              text-white md:text-7xl lg:text-8xl"
            >
              {service.name}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <p
                className="text-2xl font-light text-white
                md:text-3xl"
              >
                {formatPrice(service.price)}
              </p>

              <span
                className="h-px w-10 bg-[#d8c98c]/60"
              />

              <p
                className="text-[10px] uppercase
                tracking-[0.25em] text-white/60"
              >
                Elaris Treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT DETAILS */}
      {/* TREATMENT DETAILS */}
<section
  className="px-6 py-20 md:px-10 md:py-28
  lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    {/* MAIN INTRO + BOOKING */}
    <div className="grid gap-14 md:grid-cols-[1fr_0.7fr]">

      {/* DESCRIPTION */}
      <div>
        <p
          className="text-[10px] uppercase
          tracking-[0.3em] text-[#697750]"
        >
          About the treatment
        </p>

        <h2
          className="mt-5 max-w-3xl text-4xl
          font-light leading-tight
          tracking-[-0.03em] md:text-6xl"
        >
          An experience designed
          <br />
          <span className="italic text-[#697750]">
            around you.
          </span>
        </h2>

        <p
          className="mt-8 max-w-2xl text-base
          leading-8 text-[#69705f]"
        >
          {service.description}
        </p>

        {/* DURATION */}
        {service.duration && (
          <div className="mt-10">
            <p
              className="text-[10px] uppercase
              tracking-[0.3em] text-[#697750]"
            >
              Duration
            </p>

            <p className="mt-3 text-2xl font-light">
              {service.duration}
            </p>
          </div>
        )}
      </div>


      {/* BOOKING CARD */}
      <div
        className="self-start rounded-[28px]
        bg-[#e6e6d8] p-8 md:p-10"
      >
        <p
          className="text-[10px] uppercase
          tracking-[0.3em] text-[#697750]"
        >
          Treatment price
        </p>

        <p
          className="mt-4 text-4xl font-light
          tracking-[-0.03em]"
        >
          {formatPrice(service.price)}
        </p>

        <p
          className="mt-5 text-sm leading-7
          text-[#69705f]"
        >
          Experience this treatment in the
          calm and restorative environment of
          Spa Elaris.
        </p>

        {service.duration && (
          <div
            className="mt-6 border-t
            border-[#30382a]/10 pt-5"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[10px] uppercase
                tracking-[0.2em] text-[#697750]"
              >
                Duration
              </span>

              <span className="text-sm">
                {service.duration}
              </span>
            </div>
          </div>
        )}

        <Link
          href="/contact"
          className="mt-8 inline-flex w-full
          items-center justify-center
          rounded-full bg-[#344329] px-7 py-4
          text-xs font-medium uppercase
          tracking-[0.15em] text-white
          transition hover:bg-[#26331f]"
        >
          Book This Treatment
        </Link>
      </div>

    </div>


    {/* TREATMENT DETAILS */}
    {service.details && (
      <div
        className="mt-20 border-t
        border-[#30382a]/10 pt-16"
      >
        <div className="max-w-4xl">

          <p
            className="text-[10px] uppercase
            tracking-[0.3em] text-[#697750]"
          >
            The treatment
          </p>

          <h3
            className="mt-5 text-3xl font-light
            tracking-[-0.03em] md:text-5xl"
          >
            What to expect
          </h3>

          <p
            className="mt-6 text-base leading-8
            text-[#69705f] md:text-lg"
          >
            {service.details}
          </p>

        </div>
      </div>
    )}


    {/* BENEFITS + INCLUDES */}
    {(service.benefits?.length || service.includes?.length) ? (
      <div
        className="mt-20 grid gap-12
        border-t border-[#30382a]/10 pt-16
        md:grid-cols-2"
      >

        {/* BENEFITS */}
        {service.benefits && service.benefits.length > 0 && (
          <div>

            <p
              className="text-[10px] uppercase
              tracking-[0.3em] text-[#697750]"
            >
              Benefits
            </p>

            <h3
              className="mt-5 text-3xl font-light
              tracking-[-0.03em] md:text-4xl"
            >
              Why you'll love it.
            </h3>

            <div className="mt-8 space-y-4">

              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4
                  border-b border-[#30382a]/10
                  pb-4"
                >
                  <span
                    className="mt-1 flex h-5 w-5
                    shrink-0 items-center
                    justify-center rounded-full
                    bg-[#344329] text-[10px]
                    text-[#d8c98c]"
                  >
                    ✓
                  </span>

                  <p
                    className="text-sm leading-6
                    text-[#69705f]"
                  >
                    {benefit}
                  </p>
                </div>
              ))}

            </div>
          </div>
        )}


        {/* WHAT'S INCLUDED */}
        {service.includes && service.includes.length > 0 && (
          <div>

            <p
              className="text-[10px] uppercase
              tracking-[0.3em] text-[#697750]"
            >
              What's included
            </p>

            <h3
              className="mt-5 text-3xl font-light
              tracking-[-0.03em] md:text-4xl"
            >
              Your experience.
            </h3>

            <div className="mt-8 space-y-4">

              {service.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4
                  border-b border-[#30382a]/10
                  pb-4"
                >
                  <span
                    className="mt-1 flex h-5 w-5
                    shrink-0 items-center
                    justify-center rounded-full
                    bg-[#344329] text-[10px]
                    text-[#d8c98c]"
                  >
                    ✓
                  </span>

                  <p
                    className="text-sm leading-6
                    text-[#69705f]"
                  >
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    ) : null}

  </div>
</section>

      {/* EXPERIENCE */}
      <section
        className="bg-[#e6e6d8] px-6 py-20
        md:px-10 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2
            md:items-center"
          >
            <div>
              <p
                className="text-[10px] uppercase
                tracking-[0.3em] text-[#697750]"
              >
                The Elaris Experience
              </p>

              <h2
                className="mt-5 text-4xl font-light
                leading-tight tracking-[-0.03em]
                md:text-6xl"
              >
                Take a moment
                <br />
                <span className="italic text-[#697750]">
                  for yourself.
                </span>
              </h2>

              <p
                className="mt-6 max-w-xl text-sm
                leading-7 text-[#69705f]"
              >
                Discover a thoughtful wellness
                experience created to leave you
                feeling renewed.
              </p>
            </div>

            <div
              className="relative overflow-hidden
              rounded-[28px]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-[400px] w-full object-cover
                md:h-[500px]"
              />

              <div
                className="absolute inset-0
                bg-gradient-to-t from-[#1f2a19]/50
                to-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section
        className="bg-[#344329] px-6 py-20
        text-center text-white md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-[10px] uppercase
            tracking-[0.3em] text-[#d8c98c]"
          >
            Continue exploring
          </p>

          <h2
            className="mt-5 text-4xl font-light
            leading-tight md:text-6xl"
          >
            Explore more
            <br />
            <span className="italic text-[#d8c98c]">
              Elaris treatments.
            </span>
          </h2>

          <Link
            href={`/services/${category.id}`}
            className="mt-8 inline-flex rounded-full
            bg-[#d8c98c] px-7 py-3.5 text-xs
            font-medium uppercase tracking-[0.15em]
            text-[#344329] transition
            hover:bg-[#eee2a9]"
          >
            Back to {category.shortName}
          </Link>
        </div>
      </section>
    </main>
  );
}