import { site, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-mist/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-display text-3xl">{site.name}</p>
        <div className="flex flex-wrap gap-6 text-sm text-dim">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-lamp">{s.label}</a>
          ))}
        </div>
        <p className="text-xs text-dim">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
