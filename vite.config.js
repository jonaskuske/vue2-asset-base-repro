import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [vue()],
  server: { port: 5179, strictPort: true, origin: "http://localhost:5179" },
});
