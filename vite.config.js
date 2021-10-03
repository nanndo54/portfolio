import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: 'docs'
  },
  sourcemap: true,
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './img')
    }
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const index = css.indexOf(`.${name}`)
        const line = css.substr(0, index).split(/[\r\n]/).length

        const file = path.basename(filename).split('.')[0]

        return `${file}_${name}_${line}`
      }
    }
  }
})
