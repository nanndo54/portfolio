import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@img': path.resolve(__dirname, '/img')
    }
  },
  base: '/portfolio/',
  build: {
    outDir: 'docs'
  }
})
