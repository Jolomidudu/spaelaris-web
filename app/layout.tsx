import type { Metadata } from "next";
import "./globals.css";
import GlobalNav from "../components/GlobalNav";

export const metadata: Metadata = {
  icons: {
    icon: "/selogo.png",
  },
  title: {
    default: "Spa Elaris | Wellness, beauty and restorative care",
    template: "%s | Spa Elaris",
  },
  description:
    "Spa Elaris is a modern wellness destination for thoughtful massage, beauty and restorative treatments in Lagos and Abuja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white">
        <div id="app-content">{children}</div>
        <GlobalNav />
      </body>
    </html>
  );
}