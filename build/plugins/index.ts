import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { configCompressPlugin } from './compress';
import { configSvgIconsPlugin } from './svgPlugin';
import type { PluginOption } from 'vite';

/**
 * 配置 vite 插件
 * @param {ViteEnv} viteEnv vite 环境变量配置文件键值队 object
 * @param {boolean} isBuild 是否是打包模式
 * @returns vitePlugins[]
 */
export const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), UnoCSS()];

  vitePlugins.push(configSvgIconsPlugin(isBuild));

  if (isBuild) {
    // 创建打包压缩配置
    vitePlugins.push(configCompressPlugin(viteEnv));
  }

  return vitePlugins;
};