/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// import nodePolyfills from "vite-plugin-node-polyfills"; // ✅ Use lowercase import

export default defineConfig({
  plugins: [tailwindcss(), react()], // ✅ Use `nodePolyfills()` instead of `NodePolyfills()`
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: "window", 
  },
});
