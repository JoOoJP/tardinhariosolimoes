import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { experiences } from "@/data/content";

export function Experience() {
  return (
    <section id="experiencia" className="bg-navy px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="A experiência"
            title="O que te espera"
            variant="light"
            subtitle="Você não vem só comer feijoada. Vem passar a melhor tarde do ano."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-gold/40 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-sm tracking-widest text-gold/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide text-cream">{title}</h3>
                <p className="text-sm leading-relaxed text-cream/75">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <CTA href="#ingressos" variant="tertiary" tone="onDark" showArrow>
            Quero viver isso
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}
