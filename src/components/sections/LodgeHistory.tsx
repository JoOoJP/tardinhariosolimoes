import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { event } from "@/lib/config";

export function LodgeHistory() {
  return (
    <section id="loja" className="bg-navy-deep px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="flex items-center justify-center gap-6">
          <Image
            src="/logo/rio-solimoes-24.png"
            alt={`Brasão da Loja ${event.lodgeShort}`}
            width={220}
            height={220}
            className="w-36 drop-shadow-xl sm:w-44"
          />
          <Image
            src="/logo/glomam-selected-final.png"
            alt="Grande Loja Maçônica do Amazonas"
            width={200}
            height={200}
            unoptimized
            className="h-auto w-36 drop-shadow-xl sm:w-44"
          />
        </Reveal>

        <Reveal delay={120}>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:text-sm">
            Conheça a
          </span>
          <h2 className="mt-4 font-display text-[2rem] font-bold uppercase leading-[1.05] tracking-wide text-cream sm:text-4xl md:text-5xl">
            Rio Solimões nº 24
          </h2>
          <span className="mt-5 block h-px w-16 bg-gold" />
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Há <strong className="text-gold">{event.lodgeYears} anos</strong> fazendo da
            fraternidade uma missão. Uma Loja que une gerações, forma Maçons, fortalece a Maçonaria
            Amazonense e acolhe cada visitante como um Irmão.
          </p>
          <p className="mt-5 font-display text-lg font-semibold uppercase tracking-[0.15em] text-gold-soft">
            {event.slogan}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
