"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Video", href: "#video" },
  { label: "Shows", href: "#shows" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <a href="#top" className="font-display text-2xl text-white">{site.name}</a>
        <nav className="hidden gap-8 text-sm text-white md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-60">{l.label}</a>
          ))}
        </nav>
        <button
          className="text-sm text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 px-5 pb-8 text-3xl text-white md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
