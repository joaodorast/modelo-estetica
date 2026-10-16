import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Clock } from "lucide-react";
import { z } from "zod";
import { brand } from "@/config/brand";

const schema = z.object({
  name: z.string().trim().min(2, "Conte-nos seu nome").max(80),
  contact: z.string().trim().min(8, "Informe um telefone ou e-mail válido").max(120),
  treatment: z.string().min(1, "Escolha um tratamento"),
  period: z.string().min(1, "Escolha um período"),
  note: z.string().max(500).optional(),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const UNSURE = "Ainda não sei — quero uma avaliação";

const field =
  "peer w-full rounded-none border-0 border-b border-input bg-transparent px-0 pb-3 pt-6 text-base text-ink placeholder-transparent transition-colors duration-500 focus:border-wine focus:outline-none focus:ring-0 aria-[invalid=true]:border-destructive";
const floatLabel =
  "pointer-events-none absolute left-0 top-6 origin-left text-[0.95rem] text-taupe transition-all duration-300 ease-[var(--ease-silk)] peer-focus:top-0 peer-focus:text-[0.66rem] peer-focus:tracking-[0.22em] peer-focus:uppercase peer-focus:text-wine peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.66rem] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.22em]";
const chip =
  "inline-flex min-h-11 items-center rounded-full border border-input bg-ivory/60 px-4 py-2 text-[0.85rem] text-ink transition-all duration-300 hover:border-rose peer-checked:border-wine peer-checked:bg-wine peer-checked:text-shell peer-focus-visible:ring-2 peer-focus-visible:ring-rose/60";

function Err({ msg }: { msg?: string | undefined }) {
  return msg ? (
    <span role="alert" className="mt-2 block text-xs text-destructive">
      {msg}
    </span>
  ) : null;
}

export function Booking() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sent" | "offline">("idle");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") ?? "",
      contact: fd.get("contact") ?? "",
      treatment: fd.get("treatment") ?? "",
      period: fd.get("period") ?? "",
      note: fd.get("note") ?? "",
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Errors] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = r.data;
    const msg = `Olá! Gostaria de solicitar um horário.\n\nNome: ${v.name}\nContato: ${v.contact}\nTratamento: ${v.treatment}\nPeríodo preferido: ${v.period}${v.note ? `\nObservações: ${v.note}` : ""}`;
    if (brand.whatsapp) {
      window.open(
        `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener",
      );
      setState("sent");
    } else if (brand.email) {
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Solicitação de agendamento")}&body=${encodeURIComponent(msg)}`;
      setState("sent");
    } else {
      // Nenhum canal de envio disponível: não fingimos que a mensagem foi enviada.
      setState("offline");
    }
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="relative rounded-[1.75rem] bg-ivory p-6 shadow-[0_40px_80px_-40px_rgb(117_70_83/0.35)] ring-1 ring-wine/5 sm:p-10 md:p-12"
    >
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <label className="relative block">
          <input
            id="bk-name"
            name="name"
            autoComplete="name"
            placeholder="Nome"
            className={field}
            aria-invalid={!!errors.name}
          />
          <span className={floatLabel}>Seu nome</span>
          <Err msg={errors.name} />
        </label>
        <label className="relative block">
          <input
            id="bk-contact"
            name="contact"
            autoComplete="tel"
            inputMode="text"
            placeholder="Contato"
            className={field}
            aria-invalid={!!errors.contact}
          />
          <span className={floatLabel}>Telefone ou e-mail</span>
          <Err msg={errors.contact} />
        </label>
      </div>

      <fieldset className="mt-9">
        <legend className="eyebrow">Qual cuidado você procura?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {[...brand.treatments.map((t) => t.name), UNSURE].map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="treatment" value={t} className="peer sr-only" />
              <span className={chip}>{t}</span>
            </label>
          ))}
        </div>
        <Err msg={errors.treatment} />
      </fieldset>

      <fieldset className="mt-9">
        <legend className="eyebrow">Período preferido</legend>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
          {["Manhã", "Tarde", "Noite"].map((p) => (
            <label key={p} className="cursor-pointer">
              <input type="radio" name="period" value={p} className="peer sr-only" />
              <span className={`${chip} w-full justify-center sm:w-auto sm:px-6`}>{p}</span>
            </label>
          ))}
        </div>
        <Err msg={errors.period} />
      </fieldset>

      <label className="relative mt-8 block">
        <textarea
          name="note"
          rows={2}
          placeholder="Observações"
          className={`${field} resize-none`}
        />
        <span className={floatLabel}>Algo que devemos saber? (opcional)</span>
      </label>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-wine w-full sm:w-auto">
          Solicitar horário <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <p className="flex items-start gap-2 text-xs leading-relaxed text-taupe sm:max-w-[16rem]">
          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose" strokeWidth={1.5} />
          {brand.whatsapp
            ? "Sua solicitação segue pelo WhatsApp. O horário é confirmado pela nossa equipe."
            : brand.email
              ? "Sua solicitação abre no seu e-mail. O horário é confirmado pela nossa equipe."
              : "Este é um pedido de horário — a confirmação é feita pela nossa equipe."}
        </p>
      </div>

      <div aria-live="polite">
        {state === "sent" && (
          <p className="anim-rise mt-8 flex items-start gap-3 rounded-2xl bg-blush px-5 py-4 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-wine" /> Mensagem preparada. Basta
            enviá-la — retornaremos para confirmar seu horário.
          </p>
        )}
        {state === "offline" && (
          <p className="anim-rise mt-8 rounded-2xl bg-blush px-5 py-4 text-sm leading-relaxed text-ink">
            Agradecemos o seu interesse! O envio on-line de solicitações está temporariamente
            indisponível, e por isso nenhum pedido foi enviado. Por favor, tente novamente em breve.
          </p>
        )}
      </div>
    </form>
  );
}
