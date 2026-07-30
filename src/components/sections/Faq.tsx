import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/content";

export function Faq() {
  return (
    <section id="faq" className="bg-navy px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="flex flex-col items-center">
          <SectionHeading eyebrow="Dúvidas" title="Perguntas Frequentes" variant="light" />
        </Reveal>

        <Reveal delay={100} className="mt-14 flex flex-col gap-4">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-5 [&_svg]:open:rotate-180"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-cream">
                {question}
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
