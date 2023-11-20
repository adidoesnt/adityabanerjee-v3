import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    output: 'hybrid',
    integrations: [mdx(), tailwind(), react()],
    adapter: node({
        mode: 'standalone'
    }),
    base: "/",
    build: {
      client: './dist/client',
      server: "./dist/server"
    },
    site: 'https://www.adityabanerjee.me'
});
