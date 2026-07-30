// Patrocinadores reais (logos em /public/sponsors).
// ATENÇÃO: o `tier` de cada empresa é PROVISÓRIO — confirmar com a organização.
// `url` deve apontar para o Instagram ou WhatsApp da marca (brief: clique → rede social da marca).

export type SponsorTier = "diamante" | "ouro" | "prata" | "bronze";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  logo: string;
  url: string;
};

export const sponsors: Sponsor[] = [
  { name: "Dr. Cláudio Souza", tier: "diamante", logo: "/sponsors/dr-claudio-souza.png", url: "#" },
  { name: "Dr. Túlio Maia", tier: "ouro", logo: "/sponsors/dr-tulio-maia.png", url: "#" },
  { name: "Odonto Vitta", tier: "ouro", logo: "/sponsors/odonto-vitta.png", url: "#" },
  { name: "J Cruz Laboratório Dental", tier: "ouro", logo: "/sponsors/j-cruz.png", url: "#" },
  { name: "NeoPower", tier: "prata", logo: "/sponsors/neopower.png", url: "#" },
  { name: "AgilTI", tier: "prata", logo: "/sponsors/agilti.png", url: "#" },
  { name: "MMI Soluções e Serviços", tier: "prata", logo: "/sponsors/mmi.png", url: "#" },
  { name: "Concretize", tier: "prata", logo: "/sponsors/concretize.png", url: "#" },
  { name: "Instituto Arawá", tier: "bronze", logo: "/sponsors/instituto-arawa.png", url: "#" },
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
