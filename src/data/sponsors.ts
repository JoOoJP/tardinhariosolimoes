// Patrocinadores reais (logos em /public/sponsors).
// `tier` segue a pasta de cota entregue pela organização (Drive, set/2026).
// `url` deve apontar para o Instagram ou WhatsApp da marca (brief: clique → rede social da marca).

export type SponsorTier = "diamante" | "ouro" | "prata" | "bronze";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  logo: string;
  url: string;
};

export const sponsors: Sponsor[] = [
  { name: "Art's do Sorriso", tier: "diamante", logo: "/sponsors/arts-do-sorriso.png", url: "https://www.instagram.com/clinica.artsdosorriso" },
  { name: "Dr. Cláudio Souza", tier: "diamante", logo: "/sponsors/dr-claudio-souza.png", url: "#" },
  { name: "NeoPower", tier: "diamante", logo: "/sponsors/neopower.png", url: "#" },
  { name: "Odonto Vitta", tier: "diamante", logo: "/sponsors/odonto-vitta.png", url: "#" },
  { name: "Concretize", tier: "diamante", logo: "/sponsors/concretize.png", url: "#" },
  { name: "Mendes Silva Advogados", tier: "diamante", logo: "/sponsors/mendes-silva.png", url: "https://www.instagram.com/mendessilvaadv" },
  { name: "Dr. Túlio Maia", tier: "ouro", logo: "/sponsors/dr-tulio-maia.png", url: "#" },
  { name: "J Cruz Laboratório Dental", tier: "ouro", logo: "/sponsors/j-cruz.png", url: "#" },
  { name: "Instituto Arawá", tier: "ouro", logo: "/sponsors/instituto-arawa.png", url: "https://www.instagram.com/institutoarawa" },
  { name: "Quintal do Peixe", tier: "ouro", logo: "/sponsors/quintal-do-peixe.png", url: "#" },
  { name: "MMI Soluções e Serviços", tier: "ouro", logo: "/sponsors/mmi.png", url: "#" },
  { name: "AgilTI", tier: "prata", logo: "/sponsors/agilti.png", url: "https://www.instagram.com/agiltipro/" },
  { name: "Ágape Contabilidade", tier: "prata", logo: "/sponsors/agape-contab.png", url: "#" },
  { name: "DC Reis Confecções", tier: "prata", logo: "/sponsors/dc-reis.png", url: "https://www.instagram.com/dcreis_confeccoes" },
  { name: "Espetinho Costelão do Edinho", tier: "prata", logo: "/sponsors/espetinho-costelao.png", url: "#" },
  { name: "Amazônica Produtos Regionais", tier: "prata", logo: "/sponsors/amazonica.png", url: "https://www.instagram.com/amazonicapr" },
  { name: "Suprimais", tier: "prata", logo: "/sponsors/suprimais.png", url: "https://www.instagram.com/suprimaisam" },
  { name: "H10 Serviços", tier: "prata", logo: "/sponsors/h10-servicos.png", url: "#" },
  { name: "America Languages", tier: "prata", logo: "/sponsors/america-languages.png", url: "#" },
  { name: "Ecology Ambiental", tier: "bronze", logo: "/sponsors/ecology.png", url: "https://www.instagram.com/ecologyambiental" },
  { name: "Rootec Soluções Elétricas", tier: "bronze", logo: "/sponsors/rootec.png", url: "https://www.instagram.com/rootec.eletrica" },
];

export const tierOrder: SponsorTier[] = ["diamante", "ouro", "prata", "bronze"];

// Metadados por cota. `slots` = capacidade vendida/planejada de cada cota
// (fonte: organização, jul/2026) — a UI só mostra logos confirmados.
// `emoji` sinaliza a cota no cabeçalho da seção, no mesmo estilo do Diamante.
export const tierMeta: Record<
  SponsorTier,
  { label: string; slots: number; emoji: string }
> = {
  diamante: { label: "Diamante", slots: 10, emoji: "💎" },
  ouro: { label: "Ouro", slots: 8, emoji: "🏆" },
  prata: { label: "Prata", slots: 16, emoji: "🥈" },
  bronze: { label: "Bronze", slots: 10, emoji: "🥉" },
};
