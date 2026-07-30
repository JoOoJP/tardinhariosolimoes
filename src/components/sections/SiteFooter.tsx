import Image from "next/image";
import { Phone, Camera, Mail, MapPin } from "lucide-react";
import { event, contact } from "@/lib/config";

const channels = [
  { icon: Phone, label: "WhatsApp", href: contact.whatsappOrg },
  { icon: Camera, label: contact.instagramHandle, href: contact.instagram },
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: event.venue, href: undefined },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep px-6 pb-12 pt-20">
      <div className="mx-auto max-w-5xl">
        {/* Canais de contato */}
        <div id="contato" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, label, href }) => {
            const inner = (
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-7 text-center transition-colors hover:bg-white/10">
                <Icon className="h-6 w-6 text-gold" />
                <span className="text-sm text-cream/90">{label}</span>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        {/* Institucional */}
        <div className="mt-16 flex flex-col items-center gap-5 border-t border-white/10 pt-12 text-center">
          <div className="flex items-center gap-5">
            <Image
              src="/logo/rio-solimoes-24.png"
              alt={`Loja ${event.lodgeShort}`}
              width={110}
              height={110}
              className="w-16 drop-shadow-lg"
            />
            <Image
              src="/logo/glomam-selected-final.png"
              alt="GLOMAM"
              width={90}
              height={90}
              unoptimized
              className="h-auto w-20 drop-shadow-lg"
            />
          </div>
          <p className="font-display text-xl font-semibold uppercase tracking-[0.15em] text-gold">
            {event.slogan}
          </p>
          <p className="max-w-xl text-sm text-cream/70">
            Uma realização da família Rio Solimões nº 24, unindo pessoas e promovendo o bem.
          </p>
          <p className="mt-2 text-xs text-cream/55">
            © 2026 GBLS {event.lodgeShort} · {event.name}
          </p>
          <a
            href="https://wa.me/5541991014546?text=Ol%C3%A1%2C%20Jo%C3%A3o!%20Vi%20que%20voc%C3%AA%20desenvolveu%20o%20site%20da%20Tardinha%20Rio%20Solim%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cream/45 transition-colors hover:text-gold focus-visible:text-gold"
            aria-label="Desenvolvido por João Pombo, entrar em contato pelo WhatsApp"
          >
            Desenvolvido por João Pombo ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
