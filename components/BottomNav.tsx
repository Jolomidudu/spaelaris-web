"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <path d="M16 2.5v4" />
      <path d="M8 2.5v4" />
      <path d="M3 9h18" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="7.5" r="4" />
      <path d="M4 21c.8-4.2 3.5-6.5 8-6.5s7.2 2.3 8 6.5" />
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isSearch = pathname.startsWith("/search");
  const isActivity = pathname.startsWith("/activity");
  const isProfile = pathname.startsWith("/profile");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/[0.06] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-xl items-center justify-around px-3">
        <Link
          href="/"
          className={`flex min-w-[70px] flex-col items-center justify-center gap-1 transition ${
            isHome ? "text-[#7356E8]" : "text-black"
          }`}
        >
          <HomeIcon active={isHome} />
          <span className="text-[12px] font-medium">Home</span>
        </Link>

        <Link
          href="/search"
          className={`flex min-w-[70px] flex-col items-center justify-center gap-1 transition ${
            isSearch ? "text-[#7356E8]" : "text-black"
          }`}
        >
          <SearchIcon />
          <span className="text-[12px] font-medium">Search</span>
        </Link>

        <Link
          href="/activity"
          className={`flex min-w-[70px] flex-col items-center justify-center gap-1 transition ${
            isActivity ? "text-[#7356E8]" : "text-black"
          }`}
        >
          <CalendarIcon />
          <span className="text-[12px] font-medium">Activity</span>
        </Link>

        <Link
          href="/profile"
          className={`flex min-w-[70px] flex-col items-center justify-center gap-1 transition ${
            isProfile ? "text-[#7356E8]" : "text-black"
          }`}
        >
          <ProfileIcon />
          <span className="text-[12px] font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
}