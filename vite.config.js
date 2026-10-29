import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

/* Injects title, description, canonical, OG/Twitter cards and schema.org
 * JSON-LD straight from src/data/profile.js, so the facts live in exactly one
 * place. These must be static in the HTML — LinkedIn, Slack, Discord and
 * iMessage scrapers do not execute JavaScript. */
function seoHead() {
  const load = async (relative, bust) => {
    const url = pathToFileURL(path.resolve(rootDir, relative)).href
    return import(bust ? `${url}?t=${Date.now()}` : url)
  }

  return {
    name: 'portfolio-seo-head',
    async transformIndexHtml() {
      // Node caches ESM modules, so dev needs a cache-bust or edits to
      // profile.js wouldn't reach the <head> until a server restart.
      const dev = process.env.NODE_ENV !== 'production'
      const { identity, seo } = await load('src/data/profile.js', dev)
      const derived = await load('src/data/derived.js', dev)

      const title = derived.pageTitle
      const ogImage = derived.absoluteUrl(seo.ogImage)
      const meta = (attrs) => ({ tag: 'meta', attrs, injectTo: 'head' })

      return [
        { tag: 'title', children: title, injectTo: 'head-prepend' },
        meta({ name: 'description', content: seo.description }),
        meta({ name: 'author', content: identity.fullName }),
        meta({ name: 'theme-color', content: seo.themeColor }),
        {
          tag: 'link',
          attrs: { rel: 'canonical', href: seo.siteUrl },
          injectTo: 'head',
        },

        meta({ property: 'og:type', content: 'profile' }),
        meta({ property: 'og:site_name', content: identity.name }),
        meta({ property: 'og:title', content: title }),
        meta({ property: 'og:description', content: seo.description }),
        meta({ property: 'og:url', content: seo.siteUrl }),
        meta({ property: 'og:locale', content: seo.locale }),
        meta({ property: 'og:image', content: ogImage }),
        meta({ property: 'og:image:width', content: '1200' }),
        meta({ property: 'og:image:height', content: '630' }),
        meta({ property: 'og:image:alt', content: seo.ogImageAlt }),

        meta({ name: 'twitter:card', content: 'summary_large_image' }),
        meta({ name: 'twitter:title', content: title }),
        meta({ name: 'twitter:description', content: seo.description }),
        meta({ name: 'twitter:image', content: ogImage }),
        ...(seo.twitterHandle
          ? [meta({ name: 'twitter:creator', content: seo.twitterHandle })]
          : []),

        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(derived.personJsonLd()),
          injectTo: 'head',
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), tailwindcss(), seoHead()]

  // Bundle treemap, only when running `npm run analyze`
  if (mode === 'analyze') {
    const { visualizer } = await import('rollup-plugin-visualizer')
    plugins.push(visualizer({ open: true }))
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(rootDir, './src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Rolldown (Vite 8) replaces the old object-form `manualChunks`
          codeSplitting: {
            groups: [
              {
                name: 'vendor',
                test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              },
            ],
          },
        },
      },
    },
    server: {
      hmr: { overlay: false },
      open: false,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  }
})
