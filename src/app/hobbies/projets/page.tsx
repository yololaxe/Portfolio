"use client";

import { motion } from "framer-motion";

const projectTimeline = [
  { year: "2024", title: "Projet Actuel", desc: "Description du projet sur lequel je travaille actuellement." },
  { year: "2023", title: "Lancement de Renblood", desc: "Projet de jeu vidéo communautaire, création du lore et des premiers concepts." },
  { year: "2022", title: "Plugin Minecraft 'Elemental'", desc: "Développement d'un plugin Java ajoutant des pouvoirs élémentaires." },
  { year: "2021", title: "Serveur Discord 'La Guilde'", desc: "Création et gestion d'une communauté de joueurs de plus de 500 membres." },
];

export default function ProjetsPage() {
  return (
    <div className="text-slate-200 min-h-screen selection:bg-orange-500/30">
      
      {/* Glowing Orbs */}
      <div className="fixed top-[20%] left-[10%] w-[30vw] h-[30vw] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-widest uppercase font-gaming text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            Projets
          </h1>
          <p className="mt-6 text-xl font-tech text-slate-400 max-w-2xl mx-auto">
            L'historique de mes créations, de mes premiers scripts jusqu'à mes projets les plus ambitieux.
          </p>
        </motion.div>

        {/* --- PROJECT TIMELINE --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
             visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="mb-32 relative"
        >
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-orange-500/50"></div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase font-gaming text-orange-400 tracking-wider">
              Quêtes Accomplies
            </h2>
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-orange-500/50"></div>
          </div>
          
          <div className="relative ml-4 sm:ml-1/2 sm:-translate-x-1/2 max-w-3xl mx-auto">
            {/* Ligne centrale (Desktop) / Gauche (Mobile) */}
            <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-yellow-500/20 to-transparent"></div>

            {projectTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={item.year}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className={`relative mb-12 sm:mb-20 flex flex-col sm:flex-row items-start sm:items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Point central sur la timeline */}
                  <div className="absolute left-[-5px] sm:left-1/2 sm:-translate-x-[5px] w-3 h-3 bg-[#0a0a0a] border-2 border-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] z-10"></div>
                  
                  {/* Contenu de la carte */}
                  <div className={`w-full sm:w-1/2 pl-8 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 text-left'}`}>
                    <div className={`
                      group p-6 bg-[#111]/80 backdrop-blur-sm border border-orange-500/20 rounded-2xl hover:border-orange-500/50 transition-colors duration-300 relative overflow-hidden
                      ${isEven ? 'hover:shadow-[-10px_0_30px_-10px_rgba(249,115,22,0.2)]' : 'hover:shadow-[10px_0_30px_-10px_rgba(249,115,22,0.2)]'}
                    `}>
                      {/* Corner decoration */}
                      <div className={`absolute top-0 w-8 h-8 border-t-2 border-orange-500/50 ${isEven ? 'right-0 border-r-2 rounded-tr-xl' : 'left-0 border-l-2 rounded-tl-xl'}`}></div>
                      
                      <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 font-tech font-bold text-sm tracking-widest rounded mb-4">
                        [{item.year}]
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 font-tech tracking-wide group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 font-tech text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

      </main>
    </div>
  );
}
