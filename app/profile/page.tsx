"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen bg-white px-6 pb-28 pt-6 lg:px-10 lg:pt-12">
      {/* Close button */}
      <button
        type="button"
        onClick={() => router.push("/")}
        className="absolute top-5 right-5 p-1 text-black/80 hover:text-black"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {/* Header */}
      <div className="mx-auto max-w-md">
      <h1 className="mt-10 text-[28px] font-semibold tracking-tight text-black lg:text-4xl">
        Login or sign up
      </h1>
      <p className="mt-2 text-[15px] text-black/50">
        We&apos;ll need to verify it&apos;s you
      </p>

      {/* Email form */}
      <form className="mt-8 max-w-md">
        <label className="block text-[15px] font-medium text-black">
          Email
        </label>
        <input
          type="email"
          placeholder="Email address"
          className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3.5 text-[15px] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/10"
        />
        <p className="mt-2 text-[13px] text-black/50">
          We&apos;ll send you a verification code
        </p>

        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-black py-3.5 text-[16px] font-medium text-white hover:bg-black/90 transition-colors"
        >
          Continue
        </button>
      </form>

      {/* Divider */}
      <div className="my-8 flex max-w-md items-center gap-4">
        <div className="h-px flex-1 bg-black/10" />
        <span className="text-[13px] text-black/40">OR</span>
        <div className="h-px flex-1 bg-black/10" />
      </div>

      {/* Social / alternative buttons */}
      <div className="flex max-w-md flex-col gap-3">
        {/* Continue with mobile */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-black/15 py-3.5 text-[15px] font-medium text-black hover:bg-black/[0.03] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
          Continue with mobile
        </button>

       

        {/* Continue with Google */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-black/15 py-3.5 text-[15px] font-medium text-black hover:bg-black/[0.03] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>
      </div>
      </div>
    </main>
  );
}