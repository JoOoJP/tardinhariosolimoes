import { HeartHandshake, Users, Sprout } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const pillars = [
  { title: "União dos Irmãos", description: "Reencontros que fortalecem a fraternidade e aproximam Irmãos, familiares e amigos em um só ambiente.", icon: Users },
  { title: "Amizade", description: "Conversas, sorrisos e momentos que fortalecem laços e criam lembranças para toda a vida.", icon: HeartHandshake },
  { title: "Filantropia", description: "Parte da arrecadação será destinada a ações beneficentes, transformando confraternização em solidariedade.", icon: Sprout },
];

export function Fraternity() {
  return (
    <section id="filantropia" className="bg-cream px-6 pb-24 pt-8 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Fraternidade e filantropia"
            title="Fraternidade que celebra. Filantropia que transforma."
            subtitle="Parte da arrecadação será destinada a ações filantrópicas. Sua presença transforma vidas."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-sm">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green/10 text-green">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-xl uppercase tracking-wide text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-navy/70">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
