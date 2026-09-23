"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { sponsors, tierOrder, tierMeta, type SponsorTier, type Sponsor } from "@/data/sponsors";
import { contact } from "@/lib/config";

type Filter = "todos" | SponsorTier;

// Versão recortada/clara de logos que vieram com margem sobrando ou fundo escuro —
// todas as superfícies de patrocinador são brancas, então vale pra tile e pra card.
const lightLogoVersions: Record<string, string> = {
  "/sponsors/j-cruz.png": "/sponsors/j-cruz-light.png",
  "/sponsors/mmi.png": "/sponsors/mmi-light.png",
  "/sponsors/concretize.png": "/sponsors/concretize-light.png",
};

function logoFor(sponsor: Sponsor) {
  return lightLogoVersions[sponsor.logo] ?? sponsor.logo;
}

// Tile de logo uniforme — mesmo fundo branco e mesma proporção pra todos,
// unificando logos de fundos/tamanhos diferentes.
function LogoTile({
  sponsor,
  logoBox,
  className = "",
}: {
  sponsor: Sponsor;
  logoBox: string;
  className?: string;
}) {
  const isLink = sponsor.url.startsWith("http");
  return (
    <a
      href={sponsor.url}
      target={isLink ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={`${sponsor.name}, patrocinador ${tierMeta[sponsor.tier].label}`}
      className={`flex items-center justify-center rounded-2xl bg-white ring-1 ring-navy/10 transition-all hover:-translate-y-1 hover:ring-gold/40 ${logoBox} ${className}`}
    >
      {sponsor.logo === "/sponsors/bis-licitacoes.jpeg" ? (
        // Enquadra a marca no material original, preservando a imagem recebida.
        <span className="relative block h-[70%] aspect-[780/500] overflow-hidden">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={1254}
            height={1254}
            sizes="150px"
            className="absolute max-w-none"
            style={{ width: "160.77%", height: "auto", left: "-30.77%", top: "-7%" }}
          />
        </span>
      ) : <Image
        src={logoFor(sponsor)}
        alt={sponsor.name}
        width={260}
        height={160}
        className="max-h-[70%] w-auto object-contain"
      />}
    </a>
  );
}

// Cabeçalho padrão de cota: emoji + "Patrocinador {cota}", mesmo estilo pra todas.
function TierHeader({ tier }: { tier: SponsorTier }) {
  const meta = tierMeta[tier];

  return (
    <span className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
      <span aria-hidden>{meta.emoji}</span> Patrocinador {meta.label}
    </span>
  );
}

function SponsorOpening({
  tier,
  className,
}: {
  tier: SponsorTier;
  className: string;
}) {
  const meta = tierMeta[tier];
  const occupied = sponsors.filter((s) => s.tier === tier).length;
  const available = Math.max(meta.slots - occupied, 0);

  return (
    <a
      href={contact.whatsappOrg}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center rounded-2xl border border-dashed border-gold/60 bg-transparent text-center transition-colors hover:border-gold hover:bg-white/60 ${className}`}
      aria-label={`Falar no WhatsApp sobre uma das ${available} vagas disponíveis na cota ${meta.label}`}
    >
      <span className="flex size-10 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
        <Plus className="size-5" aria-hidden />
      </span>
      <p className="mt-3 font-display text-sm font-semibold uppercase tracking-wide text-navy">
        Seja patrocinador
      </p>
      <p className="mt-1 text-xs text-navy/55">
        {available}/{meta.slots} vagas disponíveis
      </p>
    </a>
  );
}

// Cotas em holofote (Diamante/Ouro): rótulo nobre + logo grande.
function FeatureTier({ tier }: { tier: SponsorTier }) {
  const meta = tierMeta[tier];
  const list = sponsors.filter((s) => s.tier === tier);

  if (list.length === 0) {
    return (
      <Reveal id={`cota-${tier}`} className="mx-auto mt-14 max-w-xl scroll-mt-24 rounded-3xl border border-dashed border-gold/40 bg-white/50 px-8 py-12 text-center">
        <TierHeader tier={tier} />
        <p className="mt-3 text-sm text-navy/60">Cotas {meta.label} abertas. Seja a marca no topo.</p>
      </Reveal>
    );
  }

  return (
    <Reveal id={`cota-${tier}`} className="mt-14 scroll-mt-24">
      <div className="flex flex-col items-center">
        <TierHeader tier={tier} />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {list.map((s) => {
          const isLink = s.url.startsWith("http");
          return (
            <a
              key={s.name}
              href={s.url}
              target={isLink ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={`${s.name}, patrocinador ${meta.label}`}
              className="group flex w-full max-w-md flex-col items-center gap-5 rounded-3xl border border-gold/40 bg-white px-8 py-9 shadow-lg shadow-gold/10 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-36 w-full items-center justify-center">
                <Image
                  src={logoFor(s)}
                  alt={s.name}
                  width={340}
                  height={220}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <p className="font-display text-lg font-semibold uppercase tracking-wide text-navy">
                {s.name}
              </p>
            </a>
          );
        })}
        <SponsorOpening
          tier={tier}
          className="min-h-64 w-full max-w-md rounded-3xl"
        />
      </div>
    </Reveal>
  );
}

// Cotas de apoio (Prata/Bronze): mural calmo de tiles uniformes.
function SupportTier({ tier }: { tier: SponsorTier }) {
  const meta = tierMeta[tier];
  const list = sponsors.filter((s) => s.tier === tier);
  // leve degrau de tamanho por cota, mantendo tudo discreto
  const box = tier === "prata" ? "h-24 w-44" : "h-20 w-40";

  return (
    <Reveal id={`cota-${tier}`} className="mt-14 scroll-mt-24">
      <div className="flex flex-col items-center text-center">
        <TierHeader tier={tier} />
      </div>
      {list.length > 0 ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {list.map((s) => (
            <LogoTile key={s.name} sponsor={s} logoBox={box} />
          ))}
          <SponsorOpening tier={tier} className="h-28 w-52" />
        </div>
      ) : (
        <p className="mt-4 text-center text-sm text-navy/60">Cotas {meta.label} abertas.</p>
      )}
    </Reveal>
  );
}

export function Sponsors() {
  const [filter, setFilter] = useState<Filter>("todos");

  // Diamante e Ouro são as cotas de destaque — mesmo card grande nas duas.
  const featuredTiers: SponsorTier[] = ["diamante", "ouro"];
  const supportTiers = tierOrder.filter((t) => !featuredTiers.includes(t));

  const show = (t: SponsorTier) => filter === "todos" || filter === t;

  return (
    <section
      id="patrocinadores"
      className="bg-cream px-6 pb-12 pt-24 sm:pb-16 sm:pt-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Quem faz acontecer"
            title="Nossos Patrocinadores"
            subtitle="Marcas que acreditam num evento fraterno, familiar e de impacto social."
          />
        </Reveal>

        {/* Abas por cota (pedido do brief) */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {(["todos", ...tierOrder] as Filter[]).map((f) => {
            const active = f === filter;
            const label = f === "todos" ? "Todos" : tierMeta[f].label;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`inline-flex min-h-11 cursor-pointer items-center rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                  active ? "bg-navy text-cream shadow-md" : "bg-white text-navy/75 hover:text-navy"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {featuredTiers.map((t) => (show(t) ? <FeatureTier key={t} tier={t} /> : null))}

        {supportTiers.map((t) => (show(t) ? <SupportTier key={t} tier={t} /> : null))}

      </div>
    </section>
  );
}
