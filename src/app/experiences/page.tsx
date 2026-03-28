"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

export default function Experiences() {
  const experiences = [
    {
      title: "Développeur Backend",
      company: "Entreprise Fictive",
      date: "2023 - Présent",
      description: "Conception et développement d'APIs REST, intégration d'IA et optimisation des performances."
    },
    {
      title: "Alternant Développeur Fullstack",
      company: "Agence Web",
      date: "2021 - 2023",
      description: "Création d'applications web React/Node.js, gestion de bases de données et déploiement."
    }
  ];

  return (
    <div className="relative min-h-[100svh] px-4 sm:px-6 pt-20 pb-12 flex justify-center items-start bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Background grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      {/* Subtle blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <PageShell className="w-full max-w-3xl glass-panel rounded-3xl p-8 sm:p-12 relative z-10 border-slate-800/80 shadow-2xl shadow-blue-900/10">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Mes <span className="text-gradient-pro">Expériences</span></h1>
          <p className="text-slate-400 mb-10">Mon parcours professionnel et mes réalisations techniques.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="group relative p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 transition-colors"
            >
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-slate-200 mb-1">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium mb-4">
                <span className="text-blue-400">{exp.company}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-500">{exp.date}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="/pro" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            Retour au profil
          </a>
        </div>
      </PageShell>
    </div>
  );
}
