import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: ['vue', 'vue/macros', 'vue-router'],
      dirs: ['src/api', 'src/utils', 'src/constant'],
      dts: true
    }),
    Components({
      resolvers: [VantResolver()],
      dirs: ['src/components'],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
