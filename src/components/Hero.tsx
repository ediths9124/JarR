"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { images, site } from "@/data/site";

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={images.cover} alt={`${site.name} cover art`} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/60" />
      </motion.div>
      <motion.div style={{ y: titleY }} className="relative flex h-full flex-col justify-end px-5 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-[30vw] leading-[0.85] md:text-[22vw]"
        >
          {site.name}
        </motion.h2>
        <p className="mt-4 max-w-md text-dim">{site.tagline}</p>
        <a href="#music" className="mt-8 w-fit border border-mist/40 px-6 py-3 text-sm tracking-widest hover:border-lamp hover:text-lamp">
          LISTEN
        </a>
      </motion.div>
    </section>
  );
}
