"use client";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function GlobalNav() {
  const pathname = usePathname();
  const privateRoutes = ["/profile", "/activity", "/notifications", "/location"];

  if (privateRoutes.some((route) => pathname.startsWith(route))) {
    return null;
  }

  return <Navbar />;
}
