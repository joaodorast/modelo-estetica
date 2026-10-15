import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "@/config/brand";

const links = [
  { href: "#manifesto", label: "Filosofia" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#agendar", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border py-3" : "py-6"}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-2xl italic tracking-tight text-ink" aria-label={`${brand.name} — início`}>
          {brand.name}
        </a>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-line text-[0.8rem] tracking-wide text-ink/80 hover:text-ink">{l.label}</a>
          ))}
          <a href="#agendar" className="rounded-full border border-ink px-5 py-2.5 text-[0.75rem] uppercase tracking-[0.2em] text-ink transition-colors duration-500 hover:bg-ink hover:text-background">
            Agendar
          </a>
        </nav>
        <button className="-mr-2 p-2 text-ink md:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu className="h-6 w-6" strokeWidth={1.25} /></button>
      </div>

      <div className={`fixed inset-0 z-50 flex flex-col bg-blush px-6 py-6 transition-all duration-700 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={!open}>
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl italic text-ink">{brand.name}</span>
          <button className="-mr-2 p-2 text-ink" onClick={() => setOpen(false)} aria-label="Fechar menu" tabIndex={open ? 0 : -1}><X className="h-6 w-6" strokeWidth={1.25} /></button>
        </div>
        <nav className="mt-16 flex flex-col gap-6" aria-label="Menu móvel">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}
              className={`font-display text-5xl text-ink transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#agendar" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="mt-auto rounded-full bg-ink py-4 text-center text-xs uppercase tracking-[0.25em] text-background">
          Agendar um horário
        </a>
      </div>
    </header>
  );
}
