import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceDetailHeader from "../../../../components/ServiceDetailHeader";

import {
  serviceCategories,
  formatPrice,
  serviceSlug,
} from "@/data/services";

type Props = {
  params: Promise<{
    categoryId: string;
    slug: string;
  }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { categoryId, slug } = await params;

  const category = serviceCategories.find((item) => item.id === categoryId);

  if (!category) notFound();

  const service = category.services.find((item) => serviceSlug(item.name) === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white pt-0 text-[#111111] lg:pt-[150px]">

      <ServiceDetailHeader
        backHref={`/services/${category.id}`}
        categoryName={category.shortName}
      />

      <section className="px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="prose">
            <h1>{service.name}</h1>

            <div className="flex items-baseline gap-4">
              <div className="text-2xl font-semibold">{formatPrice(service.price)}</div>
              {service.duration && <div className="text-sm text-black/60">{service.duration}</div>}
            </div>

            <p>{service.description}</p>

            {service.details && (
              <div>
                <h3>Details</h3>
                <p>{service.details}</p>
              </div>
            )}

            {service.includes && service.includes.length > 0 && (
              <div>
                <h3>Includes</h3>
                <ul>
                  {service.includes.map((inc) => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.benefits && service.benefits.length > 0 && (
              <div>
                <h3>Benefits</h3>
                <ul>
                  {service.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href={`/book?category=${category.id}&service=${serviceSlug(service.name)}`}
              aria-label={`Book ${service.name} now`}
              title={`Book ${service.name} now`}
              className="fixed bottom-[100px] right-5 z-40 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#DEC8B0] text-[10px] font-semibold uppercase leading-tight text-[#354329] shadow-xl transition hover:bg-[#d6b894]"
            >
              <span>Book</span>
              <span>Now</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}