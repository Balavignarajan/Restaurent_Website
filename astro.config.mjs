import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static', // <-- Add this line
  integrations: [react(), tailwind()],
});
