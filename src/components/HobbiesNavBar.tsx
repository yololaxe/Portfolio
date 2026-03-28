"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const nav = [
  { href: "/hobbies", label: "Accueil" },
  { href: "/hobbies/projets", label: "Projets" },
  { href: "/hobbies/reseaux", label: "Réseaux" },
  { href: "/hobbies/renblood", label: "Renblood" },
];

export default function HobbiesNavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);

  // Fonction pour vérifier si la chaîne Twitch est en direct
  useEffect(() => {
    const checkTwitchLive = async () => {
      try {
        const response = await fetch('/api/twitch');
        if (response.ok) {
          const data = await response.json();
          setIsLive(data.isLive);
        }
      } catch (error) {
        console.error("Erreur lors de la vérification Twitch", error);
      }
    };

    checkTwitchLive();
    // Rafraîchir toutes les 5 minutes
    const interval = setInterval(checkTwitchLive, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4 flex flex-col items-center gap-3">
      
      {/* BANNIÈRE LIVE TWITCH */}
      {isLive && (
        <a 
          href="https://www.twitch.tv/yololaxe"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-4xl bg-purple-600/90 hover:bg-purple-500 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-purple-400/50 shadow-[0_0_15px_rgba(147,51,234,0.5)] flex items-center justify-center gap-3 transition-colors group cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-white"></span>
          </span>
          <span className="font-gaming text-sm uppercase tracking-widest font-bold">Yololaxe est en LIVE sur Twitch !</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="group-hover:scale-110 transition-transform"><path d="M2.149 0L.52 4.46v15.659h5.79v3.34h3.34l3.34-3.34h4.46l6.12-6.12V0H2.149zm19.18 13.63-3.34 3.34h-5.27l-3.34 3.34v-3.34H4.2V1.67h17.13v11.96z"/><path d="M15.82 5.58h2.23v4.46h-2.23V5.58zm-5.58 0h2.23v4.46h-2.23V5.58z"/></svg>
        </a>
      )}

      <nav className="w-full max-w-4xl rounded-xl border-2 border-orange-500/30 bg-[#0a0a0a]/80 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.15)] relative overflow-hidden">
        {/* Neon accent */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        
        <div className="flex items-center justify-between px-6 py-3">
          {/* Brand */}
          <Link href="/hobbies" className="font-gaming text-xl text-orange-400 font-bold tracking-widest uppercase hover:text-orange-300 transition-colors">
            Yololaxe
          </Link>

          {/* Burger */}
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-orange-500 hover:bg-orange-500/10 md:hidden transition-colors"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>

          {/* Links (desktop) */}
          <ul className="hidden items-center gap-6 md:flex">
            {nav.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`font-tech text-base tracking-wider uppercase font-bold transition-all duration-300 relative ${
                      active ? "text-orange-400" : "text-slate-400 hover:text-orange-200"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 shadow-[0_0_8px_#f97316]"></span>
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="pl-4 border-l border-orange-500/20">
               <Link href="/" className="font-tech text-sm text-slate-500 hover:text-slate-300 uppercase font-bold flex items-center gap-2">
                 <span>&larr;</span> Quitter
               </Link>
            </li>
          </ul>
        </div>

        {/* Links (mobile) */}
        {open && (
          <ul className="grid gap-2 px-4 pb-4 md:hidden border-t border-orange-500/20 pt-4 mt-2">
            {nav.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 font-tech text-lg font-bold tracking-widest uppercase transition-all ${
                      active ? "bg-orange-500/10 text-orange-400 border-l-2 border-orange-500" : "text-slate-400 hover:bg-slate-800 hover:text-orange-200"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
             <li>
               <Link href="/" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-tech text-lg font-bold tracking-widest uppercase text-slate-500 hover:bg-slate-800 mt-2 border-t border-slate-800">
                 Retour Profil Pro
               </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
