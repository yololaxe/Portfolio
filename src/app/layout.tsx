import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundEffect from "@/components/BackgroundEffect"; // Import du composant

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
};

<head>
  <link rel="icon" href="/favicon.png" /> {/* ou ton autre fichier */}
</head>

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="finisher-header"> {/* ✅ Ajoute bien la classe ici */}
        <BackgroundEffect /> {/* ✅ Charge l'animation */}
        <main className="relative z-10">{children}</main> {/* ✅ Contenu passe au-dessus */}
      </body>
    </html>
  );
}
