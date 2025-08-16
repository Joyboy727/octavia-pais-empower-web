import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react'
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react/jsx-runtime": "react/jsx-runtime.js",
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js"
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime']
  },
  build: {
    rollupOptions: {
      external: [],
    }
  }
}));
