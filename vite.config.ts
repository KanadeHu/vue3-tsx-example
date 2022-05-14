import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import proxy from './config/proxy'
import config from './config/devServer'
import { resolve } from 'path'
import parseHtml from 'vite-plugin-parse-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), parseHtml({
    inject: {
      data: {
        title: 'vue3空白模板'
      }
    },
    minifyOpt: {
      isMinify: false
    }
  })],
  resolve: {
    alias: {
      "component": resolve(__dirname, './src/component'),
      'tool': resolve(__dirname, './src/tool'),
      'src': resolve(__dirname, './src'),
      'page': resolve(__dirname, './src/page'),
    },
    extensions: ['.js', '.json', '.ts', 'tsx', '.vue']
  },
  server: {
    proxy,
    ...config
  }
})
