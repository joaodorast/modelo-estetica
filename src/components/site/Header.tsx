import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { brand } from "@/config/brand";
import silk from "@/assets/silk-blush.jpg";

const links = [
  { href: "#manifesto", label: "Filosofia" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#ritual", label: "Boas-vindas" },
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
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navLinks = brand.offer.enabled ? links : links.filter((l) => l.href !== "#ritual");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-silk)] ${scrolled ? "bg-shell/80 py-3 shadow-[0_1px_0_var(--border)] backdrop-blur-xl" : "py-5 md:py-7"}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a
            href="#top"
            className="font-display text-[1.65rem] italic leading-none tracking-tight text-ink md:text-[1.85rem]"
            aria-label={`${brand.name} — início`}
          >
            {brand.name}
          </a>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-line text-[0.82rem] tracking-wide text-ink/75 hover:text-wine"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#agendar"
              className="btn btn-wine hidden min-h-11 px-6 text-[0.66rem] sm:inline-flex"
            >
              Agendar <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
            <button
              className="group -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              <span className="block h-px w-6 bg-ink transition-all duration-500 group-hover:w-4" />
              <span className="block h-px w-6 bg-ink" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu móvel — fora do <header>: o backdrop-blur criaria um novo contexto para position:fixed */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-blush transition-[opacity,visibility] duration-700 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
      >
        <img
          src={silk}
          alt=""
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-[45%] w-full object-cover opacity-60 transition-transform duration-[1.6s] ease-[var(--ease-silk)] [mask-image:linear-gradient(to_bottom,transparent,black_55%)] ${open ? "scale-100" : "scale-110"}`}
        />
        <div className="relative flex items-center justify-between px-5 py-5">
          <span className="font-display text-[1.65rem] italic leading-none text-ink">
            {brand.name}
          </span>
          <button
            className="-mr-2 flex h-11 w-11 items-center justify-center text-ink"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            tabIndex={open ? 0 : -1}
          >
            <X className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="relative mt-8 flex flex-col px-5" aria-label="Menu móvel">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 border-b border-wine/15 py-4 font-display text-[2.6rem] leading-none text-ink transition-all duration-700 ease-[var(--ease-silk)] ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="font-sans text-[0.65rem] tracking-[0.2em] text-rose">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="relative mt-auto px-5 pb-8 pt-10">
          <a
            href="#agendar"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="btn btn-wine w-full"
          >
            Agendar um horário <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </>
  );
}
