import type { Metadata, Viewport } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${site.name} | Official Site`,
  description: site.description,
};

export const viewport: Viewport = { themeColor: "#0a0e0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
