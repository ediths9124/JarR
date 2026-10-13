"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Intro({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-night px-6 text-center"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-display text-[28vw] leading-none tracking-tight sm:text-[18vw]"
      >
        {site.name}
      </motion.h1>
      <motion.button
        onClick={onEnter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10 border border-mist/40 px-8 py-4 text-sm font-semibold tracking-[0.3em] text-mist transition hover:border-lamp hover:text-lamp"
      >
        ENTER EXPERIENCE
      </motion.button>
    </motion.div>
  );
}
