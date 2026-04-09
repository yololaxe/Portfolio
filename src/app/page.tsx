"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative min-h-[100svh] flex flex-col md:flex-row overflow-hidden w-full max-w-[100vw] text-slate-100 font-sans bg-slate-950" suppressHydrationWarning>
      
      <LanguageToggle />

      {/* Background grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Profil Professionnel */}
      <Link href="/pro" className="group flex-1 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-slate-800/60 hover:bg-slate-900/40 transition-all duration-700 min-h-[50svh] md:min-h-[100svh] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center px-6 py-12 flex flex-col items-center max-w-lg w-full"
        >
          {/* Icon */}
          <motion.div 
             whileHover={{ scale: 1.1, rotate: 5 }}
             transition={{ type: "spring", stiffness: 300, damping: 15 }}
             className="mb-8 p-5 rounded-3xl bg-slate-800/50 border border-slate-700 shadow-2xl backdrop-blur-xl relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 relative z-10">
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 group-hover:-translate-y-2 transition-transform duration-500">
            {t.home.proTitle.split(' ')[0]} <span className="text-gradient-pro block sm:inline mt-2 sm:mt-0">{t.home.proTitle.split(' ')[1]}</span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-medium max-w-sm" dangerouslySetInnerHTML={{ __html: t.home.proSubtitle }} />
          
          <div className="flex items-center gap-3 text-sm font-bold tracking-wider uppercase text-blue-400 group-hover:text-blue-300 transition-colors">
            <span className="relative overflow-hidden group-hover:after:translate-x-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-400 after:-translate-x-full after:transition-transform after:duration-300 pb-1">
              {t.home.proButton}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </motion.div>
      </Link>

      {/* Profil Projets Persos / Loisirs */}
      <Link href="/hobbies" className="group flex-1 flex flex-col justify-center items-center relative hover:bg-slate-900/40 transition-all duration-700 min-h-[50svh] md:min-h-[100svh] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
        
        {/* Image Background style Renblood au hover */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627392658826-6d60a5e55403?q=80&w=2070')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 mix-blend-luminosity grayscale-[50%]"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="z-10 text-center px-6 py-12 flex flex-col items-center max-w-lg w-full relative"
        >
          {/* Icon */}
          <motion.div 
             whileHover={{ scale: 1.1, rotate: -5 }}
             transition={{ type: "spring", stiffness: 300, damping: 15 }}
             className="mb-8 p-5 rounded-3xl bg-slate-800/50 border border-slate-700 shadow-2xl backdrop-blur-xl relative"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 relative z-10">
              <line x1="6" x2="10" y1="12" y2="12"/>
              <line x1="8" x2="8" y1="10" y2="14"/>
              <line x1="15" x2="15.01" y1="13" y2="13"/>
              <line x1="18" x2="18.01" y1="11" y2="11"/>
              <rect width="20" height="12" x="2" y="6" rx="2"/>
            </svg>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 group-hover:-translate-y-2 transition-transform duration-500">
            {t.home.hobbyTitle.split(' ')[0]} & <span className="text-gradient-hobby block sm:inline mt-2 sm:mt-0">{t.home.hobbyTitle.split(' ')[2]}</span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-medium max-w-sm" dangerouslySetInnerHTML={{ __html: t.home.hobbySubtitle }} />
          
          <div className="flex items-center gap-3 text-sm font-bold tracking-wider uppercase text-orange-400 group-hover:text-orange-300 transition-colors">
             <span className="relative overflow-hidden group-hover:after:translate-x-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-400 after:-translate-x-full after:transition-transform after:duration-300 pb-1">
              {t.home.hobbyButton}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </motion.div>
      </Link>

      {/* Decorative center divider element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl rotate-45 border border-slate-700/50 flex items-center justify-center z-20 shadow-2xl shadow-black/50 pointer-events-none transition-transform duration-700 hover:rotate-90 backdrop-blur-md">
        <span className="text-slate-500 font-bold text-sm md:text-base -rotate-45">ou</span>
      </div>
    </div>
  );
}
