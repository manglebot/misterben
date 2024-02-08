import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/misterben/",
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
