import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      entry: "src/main.js",
      template: "index.html",
    })
  ]
})
