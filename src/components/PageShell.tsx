"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mx-auto w-full max-w-3xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
