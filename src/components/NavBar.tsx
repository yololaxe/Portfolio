"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/entreprise", label: "Mon entreprise" },
  { href: "/experiences", label: "Mes expériences" },
  { href: "/contact", label: "Me joindre" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-3 z-50">
      <nav className="mx-auto w-[min(96%,1100px)] rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Brand */}
          <Link href="/" className="font-semibold tracking-tight">
            Alban Moragny
          </Link>

          {/* Burger */}
          <button
            className="inline-flex items-center justify-center rounded-lg px-2 py-1 hover:bg-white/10 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl">☰</span>
          </button>

          {/* Links (desktop) */}
          <ul className="hidden items-center gap-2 md:flex">
            {nav.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`rounded-lg px-3 py-1.5 text-sm transition hover:bg-white/10 ${
                      active ? "bg-white/12 border border-white/20" : "border border-transparent"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Links (mobile) */}
        {open && (
          <ul className="grid gap-2 px-4 pb-3 md:hidden">
            {nav.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10 ${
                      active ? "bg-white/12 border border-white/20" : "border border-transparent"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </div>
  );
}
