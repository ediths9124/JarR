"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about, images, site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-28 md:grid-cols-2">
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="relative aspect-[3/4] w-full overflow-hidden"
      >
        <Image src={images.artist} alt={site.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
      </motion.div>
      <div>
        <h2 className="font-display text-6xl md:text-8xl">{about.heading}</h2>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-dim">
          {about.text.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
