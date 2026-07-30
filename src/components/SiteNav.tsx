"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { event, contact } from "@/lib/config";

const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#atracoes", label: "Atrações" },
  { href: "#patrocinadores", label: "Patrocinadores" },
  { href: "#ingressos", label: "Ingressos" },
  { href: "#local", label: "Local" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: marca a seção visível como ativa na nav.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Menu mobile: foca o 1º link ao abrir, Escape fecha, foco preso dentro,
  // e o foco volta ao botão ao fechar (a11y).
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const focusables = menu
      ? Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      : [];
    focusables[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const solid = scrolled || open;

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-navy/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" aria-label={`${event.name}, ir ao topo`} className="flex items-center gap-3">
          <Image
            src="/logo/tardinha-badge.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 rounded-full ring-1 ring-gold/40"
          />
          <span className="hidden font-display text-sm uppercase tracking-widest text-cream sm:block">
            Rio Solimões
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-xs font-semibold uppercase tracking-wide transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-cream/80"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={contact.whatsappTickets}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-wide text-navy transition-transform hover:scale-105"
          >
            Ingressos
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="border-t border-white/10 bg-navy/95 backdrop-blur md:hidden"
      >
        <div className="flex flex-col px-6 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="border-b border-white/5 py-3 text-sm font-semibold uppercase tracking-wide text-cream/85 last:border-0 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
