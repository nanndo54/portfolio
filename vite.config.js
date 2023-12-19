import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import svgr from '@svgr/rollup'
import autoprefixer from 'autoprefixer'
import path from 'path'

export default defineConfig(({ mode }) => ({
  base: '/portfolio/',
  plugins: [react(), vike({ prerender: true }), svgr({ exportType: 'named' })],
  resolve: {
    alias: {
      '#': '/src'
      // '#': path.resolve(__dirname, './src')
    }
  },
  publicDir: 'src/public',
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
