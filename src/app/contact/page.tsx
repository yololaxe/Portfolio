"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[100svh] px-4 sm:px-6 pt-20 pb-12 flex justify-center items-center bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      <LanguageToggle />

      {/* Background grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      {/* Subtle blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <PageShell className="w-full max-w-2xl glass-panel rounded-3xl p-8 sm:p-12 relative z-10 border-slate-800/80 shadow-2xl shadow-blue-900/10">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">{t.contact.title} <span className="text-gradient-pro">{t.contact.titleHighlight}</span></h1>
          <p className="text-slate-400 mb-8">{t.contact.subtitle}</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-300">{t.contact.form.nameLabel}</label>
            <input type="text" id="name" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" placeholder={t.contact.form.namePlaceholder} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-300">{t.contact.form.emailLabel}</label>
            <input type="email" id="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" placeholder={t.contact.form.emailPlaceholder} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">{t.contact.form.messageLabel}</label>
            <textarea id="message" rows={5} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none" placeholder={t.contact.form.messagePlaceholder}></textarea>
          </div>

          <button type="button" className="mt-4 group relative inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600/10 border border-blue-500/20 px-6 py-4 font-semibold text-blue-300 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-300 w-full overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            {t.contact.form.submit}
          </button>
        </motion.form>

        <div className="mt-10 flex justify-center">
          <Link href="/pro" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            {t.contact.backButton}
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
