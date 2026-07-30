"use client";

import { useEffect, useState } from "react";
import { Ticket } from "lucide-react";
import { contact } from "@/lib/config";

// Só aparece depois do hero — no topo o próprio hero já traz o CTA.
export function FloatingTicketButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={contact.whatsappTickets}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Ticket className="h-4 w-4" />
      Garantir ingresso
    </a>
  );
}
