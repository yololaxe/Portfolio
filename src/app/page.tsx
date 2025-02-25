"use client"; // Obligation pour Framer Motion

import Image from "next/image";
import LinkCard from "@/components/LinkCard";
import { motion } from "framer-motion";

const links = [
  { name: "GitHub", url: "https://github.com/yololaxe" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/alban-moragny-758714291/" },
  { name: "Discord", url: "https://discord.gg/r4snzyZg2b" },
  { name: "CV PDF", url: "/cv" }, // ✅ Lien mis à jour vers la page CV
  { name: "Renblood (Projet)", url: "https://renblood-website.web.app/home " },
];

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-white px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Avatar avec animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-28 h-28"
      >
        <Image
          src="/avatar.png"
          alt="Alban Moragny"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>

      {/* Nom & Description avec animation */}
      <motion.h1
        className="text-4xl font-extrabold mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Alban Moragny
      </motion.h1>
      <motion.p
        className="text-gray-400 text-lg mt-2 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Développeur Backend & IA | Passionné de jeux & tech
      </motion.p>

      {/* Liste des liens avec animation en cascade */}
      <motion.div
        className="mt-8 w-full max-w-md space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {links.map((link, index) => (
          <LinkCard key={index} {...link} />
        ))}
      </motion.div>
    </motion.div>
  );
}
