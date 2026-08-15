import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
    alt: "Relaxing spa treatment",
    className: "h-[420px]",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    alt: "Facial treatment",
    className: "h-[300px]",
  },
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=85",
    alt: "Body wellness treatment",
    className: "h-[300px]",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    alt: "Spa environment",
    className: "h-[420px]",
  },
];

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="bg-[#f7f6ef] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#66703f]">
              The Spaelaris Experience
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#3f4a2c] sm:text-5xl lg:text-6xl">
              A space created for{" "}
              <span className="italic">you.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#606454]">
              Step into an atmosphere designed around relaxation, beauty and
              quiet moments of self-care.
            </p>
          </div>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3f4a2c] transition hover:text-[#66703f]"
          >
            View full gallery
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-[2rem] ${
                index === 0 || index === 3
                  ? "sm:mt-12"
                  : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${image.className}`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26301c]/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 right-6 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Spaelaris Experience
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}