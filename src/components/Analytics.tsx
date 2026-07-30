import Script from "next/script";

// Analytics leve e opcional (Plausible). Só carrega se a env estiver definida;
// sem ela, não renderiza nada e nenhum script externo é chamado.
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
