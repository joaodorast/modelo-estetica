import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
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

const field = "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted-foreground/70 focus:border-wine focus:outline-none focus:ring-0 transition-colors";

export function Booking() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sent" | "unconfigured">("idle");
  const channelReady = Boolean(brand.whatsapp || brand.email);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { name: fd.get("name") ?? "", contact: fd.get("contact") ?? "", treatment: fd.get("treatment") ?? "", period: fd.get("period") ?? "", note: fd.get("note") ?? "" };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = r.data;
    const msg = `Olá! Gostaria de solicitar um horário.\n\nNome: ${v.name}\nContato: ${v.contact}\nTratamento: ${v.treatment}\nPeríodo preferido: ${v.period}${v.note ? `\nObservações: ${v.note}` : ""}`;
    if (brand.whatsapp) {
      window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      setState("sent");
    } else if (brand.email) {
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Solicitação de agendamento")}&body=${encodeURIComponent(msg)}`;
      setState("sent");
    } else {
      setState("unconfigured");
    }
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Nome</span>
          <input name="name" autoComplete="name" className={field} placeholder="Como podemos te chamar?" aria-invalid={!!errors.name} />
          {errors.name && <span className="mt-2 block text-xs text-destructive">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="eyebrow">Telefone ou e-mail</span>
          <input name="contact" autoComplete="tel" className={field} placeholder="Para confirmarmos com você" aria-invalid={!!errors.contact} />
          {errors.contact && <span className="mt-2 block text-xs text-destructive">{errors.contact}</span>}
        </label>
        <label className="block">
          <span className="eyebrow">Tratamento</span>
          <select name="treatment" defaultValue="" className={field} aria-invalid={!!errors.treatment}>
            <option value="" disabled>Selecione</option>
            {brand.treatments.map((t) => <option key={t.name}>{t.name}</option>)}
            <option>Ainda não sei — quero uma avaliação</option>
          </select>
          {errors.treatment && <span className="mt-2 block text-xs text-destructive">{errors.treatment}</span>}
        </label>
        <fieldset>
          <legend className="eyebrow">Período preferido</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Manhã", "Tarde", "Noite"].map((p) => (
              <label key={p} className="cursor-pointer">
                <input type="radio" name="period" value={p} className="peer sr-only" />
                <span className="inline-block rounded-full border border-input px-5 py-2.5 text-sm text-ink transition-all duration-300 peer-checked:border-wine peer-checked:bg-wine peer-checked:text-primary-foreground peer-focus-visible:ring-1 peer-focus-visible:ring-wine">{p}</span>
              </label>
            ))}
          </div>
          {errors.period && <span className="mt-2 block text-xs text-destructive">{errors.period}</span>}
        </fieldset>
      </div>
      <label className="block">
        <span className="eyebrow">Algo que devemos saber? (opcional)</span>
        <textarea name="note" rows={2} className={`${field} resize-none`} placeholder="Sensibilidades, preferências, datas…" />
      </label>

      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-all duration-500 hover:bg-wine">
          Solicitar horário <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          {channelReady ? (brand.whatsapp ? "Sua solicitação será enviada pelo WhatsApp. A confirmação do horário é feita pela nossa equipe." : "Sua solicitação abrirá no seu e-mail. A confirmação do horário é feita pela nossa equipe.") : "Este é um pedido de horário, não uma reserva confirmada."}
        </p>
      </div>

      <div aria-live="polite">
        {state === "sent" && (
          <p className="flex items-center gap-3 border-l-2 border-wine bg-blush px-5 py-4 text-sm text-ink anim-rise">
            <Check className="h-4 w-4 text-wine" /> Mensagem preparada. Basta enviá-la — retornaremos para confirmar seu horário.
          </p>
        )}
        {state === "unconfigured" && (
          <p className="border-l-2 border-rose bg-blush px-5 py-4 text-sm text-ink anim-rise">
            Seus dados estão corretos, mas o canal de atendimento ainda não foi configurado — nenhuma solicitação foi enviada. Configure o WhatsApp ou e-mail da marca para ativar o agendamento.
          </p>
        )}
      </div>
    </form>
  );
}
