"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, Check, Clock3, MapPin, Sparkles } from "lucide-react";
import {
  BookingAvailability,
  BookingLocation,
  CatalogCategory,
  CatalogService,
  PublicBookingResult,
  createPublicBooking,
  formatDuration,
  formatPrice,
  getBookingAvailability,
  getBookingLocations,
  getCatalog,
} from "@/lib/catalog";

function dateInTimezone(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  return `${parts.find((part) => part.type === "year")?.value}-${parts.find((part) => part.type === "month")?.value}-${parts.find((part) => part.type === "day")?.value}`;
}

function displaySlotTime(dateTime: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-NG", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateTime));
}

export default function BookingForm({
  initialCategorySlug,
  initialServiceSlug,
}: {
  initialCategorySlug?: string;
  initialServiceSlug?: string;
}) {
  const [categories, setCategories] = useState<CatalogCategory[]>([]);
  const [locations, setLocations] = useState<BookingLocation[]>([]);
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(true);
  const [catalogError, setCatalogError] = useState("");
  const [locationSlug, setLocationSlug] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [categorySlug, setCategorySlug] = useState(initialCategorySlug ?? "");
  const [serviceSlugs, setServiceSlugs] = useState<string[]>(initialServiceSlug ? [initialServiceSlug] : []);
  const [availability, setAvailability] = useState<BookingAvailability | null>(null);
  const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);
  const [availabilityError, setAvailabilityError] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<BookingAvailability["slots"][number] | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [bookingResult, setBookingResult] = useState<PublicBookingResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getCatalog(), getBookingLocations()])
      .then(([nextCategories, nextLocations]) => {
        if (cancelled) return;
        setCategories(nextCategories);
        setLocations(nextLocations);
        setCategorySlug((current) => current || initialCategorySlug || nextCategories[0]?.slug || "");
        setDate((current) => {
          const location = nextLocations.find((item) => item.slug === locationSlug) ?? nextLocations[0];
          return location ? dateInTimezone(new Date(), location.timezone) : current;
        });
        if (initialServiceSlug && !nextCategories.some((category) => category.services.some((service) => service.slug === initialServiceSlug))) {
          setCatalogError("That treatment is no longer available. Please choose from the current service list.");
          setServiceSlugs([]);
        }
      })
      .catch(() => {
        if (!cancelled) setCatalogError("We couldn’t load the booking menu. Please refresh and try again.");
      })
      .finally(() => {
        if (!cancelled) setIsLoadingCatalog(false);
      });
    return () => { cancelled = true; };
  }, [initialCategorySlug, initialServiceSlug, locationSlug]);

  const selectedLocation = locations.find((location) => location.slug === locationSlug) ?? null;
  const selectedServices = categories.flatMap((category) => category.services).filter((service) => serviceSlugs.includes(service.slug));
  const selectedDuration = selectedServices.reduce((total, service) => total + (service.durationMinutes ?? 0), 0);
  const selectedTotalKobo = selectedServices.reduce((total, service) => total + service.priceKobo, 0);
  const visibleCategory = categories.find((category) => category.slug === categorySlug) ?? null;
  const minDate = dateInTimezone(new Date(), selectedLocation?.timezone ?? "Africa/Lagos");
  const serviceSelectionKey = serviceSlugs.join(",");

  useEffect(() => {
    if (!locationSlug || !date || serviceSlugs.length === 0) {
      setAvailability(null);
      setSelectedSlot(null);
      setAvailabilityError("");
      return;
    }

    let cancelled = false;
    setIsLoadingAvailability(true);
    setAvailabilityError("");
    setSelectedSlot(null);
    getBookingAvailability({ locationSlug, date, serviceSlugs })
      .then((result) => {
        if (!cancelled) setAvailability(result);
      })
      .catch((error) => {
        if (!cancelled) {
          setAvailability(null);
          setAvailabilityError(error instanceof Error ? error.message : "Unable to load available times.");
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoadingAvailability(false);
      });
    return () => { cancelled = true; };
  }, [locationSlug, date, serviceSelectionKey]);

  function toggleService(service: CatalogService) {
    if (service.durationMinutes === null) return;
    setServiceSlugs((current) => current.includes(service.slug)
      ? current.filter((slug) => slug !== service.slug)
      : [...current, service.slug]);
    setBookingResult(null);
  }

  async function submitBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedLocation || !selectedSlot || serviceSlugs.length === 0) return;
    setSubmitError("");
    setIsSubmitting(true);
    try {
      const result = await createPublicBooking({
        firstName,
        lastName,
        phone,
        email: email || undefined,
        locationSlug: selectedLocation.slug,
        serviceSlugs,
        therapistProfileId: selectedSlot.therapistId,
        startsAt: selectedSlot.startsAt,
        endsAt: selectedSlot.endsAt,
        notes: notes || undefined,
      });
      setBookingResult(result);
      setSelectedSlot(null);
      setServiceSlugs([]);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setNotes("");
      setAvailability(null);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your booking request.");
      setAvailability(null);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (bookingResult) {
    const bookingTotal = bookingResult.services.reduce((total, service) => total + service.unitPriceKobo, 0);
    return (
      <main className="min-h-screen bg-[#f7f6ef] px-5 py-8 text-[#26301c] sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#606454] hover:text-[#26301c]"><ArrowLeft size={17} /> Home</Link>
          <section className="mt-10 border-y border-[#66703f]/20 py-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#66703f] text-white"><Check size={23} /></div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#66703f]">Request received</p>
            <h1 className="mt-2 text-3xl font-medium sm:text-4xl">Your visit is pending confirmation.</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#606454]">We’ve recorded your booking request. No payment has been taken; the spa will confirm your appointment.</p>
            <dl className="mt-8 grid gap-4 border-t border-[#66703f]/15 pt-6 sm:grid-cols-2">
              <div><dt className="text-xs uppercase tracking-wide text-[#606454]">Reference</dt><dd className="mt-1 font-semibold">{bookingResult.id}</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[#606454]">Status</dt><dd className="mt-1 font-semibold">{bookingResult.status}</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[#606454]">When</dt><dd className="mt-1 font-semibold">{new Intl.DateTimeFormat("en-NG", { dateStyle: "medium", timeStyle: "short", timeZone: selectedLocation?.timezone ?? "Africa/Lagos" }).format(new Date(bookingResult.startsAt))}</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[#606454]">Location</dt><dd className="mt-1 font-semibold">{bookingResult.location.name}</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[#606454]">Therapist</dt><dd className="mt-1 font-semibold">{bookingResult.therapist ? `${bookingResult.therapist.firstName} ${bookingResult.therapist.lastName}` : "To be assigned"}</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[#606454]">Room</dt><dd className="mt-1 font-semibold">{bookingResult.room?.name ?? "To be assigned"}</dd></div>
              <div className="sm:col-span-2"><dt className="text-xs uppercase tracking-wide text-[#606454]">Treatments</dt><dd className="mt-1 font-semibold">{bookingResult.services.map((service) => service.name).join(", ")}</dd><dd className="mt-1 text-sm text-[#606454]">{formatPrice(bookingTotal)}</dd></div>
            </dl>
            <Link href="/services" className="mt-8 inline-flex rounded-full bg-[#26301c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#66703f]">Back to services</Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6ef] pb-20 text-[#26301c]">
      <header className="border-b border-[#66703f]/15 bg-white/80 px-5 py-4 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <Link href="/services" aria-label="Back to services" className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#66703f]/10"><ArrowLeft size={20} /></Link>
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#66703f]">Spa Elaris</p><h1 className="text-lg font-semibold">Book your visit</h1></div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-12">
        <div className="space-y-12">
          <section aria-labelledby="visit-heading">
            <div className="mb-5 flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26301c] text-sm font-semibold text-white">1</span><div><h2 id="visit-heading" className="text-xl font-semibold">Choose a location and date</h2><p className="mt-1 text-sm text-[#606454]">Select where and when you would like to visit.</p></div></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-[#606454]">Location<select value={locationSlug} onChange={(event) => { setLocationSlug(event.target.value); setSelectedSlot(null); }} required className="mt-2 h-12 w-full rounded-lg border border-[#66703f]/25 bg-white px-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]"><option value="">Choose a location</option>{locations.map((location) => <option key={location.id} value={location.slug}>{location.name} · {location.city}</option>)}</select></label>
              <label className="text-xs font-semibold uppercase tracking-wide text-[#606454]">Date<input type="date" value={date} min={minDate} onChange={(event) => { setDate(event.target.value); setSelectedSlot(null); }} required className="mt-2 h-12 w-full rounded-lg border border-[#66703f]/25 bg-white px-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]" /></label>
            </div>
          </section>

          <section aria-labelledby="services-heading" className="border-t border-[#66703f]/15 pt-8">
            <div className="mb-5 flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26301c] text-sm font-semibold text-white">2</span><div><h2 id="services-heading" className="text-xl font-semibold">Choose your treatments</h2><p className="mt-1 text-sm text-[#606454]">Add one or more services to your visit.</p></div></div>
            {isLoadingCatalog ? <p className="py-6 text-sm text-[#606454]">Loading the service menu...</p> : catalogError ? <p role="alert" className="py-4 text-sm text-red-700">{catalogError}</p> : (
              <>
                <label className="block max-w-sm text-xs font-semibold uppercase tracking-wide text-[#606454]">Category<select value={categorySlug} onChange={(event) => setCategorySlug(event.target.value)} className="mt-2 h-12 w-full rounded-lg border border-[#66703f]/25 bg-white px-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]">{categories.map((category) => <option key={category.id} value={category.slug}>{category.shortName ?? category.name}</option>)}</select></label>
                {visibleCategory && <>
                  <p className="mt-4 text-sm leading-6 text-[#606454]">{visibleCategory.description}</p>
                  <div className="mt-4 divide-y divide-[#66703f]/15 border-y border-[#66703f]/15">
                    {visibleCategory.services.map((service) => {
                      const selected = serviceSlugs.includes(service.slug);
                      const unavailable = service.durationMinutes === null;
                      return <label key={service.id} className={`flex items-start gap-3 py-4 ${unavailable ? "cursor-not-allowed opacity-55" : "cursor-pointer"}`}>
                        <input type="checkbox" checked={selected} disabled={unavailable} onChange={() => toggleService(service)} className="mt-1 h-4 w-4 accent-[#66703f]" />
                        <span className="min-w-0 flex-1"><span className="block font-medium">{service.name}</span><span className="mt-1 block text-sm leading-5 text-[#606454]">{unavailable ? "Online booking is not available until the treatment duration is set." : service.description}</span></span>
                        <span className="shrink-0 text-right"><span className="block text-sm font-semibold">{formatPrice(service.priceKobo)}</span><span className="mt-1 block text-xs text-[#606454]">{service.durationMinutes === null ? "Duration not set" : formatDuration(service.durationMinutes)}</span></span>
                      </label>;
                    })}
                  </div>
                </>}
              </>
            )}
          </section>

          <section aria-labelledby="time-heading" className="border-t border-[#66703f]/15 pt-8">
            <div className="mb-5 flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26301c] text-sm font-semibold text-white">3</span><div><h2 id="time-heading" className="text-xl font-semibold">Choose a therapist and time</h2><p className="mt-1 text-sm text-[#606454]">Times are based on therapist hours and room availability.</p></div></div>
            {serviceSlugs.length === 0 ? <p className="text-sm text-[#606454]">Choose at least one treatment to see available times.</p> : !locationSlug ? <p className="text-sm text-[#606454]">Choose a location to see available times.</p> : isLoadingAvailability ? <p className="text-sm text-[#606454]">Checking available times...</p> : availabilityError ? <p role="alert" className="text-sm text-red-700">{availabilityError}</p> : availability?.slots.length ? <div className="grid gap-3 sm:grid-cols-2">
              {availability.slots.map((slot) => {
                const isSelected = selectedSlot?.startsAt === slot.startsAt && selectedSlot.therapistId === slot.therapistId;
                return <button key={`${slot.startsAt}-${slot.therapistId}`} type="button" onClick={() => setSelectedSlot(slot)} className={`flex items-center justify-between gap-3 border px-4 py-4 text-left transition ${isSelected ? "border-[#26301c] bg-[#26301c] text-white" : "border-[#66703f]/20 bg-white hover:border-[#66703f]"}`}>
                  <span><span className="block font-semibold">{displaySlotTime(slot.startsAt, selectedLocation?.timezone ?? "Africa/Lagos")}</span><span className={`mt-1 block text-sm ${isSelected ? "text-white/75" : "text-[#606454]"}`}>{slot.therapistName}</span></span><Clock3 size={18} className={isSelected ? "text-white" : "text-[#66703f]"} />
                </button>;
              })}
            </div> : <p className="border-l-2 border-[#d8c487] py-2 pl-4 text-sm leading-6 text-[#606454]">No times are available for this date. Choose another date or contact the spa. Therapist schedules may not be set for this day yet.</p>}
          </section>

          <section aria-labelledby="contact-heading" className="border-t border-[#66703f]/15 pt-8">
            <div className="mb-5 flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26301c] text-sm font-semibold text-white">4</span><div><h2 id="contact-heading" className="text-xl font-semibold">Your contact details</h2><p className="mt-1 text-sm text-[#606454]">We’ll use these details to follow up about your request.</p></div></div>
            <form onSubmit={submitBooking} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold uppercase tracking-wide text-[#606454]">First name<input value={firstName} onChange={(event) => setFirstName(event.target.value)} required maxLength={80} autoComplete="given-name" className="mt-2 h-12 w-full rounded-lg border border-[#66703f]/25 bg-white px-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]" /></label><label className="text-xs font-semibold uppercase tracking-wide text-[#606454]">Last name<input value={lastName} onChange={(event) => setLastName(event.target.value)} required maxLength={80} autoComplete="family-name" className="mt-2 h-12 w-full rounded-lg border border-[#66703f]/25 bg-white px-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]" /></label></div>
              <div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold uppercase tracking-wide text-[#606454]">Phone<input value={phone} onChange={(event) => setPhone(event.target.value)} required minLength={7} maxLength={30} type="tel" autoComplete="tel" className="mt-2 h-12 w-full rounded-lg border border-[#66703f]/25 bg-white px-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]" /></label><label className="text-xs font-semibold uppercase tracking-wide text-[#606454]">Email <span className="font-normal normal-case tracking-normal">(optional)</span><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" className="mt-2 h-12 w-full rounded-lg border border-[#66703f]/25 bg-white px-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]" /></label></div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-[#606454]">Notes <span className="font-normal normal-case tracking-normal">(optional)</span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} maxLength={1000} rows={3} className="mt-2 w-full resize-y rounded-lg border border-[#66703f]/25 bg-white px-3 py-3 text-sm font-medium normal-case tracking-normal text-[#26301c] outline-none focus:border-[#66703f]" /></label>
              {submitError && <p role="alert" className="text-sm text-red-700">{submitError}</p>}
              <button type="submit" disabled={!selectedSlot || !selectedLocation || serviceSlugs.length === 0 || isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#26301c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#66703f] disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto">{isSubmitting ? "Submitting request..." : "Request this appointment"}<Sparkles size={16} /></button>
              <p className="text-xs leading-5 text-[#606454]">Your request will be pending spa confirmation. Payment is not collected on this page.</p>
            </form>
          </section>
        </div>

        <aside className="h-fit border-t border-[#66703f]/20 pt-5 lg:sticky lg:top-8 lg:border-t-0 lg:pt-0">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66703f]">Your selection</h2>
          <div className="mt-4 space-y-3">
            {selectedLocation ? <p className="flex items-start gap-2 text-sm"><MapPin size={16} className="mt-0.5 shrink-0 text-[#66703f]" />{selectedLocation.name}</p> : <p className="text-sm text-[#606454]">Location not selected</p>}
            <p className="flex items-start gap-2 text-sm"><CalendarDays size={16} className="mt-0.5 shrink-0 text-[#66703f]" />{date || "Date not selected"}</p>
            {selectedServices.length === 0 ? <p className="text-sm text-[#606454]">No treatments selected</p> : <ul className="divide-y divide-[#66703f]/15 border-y border-[#66703f]/15">{selectedServices.map((service) => <li key={service.id} className="flex justify-between gap-3 py-3 text-sm"><span>{service.name}</span><span className="shrink-0 font-medium">{formatPrice(service.priceKobo)}</span></li>)}</ul>}
            <div className="flex justify-between border-t border-[#66703f]/20 pt-3 text-sm"><span className="text-[#606454]">Total duration</span><span className="font-semibold">{selectedDuration ? formatDuration(selectedDuration) : "-"}</span></div>
            <div className="flex justify-between text-base"><span className="font-semibold">Total</span><span className="font-semibold">{formatPrice(selectedTotalKobo)}</span></div>
            {selectedSlot && <p className="border-l-2 border-[#d8c487] pl-3 text-sm text-[#606454]">{displaySlotTime(selectedSlot.startsAt, selectedLocation?.timezone ?? "Africa/Lagos")} with {selectedSlot.therapistName}</p>}
          </div>
        </aside>
      </div>
    </main>
  );
}
