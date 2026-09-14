"use client";

import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import { usePathname } from "next/navigation";

export default function GlobalNav() {
  const pathname = usePathname();
  const privateRoutes = ["/profile", "/activity", "/notifications", "/location"];

  if (privateRoutes.some((route) => pathname.startsWith(route))) {
    return null;
  }

  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </>
  );
}
