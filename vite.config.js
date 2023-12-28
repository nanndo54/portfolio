import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import svgr from 'vite-plugin-svgr'
import autoprefixer from 'autoprefixer'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    vike({ prerender: true }),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx']
      }
    })
  ],
  resolve: {
    alias: {
      '#': '/src'
    }
  },
  publicDir: 'src/public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`
      }
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
