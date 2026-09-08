import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  Music,
  Users,
  Handshake,
  Gift,
  Sofa,
} from "lucide-react";

// "A EXPERIÊNCIA" — cards do brief.
export const experiences: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Feijoada", description: "Feijoada completa, no capricho, com aquela cerveja bem gelada pra acompanhar.", icon: UtensilsCrossed },
  { title: "Música ao vivo", description: "Pagode dos Amigos, Udi Oliveira, o boi-bumbá do Grupo Ekoá e a bateria da Escola de Samba Aparecida. O ritmo da confraternização.", icon: Music },
  { title: "Lugar de família", description: "Um evento para reunir a família e celebrar bons momentos.", icon: Users },
  { title: "Reencontros", description: "Aquele abraço no Irmão que você não via faz tempo. É disso que a tarde é feita.", icon: Handshake },
  { title: "Camisa e caneca", description: "As duas são suas e já vêm no ingresso. Você leva a Tardinha pra casa.", icon: Gift },
  { title: "Só chegar", description: "Espaço amplo e estacionamento no Clube Sírio Libanês.", icon: Sofa },
];

// FAQ — perguntas frequentes.
export const faqs: { question: string; answer: string }[] = [
  {
    question: "O que vem no ingresso?",
    answer:
      "Camisa oficial, caneca, a feijoada e todos os shows. Tudo num ingresso só.",
  },
  {
    question: "Quando e onde vai ser?",
    answer:
      "No dia 14 de novembro de 2026, a partir das 12h, no Clube Sírio Libanês, em Manaus (AM).",
  },
  {
    question: "Como compro meu ingresso?",
    answer:
      "É pelo WhatsApp, direto com a organização. Toca em qualquer botão de ingresso e a gente combina o resto por lá.",
  },
  {
    question: "Parte do valor ajuda em ações sociais?",
    answer:
      "Ajuda sim. Uma parte do que a Tardinha arrecada vira ação social da Rio Solimões nº 24 aqui na cidade.",
  },
];
