import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.jsx',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        dir: './vite-dist',
      }
    },
  },
})