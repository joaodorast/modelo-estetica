// Dados comerciais centralizados — substitua pelos dados reais da sua marca.
// Campos vazios ("") ficam ocultos no site automaticamente.
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
    priceLabel: "", // ex.: "R$ 000" — deixe vazio até definir o valor oficial
  },
  treatments: [
    { name: "Limpeza de pele profunda", category: "Facial", duration: "75 min", text: "Renovação delicada que devolve à pele a respiração e o brilho natural." },
    { name: "Hidratação luminosa", category: "Facial", duration: "60 min", text: "Camadas de ativos que nutrem, acalmam e deixam um viço de manhã descansada." },
    { name: "Massagem relaxante", category: "Corpo", duration: "60 min", text: "Movimentos lentos e envolventes para soltar o corpo e silenciar a mente." },
    { name: "Drenagem linfática", category: "Corpo", duration: "50 min", text: "Leveza, contorno e circulação — um alívio que se sente ao levantar." },
    { name: "Peeling suave", category: "Facial", duration: "45 min", text: "Uniformiza o tom e refina a textura com respeito ao tempo da pele." },
  ],
  team: [] as { name: string; role: string; photo?: string }[],
  testimonials: [] as { quote: string; author: string }[],
};
