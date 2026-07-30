import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { event, contact } from "@/lib/config";
import { Countdown } from "@/components/Countdown";
import { CTA } from "@/components/CTA";

// Resumo objetivo acima da dobra: o quê / quando / onde / quanto.
const facts = [
  { k: "Data", v: event.dateShort },
  { k: "Horário", v: event.time },
  { k: "Local", v: event.venueName },
  { k: "A partir de", v: event.ticketPriceShort },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center">
      {/* Fundo pôr do sol — tons do manual (navy → sunset → gold). */}
      {/* TODO: quando houver foto do pôr do sol/evento, entra aqui como camada de fundo. */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-[#3a1e12]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sunset/45 via-gold/10 to-transparent" />
      <div className="absolute left-1/2 top-[56%] h-80 w-80 -translate-x-1/2 rounded-full bg-sunset/30 blur-3xl" />
      {/* Vinheta para dar profundidade e legibilidade ao texto. */}
      <div className="absolute inset-0 [background:radial-gradient(120%_90%_at_50%_20%,transparent_45%,rgba(4,18,31,0.75)_100%)]" />

      <div className="hero-enter relative z-10 flex flex-col items-center">
        <Image
          src="/logo/tardinha-principal-optimized.webp"
          alt={event.name}
          width={340}
          height={340}
          preload
          sizes="(max-width: 639px) 208px, (max-width: 767px) 256px, 288px"
          className="w-52 drop-shadow-2xl sm:w-64 md:w-72"
        />

        <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm">
          {event.lodge}
        </p>

        {/* Nome da marca: "Tardinha" em script + "Rio Solimões" em display. */}
        <h1 className="mt-3 flex flex-col items-center leading-none">
          <span className="font-script text-6xl text-gold-soft sm:text-7xl md:text-8xl">
            Tardinha
          </span>
          <span className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.2em] text-cream sm:text-3xl md:text-4xl">
            Rio Solimões
          </span>
        </h1>

        {/* Gancho de venda — dá o motivo em uma linha. */}
        <p className="mt-6 max-w-md text-lg leading-snug text-cream/90 sm:text-xl">
          A melhor tarde do ano já tem data e lugar marcado. Só falta você!
        </p>

        {/* Resumo o quê/quando/onde/quanto — acima da dobra. */}
        <dl className="mt-8 grid w-full max-w-sm grid-cols-2 gap-x-3 gap-y-4 text-center sm:max-w-3xl sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-gold/20">
          {facts.map((f) => (
            <div key={f.k} className="flex flex-col px-2 py-1 sm:px-5">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
                {f.k}
              </dt>
              <dd className="mt-1 text-sm font-medium leading-snug text-cream sm:text-base">
                {f.v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-9">
          <Countdown />
        </div>

        <CTA
          href={contact.whatsappTickets}
          external
          ariaLabel="Garantir ingresso pelo WhatsApp"
          className="mt-9"
        >
          Garantir ingresso
        </CTA>
      </div>

      <ChevronDown className="absolute bottom-8 left-1/2 z-10 h-6 w-6 -translate-x-1/2 animate-bounce text-cream/50" />
    </section>
  );
}
