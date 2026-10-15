import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import hero from "@/assets/hero.jpg";
import facial from "@/assets/facial.jpg";
import products from "@/assets/products.jpg";
import room from "@/assets/room.jpg";
import { brand } from "@/config/brand";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { Booking } from "@/components/site/Booking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sua Marca — Estética & Spa | Seu tempo de florescer" },
      { name: "description", content: "Tratamentos faciais, corporais e rituais de spa com cuidado sob medida. Solicite seu horário." },
      { property: "og:title", content: "Sua Marca — Estética & Spa" },
      { property: "og:description", content: "Rituais de beleza e bem-estar pensados para a sua pele e o seu tempo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Treatments />
        <Experience />
        {brand.offer.enabled && <Offer />}
        <People />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-blush">
      {/* Mobile: full-bleed image; Desktop: image anchored right */}
      <div className="absolute inset-0 md:left-[38%] anim-unveil">
        <img src={hero} alt="Mulher de olhos fechados, pele luminosa, envolta em seda rosa" width={1280} height={1600}
          fetchPriority="high" className="h-full w-full object-cover object-[70%_20%] md:object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent md:hidden" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-12 pt-32 md:justify-center md:px-10 md:pb-24">
        <p className="eyebrow anim-rise text-background/90 md:text-muted-foreground" style={{ animationDelay: "300ms" }}>
          Estética · Spa · Bem-estar
        </p>
        <h1 className="mt-5 max-w-[11ch] font-display text-[3.6rem] leading-[0.92] text-background anim-rise sm:text-7xl md:text-ink lg:text-[8.5rem]" style={{ animationDelay: "450ms" }}>
          Seu tempo<br />de <em className="text-nude md:text-rose">florescer.</em>
        </h1>
        <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-background/90 anim-rise md:mt-8 md:text-muted-foreground" style={{ animationDelay: "650ms" }}>
          Uma pausa desenhada para a sua pele e para você. Rituais sem pressa, mãos atentas e o silêncio de que você precisava.
        </p>
        <div className="mt-8 flex flex-col gap-3 anim-rise sm:flex-row sm:items-center sm:gap-6 md:mt-10" style={{ animationDelay: "800ms" }}>
          <a href="#agendar" className="rounded-full bg-background px-8 py-4 text-center text-xs uppercase tracking-[0.25em] text-ink transition-colors duration-500 hover:bg-blush md:bg-ink md:text-background md:hover:bg-wine">
            Agendar meu horário
          </a>
          <a href="#tratamentos" className="link-line self-center py-2 text-xs uppercase tracking-[0.25em] text-background sm:self-auto md:text-ink">
            Conhecer tratamentos
          </a>
        </div>
      </div>

      <a href="#manifesto" aria-label="Rolar para a próxima seção" className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-ink/60 md:left-10 md:flex md:translate-x-0">
        <span className="eyebrow [writing-mode:vertical-rl]">Role</span>
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1} />
      </a>
      <p className="absolute right-10 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right eyebrow text-background/80 lg:block">Edição Nº 01 — Ritual</p>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3"><p className="eyebrow">01 — Filosofia</p></Reveal>
        <Reveal className="md:col-span-9" delay={100}>
          <h2 className="font-display text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[4.6rem]">
            Beleza não é pressa. É <em className="text-rose">presença</em> — o gesto lento, a pele ouvida, o corpo que finalmente <em className="text-rose">descansa.</em>
          </h2>
          <div className="mt-14 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
            {[
              ["Escuta", "Cada sessão começa entendendo a sua pele, a sua rotina e o seu momento."],
              ["Precisão", "Protocolos cuidadosos, com técnica e respeito ao tempo de cada tecido."],
              ["Ritual", "Luz suave, aromas discretos e um espaço feito para desacelerar."],
            ].map(([t, d]) => (
              <div key={t}>
                <h3 className="font-display text-2xl italic">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Treatments() {
  const [active, setActive] = useState(0);
  return (
    <section id="tratamentos" className="bg-ivory py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">02 — Tratamentos</p>
            <h2 className="mt-6 font-display text-5xl leading-none md:text-6xl">Cuidados<br /><em className="text-rose">sob medida</em></h2>
          </Reveal>
          <Reveal delay={150} className="img-zoom relative mt-12 hidden aspect-[4/5] md:block">
            <img src={facial} alt="Profissional aplicando máscara facial com pincel" width={1200} height={1504} loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
        </div>

        <ul className="md:col-span-7 md:pt-28">
          {brand.treatments.map((t, i) => {
            const open = active === i;
            return (
              <li key={t.name} className="border-b border-border first:border-t">
                <button onClick={() => setActive(open ? -1 : i)} aria-expanded={open}
                  className="group flex w-full items-baseline gap-5 py-7 text-left md:py-9">
                  <span className="font-display text-sm italic text-rose">0{i + 1}</span>
                  <span className="flex-1 font-display text-3xl leading-tight transition-colors duration-500 group-hover:text-wine md:text-[2.6rem]">{t.name}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-500 ${open ? "rotate-45" : ""}`} strokeWidth={1} />
                </button>
                <div className={`grid transition-all duration-700 ease-[var(--ease-silk)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 pb-9 pl-9 sm:flex-row sm:items-end sm:justify-between">
                      <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">{t.text}</p>
                      <div className="flex shrink-0 items-center gap-6">
                        <span className="eyebrow">{t.category} · {t.duration}</span>
                        <a href="#agendar" className="link-line text-xs uppercase tracking-[0.2em] text-wine">Agendar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <Reveal className="img-zoom aspect-[4/5] md:hidden">
          <img src={facial} alt="Profissional aplicando máscara facial com pincel" width={1200} height={1504} loading="lazy" className="h-full w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">03 — A experiência</p>
            <h2 className="mt-6 font-display text-5xl leading-none md:text-7xl">Um lugar para<br /><em className="text-rose">desacelerar</em></h2>
          </div>
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">Luz natural, linho, argila rosada. Do primeiro chá ao último toque, cada detalhe foi escolhido para que você esqueça o relógio.</p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12 md:gap-8">
          <Reveal className="img-zoom aspect-[4/3] md:col-span-8 md:aspect-[16/10]">
            <img src={room} alt="Sala de tratamento com maca, toalhas brancas e luz natural" width={1600} height={1008} loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <div className="grid grid-cols-2 gap-5 md:col-span-4 md:grid-cols-1 md:gap-8 md:pt-32">
            <Reveal delay={150} className="img-zoom aspect-[3/4] md:aspect-[4/5]">
              <img src={products} alt="Frascos de skincare sobre linho com pétalas de rosa" width={1504} height={1104} loading="lazy" className="h-full w-full object-cover object-[35%_center]" />
            </Reveal>
            <Reveal delay={250} className="flex flex-col justify-end">
              <p className="font-display text-2xl italic leading-snug md:text-3xl">"O cuidado começa muito antes do toque."</p>
              <p className="eyebrow mt-4">Princípio da casa</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const o = brand.offer;
  return (
    <section className="px-4 md:px-10">
      <Reveal className="relative mx-auto grid max-w-[1400px] overflow-hidden bg-wine text-primary-foreground md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src={hero} alt="" aria-hidden width={1280} height={1600} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[60%_25%] opacity-90" />
        </div>
        <div className="flex flex-col justify-center px-7 py-14 md:px-16 md:py-24">
          <p className="eyebrow text-nude">Para a primeira visita</p>
          <h2 className="mt-6 font-display text-5xl leading-none md:text-6xl">{o.title}</h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-primary-foreground/80">{o.description}</p>
          {o.priceLabel && <p className="mt-8 font-display text-4xl italic">{o.priceLabel}</p>}
          <a href="#agendar" className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-primary-foreground/50 px-7 py-4 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:bg-primary-foreground hover:text-wine">
            {o.priceLabel ? "Quero este ritual" : "Consultar condições"} <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.25} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function People() {
  const hasTeam = brand.team.length > 0;
  const hasReviews = brand.testimonials.length > 0;
  if (!hasTeam && !hasReviews) {
    return (
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">04 — Quem cuida</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">Mãos experientes,<br /><em className="text-rose">olhar atento.</em></h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
              Nossa equipe e as palavras de quem já passou por aqui aparecerão em breve neste espaço.
            </p>
          </div>
        </Reveal>
      </section>
    );
  }
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <p className="eyebrow">04 — Quem cuida</p>
      {hasTeam && (
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {brand.team.map((m) => (
            <Reveal key={m.name}>
              {m.photo && <img src={m.photo} alt={m.name} loading="lazy" className="aspect-[3/4] w-full object-cover" />}
              <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
              <p className="eyebrow mt-1">{m.role}</p>
            </Reveal>
          ))}
        </div>
      )}
      {hasReviews && (
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {brand.testimonials.map((t) => (
            <Reveal key={t.author} as="figure">
              <blockquote className="font-display text-3xl italic leading-snug">"{t.quote}"</blockquote>
              <figcaption className="eyebrow mt-5">{t.author}</figcaption>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

function BookingSection() {
  return (
    <section id="agendar" className="bg-blush py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">05 — Agendamento</p>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">Reserve<br />um momento<br /><em className="text-rose">só seu.</em></h2>
          <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">Conte o que você procura. Nossa equipe retorna para confirmar o melhor dia e horário.</p>
        </Reveal>
        <Reveal className="md:col-span-7" delay={150}>
          <Booking />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const info = [brand.address, brand.hours, brand.phone, brand.email].filter(Boolean);
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-24 md:px-10">
        <p className="font-display text-[18vw] italic leading-[0.8] text-background/95 md:text-[11rem]">{brand.name}</p>
        <div className="mt-16 grid gap-10 border-t border-background/15 pt-10 text-sm sm:grid-cols-3">
          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            {[["#manifesto", "Filosofia"], ["#tratamentos", "Tratamentos"], ["#experiencia", "Experiência"], ["#agendar", "Agendar"]].map(([h, l]) => (
              <a key={h} href={h} className="link-line w-fit text-background/70 hover:text-background">{l}</a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 text-background/70">
            {info.length ? info.map((i) => <span key={i}>{i}</span>) : <span>Endereço, horários e contato em breve.</span>}
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            {brand.instagram && <a href={brand.instagram} target="_blank" rel="noopener" className="link-line w-fit text-background/70 hover:text-background">Instagram</a>}
            <a href="#top" className="link-line w-fit text-background/70 hover:text-background">Voltar ao topo ↑</a>
          </div>
        </div>
        <p className="mt-16 text-xs text-background/40">© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
