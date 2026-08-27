import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { event } from "@/lib/config";

export function About() {
  return (
    <section id="sobre" className="bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading eyebrow="Sobre o evento" title="Uma tarde para a família maçônica" />
        </Reveal>

        <Reveal className="mt-10 space-y-6 text-center text-lg leading-relaxed text-navy/80" delay={100}>
          <p>
            No dia 14 de novembro, a família{" "}
            <strong className="font-semibold text-navy">{event.lodgeShort}</strong> abre as portas
            do Clube Sírio Libanês para uma tarde de muita música, feijoada e boa prosa. Irmãos,
            familiares, amigos e convidados em um ambiente preparado para celebrar a fraternidade.
          </p>
          <p>
            A ideia é simples: juntar quem a gente gosta, matar a saudade e brindar a amizade. E, de
            quebra, ajudar a Loja a seguir fazendo um dos seus propósitos: a Filantropia.
          </p>
          <p className="font-display text-2xl font-semibold uppercase tracking-wide text-gold sm:text-3xl">
            Fraternidade que une. Solidariedade que transforma.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
