import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // 確保這裡的 base 與你的 GitHub repository 名稱一致
  build: {
    outDir: 'dist'
  },
  plugins: [react()]
})
