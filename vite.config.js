import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// tailwind
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // add this
  ],
})