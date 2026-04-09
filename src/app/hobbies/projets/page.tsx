"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

type ProjectType = {
    id: "renblood" | "evonia" | "delta" | "jo";
    year: string;
    title: string;
    tags: string[];
    links?: { textKey: "link1" | "link2"; url: string }[];
    image: string;
}

const projectsData: ProjectType[] = [
  { 
    id: "renblood",
    year: "2021 - 2027+", 
    title: "Renblood : l'épopée médiévale-fantastique", 
    tags: ["Game Design", "Java", "Architecture", "World Building", "Web"],
    links: [
      { textKey: "link1", url: "https://www.youtube.com/watch?v=jLFNzAMJ5DE" },
      { textKey: "link2", url: "https://renblood-website.web.app/home" }
    ],
    image: "/projet-image/renblood.png"
  },
  { 
    id: "evonia",
    year: "2015 - 2022", 
    title: "Evonia : serveur communautaire", 
    tags: ["Forge", "Spigot", "Lead Dev", "Infra"],
    image: "/projet-image/Evonia.jpg"
  },
  { 
    id: "delta",
    year: "2014 - 2020", 
    title: "Delta : 5 saisons Minecraft", 
    tags: ["SysAdmin", "Management", "Game Design", "Lore"],
    image: "/projet-image/Delta.png"
  },
  { 
    id: "jo",
    year: "2019 - 2025", 
    title: "Jeux Olympiques Minecraft (V1 à V3)", 
    tags: ["Level Design", "Plugin Spigot", "Événementiel"],
    image: "/projet-image/JO.png"
  },
];

export default function ProjetsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const { t } = useLanguage();

  return (
    <div className="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-orange-500/30 overflow-hidden relative">
      <LanguageToggle />
      {/* Background & Orbs */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #fb923c 1px, transparent 1px), linear-gradient(to bottom, #fb923c 1px, transparent 1px)`, backgroundSize: '40px 40px' }}><div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div></div>
      <div className="fixed top-[20%] left-[10%] w-[30vw] h-[30vw] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="fixed bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-widest uppercase font-gaming text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            {t.hobbiesProjects.title}
          </h1>
          <p className="mt-6 text-xl font-tech text-slate-400 max-w-2xl mx-auto">
            {t.hobbiesProjects.subtitle}
          </p>
        </motion.div>

        {/* --- SECTION 1: PROJETS MAJEURS --- */}
        <motion.section className="mb-24">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-orange-500/50"></div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase font-gaming text-orange-400 tracking-wider text-center">
              {t.hobbiesProjects.sections.majorProjects}
            </h2>
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-orange-500/50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <motion.div 
                key={project.id}
                layoutId={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer bg-[#111] border border-slate-800 rounded-3xl hover:border-orange-500/50 transition-all duration-300 group overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(249,115,22,0.1)]"
              >
                <div className="w-full h-56 relative overflow-hidden border-b border-slate-800">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-orange-400 font-tech font-bold text-sm tracking-widest mb-2">{project.year}</p>
                  <h3 className="text-2xl font-bold font-tech text-slate-100 mb-3 group-hover:text-orange-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 font-tech text-base leading-relaxed">{t.hobbiesProjects.projects[project.id].shortDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- MODAL / POP-UP --- */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
              
              <motion.div 
                layoutId={`project-card-${selectedProject.id}`}
                className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#111] border border-orange-500/50 rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="w-full h-64 sm:h-80 relative overflow-hidden border-b border-orange-500/30 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div>
                      <p className="text-orange-400 font-tech font-bold text-sm tracking-widest mb-2">{selectedProject.year}</p>
                      <h2 className="text-3xl sm:text-4xl font-bold font-tech text-slate-100">{selectedProject.title}</h2>
                      <p className="text-yellow-500/80 font-tech font-bold tracking-wider text-base uppercase mt-2">{t.hobbiesProjects.projects[selectedProject.id].role}</p>
                    </div>
                    <button onClick={() => setSelectedProject(null)} className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center shrink-0 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                  
                  <div className="text-slate-300 font-tech text-lg leading-relaxed whitespace-pre-wrap mb-8">
                    {t.hobbiesProjects.projects[selectedProject.id].longDesc}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 text-xs font-tech font-bold uppercase tracking-wider text-slate-300 bg-slate-800 border border-slate-700 rounded-md">{tag}</span>
                    ))}
                  </div>

                  {selectedProject.links && (
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.links.map((link, i: number) => (
                        <a key={i} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-white font-tech font-bold text-sm tracking-widest uppercase rounded-lg transition-all">
                          {t.hobbiesProjects.projects[selectedProject.id][link.textKey]}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- SECTION 2: COMPETITIONS ESPORT --- */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mb-24">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-red-500/50"></div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase font-gaming text-red-400 tracking-wider text-center">{t.hobbiesProjects.sections.esport}</h2>
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-red-500/50"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(Object.keys(t.hobbiesProjects.competitions) as Array<keyof typeof t.hobbiesProjects.competitions>).map((key, idx) => {
              const comp = t.hobbiesProjects.competitions[key];
              return (
              <div key={idx} className="group relative p-5 bg-[#111] border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-colors text-center">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Date statique pour l'instant */}
                <p className="text-xs font-tech font-bold text-slate-500 tracking-widest uppercase mb-3">2023 - 2025</p>
                <h3 className="text-lg font-bold font-tech text-slate-200 group-hover:text-red-400 transition-colors mb-2">{comp.title}</h3>
                <p className="inline-block px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 font-tech font-bold text-xs rounded">🏆 {comp.result}</p>
              </div>
            )})}
          </div>
        </motion.section>

        {/* --- SECTION 3: AUTRES ENGAGEMENTS --- */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-purple-500/50"></div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase font-gaming text-purple-400 tracking-wider text-center">{t.hobbiesProjects.sections.engagements}</h2>
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#111] border border-slate-800 rounded-3xl text-center hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-tech font-bold text-2xl text-slate-200 mb-4 relative z-10 group-hover:text-purple-400 transition-colors">{t.hobbiesProjects.engagements.masked.title}</h3>
              <p className="text-slate-400 font-tech text-base relative z-10 leading-relaxed">{t.hobbiesProjects.engagements.masked.desc}</p>
            </div>
            <div className="p-8 bg-[#111] border border-slate-800 rounded-3xl text-center hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/projet-image/PoudlardRP.png')] bg-cover bg-center opacity-10 group-hover:opacity-30 transition-opacity grayscale mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-tech font-bold text-2xl text-slate-200 mb-4 relative z-10 group-hover:text-blue-400 transition-colors">{t.hobbiesProjects.engagements.qa.title}</h3>
              <p className="text-slate-400 font-tech text-base relative z-10 leading-relaxed">{t.hobbiesProjects.engagements.qa.desc}</p>
            </div>
            <div className="p-8 bg-[#111] border border-slate-800 rounded-3xl text-center hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-tech font-bold text-2xl text-slate-200 mb-4 relative z-10 group-hover:text-orange-400 transition-colors">{t.hobbiesProjects.engagements.speedrun.title}</h3>
              <p className="text-slate-400 font-tech text-base relative z-10 leading-relaxed">{t.hobbiesProjects.engagements.speedrun.desc}</p>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
