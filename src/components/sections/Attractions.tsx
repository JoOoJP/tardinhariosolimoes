import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { event } from "@/lib/config";

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
          {event.attractions.map(({ name, tag, note, logo }, i) => (
            <li key={name} className="relative pb-10 last:pb-0">
              <Reveal className="flex gap-6" delay={(i % 4) * 90}>
                {/* Linha conectora + marcador */}
                <div className="flex flex-col items-center">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-gold/15" />
                  {i < event.attractions.length - 1 ? (
                    <span className="mt-1 w-px flex-1 bg-navy/15" />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col gap-4 pb-2 sm:flex-row sm:items-center sm:gap-6">
                  {/* Tile uniforme: logos chegam em fundos e proporções diferentes. */}
                  <div className="flex h-32 w-44 shrink-0 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-navy/10">
                    <Image
                      src={logo}
                      alt={name}
                      width={320}
                      height={200}
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-display text-xl uppercase tracking-wide text-navy sm:text-2xl">
                      {name}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold uppercase tracking-wide text-gold">
                      {tag}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-navy/60">{note}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
