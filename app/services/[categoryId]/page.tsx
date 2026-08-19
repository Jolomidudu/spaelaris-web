
import Link from "next/link";
import "./category.css";
import { notFound } from "next/navigation";
import {
  serviceCategories,
  formatPrice,
  serviceSlug,
} from "@/data/services";

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
  const category = serviceCategories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="category-page">

      {/* HERO */}
      <section className="category-hero">

        <div className="category-hero-image">
          <img
            src={category.image}
            alt={category.name}
          />
        </div>

        <div className="category-hero-content">

          <Link href="/" className="back-button">
            ←
          </Link>

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

                {service.duration && (
                  <p className="service-duration">
                    {service.duration}
                  </p>
                )}

                <p className="service-price">
                  {formatPrice(service.price)}
                </p>

              </div>


              <Link
                href={`/services/${category.id}/${serviceSlug(service.name)}`}
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
          href={`/book?category=${category.id}`}
          className="book-now-button"
        >
          Book now
        </Link>

      </div>

    </main>
  );
}