"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- SVG Icons for Social Media ---
const TwitterIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.119 0-3.499.012-4.71.069-2.83.129-4.129 1.43-4.258 4.258-.057 1.211-.069 1.59-.069 4.71s.012 3.499.069 4.71c.129 2.829 1.428 4.129 4.258 4.258 1.211.057 1.59.069 4.71.069s3.499-.012 4.71-.069c2.829-.129 4.129-1.428 4.258-4.258.057-1.211.069-1.59.069-4.71s-.012-3.499-.069-4.71c-.129-2.829-1.428-4.129-4.258-4.258C15.499 3.614 15.119 3.604 12 3.604z"/><path d="M12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.272A3.135 3.135 0 1115.135 12 3.135 3.135 0 0112 15.137zm4.965-9.298a1.2 1.2 0 10-1.2 1.2 1.2 1.2 0 001.2-1.2z"/></svg>;
const PatreonIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M.01 0h4.53v24H.01zM15.43 0c-4.9 0-8.88 3.98-8.88 8.88s3.98 8.88 8.88 8.88 8.88-3.98 8.88-8.88S20.33 0 15.43 0z"/></svg>;
const YoutubeIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;

const socialLinks = [
  { name: "Twitter", desc: "Suivez mes annonces & projets", icon: <TwitterIcon />, url: "https://twitter.com/yololaxe", color: "text-blue-400", bg: "bg-blue-400/10", border: "hover:border-blue-400/50" },
  { name: "Instagram", desc: "Coulisses et visuels", icon: <InstagramIcon />, url: "https://www.instagram.com/yololaxe", color: "text-pink-500", bg: "bg-pink-500/10", border: "hover:border-pink-500/50" },
  { name: "Patreon", desc: "Soutenez mes projets", icon: <PatreonIcon />, url: "https://www.patreon.com/yololaxe", color: "text-red-500", bg: "bg-red-500/10", border: "hover:border-red-500/50" },
  { name: "Youtube", desc: "Vidéos et devlogs", icon: <YoutubeIcon />, url: "https://www.youtube.com/@yololaxe", color: "text-red-600", bg: "bg-red-600/10", border: "hover:border-red-600/50" },
];

export default function ReseauxPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/socials');
        const data = await res.json();
        if (data.success) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Erreur chargement posts", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter': return <TwitterIcon />;
      case 'Instagram': return <InstagramIcon />;
      case 'Youtube': return <YoutubeIcon />;
      default: return null;
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-orange-500/30 overflow-hidden relative">
      
      {/* Background Cyberpunk / Tech Grid (Same as Home) */}
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
      <div className="fixed top-[20%] right-[10%] w-[30vw] h-[30vw] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="fixed bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-widest uppercase font-gaming text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            Hub Social
          </h1>
          <p className="mt-6 text-xl font-tech text-slate-400 max-w-2xl mx-auto">
            Rejoignez la communauté, regardez les streams et suivez l&apos;avancement des projets en temps réel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LECTEUR TWITCH ET LIENS - COLONNE PRINCIPALE */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* LECTEUR TWITCH */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl overflow-hidden bg-[#111] border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
              
              <div className="p-4 sm:p-6 flex items-center justify-between bg-[#0a0a0a]/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/avatar.png" alt="Yololaxe Twitch" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#111]"></div>
                  </div>
                  <div>
                    <h2 className="font-tech font-bold text-xl text-slate-200">yololaxe</h2>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Sur Twitch</span>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://www.twitch.tv/yololaxe" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-tech font-bold text-sm uppercase tracking-wider rounded transition-colors"
                >
                  Regarder
                </a>
              </div>

              {/* INTEGRATION PLAYER TWITCH (Iframe) */}
              <div className="w-full aspect-video bg-black relative">
                {/* 
                  Remplacer 'yololaxe' par votre vrai pseudo twitch dans l'URL iframe.
                  'parent=localhost' est nécessaire pour tester en local. Modifiez-le avec votre nom de domaine en prod.
                */}
                <iframe
                    src={`https://player.twitch.tv/?channel=yololaxe&parent=localhost&parent=127.0.0.1`}
                    height="100%"
                    width="100%"
                    allowFullScreen
                    className="absolute inset-0"
                ></iframe>
              </div>
            </motion.section>

            {/* BOUTONS RESEAUX (Ligne sous le lecteur) */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className={`flex flex-col items-center justify-center p-4 bg-[#111] border border-slate-800 ${link.border} rounded-2xl group transition-all`}>
                  <div className={`text-slate-400 group-hover:${link.color} mb-2 transition-colors`}>{link.icon}</div>
                  <span className="font-tech font-bold text-sm tracking-wider text-slate-300">{link.name}</span>
                </a>
              ))}
            </motion.section>
          </div>

          {/* FIL D'ACTUALITÉ / FEED - COLONNE LATERALE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#111] border border-slate-800 rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-slate-800 bg-[#0a0a0a]/50 flex items-center justify-between">
                <h3 className="font-gaming uppercase text-orange-400 tracking-wider">Feed d&apos;Actu</h3>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>
              
              <div className="p-4 flex-1 overflow-y-auto space-y-4 custom-scrollbar max-h-[600px] lg:max-h-[800px]">
                {loading ? (
                   <div className="flex flex-col items-center justify-center h-40 space-y-4">
                     <div className="w-8 h-8 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                     <p className="font-tech text-slate-500">Chargement des réseaux...</p>
                   </div>
                ) : posts.map((post, idx) => (
                  <a 
                    key={idx} 
                    href={post.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block p-5 rounded-2xl bg-[#0a0a0a] border border-slate-800/60 hover:border-orange-500/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${post.bg} ${post.color}`}>
                          <div className="scale-75">{getPlatformIcon(post.platform)}</div>
                        </div>
                        <div>
                          <p className="font-tech font-bold text-sm text-slate-200">{post.handle}</p>
                          <p className="font-tech text-xs text-slate-500">{post.date}</p>
                        </div>
                      </div>
                      <div className={`opacity-0 group-hover:opacity-100 transition-opacity ${post.color}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      {post.content}
                    </p>

                    {post.image && (
                      <div className="w-full h-32 rounded-lg overflow-hidden border border-slate-800 mb-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.image} alt="Post preview" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500" />
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </main>
    </div>
  );
}
