"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

export default function Entreprise() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[100svh] px-4 sm:px-6 pt-20 pb-12 flex justify-center items-center bg-slate-950 text-slate-100 font-sans overflow-hidden">
      <LanguageToggle />
      
      {/* Background grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      {/* Subtle blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <PageShell className="w-full max-w-3xl glass-panel rounded-3xl p-8 sm:p-12 relative z-10 border-slate-800/80 shadow-2xl shadow-blue-900/10">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">{t.entreprise.title} <span className="text-gradient-pro">{t.entreprise.titleHighlight}</span></h1>
          <p className="text-slate-400 mb-8">{t.entreprise.subtitle}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-slate max-w-none"
        >
          <p className="text-lg leading-relaxed text-slate-300" dangerouslySetInnerHTML={{ __html: t.entreprise.intro }} />
          <ul className="mt-6 space-y-3 text-slate-400 list-none pl-0">
             <li className="flex items-center gap-3">
               <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               {t.entreprise.points.p1}
             </li>
             <li className="flex items-center gap-3">
               <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               {t.entreprise.points.p2}
             </li>
             <li className="flex items-center gap-3">
               <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               {t.entreprise.points.p3}
             </li>
          </ul>

          <div className="mt-10 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-200 m-0 mb-2">{t.entreprise.cta.title}</h3>
              <p className="text-slate-400 m-0 text-sm">{t.entreprise.cta.subtitle}</p>
            </div>
            <Link href="/contact" className="whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-500/20">
              {t.entreprise.cta.button}
            </Link>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link href="/pro" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            {t.entreprise.backButton}
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
