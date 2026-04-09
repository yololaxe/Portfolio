import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import BackgroundEffectWrapper from "@/components/BackgroundEffectWrapper";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "700"],
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
    <html lang="fr" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${rajdhani.variable}`}>
      <body className="bg-slate-950 text-slate-100 font-sans min-h-screen relative" suppressHydrationWarning>
        <LanguageProvider>
          <BackgroundEffectWrapper />
          <main className="relative z-10 min-h-screen">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
