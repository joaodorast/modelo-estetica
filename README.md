# Modelo Estética

Site institucional para estética e spa — rituais faciais, corporais e agendamento on-line.

**Site no ar:** https://modelo-estetica.vercel.app

## Tecnologias

- [TanStack Start](https://tanstack.com/start) + React 19 + TypeScript
- Tailwind CSS 4
- Nitro (deploy na Vercel)

## Rodando localmente

Requer Node.js 20+.

```sh
npm install
npm run dev
```

O site abre em `http://localhost:8080` (ou na porta indicada no terminal).

## Personalizando

Todos os dados comerciais ficam em [`src/config/brand.ts`](src/config/brand.ts):

- `name`: nome da marca (hoje, "Sua Marca", provisório)
- `whatsapp` / `email`: canal que recebe as solicitações de agendamento
- `phone`, `address`, `hours`, `instagram`: aparecem no agendamento e no rodapé
- `treatments`: tratamentos, durações, descrições e fotos
- `offer`: o ritual de boas-vindas (preço opcional)
- `team` e `testimonials`: equipe e depoimentos **reais** (vazios, as seções mostram uma versão neutra, sem dados inventados)

Campos vazios não aparecem no site.

## Scripts

| Comando           | O que faz                   |
| ----------------- | --------------------------- |
| `npm run dev`     | servidor de desenvolvimento |
| `npm run build`   | build de produção           |
| `npm run preview` | pré-visualiza o build       |
| `npm run lint`    | ESLint + Prettier           |
| `npm test`        | testes (Vitest)             |

## Créditos das fotos

Fotografias de [Unsplash](https://unsplash.com), sob a licença Unsplash.
