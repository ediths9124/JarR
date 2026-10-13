import { shows } from "@/data/site";

export default function Shows() {
  return (
    <section id="shows" className="mx-auto max-w-5xl px-5 py-28">
      <h2 className="font-display text-6xl md:text-8xl">Shows</h2>
      {shows.length === 0 ? (
        <p className="mt-10 text-dim">No shows announced yet.</p>
      ) : (
        <ul className="mt-12 divide-y divide-mist/10 border-y border-mist/10">
          {shows.map((s) => (
            <li key={s.date + s.city} className="flex flex-wrap items-center justify-between gap-3 py-5">
              <span className="w-24 font-display text-2xl text-lamp">{s.date}</span>
              <span className="flex-1 text-lg">{s.city}<span className="block text-sm text-dim">{s.venue}</span></span>
              {s.link && <a href={s.link} className="border border-mist/30 px-5 py-2 text-sm hover:border-lamp hover:text-lamp">Tickets</a>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
