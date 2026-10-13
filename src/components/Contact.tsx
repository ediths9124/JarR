"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");

  const submit = () => {
    const subject = encodeURIComponent(`Booking enquiry from ${name}`);
    const body = encodeURIComponent(`${msg}\n\nFrom: ${name} (${from})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field = "w-full border-b border-mist/20 bg-transparent py-3 text-lg outline-none transition focus:border-lamp";

  return (
    <section id="contact" className="mx-auto max-w-3xl px-5 py-28">
      <h2 className="font-display text-6xl md:text-8xl">Contact</h2>
      {site.email ? (
        <div className="mt-12 space-y-8">
          <label className="block text-sm text-dim">Name
            <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label className="block text-sm text-dim">Email
            <input className={field} type="email" value={from} onChange={(e) => setFrom(e.target.value)} autoComplete="email" />
          </label>
          <label className="block text-sm text-dim">Message
            <textarea className={field} rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} />
          </label>
          <button onClick={submit} className="border border-mist/40 px-8 py-4 text-sm tracking-widest hover:border-lamp hover:text-lamp">
            SEND MESSAGE
          </button>
        </div>
      ) : (
        <p className="mt-10 text-dim">Booking details coming soon.</p>
      )}
    </section>
  );
}
