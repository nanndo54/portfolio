import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import autoprefixer from 'autoprefixer'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react(), ssr({ prerender: true })],
  resolve: {
    alias: {
      '#assets': path.resolve(__dirname, './assets'),
      '#': path.resolve(__dirname, './src'),
      '#components': path.resolve(__dirname, './src/components'),
      '#constants': path.resolve(__dirname, './src/constants'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#styles': path.resolve(__dirname, './src/styles'),
      '#svg': path.resolve(__dirname, './src/svg')
    }
  },
  css: {
    modules:
      mode === 'development'
        ? {
            generateScopedName: (name, filename, css) => {
              const index = css.indexOf(`.${name}`)
              const line = css.substr(0, index).split(/[\r\n]/).length
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
