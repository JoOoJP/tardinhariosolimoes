import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { event, contact } from "@/lib/config";

export function Tickets() {
  return (
    <section id="ingressos" className="bg-cream px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Garanta sua presença"
            title="Ingressos"
            size="climax"
            subtitle="O ingresso já vem com a camisa e a caneca oficiais. É seu, pra levar pra casa."
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Prévia do kit oficial (camisa + caneca). O próprio mockup já traz
              o selo "camisa + caneca oficiais inclusas", por isso sem legenda. */}
          <Reveal>
            <figure>
              <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gold/20">
                <Image
                  src="/art/kit-oficial.webp"
                  alt="Kit oficial da Tardinha Rio Solimões: camisa e caneca oficiais, inclusas no ingresso."
                  width={1456}
                  height={1092}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-navy/45">
                Imagens meramente ilustrativas.
              </figcaption>
            </figure>
          </Reveal>

          {/* Cartão de ingresso */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl bg-navy shadow-2xl">
              <div className="border-b border-white/10 px-8 py-10 text-center sm:px-12">
                <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
                  Edição única · apenas {event.ticketsForSale} ingressos
                </span>
                <p className="mt-5 font-display text-sm uppercase tracking-[0.25em] text-cream/70">
                  Ingresso individual
                </p>
                <p className="mt-3 font-display text-5xl font-bold text-cream sm:text-6xl">
                  {event.ticketPrice}
                </p>
              </div>

              <div className="px-8 py-10 sm:px-12">
                <p className="mb-6 text-center text-sm uppercase tracking-widest text-gold">
                  O que está incluso
                </p>
                <ul className="mx-auto flex max-w-xs flex-col gap-4">
                  {event.ticketIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-cream/90">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                        <Check className="h-4 w-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <CTA
                  href={contact.whatsappTickets}
                  external
                  icon={Phone}
                  ariaLabel="Garantir ingresso pelo WhatsApp"
                  className="mt-10 w-full"
                >
                  Garantir ingresso
                </CTA>

                {/* Resolve objeções ao lado do botão (como / segurança / propósito). */}
                <ul className="mt-6 flex flex-col gap-2 text-center text-xs text-cream/70">
                  <li>Compra no WhatsApp, direto com a organização</li>
                  <li>Camisa e caneca já inclusas</li>
                  <li>Parte do valor vira ação social da Loja</li>
                </ul>
                <p className="mt-4 text-center text-xs text-cream/60">
                  Ainda com dúvidas?{" "}
                  <a href="#faq" className="text-gold underline-offset-2 hover:underline">
                    Veja as perguntas frequentes
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
