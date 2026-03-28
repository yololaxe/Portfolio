"use client";

import { motion } from "framer-motion";

type LinkCardProps = {
  name: string;
  url: string;
};

export default function LinkCard({ name, url }: LinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center justify-between w-full px-6 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-2xl shadow-lg transition-all overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      
      <span className="relative z-10 text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
        {name}
      </span>
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="relative z-10 text-slate-500 group-hover:text-slate-300 transform group-hover:translate-x-1 transition-all"
      >
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </motion.a>
  );
}
