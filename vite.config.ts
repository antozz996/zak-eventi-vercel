import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    cssCodeSplit: true,
    sourcemap: false,
    // Usato dal prerender per indicare a ogni pagina il proprio chunk; non viene pubblicato.
    manifest: true,
    // Evita una richiesta di rete per ogni icona o componente di poche centinaia di byte.
    rollupOptions: { output: { experimentalMinChunkSize: 6000 } },
  },
});
