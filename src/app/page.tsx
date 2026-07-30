import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Attractions } from "@/components/sections/Attractions";
import { Fraternity } from "@/components/sections/Fraternity";
import { LodgeHistory } from "@/components/sections/LodgeHistory";
import { Sponsors } from "@/components/sections/Sponsors";
import { Gallery } from "@/components/sections/Gallery";
import { Tickets } from "@/components/sections/Tickets";
import { Faq } from "@/components/sections/Faq";
import { Location } from "@/components/sections/Location";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { FloatingTicketButton } from "@/components/FloatingTicketButton";

export default function Home() {
  return (
    <>
      <a
        href="#experiencia"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
      >
        Pular para o conteúdo
      </a>
      <main id="top">
        <SiteNav />
        <Hero />
        <About />
        <Experience />
        <Sponsors />
        <Attractions />
        <Fraternity />
        <LodgeHistory />
        <Gallery />
        <Tickets />
        <Faq />
        <Location />
        <SiteFooter />
        <FloatingTicketButton />
      </main>
    </>
  );
}
