import { defineConfig, squooshImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
    assetsInclude: "**/*.lottie",
  },
});
