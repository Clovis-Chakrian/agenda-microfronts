import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 8080
  },
  server: {
    port: 8080
  },
  plugins: [
    vue(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 8001,
      spaEntryPoints: 'src/spa.js'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
