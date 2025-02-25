"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

export default function BackgroundEffect() {
  useEffect(() => {
    const checkHeaderExists = () => document.querySelector(".finisher-header");

    if (!checkHeaderExists()) {
      const observer = new MutationObserver(() => {
        if (checkHeaderExists()) {
          observer.disconnect();
          loadFinisherHeader();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return;
    }

    loadFinisherHeader();
  }, []);

  const loadFinisherHeader = () => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: 100,
          size: { min: 1, max: 91, pulse: 0 },
          speed: {
            x: { min: 0, max: 0.4 },
            y: { min: 0, max: 0.1 },
          },
          colors: {
            background: "transparent", // ✅ Supprime le fond bleu
            particles: ["#ffffff", "#87ddfe", "#acaaff", "#1bffc2", "#f88aff"],
          },
          blending: "screen",
          opacity: { center: 0, edge: 0.4 },
          skew: -2,
          shapes: ["c", "s", "t"],
        });
      }
    };
    document.body.appendChild(script);
  };

  return null;
}
