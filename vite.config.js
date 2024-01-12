import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import svgr from 'vite-plugin-svgr'
import sitemap from 'vite-plugin-sitemap'

import autoprefixer from 'autoprefixer'
import path from 'path'

const hostname = 'https://nanndo54.dev'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    vike({ prerender: true }),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx']
      }
    }),
    sitemap({
      hostname,
      extensions: ['html', 'pdf'],
      outDir: 'dist/client'
    })
  ],
  resolve: {
    alias: {
      '#': '/src'
    }
  },
  css: {
    modules:
      mode === 'development'
        ? {
            generateScopedName: (name, filename, css) => {
              const index = css.indexOf(`.${name}`)
              const line = css.slice(0, index).split(/[\r\n]/).length
              const file = path.basename(filename).split('.')[0]
              return `${file}_${name}_${line}`
            }
          }
        : {},
    postcss: {
      plugins: [autoprefixer]
    }
  }
}))
