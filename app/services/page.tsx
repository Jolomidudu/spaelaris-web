import Link from "next/link";
import {
  serviceCategories,
  formatPrice,
} from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f4f2e9] text-[#354329]">
      
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#354329] px-6 py-28 text-[#f4f2e9] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#d8c98c]">
            The Elaris Menu
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Treatments
            <br />
            <span className="italic text-[#d8c98c]">designed around you.</span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/65 md:text-base">
            Explore the complete Spaelaris treatment collection —
            from advanced facials and restorative massage to body rituals,
            laser care and private couple experiences.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#697750]">
              Eight collections
            </p>

            <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] md:text-5xl">
              A treatment for every
              <span className="italic"> kind of wellness.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#65705a]">
            Discover carefully curated experiences created to help you
            slow down, restore your body and reconnect with yourself.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {serviceCategories.map((category) => (
            <Link
              key={category.id}
              href={`/services/${category.id}`}
              className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#414f30]"
            >
              {/* IMAGE */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#25301d] via-[#25301d]/35 to-transparent" />

              {/* NUMBER */}
              <div className="absolute left-6 top-6 text-xs tracking-[0.2em] text-white/70">
                {category.number}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#d8c98c]">
                  Elaris Collection
                </p>

                <h3 className="text-2xl font-light text-white md:text-3xl">
                  {category.name}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center gap-3 text-xs text-white">
                  <span>Explore collection</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-[#354329]">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED TREATMENTS */}
      <section className="bg-[#e9e8d9] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#697750]">
                Signature experiences
              </p>

              <h2 className="text-3xl font-light tracking-[-0.03em] md:text-5xl">
                Some of our
                <span className="italic"> favourites.</span>
              </h2>
            </div>

            <Link
              href="#collections"
              className="text-xs uppercase tracking-[0.15em] underline underline-offset-8"
            >
              View all treatments
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              serviceCategories[0].services[2],
              serviceCategories[2].services[0],
              serviceCategories[4].services[0],
            ].map((service) => (
              <div
                key={service.name}
                className="rounded-3xl bg-[#f8f7f1] p-7"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#697750]">
                  Featured Treatment
                </p>

                <h3 className="mt-8 text-xl font-light">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#69705f]">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#354329]/10 pt-5">
                  <span className="text-sm">
                    {formatPrice(service.price)}
                  </span>

                  <span className="text-lg">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#354329] px-6 py-28 text-center text-[#f4f2e9] md:px-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8c98c]">
          Your wellness journey
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight md:text-6xl">
          Find the treatment
          <br />
          <span className="italic text-[#d8c98c]">made for you.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/60">
          Take your time exploring the Elaris collection.
          Your perfect wellness experience is waiting.
        </p>

        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-full bg-[#d8c98c] px-7 py-3 text-xs font-medium text-[#354329] transition hover:bg-white"
        >
          Contact Spaelaris ↗
        </Link>
      </section>
    </main>
  );
}