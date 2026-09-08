import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Heart,
  Hand,
  HandHeart,
  PersonStanding,
  Sparkles,
  Droplets,
  ScanLine,
  Webhook,
} from "lucide-react";
import { serviceCategories } from "@/data/services";

const categoryIcons = [
  Webhook,
  Hand,
  HandHeart,
  Sparkles,
  PersonStanding,
  Droplets,
  ScanLine,
  Heart,
];

const colorThemes = [
  "from-[#3f4a2c] to-[#7b8a4b]",
  "from-[#6c493d] to-[#c18c6b]",
  "from-[#314b50] to-[#6d9b98]",
  "from-[#705b32] to-[#c5a65d]",
  "from-[#425d3f] to-[#8ca878]",
  "from-[#5b3e4f] to-[#b47e9b]",
  "from-[#34516d] to-[#78a0bc]",
  "from-[#6d4939] to-[#c49372]",
  "from-[#26301c] to-[#8c9a68]",
];

export default function Home() {
  const cards = [
    {
      id: "all-treatments",
      name: "All Treatments",
      shortName: "Explore everything",
      href: "/services",
      image: "/hero-spa.jpg",
      Icon: ArrowUpRight,
    },
    ...serviceCategories.map((category, index) => ({
      id: category.id,
      name: category.shortName,
      shortName: category.number,
      href: `/services/${category.id}`,
      image: category.image,
      Icon: categoryIcons[index],
    })),
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f4ed] text-[#26301c]">
      <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-[length:200%_200%] bg-gradient-to-br from-white via-[#f3f5e9] to-[#e7d9bf] px-5 py-20 animate-[gradientShift_14s_ease_infinite] sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(216,196,135,0.3),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(102,112,63,0.16),transparent_38%)]" />

        <div className="mx-auto w-full max-w-6xl">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-5 text-center animate-[welcomeSequence_2.8s_ease-in-out_both]">
            <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] text-[#26301c] sm:text-7xl lg:text-8xl">
              Welcome to
              <br />
              <span className="font-semibold italic text-[#66703f]">Spa Elaris</span>
            </h1>
          </div>

          <div className="animate-[servicesReveal_900ms_2.8s_ease-out_both]">
            <div className="max-w-4xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#66703f]">
                Spa Elaris
              </p>
              <h1 className="text-4xl font-light leading-[0.98] tracking-[-0.04em] text-[#26301c] sm:text-6xl lg:text-7xl">
                Select a service to start
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-[#26301c]/65">
                Begin your wellness experience with Spa Elaris.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5 lg:mt-14 lg:gap-6">
              {cards.map(({ id, name, shortName, href, image, Icon }, index) => (
                <Link
                  key={id}
                  href={href}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-[#26301c]/15 bg-black/10 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl"
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 33vw"
                    className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-75"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorThemes[index]}/90 mix-blend-multiply`} />
                  <div className="relative flex h-full flex-col justify-between p-3 text-white sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 sm:text-xs">
                        {shortName}
                      </span>
                      <Icon size={18} strokeWidth={1.6} className="shrink-0 text-[#f4d99a]" />
                    </div>
                    <h2 className="max-w-[12rem] text-sm font-medium leading-tight sm:text-lg lg:text-xl">
                      {name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
