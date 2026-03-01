import path from "path" // Ajoute cet import tout en haut
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-React/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})