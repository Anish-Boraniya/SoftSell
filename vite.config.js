import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  base: "/",
  build: {
    // Output directory
    outDir: "dist",
    // Generate source maps for production (can be set to false for smaller builds)
    sourcemap: false,
    // Configure rollup options if needed
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
