import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
      manifest: true,
      rollupOptions: {
      input: './src/main.js',
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 500
    }
  }
})