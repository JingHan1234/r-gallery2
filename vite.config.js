import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: '/r-gallery2/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'main/index.html'),
        week9: resolve(root, 'week9/index.html'),
        week10: resolve(root, 'week10/index.html'),
        week12: resolve(root, 'week12/index.html'),
      }
    }
  }
})
