
import Link from "next/link";
import Image from "next/image";
import "./category.css";
import { notFound } from "next/navigation";
import CategoryBackButton from "../../../components/CategoryBackButton";
import { formatDuration, formatPrice, getCatalog } from "@/lib/catalog";

type CategoryPageProps = {
  params: Promise<{
    categoryId: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { categoryId } = await params;

  // The URL contains the category id (used as slug in data),
  // e.g. /services/med-facials
  const categories = await getCatalog();
  const category = categories.find((item) => item.slug === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <main className="category-page">
      <header className="category-mobile-header">
        <CategoryBackButton className="category-mobile-back-button" />
        <h1>{category.shortName}</h1>
      </header>

      {/* HERO */}
      <section className="category-hero">

        <div className="category-hero-image">
            <Image
            src={category.imageUrl ?? "/hero-spa.jpg"}
            alt={category.name}
            fill
            sizes="100vw"
          />
        </div>

        <div className="category-hero-content">

          <CategoryBackButton />

          <div className="category-number">
            {category.number}
          </div>

          <h1>{category.shortName}</h1>

          <p>
            {category.description}
          </p>

        </div>

      </section>


      {/* SERVICES */}
      <section className="services-section">

        <div className="services-heading">

          <span>SERVICES</span>

          <span className="service-count">
            {category.services.length}
          </span>

        </div>


        <div className="services-list">

          {category.services.map((service) => (

            <article
              key={service.name}
              className="service-row-card"
            >

              <div className="service-row-info">

                <h2>
                  {service.name}
                </h2>

                {service.durationMinutes !== null && (
                  <p className="service-duration">
                    {formatDuration(service.durationMinutes)}
                  </p>
                )}

                <p className="service-price">
                  {formatPrice(service.priceKobo)}
                </p>

              </div>


              <Link
                href={`/services/${category.slug}/${service.slug}`}
                className="view-service-button"
              >
                View Now
              </Link>

            </article>

          ))}

        </div>

      </section>


      {/* BOTTOM BOOKING BAR */}
      <div className="category-bottom-bar">

        <div className="bottom-service-count">

          <strong>
            {category.services.length}
          </strong>

          <span>
            {category.services.length === 1
              ? "service available"
              : "services available"}
          </span>

        </div>


        <Link
          href={`/book?category=${category.slug}`}
          className="book-now-button"
        >
          Book now
        </Link>

      </div>

    </main>
  );
}