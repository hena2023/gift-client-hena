import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/google": {
        target: "https://gift-server-hena.onrender.com",
        changeOrigin: true,
      },
      "/api/users": {
        target: "https://gift-server-hena.onrender.com",
        changeOrigin: true,
      },
      "/api/people": {
        target: "https://gift-server-hena.onrender.com",
        changeOrigin: true,
      },
      "/api/gifts": {
        target: "https://gift-server-hena.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
