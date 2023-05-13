import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*"],
      },
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "/",
      },
      manifest: {
        name: "Naru Guatemala",
        short_name: "Naru",
        description: "Naru data entry",
        theme_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
