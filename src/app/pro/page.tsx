"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const timeline = [
  {
    id: 1,
    type: "experience",
    title: "Développeur application Android (FullStack)",
    org: "2S agency Montpellier",
    date: "2 mois, 2024",
    desc: "Stage. Création de A à Z d’une application de gestion de commandes dans la restauration en Flutter (tablettes, téléphones). Équipe de 15 personnes : méthode SCRUM.",
    icon: "📱"
  },
  {
    id: 2,
    type: "formation",
    title: "Bachelor Dév IA & Data Science",
    org: "EPSI Montpellier",
    date: "sept. 2023 - aujourd’hui",
    desc: "2ème & 3ème année.",
    icon: "🎓"
  },
  {
    id: 3,
    type: "formation",
    title: "Licence 1 Informatique",
    org: "Université des Sciences de Montpellier",
    date: "sept. 2022 - juin 2023",
    desc: "",
    icon: "🏫"
  },
  {
    id: 4,
    type: "experience",
    title: "Auxiliaire d’été",
    org: "Société Générale de Pézenas",
    date: "2 mois, 2022",
    desc: "Accompagnement des clients à l’utilisation de l'app, gestion de l'accueil et aide administrative.",
    icon: "💼"
  },
  {
    id: 5,
    type: "formation",
    title: "Cycle préparatoire ingénieur",
    org: "EPITA",
    date: "sept. 2021 - juin 2022",
    desc: "",
    icon: "🚀"
  },
];

const skills = [
  { id: "flutter", name: "Flutter", icon: "📱", proof: "Major de promo 2023/2024. Projet d'application de prise de commande de A à Z (stage) et développement app connectée." },
  { id: "csharp", name: "C#", icon: "⚙️", proof: "Major de promo 2023/2024. Projet 'Les flots bleus' : Création d’un programme de gestion de compétition pour voiliers, base orientée objet." },
  { id: "java", name: "JAVA", icon: "☕", proof: "600 heures de programmation. Création d’un plugin de jeu lié à une application mobile via Firebase." },
  { id: "python", name: "Python", icon: "🐍", proof: "Utilisation orientée Data Science & IA (Apache Spark)." },
  { id: "js", name: "Javascript", icon: "⚡", proof: "Développement front-end et scripting." },
  { id: "php", name: "PHP", icon: "🐘", proof: "Création d'API et développement back-end web (Symfony)." },
];

const projects = [
  {
    title: "Développement app connectée",
    desc: "Création d’un plugin de jeu en Java lié à une application mobile Flutter au travers d’une base de données Firebase. Maintenance et mises à jour régulières (400h de programmation).",
    tech: ["Java", "Flutter", "Firebase"]
  },
  {
    title: "Les flots bleus C# 2024",
    desc: "Programme de gestion de compétition pour voiliers : création d’une base orientée objet (liée à MySql), classements, équipages, pénalités.",
    tech: ["C#", "MySQL", "POO"]
  },
];

