import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL;

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] pb-20 text-[#26301c]">
      <div className="bg-[#26301c] px-5 pb-10 pt-5 text-white sm:px-8">
        <div className="mx-auto max-w-md">
          <Link href="/" className="inline-flex rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white" aria-label="Back to Spa Elaris home">
            <ArrowLeft size={21} strokeWidth={1.8} />
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c487]">Spa Elaris client portal</p>
          <h1 className="mt-3 font-[var(--font-lora)] text-4xl font-medium leading-tight">Your visits, all in one place.</h1>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">Sign in to manage appointments, view your wellness history and keep your preferences together.</p>
        </div>
      </div>

      <div className="mx-auto max-w-md px-5 pt-8 sm:px-0">
        <section className="rounded-3xl border border-[#66703f]/15 bg-white p-6 shadow-[0_18px_50px_rgba(38,48,28,0.08)] sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#66703f]/10 text-[#66703f]"><ShieldCheck size={24} /></div>
          <h2 className="mt-6 font-[var(--font-lora)] text-2xl font-medium">Continue to your secure portal</h2>
          <p className="mt-3 text-sm leading-6 text-[#606454]">Authentication and account management are handled by the Spa Elaris client portal.</p>
          {portalUrl ? (
            <a href={portalUrl} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#26301c] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#66703f]">Open client portal <ArrowUpRight size={17} /></a>
          ) : (
            <div className="mt-7 rounded-2xl bg-[#f7f6ef] p-4 text-sm leading-6 text-[#606454]">The client portal address has not been configured yet. Please contact the studio to manage an existing appointment.</div>
          )}
        </section>
        <p className="mt-6 text-center text-xs leading-5 text-[#606454]">For staff access, use the secure admin or operations portal provided by Spa Elaris.</p>
      </div>
    </main>
  );
}