import type { Metadata } from "next";
import { Montserrat, Cinzel, Great_Vibes } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import "./globals.css";
import { event, siteUrl } from "@/lib/config";
import { Analytics } from "@/components/Analytics";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const description = `Dia 7 de novembro, a partir das 12h, no Clube Sírio Libanês, em Manaus. Uma tarde de samba, feijoada e reencontro da família maçônica amazonense. Garanta seu ingresso.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${event.name} · ${event.tagline}`,
  description,
  keywords: [
    "Tardinha Rio Solimões",
    "Rio Solimões nº 24",
    "evento maçônico Amazonas",
    "feijoada Manaus",
    "Clube Sírio Libanês",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: event.name,
    title: `${event.name} · ${event.date}`,
    description,
    // opengraph-image.tsx gera a imagem automaticamente.
  },
  twitter: {
    card: "summary_large_image",
    title: `${event.name} · ${event.date}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${cinzel.variable} ${greatVibes.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
