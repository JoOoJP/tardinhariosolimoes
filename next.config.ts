import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projeto vive dentro do workspace Joao (que tem outro lockfile);
  // fixa a raiz aqui para o Turbopack não subir de diretório.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
