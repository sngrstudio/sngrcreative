// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngrcreative.pages.dev',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [react(), ...(process.env.KEYSTATIC ? [keystatic()] : [])],
  vite: {
    resolve: {
      alias: import.meta.env.PROD
        ? {
            'react-dom/server': 'react-dom/server.edge'
          }
        : {}
    }
  }
})
