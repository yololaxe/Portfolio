"use client";

import { motion } from "framer-motion";

export default function RenbloodPage() {
  return (
    <div className="text-slate-200 min-h-screen selection:bg-red-500/30">
      
      {/* Background spécifique Renblood (Rouge/Sombre) */}
      <div className="fixed top-[20%] left-[10%] w-[40vw] h-[40vw] bg-red-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-tech font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            En Développement
          </div>
          <h1 className="text-6xl sm:text-8xl font-bold tracking-widest uppercase font-gaming text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-orange-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] mb-6">
            RENBLOOD
          </h1>
          <p className="text-xl font-tech text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Un univers persistant, un lore riche et une aventure communautaire où chaque décision forge l'histoire.
          </p>
        </motion.div>

        {/* HERO IMAGE / TEASER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full aspect-[21/9] bg-[#111] rounded-3xl border border-red-500/20 mb-20 relative overflow-hidden flex items-center justify-center group"
        >
           {/* Image Minecraft (château/fantasy) avec filtre gris sombre */}
           <div className="absolute inset-0 bg-[url('/renblood-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-[50%] group-hover:opacity-40 transition-all duration-1000"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
           <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
           
           <div className="relative z-10 p-8 text-center bg-black/60 backdrop-blur-md border border-red-500/30 rounded-xl">
              <h2 className="font-gaming text-2xl text-red-400 tracking-widest mb-2">MMORPG Minecraft</h2>
              <p className="font-tech text-slate-300 text-lg">Rejoignez le Discord pour participer aux tests.</p>
           </div>
        </motion.div>

        {/* INFO GRIDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 sm:p-10 bg-[#111] border border-slate-800 rounded-3xl hover:border-red-500/30 transition-colors"
          >
            <h3 className="text-2xl font-gaming uppercase tracking-wider text-red-400 mb-6">Le Concept</h3>
            <p className="font-tech text-lg text-slate-400 leading-relaxed space-y-4">
              <span className="block">Renblood est un MMORPG ambitieux basé sur le moteur de Minecraft, offrant une expérience RPG complète avec des systèmes de guildes, de métiers et de combat repensés.</span>
              <span className="block">Développé en étroite collaboration avec la communauté, le monde évolue selon vos choix, vos alliances et vos batailles.</span>
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 sm:p-10 bg-[#111] border border-slate-800 rounded-3xl hover:border-red-500/30 transition-colors"
          >
            <h3 className="text-2xl font-gaming uppercase tracking-wider text-red-400 mb-6">Fonctionnalités Clés</h3>
            <ul className="space-y-4 font-tech text-lg text-slate-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span> Un système de combat dynamique et personnalisé.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span> Un lore riche avec des quêtes narratives immersives.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span> Des royaumes à conquérir et une économie gérée par les joueurs.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center p-12 border border-red-500/30 bg-gradient-to-b from-red-900/10 to-[#111] rounded-3xl"
        >
          <h2 className="text-3xl font-gaming uppercase text-white mb-6">Rejoindre la faction</h2>
          <p className="font-tech text-xl text-slate-400 mb-8 max-w-xl mx-auto">
            Le développement de Renblood se passe sur le serveur Discord officiel. Rejoignez-nous pour suivre l'avancement, participer aux Alpha et façonner le jeu avec nous.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://discord.gg/r4snzyZg2b" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-tech font-bold text-xl uppercase tracking-widest transition-colors shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
              Rejoindre le Discord
            </a>
            
            <a 
              href="https://renblood-website.web.app/home" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-red-500 hover:bg-red-500/10 text-red-400 font-tech font-bold text-xl uppercase tracking-widest transition-colors"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              Site Officiel &rarr;
            </a>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
