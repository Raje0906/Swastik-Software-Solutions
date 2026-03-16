import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '.trycloudflare.com',
      '.ngrok.io',
      '.ngrok-free.app',
      'all',
    ],
  },
})
