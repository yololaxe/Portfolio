"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ProHome() {
  const { t } = useLanguage();
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const timeline = [
    {
      id: 1,
      type: "experience",
      title: t.pro.timeline.exp1.title,
      org: t.pro.timeline.exp1.org,
      date: t.pro.timeline.exp1.date,
      desc: t.pro.timeline.exp1.desc,
      icon: "🏢",
      tags: ["FullStack", "Gestion de Données", "UX/UI"]
    },
    {
      id: 2,
      type: "experience",
      title: t.pro.timeline.exp2.title,
      org: t.pro.timeline.exp2.org,
      date: t.pro.timeline.exp2.date,
      desc: t.pro.timeline.exp2.desc,
      icon: "📱",
      tags: ["Flutter", "SCRUM", "FullStack", "Android"]
    },
    {
      id: 3,
      type: "experience",
      title: t.pro.timeline.exp3.title,
      org: t.pro.timeline.exp3.org,
      date: t.pro.timeline.exp3.date,
      desc: t.pro.timeline.exp3.desc,
      icon: "💼",
      tags: ["Relation Client", "Banque"]
    },
    {
      id: 4,
      type: "formation",
      title: t.pro.timeline.form1.title,
      org: t.pro.timeline.form1.org,
      date: t.pro.timeline.form1.date,
      desc: t.pro.timeline.form1.desc,
      icon: "🎓",
      tags: ["IA", "Data Science", "Développement"]
    },
    {
      id: 5,
      type: "formation",
      title: t.pro.timeline.form2.title,
      org: t.pro.timeline.form2.org,
      date: t.pro.timeline.form2.date,
      desc: t.pro.timeline.form2.desc,
      icon: "🏫",
      tags: ["Algorithmique", "Informatique"]
    },
    {
      id: 6,
      type: "formation",
      title: t.pro.timeline.form3.title,
      org: t.pro.timeline.form3.org,
      date: t.pro.timeline.form3.date,
      desc: t.pro.timeline.form3.desc,
      icon: "🚀",
      tags: ["Ingénierie", "Programmation"]
    },
    {
      id: 7,
      type: "benevolat",
      title: t.pro.timeline.volunteering.title,
      org: t.pro.timeline.volunteering.org,
      date: t.pro.timeline.volunteering.date,
      desc: t.pro.timeline.volunteering.desc,
      icon: "🤝",
      tags: ["Travail d'équipe", "Animation"]
    }
  ];

  const projects = [
    {
      id: 0,
      title: isFr ? "IHM de facturation / pilotage énergie" : "Energy billing / monitoring interface",
      type: isFr ? "Projet entreprise" : "Company project",
      desc: isFr
        ? "Développement d'un outil métier pour centraliser la saisie, la modification et l'analyse des factures du service Énergie de la Métropole de Montpellier, avec tableaux de bord et restitution plus claire."
        : "Development of a business tool to centralize invoice entry, updates, and analysis for Montpellier's Energy Department, with dashboards and clearer reporting.",
      tags: [isFr ? "Outil métier" : "Business tool", isFr ? "Facturation" : "Billing", isFr ? "Pilotage" : "Monitoring", "UX/UI"],
      href: "/pro/realisations/metropole-pole-energie"
    },
    {
      id: 1,
      title: "MSPR WildLens",
      type: isFr ? "Projet scolaire" : "Academic project",
      desc: isFr
        ? "Conception d'une solution complète autour de la reconnaissance d'empreintes animales: base de données, API, entraînement IA, design d'application et déploiement cloud."
        : "Design of a complete solution around animal footprint recognition: database, API, AI training, application design, and cloud deployment.",
      tags: ["IA", "Data", "API", "Docker"],
      href: "/pro/realisations/mspr-wildlens"
    },
    {
      id: 2,
      title: t.pro.projects.proj1.title,
      type: t.pro.projects.proj1.type,
      desc: t.pro.projects.proj1.desc,
      tags: ["Java", "Flutter", "Firebase", "FullStack"],
      href: "/pro/realisations/renblood-ecosystem"
    },
    {
      id: 3,
      title: t.pro.projects.proj2.title,
      type: t.pro.projects.proj2.type,
      desc: t.pro.projects.proj2.desc,
      tags: ["Flutter", "Android", "Gestion", "Stage"],
      href: "/pro/realisations/2s-agency"
    },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <LanguageToggle />

      <div className="fixed inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 via-slate-900/5 to-transparent pointer-events-none"></div>
      <div className="fixed top-[20%] right-[0%] w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-[0%] left-[0%] w-[40vw] h-[40vw] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          <div className="relative shrink-0 group">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute inset-0 rounded-full border border-blue-500/30 group-hover:border-blue-400/60 transition-colors duration-500 scale-110 animate-[spin_10s_linear_infinite]"></div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-slate-700 relative z-10 bg-slate-900">
              <Image src="/alban.jpg" alt="Alban Moragny" fill priority className="object-cover" />
            </div>
            <div className="absolute bottom-2 right-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md z-20 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.pro.header.status}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-white">
              {t.pro.header.title} <span className="text-gradient-pro">{t.pro.header.subtitle}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
              {t.pro.header.job}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8" dangerouslySetInnerHTML={{ __html: t.pro.header.description }} />

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="/cv.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                {t.pro.header.cvButton}
              </a>
              <a href="https://github.com/yololaxe" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-all hover:-translate-y-0.5">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/alban-moragny-758714291/" target="_blank" rel="noreferrer" className="p-3 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-blue-400 hover:text-blue-300 rounded-xl border border-[#0A66C2]/30 transition-all hover:-translate-y-0.5">
                <LinkedinIcon />
              </a>
              <a href="mailto:amoragny@gmail.com" className="p-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-all hover:-translate-y-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-[32px] border border-blue-500/20 bg-blue-950/10 p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-300">
              {isFr ? "Présentation" : "Professional overview"}
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isFr
                ? "Je conçois des produits utiles, lisibles et prêts à être utilisés pour de vrai."
                : "I design products that are useful, clear, and ready for real-world use."}
            </h3>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate-300">
              {isFr
                ? "Cette page sert d'entrée à mon univers professionnel: projets livrés, logique produit, compréhension du besoin, développement concret et attention portée à la clarté pour les équipes qui utilisent réellement l'outil."
                : "This page is the entry point to my professional work: delivered projects, product thinking, need analysis, concrete development, and a strong focus on clarity for the teams who actually use the tool."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pro/realisations"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
              >
                {isFr ? "Voir les réalisations" : "View selected work"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800"
              >
                {isFr ? "Me contacter" : "Contact me"}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {[
              {
                title: isFr ? "Comprendre" : "Understand",
                text: isFr ? "Traduire un besoin métier en solution lisible et crédible." : "Turn a business need into a clear and credible solution.",
              },
              {
                title: isFr ? "Construire" : "Build",
                text: isFr ? "Développer une application, une API ou un outil interne avec une vraie logique d'usage." : "Build an application, an API, or an internal tool with a real usage-driven logic.",
              },
              {
                title: isFr ? "Livrer" : "Deliver",
                text: isFr ? "Donner un résultat montrable, maintenable et utile au quotidien." : "Deliver something presentable, maintainable, and useful day to day.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-800 bg-slate-900/50 p-6">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-white tracking-tight">{t.pro.sections.timeline}</h3>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 space-y-10">
              {timeline.map((item) => (
                <div key={item.id} className="relative pl-8 group">
                  <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-xl flex items-center justify-center text-lg border-2 border-slate-950 bg-slate-900 shadow-sm transition-all duration-300 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    {item.icon}
                  </div>

                  <div className="flex flex-col mb-1">
                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-1">{item.date}</span>
                    <h4 className="text-lg font-bold text-slate-100 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                    <span className="text-sm font-medium text-slate-400 mb-3">{item.org}</span>
                  </div>

                  {item.desc && (
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-white tracking-tight">{t.pro.sections.projects}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent"></div>
                <Link
                  href="/pro/realisations"
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
                >
                  {isFr ? "Mes réalisations" : "My work"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>

              <div className="space-y-6">
                {projects.map((proj) => (
                  <div key={proj.id} className="group p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/40 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-slate-100 group-hover:text-blue-300 transition-colors">{proj.title}</h4>
                    </div>
                    <p className="text-sm font-medium text-blue-400 mb-4">{proj.type}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-950/30 text-blue-300 border border-blue-900/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href={proj.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                      >
                        {isFr ? "Ouvrir la réalisation" : "Open project"}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:hidden">
                <Link
                  href="/pro/realisations"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
                >
                  {isFr ? "Mes réalisations" : "My work"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800">
              <h3 className="text-xl font-bold text-white tracking-tight mb-6">{t.pro.sections.additional}</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">{t.pro.additionalInfo.languages}</h4>
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">{t.pro.additionalInfo.english}</span>
                      <span className="text-blue-400 font-bold text-sm">B2</span>
                    </div>
                    <div className="flex-1 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">{t.pro.additionalInfo.spanish}</span>
                      <span className="text-blue-400 font-bold text-sm">B1</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">{t.pro.additionalInfo.assets}</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {t.pro.additionalInfo.climbing}
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {t.pro.additionalInfo.gaming}
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {t.pro.additionalInfo.driving}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800/50 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors group">
            <div className="w-8 h-8 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </div>
            {t.pro.footer}
          </Link>
        </div>
      </main>
    </div>
  );
}
