import BookingForm from "./BookingForm";

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; service?: string }>;
}) {
  const params = await searchParams;
  return <BookingForm initialCategorySlug={params.category} initialServiceSlug={params.service} />;
}
