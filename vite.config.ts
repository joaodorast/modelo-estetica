import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// O Nitro detecta a plataforma de deploy automaticamente (ex.: Vercel);
// localmente gera um servidor Node em .output/.
export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redireciona a entrada de servidor do TanStack Start para src/server.ts (wrapper de erros de SSR).
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
    ...(command === "build" ? [nitro()] : []),
    viteReact(),
  ],
  server: { port: 8080 },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
    dedupe: ["react", "react-dom"],
  },
}));
