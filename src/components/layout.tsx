import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import BackgroundEffect from "@/components/BackgroundEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mon Portfolio",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="finisher-header bg-slate-950 text-slate-100 font-sans" suppressHydrationWarning>
        <BackgroundEffect />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
