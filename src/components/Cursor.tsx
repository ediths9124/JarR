"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.body.classList.add("has-cursor");
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const over = (e: MouseEvent) => {
      const hot = (e.target as HTMLElement).closest("a,button,input,textarea");
      ring.current?.style.setProperty("--s", hot ? "2.2" : "1");
    };
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx - 14}px, ${ry - 14}px) scale(var(--s,1))`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-7 w-7 rounded-full border border-lamp mix-blend-difference [@media(pointer:fine)]:block"
    />
  );
}
