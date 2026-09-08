"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

export default function GlobalNav() {
  const pathname = usePathname();
  const isCategoryPage = pathname.split("/").filter(Boolean).length === 2 && pathname.startsWith("/services/");

  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      {!isCategoryPage && (
        <div className="lg:hidden">
          <BottomNav />
        </div>
      )}
    </>
  );
}
