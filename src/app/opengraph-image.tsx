import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { event } from "@/lib/config";

export const runtime = "nodejs";
export const alt = `${event.name} · ${event.date}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview de compartilhamento (WhatsApp / redes). Card de marca gerado no build.
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/og/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "64px",
          color: "#f6ebd3",
          background:
            "linear-gradient(160deg, #04121f 0%, #07223b 42%, #3a1e12 72%, #f28c28 135%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={230} height={230} alt="" style={{ borderRadius: "50%" }} />
        <div
          style={{
            marginTop: 34,
            fontSize: 30,
            letterSpacing: 8,
            color: "#d9a441",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Rio Solimões nº 24
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          A Tardinha
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "#e7c580",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Rio Solimões
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#f6ebd3" }}>
          {`${event.date} · ${event.time}`}
        </div>
        <div style={{ marginTop: 6, fontSize: 24, color: "rgba(246,235,211,0.75)" }}>
          {`${event.venueName} · ${event.city}`}
        </div>
      </div>
    ),
    size,
  );
}
