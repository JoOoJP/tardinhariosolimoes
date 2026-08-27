import { Camera } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { event } from "@/lib/config";

// Evento ainda não aconteceu — sem fotos reais. Prévia honesta com a
// atmosfera do encontro; substituir por fotos após a 1ª edição (14/11/2026).
const tiles: { label: string; span: string; tone: string }[] = [
  { label: "Abraços", span: "sm:col-span-2 sm:row-span-2", tone: "from-navy-deep via-navy to-[#3a1e12]" },
  { label: "Música", span: "", tone: "from-navy to-sunset/40" },
  { label: "Famílias", span: "", tone: "from-navy-deep to-navy" },
  { label: "Alegria", span: "", tone: "from-[#3a1e12] to-navy" },
  { label: "Confraternização", span: "sm:col-span-2", tone: "from-navy to-gold/30" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-navy px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Momentos"
            title="No fim, o que fica é a tarde que a gente passou junto."
            variant="light"
            subtitle="Sorrisos, encontros e a alegria de estar entre amigos."
          />
        </Reveal>

        {/* Molduras prontas para foto — trocar cada bloco por <Image> após o evento. */}
        <Reveal delay={120} className="mt-14">
          <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:grid-cols-4">
            {tiles.map((t) => (
              <figure
                key={t.label}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br ${t.tone} text-cream/70 ring-1 ring-white/10 ${t.span}`}
              >
                <Camera className="h-5 w-5" strokeWidth={1.5} />
                <figcaption className="text-sm font-medium">{t.label}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-cream/65">
          As fotos da primeira edição aparecerão aqui após {event.dateShort}.
        </p>
      </div>
    </section>
  );
}
