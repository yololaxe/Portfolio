"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";

type Language = "fr" | "en";
type Translations = typeof fr;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "fr" || savedLang === "en") {
      setLangState(savedLang);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  const t = lang === "fr" ? fr : en;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
