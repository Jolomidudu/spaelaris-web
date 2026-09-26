export type CatalogService = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  details: string | null;
  benefits: string[];
  includes: string[];
  durationMinutes: number | null;
  priceKobo: number;
  photoUrl: string | null;
};

export type CatalogCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  number: string | null;
  shortName: string | null;
  imageUrl: string | null;
  services: CatalogService[];
};

export type PublicTherapist = {
  id: string;
  publicSlug: string;
  displayTitle: string | null;
  bio: string | null;
  photoUrl: string | null;
  rating: number | null;
  reviewCount: number | null;
  completedAppointments: number | null;
  clientsServed: number | null;
  languages: string[];
  name: string;
  role: string;
  city: string;
  location: { name: string; slug: string; city: string };
  services: CatalogService[];
};

export type BookingLocation = {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  timezone: string;
};

export type AvailableBookingSlot = {
  startsAt: string;
  endsAt: string;
  therapistId: string;
  therapistName: string;
  availableRoomCount: number;
};

export type BookingAvailability = {
  date: string;
  locationSlug: string;
  totalDurationMinutes: number;
  slotIntervalMinutes: number;
  slots: AvailableBookingSlot[];
};

export type PublicBookingRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  locationSlug: string;
  serviceSlugs: string[];
  therapistProfileId: string;
  startsAt: string;
  endsAt: string;
  notes?: string;
};

export type PublicBookingResult = {
  id: string;
  startsAt: string;
  endsAt: string;
  status: string;
  services: { name: string; unitPriceKobo: number; durationMinutes: number }[];
  location: { name: string; city: string };
  therapist: { firstName: string; lastName: string } | null;
  room: { name: string } | null;
};

function getApiBaseUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SPAELARIS_API_URL ??
    process.env.SPAELARIS_API_URL ??
    "http://localhost:3001";
  const baseUrl = configuredUrl.replace(/\/+$/, "");
  return baseUrl.endsWith("/api") ? baseUrl : `${baseUrl}/api`;
}

async function getPublicData<T>(path: string): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}/public/${path}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Catalog request failed (${response.status})`);
  }
  return response.json() as Promise<T>;
}

export function getCatalog() {
  return getPublicData<CatalogCategory[]>("catalog");
}

export function getTherapists() {
  return getPublicData<PublicTherapist[]>("therapists");
}

export function getBookingLocations() {
  return getPublicData<BookingLocation[]>("locations");
}

export function getBookingAvailability(input: {
  locationSlug: string;
  date: string;
  serviceSlugs: string[];
}) {
  const query = new URLSearchParams({
    locationSlug: input.locationSlug,
    date: input.date,
    serviceSlugs: input.serviceSlugs.join(","),
  });
  return getPublicData<BookingAvailability>(`booking/availability?${query.toString()}`);
}

export async function createPublicBooking(data: PublicBookingRequest) {
  const response = await fetch(`${getApiBaseUrl()}/public/booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const payload = await response.json();
  if (!response.ok) {
    const message = Array.isArray(payload?.message) ? payload.message.join(", ") : payload?.message;
    throw new Error(message || "Unable to submit booking request.");
  }
  return payload as PublicBookingResult;
}

export function formatPrice(priceKobo: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(priceKobo / 100);
}

export function formatDuration(durationMinutes: number) {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  if (hours === 0) return `${minutes} minutes`;
  if (minutes === 0) return `${hours} hour${hours === 1 ? "" : "s"}`;
  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minutes`;
}
