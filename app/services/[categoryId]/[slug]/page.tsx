import Link from "next/link";
import { notFound } from "next/navigation";

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
    <main className="min-h-screen bg-white text-[#111111]">

      <section className="border-b border-black/[0.08] px-5 py-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href={`/services/${category.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-black"
          >
            ← Back to {category.shortName}
          </Link>
        </div>
      </section>

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

            <div className="mt-6">
              <Link
                href={`/book?category=${category.id}&service=${serviceSlug(service.name)}`}
                className="inline-block rounded bg-black text-white px-4 py-2"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}