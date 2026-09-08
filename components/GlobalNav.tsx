"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";

export default function GlobalNav() {
  const pathname = usePathname();
  const isCategoryPage = pathname.split("/").filter(Boolean).length === 2 && pathname.startsWith("/services/");

  return (
    <>
      {!isCategoryPage && (
        <div className="lg:hidden">
          <BottomNav />
        </div>
      )}
    </>
  );
}
