import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project site on GitHub Pages is served from /<repo>/, not from the domain root.
  base: process.env.GITHUB_PAGES === 'true' ? '/roadeye/' : '/',
})
