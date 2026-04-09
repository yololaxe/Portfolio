"use client";
import { useEffect, useState, useCallback } from "react";

interface FinisherOptions {
  count: number;
  size: { min: number; max: number; pulse: number };
  speed: {
    x: { min: number; max: number };
    y: { min: number; max: number };
  };
  colors: {
    background: string;
    particles: string[];
  };
  blending: string;
  opacity: { center: number; edge: number };
  skew: number;
  shapes: string[];
}

interface CustomWindow extends Window {
  FinisherHeader?: new (options: FinisherOptions) => void;
}

export default function BackgroundEffect() {
  const [mounted, setMounted] = useState(false);

  const initFinisher = useCallback(() => {
    const win = typeof window !== 'undefined' ? (window as unknown as CustomWindow) : null;
    if (win && win.FinisherHeader && !document.getElementById('finisher-canvas')) {
        try {
            new win.FinisherHeader({
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
  }, []);

  const loadFinisherHeader = useCallback(() => {
    if (document.getElementById('finisher-canvas')) {
      return;
    }

    if (document.querySelector('script[src="/finisher-header.es5.min.js"]')) {
        const win = typeof window !== 'undefined' ? (window as unknown as CustomWindow) : null;
        if (win && win.FinisherHeader) {
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
  }, [initFinisher]);

  useEffect(() => {
    setMounted(true);
    
    const timeout = setTimeout(() => {
      loadFinisherHeader();
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [loadFinisherHeader]);

  if (!mounted) return null;

  return null;
}
