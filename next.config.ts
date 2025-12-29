import type { NextConfig } from "next";
import { resolve } from "path";

// Obtém o diretório absoluto do projeto newshub
const projectRoot = resolve(__dirname || process.cwd());

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
