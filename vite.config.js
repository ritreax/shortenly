import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Components/layout": path.resolve(__dirname, "src/components/layout"),
      "@Components/icons": path.resolve(__dirname, "src/components/icons"),
      "@Components/shortener-panel-section": path.resolve(
        __dirname,
        "src/components/shortener-panel-section"
      ),
      "@Components/cards": path.resolve(__dirname, "src/components/cards"),
      "@Components/forms": path.resolve(__dirname, "src/components/forms"),
    },
  },
});
