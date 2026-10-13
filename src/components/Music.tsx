"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images, site, tracks } from "@/data/site";

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

export default function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [missing, setMissing] = useState<number | null>(null);

  useEffect(() => {
    const a = new Audio();
    a.preload = "none";
    a.addEventListener("timeupdate", () => setTime(a.currentTime));
    a.addEventListener("loadedmetadata", () => setDuration(a.duration));
    a.addEventListener("play", () => setPlaying(true));
    a.addEventListener("pause", () => setPlaying(false));
    a.addEventListener("ended", () => setPlaying(false));
    audioRef.current = a;
    return () => { a.pause(); a.src = ""; };
  }, []);

  const toggle = async (i: number) => {
    const a = audioRef.current;
    if (!a) return;
    if (current === i) {
      if (a.paused) await a.play().catch(() => setMissing(i));
      else a.pause();
      return;
    }
    a.pause();
    setMissing(null);
    setTime(0);
    setDuration(0);
    setCurrent(i);
    a.src = tracks[i].src;
    a.onerror = () => { setMissing(i); setPlaying(false); };
    await a.play().catch(() => setMissing(i));
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setTime(a.currentTime);
  };

  return (
    <section id="music" className="mx-auto max-w-5xl px-5 py-28">
      <h2 className="font-display text-6xl md:text-8xl">Music</h2>
      <ul className="mt-12 divide-y divide-mist/10 border-y border-mist/10">
        {tracks.map((t, i) => {
          const active = current === i;
          return (
            <li key={t.src} className="py-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden">
                  <Image src={images.cover} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-semibold">{t.title}</p>
                  <p className="text-sm text-dim">{site.name}</p>
                </div>
                <button
                  onClick={() => toggle(i)}
                  aria-label={active && playing ? `Pause ${t.title}` : `Play ${t.title}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-mist/30 transition hover:border-lamp hover:text-lamp"
                >
                  {active && playing ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="1" y="1" width="4" height="12" /><rect x="9" y="1" width="4" height="12" /></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M2 1l11 6-11 6z" /></svg>
                  )}
                </button>
              </div>
              {active && (
                <div className="mt-3 flex items-center gap-3 pl-20 text-xs text-dim">
                  <span className="w-9">{fmt(time)}</span>
                  <input
                    type="range" min={0} max={duration || 0} step={0.1} value={time} onChange={seek}
                    aria-label="Seek" className="h-1 flex-1 accent-lamp"
                  />
                  <span className="w-9 text-right">{fmt(duration)}</span>
                </div>
              )}
              {missing === i && (
                <p className="mt-2 pl-20 text-xs text-lamp">Audio file not found. Add {t.src} to the project.</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
