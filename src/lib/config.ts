// Dados do evento centralizados — trocar aqui reflete em toda a landing.
// WhatsApp: formato internacional, só dígitos.
const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP || "559282237716";

// URL pública do site — usada em metadataBase (OG/WhatsApp/sitemap precisam de URL absoluta).
// Domínio final: tardinhariosolimões.com (IDN, em punycode abaixo).
// Override via NEXT_PUBLIC_SITE_URL (ex.: http://localhost:3000 no dev).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://xn--tardinhariosolimes-82b.com";

export const event = {
  name: "A Tardinha da Rio Solimões",
  shortName: "A Tardinha",
  edition: 2026,
  lodge: "G∴B∴L∴S∴ Rio Solimões nº 24",
  lodgeShort: "Rio Solimões nº 24",
  tagline: "Samba · Feijoada · Fraternidade",
  motto: "Encontro da Família Maçônica Amazonense",
  slogan: "Juntos somos Rio Solimões",
  date: "14 de Novembro de 2026",
  dateShort: "14/11/2026",
  dateISO: "2026-11-14T12:00:00-04:00", // Manaus (AM) = UTC-4
  time: "12h às 19h",
  venue: "Clube Sírio Libanês, Manaus (AM)",
  venueName: "Clube Sírio Libanês",
  city: "Manaus, AM",
  lodgeFounded: 1980,
  lodgeYears: 46,
  ticketPrice: "R$ 150,00",
  ticketPriceShort: "R$ 150",
  ticketIncludes: ["Camisa oficial", "Caneca exclusiva", "Feijoada", "Apresentações musicais"],
  ticketsForSale: 150,
  // `band: null` = nome ainda não confirmado (a UI mostra "em breve").
  attractions: [
    { name: "Banda de Pagode", band: null },
    { name: "Banda de Forró", band: null },
    { name: "DJ", band: null },
    { name: "Bateria da Escola de Samba Aparecida", band: null },
  ],
} as const;

const ticketMessage = encodeURIComponent(
  "Olá! Quero garantir meu ingresso para a Tardinha da Rio Solimões. Pode me passar as informações para compra?",
);

const sponsorMessage = encodeURIComponent(
  "Olá! Tenho interesse em patrocinar a Tardinha da Rio Solimões. Gostaria de conhecer as cotas disponíveis.",
);

export const contact = {
  whatsappTickets: `https://wa.me/${WHATSAPP_NUMBER}?text=${ticketMessage}`,
  whatsappOrg: `https://wa.me/${WHATSAPP_NUMBER}?text=${sponsorMessage}`,
  instagram: "https://www.instagram.com/lojariosolimoes24/",
  instagramHandle: "@lojariosolimoes24",
  email: "contato@riosolimoes24.org.br",
  venue: event.venue,
} as const;
