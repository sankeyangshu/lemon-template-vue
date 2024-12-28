import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
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
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),

    // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    mockDevServerPlugin(),

    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [VantResolver()],
      types: [],
    }),
    UnoCSS(),
  ];

  vitePlugins.push(configSvgIconsPlugin(isBuild));

  if (isBuild) {
    // 创建打包压缩配置
    vitePlugins.push(configCompressPlugin(viteEnv));
  }

  return vitePlugins;
};
