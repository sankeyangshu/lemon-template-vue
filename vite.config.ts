/*
 * @Description: vite配置文件
 * @Author: 三棵杨树
 * @Date: 2023-04-02 20:15:58
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2023-04-02 21:03:45
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

function resolve(dir: string) {
  return path.join(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      '@': resolve('src'), // 设置 `@` 指向 `src` 目录
    },
  },
});
