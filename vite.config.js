import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()]
})
