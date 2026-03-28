"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BackgroundEffect from "./BackgroundEffect";

export default function BackgroundEffectWrapper() {
  const pathname = usePathname();

  // On clean le canvas si on est sur la page hobbies pour éviter qu'il persiste
  useEffect(() => {
    if (pathname?.startsWith("/hobbies")) {
      const canvas = document.getElementById("finisher-canvas");
      if (canvas) {
        canvas.style.display = "none";
      }
    } else {
      const canvas = document.getElementById("finisher-canvas");
      if (canvas) {
        canvas.style.display = "block";
      }
    }
  }, [pathname]);

  if (pathname?.startsWith("/hobbies")) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-950">
      <BackgroundEffect />
    </div>
  );
}
