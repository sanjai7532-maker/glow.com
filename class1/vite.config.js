// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/glow.com/',
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../'),
    emptyOutDir: false,
  }
})