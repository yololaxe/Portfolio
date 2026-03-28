"use client";
import { useEffect, useState } from "react";

export default function BackgroundEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const timeout = setTimeout(() => {
      loadFinisherHeader();
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  const loadFinisherHeader = () => {
    if (document.getElementById('finisher-canvas')) {
      return;
    }

    if (document.querySelector('script[src="/finisher-header.es5.min.js"]')) {
        if (typeof window !== 'undefined' && (window as any).FinisherHeader) {
            try {
              initFinisher();
            } catch (e) {
              console.error(e);
            }
        }
        return;
    }

    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      try {
        initFinisher();
      } catch (e) {
        console.error("Erreur lors de l'init de Finisher:", e);
      }
    };
    document.body.appendChild(script);
  };

  const initFinisher = () => {
    if (typeof window !== 'undefined' && (window as any).FinisherHeader && !document.getElementById('finisher-canvas')) {
        try {
            new (window as any).FinisherHeader({
              count: 100,
              size: { min: 1, max: 91, pulse: 0 },
              speed: {
                x: { min: 0, max: 0.4 },
                y: { min: 0, max: 0.1 },
              },
              colors: {
                background: "transparent", 
                particles: ["#ffffff", "#87ddfe", "#acaaff", "#1bffc2", "#f88aff"],
              },
              blending: "screen",
              opacity: { center: 0, edge: 0.4 },
              skew: -2,
              shapes: ["c", "s", "t"],
            });
        } catch (e) {
            console.error("Erreur Finisher", e);
        }
      }
  }

  if (!mounted) return null;

  return null;
}
