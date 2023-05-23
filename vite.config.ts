import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue';
import path from 'path';

function resolve(dir: string) {
  return path.join(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //  使用 svg 图标
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': resolve('src'), // 设置 `@` 指向 `src` 目录
    },
  },
});
