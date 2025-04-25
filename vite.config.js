import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  root: './client',  // Point Vite to the 'client' folder as the root
  build: {
    outDir: '../dist',  // Set the build output directory to 'money-track/dist'
  },
  server: {
    open: true,  // Optionally open the browser when running the server
  },
  plugins: [
    tailwindcss(),
    react(),
  ],
})
