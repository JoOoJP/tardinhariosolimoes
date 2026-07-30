import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { event } from "@/lib/config";

// Descritor de cada atração (ordem segue event.attractions).
const notes = [
  "Samba e pagode de raiz para abrir a tarde",
  "Arrasta-pé no melhor do forró pé de serra",
  "Pista aberta entre um show e outro",
  "O grande final em ritmo de escola de samba",
];

export function Attractions() {
  return (
    <section id="atracoes" className="bg-cream px-6 pb-8 pt-12 sm:pb-12 sm:pt-16">
      <div className="mx-auto max-w-3xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Atrações"
            title="A programação"
            subtitle="Grandes atrações para uma tarde inesquecível."
          />
        </Reveal>

        {/* Linha do tempo vertical (brief pede timeline). */}
        <ol className="mt-16">
          {event.attractions.map(({ name, band }, i) => (
            <li key={name} className="relative pb-10 last:pb-0">
              <Reveal className="flex gap-6" delay={(i % 4) * 90}>
                {/* Linha conectora + marcador */}
                <div className="flex flex-col items-center">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-gold/15" />
                  {i < event.attractions.length - 1 ? (
                    <span className="mt-1 w-px flex-1 bg-navy/15" />
                  ) : null}
                </div>
                <div className="pb-2">
                  <p className="font-display text-xl uppercase tracking-wide text-navy sm:text-2xl">
                    {name}
                  </p>
                  {/* Espaço reservado pro nome da atração — preenche `band` no config. */}
                  <p className="mt-0.5 text-sm font-semibold uppercase tracking-wide text-gold">
                    {band ?? "Em breve"}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-navy/60">{notes[i]}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
