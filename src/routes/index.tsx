import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import room from "@/assets/room.jpg";
import peony from "@/assets/products-peony.jpg";
import cream from "@/assets/texture-cream.jpg";
import swatch from "@/assets/swatch.jpg";
import silk from "@/assets/silk-blush.jpg";
import satin from "@/assets/satin-rose.jpg";
import crystals from "@/assets/crystals.jpg";
import hands from "@/assets/hands-care.jpg";
import { brand } from "@/config/brand";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { Booking } from "@/components/site/Booking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sua Marca — Estética & Spa | Seu tempo de florescer" },
      {
        name: "description",
        content:
          "Tratamentos faciais, corporais e rituais de spa com cuidado sob medida. Solicite seu horário.",
      },
      { property: "og:title", content: "Sua Marca — Estética & Spa" },
      {
        property: "og:description",
        content: "Rituais de beleza e bem-estar pensados para a sua pele e o seu tempo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Marca o tratamento no formulário antes de rolar até ele.
function preselect(treatment: string) {
  const input = Array.from(
    document.querySelectorAll<HTMLInputElement>('input[name="treatment"]'),
  ).find((i) => i.value === treatment);
  if (input) input.checked = true;
}

function Index() {
  return (
    <div id="top" className="bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Treatments />
        <Experience />
        {brand.offer.enabled && <Offer />}
        <People />
        <Voices />
        <BookingSection />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

function SectionLabel({
  n,
  children,
  light = false,
}: {
  n: string;
  children: string;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow eyebrow-line ${light ? "text-petal" : ""}`}>
      <span>{n}</span>
      <span className={light ? "text-shell/80" : "text-taupe"}>{children}</span>
    </p>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-gradient-to-b from-blush via-blush to-shell">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-1/4 h-[40rem] w-[40rem] rounded-full bg-petal/60 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-ivory/70 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-y-10 px-5 pb-16 pt-28 md:px-10 lg:min-h-[100svh] lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-10 lg:pb-14 lg:pt-36">
        {/* Título */}
        <div className="relative z-10 lg:col-span-7 lg:row-start-1 lg:self-end">
          <p className="eyebrow eyebrow-line anim-rise" style={{ animationDelay: "200ms" }}>
            Estética · Spa · Bem-estar
          </p>
          <h1
            className="anim-rise mt-6 font-display text-[3.65rem] font-light leading-[0.88] tracking-[-0.03em] text-ink sm:text-[5.5rem] lg:text-[7.4rem] xl:text-[8.6rem]"
            style={{ animationDelay: "350ms" }}
          >
            Seu tempo
            <br />
            de <em className="font-normal text-rose">florescer.</em>
          </h1>
        </div>

        {/* Composição fotográfica */}
        <div className="relative lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="relative mx-auto w-[88%] max-w-[30rem] sm:w-[70%] lg:w-full">
            <div
              aria-hidden
              className="arch absolute inset-0 translate-x-3 -translate-y-3 border border-rose/50 md:translate-x-5 md:-translate-y-5"
            />
            <div
              className="arch anim-unveil relative aspect-[4/5] bg-petal shadow-[0_50px_90px_-45px_rgb(117_70_83/0.55)]"
              style={{ animationDelay: "150ms" }}
            >
              <img
                src={hero}
                alt="Mulher de olhos fechados, pele luminosa, envolta em seda rosa"
                width={1280}
                height={1600}
                fetchPriority="high"
                className="anim-settle h-full w-full object-cover object-[60%_20%]"
              />
            </div>

            {/* Detalhe de textura */}
            <div
              className="anim-rise absolute -left-8 bottom-10 sm:-left-16 lg:-left-20"
              style={{ animationDelay: "900ms" }}
            >
              <div className="anim-float h-24 w-24 overflow-hidden rounded-full border-[5px] border-shell shadow-xl sm:h-36 sm:w-36 sm:border-[6px]">
                <img src={silk} alt="" aria-hidden className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Selo giratório */}
            <div
              className="anim-rise absolute -right-4 top-[12%] sm:-right-10"
              style={{ animationDelay: "1100ms" }}
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-wine text-shell shadow-xl sm:h-32 sm:w-32">
                <svg
                  viewBox="0 0 100 100"
                  className="anim-spin absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <path id="seal" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="fill-current font-sans text-[8.6px] uppercase tracking-[0.32em]">
                    <textPath href="#seal">{brand.name} · Estética & Spa ·</textPath>
                  </text>
                </svg>
                <Sparkles className="h-5 w-5 text-petal" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>

        {/* Texto + CTAs */}
        <div className="relative z-10 lg:col-span-6 lg:row-start-2">
          <p className="lede anim-rise max-w-md" style={{ animationDelay: "550ms" }}>
            Uma pausa desenhada para a sua pele e para você. Rituais sem pressa, mãos atentas e o
            silêncio de que você precisava.
          </p>
          <div
            className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "700ms" }}
          >
            <a href="#agendar" className="btn btn-wine">
              Agendar meu horário <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="#tratamentos" className="btn btn-outline">
              Conhecer tratamentos
            </a>
          </div>
          <ul
            className="anim-rise mt-12 hidden max-w-lg grid-cols-3 border-t border-wine/15 pt-6 lg:grid"
            style={{ animationDelay: "850ms" }}
          >
            {[
              ["Facial", "Rituais de pele"],
              ["Corpo", "Massagens e drenagem"],
              ["Spa", "Pausas de bem-estar"],
            ].map(([t, d]) => (
              <li key={t} className="pr-4">
                <p className="font-display text-2xl italic text-wine">{t}</p>
                <p className="mt-1 text-xs text-taupe">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#manifesto"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 right-10 hidden items-center gap-3 text-wine/70 transition-colors hover:text-wine xl:flex"
      >
        <span className="eyebrow text-current">Role</span>
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.25} />
      </a>
    </section>
  );
}

/* ─────────────────────────── Faixa de tratamentos ─────────────────────────── */

function Marquee() {
  const items = [...brand.treatments.map((t) => t.name), "Rituais de spa"];
  return (
    <div className="overflow-hidden bg-wine py-5 text-blush md:py-6" aria-hidden>
      <div className="anim-marquee flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {items.map((i) => (
              <span
                key={i}
                className="flex items-center whitespace-nowrap px-7 font-display text-2xl italic font-light md:px-10 md:text-[2rem]"
              >
                {i}
                <Sparkles className="ml-14 h-4 w-4 text-nude md:ml-20" strokeWidth={1.25} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── Manifesto ─────────────────────────── */

function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-ivory">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[30rem] bg-blush lg:inset-y-0 lg:right-auto lg:h-auto lg:w-[42%]"
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-40">
        <div className="relative lg:col-span-5">
          <Reveal
            image
            className="relative mx-auto aspect-[4/5] w-[82%] overflow-hidden rounded-t-[12rem] rounded-b-[1.5rem] sm:w-[60%] lg:ml-0 lg:w-[82%]"
          >
            <img
              src={swatch}
              alt="Braço com três pequenas porções de creme sobre linho claro"
              width={1200}
              height={1814}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={250}
            className="absolute -bottom-10 right-0 w-[40%] sm:right-[12%] lg:-right-4 lg:w-[42%]"
          >
            <div className="overflow-hidden rounded-[1.25rem] border-[6px] border-ivory shadow-[0_30px_60px_-30px_rgb(117_70_83/0.5)]">
              <img
                src={cream}
                alt="Textura cremosa em close"
                width={1400}
                height={2100}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <SectionLabel n="01">Filosofia</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 font-display text-[2.5rem] font-light leading-[1.04] sm:text-[3.4rem] lg:text-[4.3rem]">
              Beleza não é pressa. É <em className="text-rose">presença</em> — o gesto lento, a pele
              ouvida, o corpo que finalmente <em className="text-rose">descansa.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="lede mt-8 max-w-xl">
              Cada ritual nasce de uma escuta atenta. Não seguimos fórmulas prontas: combinamos
              técnica, ativos e toque para responder ao que a sua pele pede hoje.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.25rem] bg-border sm:grid-cols-3">
            {[
              ["Escuta", "Cada sessão começa entendendo a sua pele, a sua rotina e o seu momento."],
              [
                "Precisão",
                "Protocolos cuidadosos, com técnica e respeito ao tempo de cada tecido.",
              ],
              ["Ritual", "Luz suave, aromas discretos e um espaço feito para desacelerar."],
            ].map(([t, d], i) => (
              <Reveal
                key={t}
                delay={250 + i * 100}
                className="bg-shell p-7 transition-colors duration-700 hover:bg-blush"
              >
                <span className="font-sans text-[0.65rem] tracking-[0.25em] text-rose">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-[1.9rem] italic text-wine">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-taupe">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Tratamentos ─────────────────────────── */

function Treatments() {
  const [active, setActive] = useState(0);
  const list = brand.treatments;
  const current = list[active];

  return (
    <section
      id="tratamentos"
      className="grain relative overflow-hidden bg-blush py-20 md:py-32 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel n="02">Tratamentos</SectionLabel>
            <h2 className="mt-7 font-display text-[3rem] font-light leading-[0.95] sm:text-6xl lg:text-[5.4rem]">
              Cuidados <em className="text-rose">sob medida</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="lede">
              Rituais faciais e corporais conduzidos com calma, para que cada pele receba exatamente
              o que precisa.
            </p>
          </Reveal>
        </div>

        {/* Desktop: lista + vitrine fotográfica */}
        <div className="mt-12 hidden gap-12 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-6 lg:self-center" role="list">
            {list.map((t, i) => {
              const on = i === active;
              return (
                <li key={t.name} className="border-b border-wine/15 first:border-t">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group relative flex w-full items-center gap-6 py-6 text-left"
                  >
                    <span
                      className={`font-sans text-[0.68rem] tracking-[0.2em] transition-colors duration-500 ${on ? "text-wine" : "text-rose"}`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-1 font-display text-[2.5rem] leading-none transition-all duration-700 ease-[var(--ease-silk)] xl:text-[2.9rem] ${on ? "translate-x-3 italic text-wine" : "text-ink/70 group-hover:text-ink"}`}
                    >
                      {t.name}
                    </span>
                    <span
                      className={`text-[0.7rem] uppercase tracking-[0.2em] transition-opacity duration-500 ${on ? "text-wine opacity-100" : "text-taupe opacity-60"}`}
                    >
                      {t.duration}
                    </span>
                    <span
                      aria-hidden
                      className={`absolute bottom-[-1px] left-0 h-px bg-wine transition-all duration-700 ease-[var(--ease-silk)] ${on ? "w-full" : "w-0"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <Reveal
            image
            className="relative h-[min(78vh,46rem)] min-h-[34rem] overflow-hidden rounded-[2rem] bg-petal shadow-[0_60px_100px_-50px_rgb(117_70_83/0.6)] lg:col-span-5 lg:col-start-8"
          >
            {list.map((t, i) => (
              <img
                key={t.name}
                src={t.image}
                alt={i === active ? t.name : ""}
                aria-hidden={i !== active}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.2s] ease-[var(--ease-silk)] ${i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-plum/60 to-transparent" />
            {current && (
              <div
                key={current.name}
                className="anim-rise absolute inset-x-5 bottom-5 rounded-[1.25rem] bg-shell/90 p-6 backdrop-blur-md xl:inset-x-6 xl:bottom-6 xl:p-7"
              >
                <p className="eyebrow">
                  {current.category} · {current.duration}
                </p>
                <p className="mt-3 font-display text-[1.6rem] leading-snug text-ink">
                  {current.text}
                </p>
                <a
                  href="#agendar"
                  onClick={() => preselect(current.name)}
                  className="link-line mt-4 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-wine"
                >
                  Agendar este cuidado <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </div>
            )}
          </Reveal>
        </div>

        {/* Mobile/tablet: carrossel deslizante */}
        <div className="lg:hidden">
          <div
            className="scrollbar-none -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:px-10"
            aria-label="Tratamentos"
          >
            {list.map((t, i) => (
              <article
                key={t.name}
                className="w-[80%] max-w-[22rem] shrink-0 snap-start sm:w-[45%]"
              >
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-petal">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-shell/90 px-3 py-1.5 text-[0.62rem] tracking-[0.2em] text-wine backdrop-blur">
                    0{i + 1} · {t.category}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[2rem] leading-none">{t.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{t.text}</p>
                <div className="mt-4 flex items-center justify-between border-t border-wine/15 pt-4">
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-taupe">
                    {t.duration}
                  </span>
                  <a
                    href="#agendar"
                    onClick={() => preselect(t.name)}
                    className="inline-flex min-h-11 items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-wine"
                  >
                    Agendar <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-wine/70">
            Deslize para ver todos <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.25} />
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Experiência ─────────────────────────── */

function Experience() {
  return (
    <section id="experiencia" className="relative bg-shell">
      <div className="relative h-[85svh] min-h-[540px] overflow-hidden md:h-[92svh]">
        <Reveal image className="absolute inset-0">
          <img
            src={room}
            alt="Sala de tratamento com maca, toalhas brancas e luz natural filtrada por cortinas de linho"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover object-[45%_center]"
          />
        </Reveal>
        <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/25 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <SectionLabel n="03" light>
              A experiência
            </SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 max-w-4xl font-display text-[3.2rem] font-light leading-[0.92] text-shell sm:text-7xl lg:text-[6.5rem]">
              Um lugar para <em className="text-petal">desacelerar</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-shell/85">
              Luz natural, linho, argila rosada. Do primeiro chá ao último toque, cada detalhe foi
              escolhido para que você esqueça o relógio.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:gap-8 md:px-10 md:py-28">
        <Reveal
          image
          className="aspect-[4/5] overflow-hidden rounded-[1.5rem] md:col-span-5 lg:col-span-4"
        >
          <img
            src={peony}
            alt="Peônias rosadas e frasco de cuidado sobre bancada branca"
            width={1200}
            height={1798}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
        <div className="flex flex-col justify-center md:col-span-7 lg:col-span-5 lg:px-6">
          <Reveal>
            <p className="font-display text-[2.3rem] font-light italic leading-[1.1] text-wine md:text-[3rem]">
              “O cuidado começa muito antes do toque.”
            </p>
            <p className="eyebrow mt-5 text-taupe">Princípio da casa</p>
          </Reveal>
          <ul className="mt-12 divide-y divide-wine/15 border-y border-wine/15">
            {[
              ["Luz natural", "Ambientes claros, cortinas leves e iluminação suave."],
              ["Texturas honestas", "Linho, cerâmica e algodão que acolhem o corpo."],
              ["Silêncio", "Um tempo sem interrupções, só para você."],
            ].map(([t, d], i) => (
              <Reveal
                as="li"
                key={t}
                delay={100 + i * 100}
                className="flex items-baseline gap-5 py-5"
              >
                <span className="font-sans text-[0.65rem] tracking-[0.2em] text-rose">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-display text-2xl text-ink">{t}</p>
                  <p className="mt-1 text-sm text-taupe">{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal
          image
          delay={150}
          className="hidden aspect-[3/5] overflow-hidden rounded-t-full rounded-b-[1.5rem] lg:col-span-3 lg:mt-24 lg:block"
        >
          <img
            src={silk}
            alt=""
            aria-hidden
            width={1600}
            height={2400}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Oferta ─────────────────────────── */

function Offer() {
  const o = brand.offer;
  return (
    <section id="ritual" className="relative overflow-hidden bg-petal py-20 md:py-32">
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[28vw] italic leading-none text-ivory/25 lg:-bottom-14 lg:text-[19vw]"
      >
        boas-vindas
      </p>
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none">
          <div aria-hidden className="arch absolute -inset-3 border border-wine/25 md:-inset-4" />
          <Reveal image className="arch relative aspect-[4/5] bg-blush">
            <img
              src={crystals}
              alt="Taça de cristal com quartzo rosa e frascos sobre fundo rosado"
              width={1200}
              height={1804}
              loading="lazy"
              className="h-full w-full object-cover object-[center_60%]"
            />
          </Reveal>
          <div className="absolute -bottom-6 -right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-wine text-center text-shell shadow-xl md:-right-6 md:h-32 md:w-32">
            <span className="font-display text-[0.95rem] italic leading-tight">
              Primeira
              <br />
              visita
            </span>
          </div>
        </div>

        <Reveal
          delay={120}
          className="rounded-[2rem] bg-shell/70 p-7 backdrop-blur-sm sm:p-10 lg:col-span-6 lg:col-start-7 lg:p-14"
        >
          <SectionLabel n="04">Para começar</SectionLabel>
          <h2 className="mt-6 font-display text-[3rem] font-light leading-[0.95] text-wine sm:text-6xl lg:text-[4.6rem]">
            {o.title}
          </h2>
          <p className="lede mt-6 max-w-lg">{o.description}</p>
          {o.includes.length > 0 && (
            <ol className="mt-9 grid gap-3 sm:grid-cols-3">
              {o.includes.map((item, i) => (
                <li key={item} className="rounded-2xl bg-blush px-5 py-4">
                  <span className="font-sans text-[0.62rem] tracking-[0.2em] text-rose">
                    Etapa 0{i + 1}
                  </span>
                  <p className="mt-1 font-display text-xl leading-tight text-ink">{item}</p>
                </li>
              ))}
            </ol>
          )}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href="#agendar" className="btn btn-wine">
              {o.priceLabel ? "Quero este ritual" : "Consultar condições"}{" "}
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            {o.priceLabel ? (
              <p className="font-display text-4xl italic text-wine">{o.priceLabel}</p>
            ) : (
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">Valores sob consulta</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Quem cuida ─────────────────────────── */

function People() {
  const team = brand.team;
  return (
    <section
      id="equipe"
      className="relative overflow-hidden bg-plum py-20 text-shell md:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-wine/70 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="relative lg:col-span-5">
            <Reveal image className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src={hands}
                alt="Mãos de profissional realizando massagem delicada no antebraço"
                width={1200}
                height={1800}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={250} className="absolute -bottom-8 -right-3 w-[42%] sm:-right-8">
              <div className="overflow-hidden rounded-[1.25rem] border-[6px] border-plum">
                <img
                  src={satin}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <SectionLabel n="05" light>
                Quem cuida
              </SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-7 font-display text-[3rem] font-light leading-[0.95] sm:text-6xl lg:text-[5rem]">
                Mãos experientes, <em className="text-petal">olhar atento.</em>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-shell/75">
                Por trás de cada ritual há uma equipe que escuta antes de tocar — e que entende que
                confiança se constrói no detalhe.
              </p>
            </Reveal>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.25rem] bg-shell/10">
              {[
                [
                  "Antes",
                  "Uma conversa sem pressa sobre a sua pele, a sua rotina e o que você deseja sentir.",
                ],
                [
                  "Durante",
                  "Atenção inteira em você: técnica precisa, toque delicado e silêncio quando ele é bem-vindo.",
                ],
                ["Depois", "Recomendações simples para que o cuidado continue no seu dia a dia."],
              ].map(([t, d], i) => (
                <Reveal
                  as="li"
                  key={t}
                  delay={220 + i * 100}
                  className="grid gap-2 bg-plum/90 p-6 transition-colors duration-700 hover:bg-wine/60 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  <p className="font-display text-[1.75rem] italic leading-none text-petal">{t}</p>
                  <p className="text-sm leading-relaxed text-shell/75">{d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {team.length > 0 && (
          <div className="mt-24 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="img-zoom aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-wine/40">
                  {m.photo && (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <h3 className="mt-5 font-display text-2xl">{m.name}</h3>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-petal">
                  {m.role}
                </p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────── Depoimentos / sensações ─────────────────────────── */

function Voices() {
  const quotes = brand.testimonials;
  const [i, setI] = useState(0);
  const q = quotes[i] ?? quotes[0];

  return (
    <section className="relative overflow-hidden bg-blush py-24 md:py-36">
      <img
        src={silk}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blush/70 via-blush/30 to-blush/80" />
      <div className="relative mx-auto max-w-[1440px] px-5 text-center md:px-10">
        {q ? (
          <>
            <Reveal>
              <p className="eyebrow">Quem já viveu a experiência</p>
            </Reveal>
            <figure key={i} className="anim-rise mx-auto mt-10 max-w-4xl">
              <blockquote className="font-display text-[2.2rem] font-light italic leading-[1.15] text-wine md:text-[3.6rem]">
                “{q.quote}”
              </blockquote>
              <figcaption className="eyebrow mt-8 text-taupe">{q.author}</figcaption>
            </figure>
            {quotes.length > 1 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Depoimento anterior"
                  onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-wine/30 text-wine transition-colors hover:bg-wine hover:text-shell"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
                </button>
                <span className="w-16 text-xs tracking-[0.2em] text-taupe">
                  {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  aria-label="Próximo depoimento"
                  onClick={() => setI((i + 1) % quotes.length)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-wine/30 text-wine transition-colors hover:bg-wine hover:text-shell"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <Reveal>
              <p className="eyebrow">O que fica depois de cada ritual</p>
            </Reveal>
            <div className="mt-10 flex flex-col items-center gap-2 font-display font-light leading-[0.95] text-wine md:mt-14">
              {[
                ["Leveza", ""],
                ["Viço", "italic text-rose"],
                ["Calma", ""],
              ].map(([w, cls], k) => (
                <Reveal key={w} delay={k * 140}>
                  <p className={`text-[4.4rem] sm:text-[6.5rem] lg:text-[9rem] ${cls}`}>{w}.</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={450}>
              <p className="lede mx-auto mt-10 max-w-md">
                Sensações que buscamos em cada atendimento — porque cuidar da pele também é cuidar
                de como você se sente.
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────── Agendamento ─────────────────────────── */

function BookingSection() {
  const contacts = [
    brand.whatsapp && {
      label: "WhatsApp",
      value: `+${brand.whatsapp}`,
      href: `https://wa.me/${brand.whatsapp}`,
    },
    brand.phone && {
      label: "Telefone",
      value: brand.phone,
      href: `tel:${brand.phone.replace(/[^\d+]/g, "")}`,
    },
    brand.email && { label: "E-mail", value: brand.email, href: `mailto:${brand.email}` },
    brand.address && { label: "Endereço", value: brand.address },
    brand.hours && { label: "Horários", value: brand.hours },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <section id="agendar" className="relative overflow-hidden bg-blush py-20 md:py-32 lg:bg-shell">
      <div aria-hidden className="absolute inset-y-0 left-0 hidden w-[40%] bg-blush lg:block" />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel n="06">Agendamento</SectionLabel>
            <h2 className="mt-7 font-display text-[3rem] font-light leading-[0.95] sm:text-6xl lg:text-[4.6rem]">
              Reserve um momento <em className="text-rose">só seu.</em>
            </h2>
            <p className="lede mt-7 max-w-sm">
              Conte o que você procura. Nossa equipe retorna para confirmar o melhor dia e horário.
            </p>
          </Reveal>
          <ol className="mt-10 space-y-5">
            {[
              ["Você escolhe", "o cuidado e o melhor período."],
              ["Nós retornamos", "para confirmar data e horário."],
              ["Seu momento", "chega — é só aproveitar."],
            ].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={100 + i * 100} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wine/25 font-display text-lg italic text-wine">
                  {i + 1}
                </span>
                <p className="text-sm text-taupe">
                  <span className="font-medium text-ink">{t}</span> {d}
                </p>
              </Reveal>
            ))}
          </ol>
          {contacts.length > 0 && (
            <dl className="mt-10 space-y-4 border-t border-wine/15 pt-8">
              {contacts.map((c) => (
                <div key={c.label}>
                  <dt className="eyebrow text-taupe">{c.label}</dt>
                  <dd className="mt-1 text-ink">
                    {c.href ? (
                      <a href={c.href} className="link-line">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6 lg:pt-8" delay={150}>
          <Booking />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Encerramento ─────────────────────────── */

function Closing() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={satin}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-plum/90 via-wine/70 to-wine/25" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow eyebrow-line text-petal">Seu próximo passo</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-7 max-w-4xl font-display text-[3.2rem] font-light leading-[0.92] text-shell sm:text-7xl lg:text-[7rem]">
            Seu tempo de florescer <em className="text-petal">começa aqui.</em>
          </h2>
        </Reveal>
        <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#agendar" className="btn btn-light">
            Agendar meu horário <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
          {brand.whatsapp ? (
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener"
              className="btn btn-outline-light"
            >
              Falar no WhatsApp
            </a>
          ) : (
            <a href="#tratamentos" className="btn btn-outline-light">
              Ver tratamentos
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const info = [brand.address, brand.hours, brand.phone, brand.email].filter(Boolean);
  const nav = [
    ["#manifesto", "Filosofia"],
    ["#tratamentos", "Tratamentos"],
    ["#experiencia", "Experiência"],
    ["#equipe", "Quem cuida"],
    ["#agendar", "Agendar"],
  ];
  return (
    <footer className="relative overflow-hidden bg-ink text-shell">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 md:px-10 md:pt-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="font-display text-4xl italic leading-none">{brand.name}</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-shell/60">
              Estética, spa e bem-estar. Rituais sem pressa para a sua pele e para você.
            </p>
            <a href="#agendar" className="btn btn-light mt-8 min-h-12 px-6 text-[0.66rem]">
              Agendar <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>
          <nav className="lg:col-span-3" aria-label="Rodapé">
            <p className="eyebrow text-petal">Navegue</p>
            <ul className="mt-5 space-y-3">
              {nav.map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="link-line text-shell/70 hover:text-shell">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-4">
            <p className="eyebrow text-petal">Atendimento</p>
            <div className="mt-5 space-y-3 text-shell/70">
              {info.length > 0 ? (
                info.map((i) => <p key={i}>{i}</p>)
              ) : (
                <p>Atendimento com hora marcada.</p>
              )}
              <a
                href="#agendar"
                className="link-line inline-flex items-center gap-2 text-shell hover:text-petal"
              >
                Solicitar horário <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
              {brand.instagram && (
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener"
                  className="link-line block w-fit text-shell/70 hover:text-shell"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none whitespace-nowrap bg-gradient-to-b from-petal/40 to-petal/0 bg-clip-text font-display text-[22vw] italic leading-[0.8] text-transparent lg:text-[15.5rem]"
        >
          {brand.name}
        </p>
      </div>
      <div className="border-t border-shell/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-6 text-xs text-shell/45 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>
          <a href="#top" className="link-line w-fit hover:text-shell">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
