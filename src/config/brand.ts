import facial from "@/assets/facial.jpg";
import hydration from "@/assets/treat-hydration.jpg";
import massage from "@/assets/treat-massage.jpg";
import drainage from "@/assets/treat-drainage.jpg";
import peel from "@/assets/treat-peel.jpg";

// Dados comerciais centralizados — substitua pelos dados reais da sua marca.
// Campos vazios ("") ou listas vazias simplesmente não são exibidos: o layout
// de cada seção continua completo, sem mensagens de configuração para o visitante.
export const brand = {
  name: "Sua Marca",
  email: "", // ex.: "contato@suamarca.com.br" — destino das solicitações de agendamento
  whatsapp: "", // ex.: "5511999999999" (apenas números, com DDI)
  phone: "",
  address: "",
  hours: "",
  instagram: "",
  offer: {
    enabled: true,
    title: "Ritual de Boas-Vindas",
    description:
      "Uma primeira visita pensada para conhecer sua pele: avaliação, limpeza profunda e um ritual de hidratação personalizado.",
    includes: ["Avaliação da pele", "Limpeza profunda", "Hidratação personalizada"],
    priceLabel: "", // ex.: "R$ 000" — deixe vazio até definir o valor oficial
  },
  treatments: [
    {
      name: "Limpeza de pele profunda",
      category: "Facial",
      duration: "75 min",
      image: facial,
      text: "Renovação delicada que devolve à pele a respiração e o brilho natural.",
    },
    {
      name: "Hidratação luminosa",
      category: "Facial",
      duration: "60 min",
      image: hydration,
      text: "Camadas de ativos que nutrem, acalmam e deixam um viço de manhã descansada.",
    },
    {
      name: "Massagem relaxante",
      category: "Corpo",
      duration: "60 min",
      image: massage,
      text: "Movimentos lentos e envolventes para soltar o corpo e silenciar a mente.",
    },
    {
      name: "Drenagem linfática",
      category: "Corpo",
      duration: "50 min",
      image: drainage,
      text: "Leveza, contorno e circulação — um alívio que se sente ao levantar.",
    },
    {
      name: "Peeling suave",
      category: "Facial",
      duration: "45 min",
      image: peel,
      text: "Uniformiza o tom e refina a textura com respeito ao tempo da pele.",
    },
  ],
  // Equipe real: { name, role, photo? }. Sem dados, a seção "Quem cuida" mostra
  // a filosofia de atendimento — sem nomes ou credenciais inventados.
  team: [] as { name: string; role: string; photo?: string }[],
  // Depoimentos reais: { quote, author }. Sem dados, a seção mostra uma composição
  // tipográfica neutra — nunca citações fictícias.
  testimonials: [] as { quote: string; author: string }[],
};
