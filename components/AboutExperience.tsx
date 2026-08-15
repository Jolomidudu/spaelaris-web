import { ArrowUpRight, Check } from "lucide-react";

const highlights = [
  "Thoughtfully curated treatments",
  "Premium wellness experience",
  "Personalized attention",
];

export default function AboutExperience() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#f7f6ef] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          
          {/* IMAGE */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-[2rem] sm:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="Spaelaris wellness experience"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#26301c]/40 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-7 right-4 max-w-[230px] rounded-2xl bg-[#3f4a2c] p-6 text-white shadow-2xl sm:right-8">
              <p className="text-3xl font-light text-[#d8c487]">
                100%
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Focused on creating a peaceful experience around you.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#66703f]">
              Welcome to Spaelaris
            </p>

            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#3f4a2c] sm:text-5xl lg:text-6xl">
              Your escape from the{" "}
              <span className="italic">everyday.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#606454]">
              Spaelaris is more than a destination for beauty treatments.
              It is a space designed to help you slow down, reconnect and
              leave feeling renewed.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#606454]">
              Every detail is thoughtfully considered — from the treatments
              we offer to the environment in which you experience them.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 text-sm text-[#3f4a2c]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e5e8d4]">
                    <Check size={15} />
                  </span>

                  {highlight}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#3f4a2c] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#66703f]"
            >
              Discover our story

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}