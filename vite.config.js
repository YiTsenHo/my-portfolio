import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',  // 添加這行，需要對應你的 GitHub repo 名稱
  plugins: [react()],
})
