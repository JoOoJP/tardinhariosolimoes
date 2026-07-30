# Tardinha Rio Solimões

![Identidade visual da Tardinha Rio Solimões](./public/art/kit-oficial.webp)

Landing page oficial de um evento beneficente, criada para apresentar a
experiência, informar o público e converter visitas em vendas de ingressos e
contatos de patrocínio.

[Acessar o site](https://tardinhariosolimões.com)

## O projeto

O site reúne programação, atrações, localização, patrocinadores e chamadas para
ação em uma experiência mobile-first alinhada à identidade visual do evento.
Os principais caminhos levam o visitante diretamente ao WhatsApp com mensagens
contextuais para ingresso ou patrocínio.

## Destaques

- Landing page responsiva e orientada à conversão.
- Identidade visual aplicada a componentes reutilizáveis.
- Integração com WhatsApp para ingressos e oportunidades de patrocínio.
- Área de patrocinadores com variações de marca para fundos claros e escuros.
- Mapa incorporado e atalho para navegação.
- SEO técnico com metadata, Open Graph, sitemap e robots.
- Analytics com foco em privacidade por meio do Plausible.
- Otimização de imagens e fontes com recursos nativos do Next.js.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Plausible Analytics
- Vercel Analytics

## Estrutura

```text
src/
├── app/                 # página, layout e metadados
├── components/sections/ # seções da landing page
├── data/                # conteúdo estruturado
└── lib/                 # configuração e URLs públicas
```

## Como executar

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Verificação

```bash
npm run lint
npm run build
```

## Configuração

Use `NEXT_PUBLIC_SITE_URL` para informar o domínio público. Isso garante URLs
absolutas corretas em sitemap, Open Graph e compartilhamentos.

---

Desenvolvido por [João Pombo](https://github.com/JoOoJP).
