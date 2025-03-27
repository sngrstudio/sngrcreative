// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sngrcreative.xyz',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    responsiveImages: true
  }
})
