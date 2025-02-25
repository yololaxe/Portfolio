"use client"; // Nécessaire pour Framer Motion

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
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="block w-full px-6 py-3 text-lg font-medium text-center text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition transform"
    >
      {name}
    </motion.a>
  );
}
