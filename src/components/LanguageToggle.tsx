"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1.5 p-1 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      
      {/* Drapeau Français */}
      <button
        onClick={() => setLang("fr")}
        className={`relative w-8 h-8 rounded-full overflow-hidden transition-all duration-300 ${
          lang === "fr"
            ? "ring-2 ring-blue-500 scale-100 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            : "scale-90 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-100"
        }`}
        title="Français"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#ED2939"/>
          <rect width="2" height="2" fill="#fff"/>
          <rect width="1" height="2" fill="#002395"/>
        </svg>
      </button>

      {/* Séparateur */}
      <div className="w-[1px] h-4 bg-slate-600 rounded-full"></div>

      {/* Drapeau Anglais */}
      <button
        onClick={() => setLang("en")}
        className={`relative w-8 h-8 rounded-full overflow-hidden transition-all duration-300 ${
          lang === "en"
            ? "ring-2 ring-blue-500 scale-100 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            : "scale-90 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-100"
        }`}
        title="English"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-full h-full object-cover">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
      </button>
    </div>
  );
}
