import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import UnoCSS from 'unocss/vite';

import { viteMockServe } from 'vite-plugin-mock';

// svg-icon插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
export default defineConfig({
  plugins: [
    vue(),
    /** UnoCSS */
    UnoCSS(),
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [path.resolve('./src/icons/svg')],
      // 执行icon name的格式
      symbolId: 'icon-[name]'
    }),
    viteMockServe({
      supportTs: false,
      logger: true,
      enable: false,
      mockPath: './src/mock/'
    })
  ],
  base: './', //打包路径
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    host: true,
    port: 8080, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