export default function ProHome() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen font-sans bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      
      {/* Background decoration */}
      <div className="fixed inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      <div className="fixed -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* COLONNE GAUCHE (Sticky Profile) */}
        <aside className="w-full lg:w-[380px] flex-shrink-0">
          <div className="lg:sticky lg:top-20 space-y-8">
            
            {/* Header Profil */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  className="relative h-32 w-32 mb-6"
                >
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-125 animate-pulse"></div>
                  <Image
                    src="/avatar.png"
                    alt="Alban Moragny"
                    fill
                    priority
                    sizes="128px"
                    className="rounded-full border-2 border-slate-700/80 object-cover shadow-2xl relative z-10 bg-slate-800"
                  />
                </motion.div>

                <h1 className="text-3xl font-extrabold tracking-tight mb-2">
                  Alban <span className="text-gradient-pro">Moragny</span>
                </h1>
                
                <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
                  Dév Backend & Data
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Recherche une <strong className="text-slate-200">alternance</strong> ou un <strong className="text-slate-200">stage (BAC+3) de 4 mois</strong>. Passionné par l'IA et la création d'architectures robustes.
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

                {/* Boutons réseaux */}
                <div className="flex gap-3 w-full justify-center">
                  <a href="https://github.com/yololaxe" target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 hover:border-slate-500 transition-all shadow-sm group-hover:-translate-y-1 duration-300">
                    <GithubIcon />
                  </a>
                  <a href="https://www.linkedin.com/in/alban-moragny-758714291/" target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center py-2.5 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-blue-400 hover:text-blue-300 rounded-xl border border-[#0A66C2]/30 hover:border-[#0A66C2]/50 transition-all shadow-sm group-hover:-translate-y-1 duration-300 delay-75">
                    <LinkedinIcon />
                  </a>
                  <a href="/cv" className="flex-1 flex justify-center items-center py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 hover:border-slate-500 transition-all shadow-sm group-hover:-translate-y-1 duration-300 delay-150" title="CV PDF">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Carte Infos */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="glass-panel p-6 rounded-3xl"
            >
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                  <a href="mailto:amoragny@gmail.com" className="hover:text-blue-400 transition-colors truncate">amoragny@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                  <a href="tel:+33670548280" className="hover:text-blue-400 transition-colors">+33 6 70 54 82 80</a>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                  <span className="leading-tight">779 rue de St Hilaire<br/>34070 Montpellier</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="/" className="group inline-flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors w-full p-4 rounded-2xl border border-transparent hover:border-slate-800 hover:bg-slate-900/30">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:-translate-x-1 transition-transform border border-slate-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </div>
                Retourner à l'accueil
              </a>
            </motion.div>

          </div>
        </aside>

        {/* COLONNE DROITE (Contenu) */}
        <div className="flex-1 space-y-16 lg:pt-4">
          
          {/* Section Compétences */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-xl shadow-inner">⚡</div>
              <h3 className="text-3xl font-bold tracking-tight">Expertises</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => {
                const isActive = selectedSkill === skill.id;
                return (
                  <div key={skill.id} className="relative">
                    <button
                      onClick={() => setSelectedSkill(isActive ? null : skill.id)}
                      className={`
                        w-full flex flex-col items-center justify-center gap-3 p-5 rounded-2xl transition-all duration-300 border
                        ${isActive 
                          ? "bg-blue-600 border-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.3)] -translate-y-2" 
                          : "bg-slate-900/60 border-slate-800 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1"}
                      `}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className={`font-semibold text-sm ${isActive ? "text-white" : "text-slate-300"}`}>{skill.name}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill}
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-6"
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-500/30 backdrop-blur-sm shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-2xl"></div>
                    <h4 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Preuve d'expérience
                    </h4>
                    <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                      {skills.find(s => s.id === selectedSkill)?.proof}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

          {/* Section Projets */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center text-xl shadow-inner">🚀</div>
              <h3 className="text-3xl font-bold tracking-tight">Projets Clés</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((proj, idx) => (
                <div key={idx} className="group relative p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-purple-300 transition-colors relative z-10">{proj.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800 text-purple-200 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section Parcours */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center text-xl shadow-inner">🗺️</div>
              <h3 className="text-3xl font-bold tracking-tight">Mon Parcours</h3>
            </div>
            
            <div className="relative border-l-2 border-slate-800 ml-6 space-y-12 pb-8">
              {timeline.map((item) => (
                <div key={item.id} className="relative pl-10 group">
                  {/* Icon point */}
                  <div className={`
                    absolute -left-[25px] top-0 w-12 h-12 rounded-2xl flex items-center justify-center text-lg border-4 border-slate-950 transition-all duration-300 z-10 shadow-lg
                    ${item.type === "experience" 
                      ? "bg-blue-900/80 text-blue-300 group-hover:bg-blue-600 group-hover:text-white" 
                      : "bg-emerald-900/80 text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white"}
                  `}>
                    {item.icon}
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{item.title}</h4>
                      <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 w-fit">
                        {item.date}
                      </span>
                    </div>
                    <div className={`text-sm font-semibold mb-3 ${item.type === "experience" ? "text-blue-400" : "text-emerald-400"}`}>
                      {item.org}
                    </div>
                    {item.desc && (
                      <p className="text-slate-400 text-sm leading-relaxed p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 mt-2 group-hover:border-slate-700 transition-colors">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section Extra Infos */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12"
          >
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800">
              <h5 className="font-bold text-lg text-slate-200 mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-slate-800 text-sm">🗣️</span> Langues
              </h5>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <span className="text-slate-300 font-medium">Anglais</span>
                  <span className="font-bold text-blue-400 px-2 py-1 rounded-md bg-blue-500/10 text-xs">B2</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <span className="text-slate-300 font-medium">Espagnol</span>
                  <span className="font-bold text-emerald-400 px-2 py-1 rounded-md bg-emerald-500/10 text-xs">B1</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800">
              <h5 className="font-bold text-lg text-slate-200 mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-slate-800 text-sm">🎯</span> Intérêts
              </h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <span className="text-emerald-400 mt-0.5">🧗</span>
                  <span className="text-slate-300 text-sm font-medium">12 ans d’escalade pleine nature</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <span className="text-purple-400 mt-0.5">🎮</span>
                  <span className="text-slate-300 text-sm font-medium">Jeux vidéos (Scénariste, communauté, dév)</span>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
