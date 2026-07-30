"use client";

import { useEffect, useState } from "react";
import { event } from "@/lib/config";

type Parts = { dias: number; horas: number; min: number; seg: number };

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
  };
}

export function Countdown() {
  const target = new Date(event.dateISO).getTime();
  // null no 1º render evita mismatch de hidratação (server != client no relógio).
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    // Relógio só existe no cliente — set pós-montagem evita mismatch de hidratação.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number][] = parts
    ? [
        ["dias", parts.dias],
        ["horas", parts.horas],
        ["min", parts.min],
        ["seg", parts.seg],
      ]
    : [
        ["dias", 0],
        ["horas", 0],
        ["min", 0],
        ["seg", 0],
      ];

  return (
    <div
      className="flex items-center gap-3 sm:gap-4"
      aria-label={`Contagem regressiva para ${event.date}`}
    >
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="flex min-w-[64px] flex-col items-center rounded-2xl border border-gold/25 bg-white/5 px-3 py-3 backdrop-blur-sm sm:min-w-[76px]"
        >
          <span className="font-display text-2xl font-bold tabular-nums text-cream sm:text-3xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gold/80">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
