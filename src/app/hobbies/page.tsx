"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// --- SVG Icons for Social Media ---
const TwitterIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.119 0-3.499.012-4.71.069-2.83.129-4.129 1.43-4.258 4.258-.057 1.211-.069 1.59-.069 4.71s.012 3.499.069 4.71c.129 2.829 1.428 4.129 4.258 4.258 1.211.057 1.59.069 4.71.069s3.499-.012 4.71-.069c2.829-.129 4.129-1.428 4.258-4.258.057-1.211.069-1.59.069-4.71s-.012-3.499-.069-4.71c-.129-2.829-1.428-4.129-4.258-4.258C15.499 3.614 15.119 3.604 12 3.604z"/><path d="M12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.272A3.135 3.135 0 1115.135 12 3.135 3.135 0 0112 15.137zm4.965-9.298a1.2 1.2 0 10-1.2 1.2 1.2 1.2 0 001.2-1.2z"/></svg>;
const PatreonIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M.01 0h4.53v24H.01zM15.43 0c-4.9 0-8.88 3.98-8.88 8.88s3.98 8.88 8.88 8.88 8.88-3.98 8.88-8.88S20.33 0 15.43 0z"/></svg>;
const TwitchIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M2.149 0L.52 4.46v15.659h5.79v3.34h3.34l3.34-3.34h4.46l6.12-6.12V0H2.149zm19.18 13.63-3.34 3.34h-5.27l-3.34 3.34v-3.34H4.2V1.67h17.13v11.96z"/><path d="M15.82 5.58h2.23v4.46h-2.23V5.58zm-5.58 0h2.23v4.46h-2.23V5.58z"/></svg>;
const YoutubeIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;

const socialLinks = [
  { name: "Twitter", icon: <TwitterIcon />, url: "https://twitter.com/yololaxe", color: "hover:text-blue-400", bg: "hover:bg-blue-400/10", border: "hover:border-blue-400/50" },
  { name: "Instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/yololaxe", color: "hover:text-pink-500", bg: "hover:bg-pink-500/10", border: "hover:border-pink-500/50" },
  { name: "Patreon", icon: <PatreonIcon />, url: "https://www.patreon.com/yololaxe", color: "hover:text-red-500", bg: "hover:bg-red-500/10", border: "hover:border-red-500/50" },
  { name: "Twitch", icon: <TwitchIcon />, url: "https://www.twitch.tv/yololaxe", color: "hover:text-purple-500", bg: "hover:bg-purple-500/10", border: "hover:border-purple-500/50" },
  { name: "Youtube", icon: <YoutubeIcon />, url: "https://www.youtube.com/@yololaxe", color: "hover:text-red-600", bg: "hover:bg-red-600/10", border: "hover:border-red-600/50" },
];

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

          {/* SOCIAL LINKS QUICK ACCESS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12 w-full max-w-3xl"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`group relative flex flex-col items-center justify-center gap-3 w-24 h-24 sm:w-28 sm:h-28 bg-[#111] border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${link.bg} ${link.border} hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]`}
              >
                <div className={`text-slate-400 transition-colors duration-300 relative z-10 ${link.color}`}>
                  {link.icon}
                </div>
                <span className="font-tech font-bold text-xs sm:text-sm tracking-widest uppercase text-slate-500 group-hover:text-slate-200 transition-colors relative z-10">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

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
              <span className="relative z-10">Hub Social (Actus)</span>
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
