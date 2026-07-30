import { ArrowRight, type LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "tertiary";
type Tone = "onLight" | "onDark";

// CTA único do site. Hierarquia clara:
// - primary  = a COMPRA (sólido dourado). Só a ação de ingresso usa.
// - secondary = ações de apoio (contorno). Ex.: patrocínio, mapa.
// - tertiary = link+seta discreto (micro-CTAs no fim de seção).
export function CTA({
  href,
  children,
  variant = "primary",
  tone = "onLight",
  external = false,
  icon: Icon,
  showArrow = false,
  ariaLabel,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  tone?: Tone;
  external?: boolean;
  icon?: LucideIcon;
  showArrow?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wide transition-all";

  const styles: Record<Variant, string> = {
    primary:
      "rounded-full bg-gold px-9 py-4 text-sm text-navy shadow-lg shadow-gold/20 hover:scale-[1.03]",
    secondary:
      tone === "onDark"
        ? "rounded-full border border-cream/30 px-8 py-3.5 text-sm text-cream hover:border-gold hover:text-gold"
        : "rounded-full border border-navy/25 px-8 py-3.5 text-sm text-navy hover:border-gold hover:text-gold",
    tertiary:
      tone === "onDark"
        ? "text-sm tracking-widest text-gold hover:text-gold-soft"
        : "text-sm tracking-widest text-navy hover:text-navy/70",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${styles[variant]} ${className}`}
      {...externalProps}
    >
      {Icon ? <Icon className="h-5 w-5" /> : null}
      {children}
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      ) : null}
    </a>
  );
}
