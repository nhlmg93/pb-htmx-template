// vite.config.ts
import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";

export default defineConfig({
  base: "/dashboard",
  plugins: [
    deno(),
  ],
  build: {
    outDir: "pb_public/dashboard/",
    emptyOutDir: true,
    assetsDir: "./",
  },
});
