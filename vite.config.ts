import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@ui": path.resolve(__dirname, "./src/ui"),
      },
    },
    server: {
      proxy: {
        "/solax": {
          target: env.VITE_SOLAX_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/solax/, ""),
        },
      },
    },
  };
});
