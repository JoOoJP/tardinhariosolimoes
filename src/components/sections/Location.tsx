import { MapPin, Calendar, Clock, Car } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { event } from "@/lib/config";

const mapQuery = encodeURIComponent(`${event.venueName} ${event.city}`);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export function Location() {
  return (
    <section id="local" className="bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading eyebrow="Onde será" title="O Local" />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-navy p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-lg uppercase tracking-wide text-cream">
                    {event.venueName}
                  </p>
                  <p className="text-cream/70">{event.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-lg uppercase tracking-wide text-cream">Data</p>
                  <p className="text-cream/70">{event.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-lg uppercase tracking-wide text-cream">Horário</p>
                  <p className="text-cream/70">{event.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-lg uppercase tracking-wide text-cream">
                    Estrutura
                  </p>
                  <p className="text-cream/70">Estacionamento, sombra e espaço pra família toda.</p>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy transition-transform hover:scale-105"
              >
                <MapPin className="h-4 w-4" />
                Ver no mapa
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy/10 lg:aspect-auto lg:h-full">
              <iframe
                src={mapEmbedUrl}
                title={`Mapa do ${event.venueName}, ${event.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[300px] w-full border-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
