import type { Metadata } from "next";
import { DM_Sans, Lora, Manrope } from "next/font/google";
import "./globals.css";
import SplashScreen from "../components/SplashScreen";
import GlobalNav from "../components/GlobalNav";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Spa Elaris",
  description:
    "Spa Elaris — wellness, beauty and restorative treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${lora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="spa-hide-content min-h-full bg-white">
        <SplashScreen />
        <div id="app-content">{children}</div>
        <GlobalNav />
      </body>
    </html>
  );
}