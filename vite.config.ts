import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/nyousfi-collab/',   // VERY IMPORTANT for GitHub Pages
  plugins: [react()],
})
