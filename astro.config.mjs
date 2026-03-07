import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://climenhagamusicacademy.com',
  base: "/",
  output: "server",
  adapter: cloudflare()
});