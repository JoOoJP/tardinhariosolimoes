type Props = {
  /** Micro-label acima do título (maiúsculas douradas). */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** "light" para fundo navy, "dark" para fundo creme. */
  variant?: "light" | "dark";
  align?: "center" | "left";
  /** "climax" aumenta o título (Hero/Ingressos); "default" nas demais. */
  size?: "default" | "climax";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  variant = "dark",
  align = "center",
  size = "default",
}: Props) {
  const titleColor = variant === "light" ? "text-cream" : "text-navy";
  const subColor = variant === "light" ? "text-cream/80" : "text-navy/70";
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  // Escala modular (~1.25): eyebrow xs -> título 3xl/5xl -> subtítulo lg -> corpo base.
  // Climax (Hero/Ingressos) sobe um degrau para destacar o momento de decisão.
  const titleSize =
    size === "climax"
      ? "text-[2.5rem] sm:text-5xl md:text-6xl"
      : "text-[2rem] sm:text-4xl md:text-5xl";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow ? (
        <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:text-sm">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`mt-4 font-display font-bold uppercase leading-[1.05] tracking-wide ${titleSize} ${titleColor}`}>
        {title}
      </h2>
      <span className="mt-5 block h-px w-16 bg-gold" />
      {subtitle ? (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${subColor}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
