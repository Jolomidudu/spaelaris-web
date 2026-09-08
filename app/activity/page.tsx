export default function ActivityPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-8 pb-28 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-semibold lg:text-4xl">Activity</h1>

      <p className="mt-3 text-black/60">Your upcoming bookings and past activity will appear here.</p>

      <div className="mt-6 space-y-4">
        <div className="rounded-xl border p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Signature Massage</div>
              <div className="text-sm text-black/60">Spa Elaris — June 12, 2026</div>
            </div>
            <div className="text-sm text-black/60">Upcoming</div>
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Elaris Facial Ritual</div>
              <div className="text-sm text-black/60">Spa Elaris — Apr 2, 2026</div>
            </div>
            <div className="text-sm text-black/60">Completed</div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
