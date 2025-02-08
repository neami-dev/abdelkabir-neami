import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from "vite-plugin-sitemap";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemap({
    hostname: "https://portfolio-web-gn60.onrender.com", // Change this to your domain
  }),],
  preview: {
    // port: 8080,
    strictPort: true,
   },
   server: {
    // port: 8080,
    strictPort: true,
    host: true,
    // origin: "http://0.0.0.0:8080",
   },
})
