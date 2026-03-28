"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HobbiesHome() {
  return (
    <div className="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-orange-500/30 overflow-hidden relative">
      
      {/* Background Cyberpunk / Tech Grid */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" style={{ 
        backgroundImage: `
          linear-gradient(to right, #fb923c 1px, transparent 1px),
          linear-gradient(to bottom, #fb923c 1px, transparent 1px)
        `, 
        backgroundSize: '40px 40px' 
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="fixed top-[20%] left-[10%] w-[30vw] h-[30vw] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="fixed bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* --- HEADER MAIN --- */}
        <motion.header 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-24 relative"
        >
          {/* Glitch Effect Element */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10rem] font-gaming text-orange-500/5 font-bold whitespace-nowrap pointer-events-none select-none mix-blend-overlay">
            YOLOLAXE
          </div>

          <div className="relative mb-8 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-orange-500/40 rounded-full opacity-70 group-hover:border-orange-400 group-hover:scale-105 transition-all duration-500"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-2 border border-yellow-500/30 rounded-full opacity-50"
            ></motion.div>
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)] bg-black">
               <Image
                  src="/avatar.png" 
                  alt="Yololaxe"
                  fill
                  sizes="160px"
                  priority
                  className="object-cover"
                />
            </div>
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-bold tracking-widest uppercase font-gaming text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 mb-6 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            Yololaxe
          </h1>
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-tech font-bold uppercase tracking-wider mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
            Créateur de jeux & Développeur
          </div>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-tech leading-relaxed mb-12">
            Bienvenue dans mon univers. Ici, on parle code, conception de jeux vidéos, lore et création de communautés. Explorez mes projets ou rejoignez l'aventure sur les réseaux.
          </p>

          <div className="flex flex-wrap justify-center gap-6 w-full">
            <Link 
              href="/hobbies/projets"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 text-[#0a0a0a] font-tech font-bold text-xl uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Voir mes projets</span>
            </Link>
            
            <Link 
              href="/hobbies/reseaux"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-400 font-tech font-bold text-xl uppercase tracking-widest overflow-hidden transition-all hover:bg-orange-500/10"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              <span className="relative z-10">Mes Réseaux</span>
            </Link>
          </div>
        </motion.header>

        {/* --- TEASER RENBLOOD --- */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="relative w-full rounded-3xl overflow-hidden border border-orange-500/30 bg-[#111] group block">
            {/* Même image que la page Renblood avec le même filtre */}
            <div className="absolute inset-0 bg-[url('/renblood-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-[50%] group-hover:opacity-40 transition-all duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
            
            <div className="relative z-10 p-8 sm:p-16 flex flex-col items-center text-center">
              <h2 className="text-4xl sm:text-5xl font-gaming font-bold text-white mb-4 tracking-widest drop-shadow-lg">RENBLOOD</h2>
              <p className="text-red-400 font-tech text-xl sm:text-2xl font-bold uppercase tracking-widest mb-8">Le MMORPG Minecraft ultime</p>
              <p className="text-slate-300 font-tech text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Plongez dans un univers persistant où chaque décision compte. Découvrez le lore, les mécaniques RPG et l'avancement du développement de mon jeu communautaire.
              </p>
              <Link 
                href="/hobbies/renblood"
                className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-tech font-bold text-lg uppercase tracking-widest rounded transition-colors shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                Découvrir Renblood &rarr;
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
