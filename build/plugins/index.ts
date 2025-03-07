import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import ViteRestart from 'vite-plugin-restart';
import { configCompressPlugin } from './compress';
import { configVueI18nPlugin } from './i18nPlugin';
import { configSvgIconsPlugin } from './svgPlugin';
import type { PluginOption } from 'vite';

/**
 * 配置 vite 插件
 * @param {ViteEnv} viteEnv vite 环境变量配置文件键值队 object
 * @param {boolean} isBuild 是否是打包模式
 * @returns vitePlugins[]
 */
export const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const { VITE_USE_MOCK } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),

    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [VantResolver()],
      types: [],
    }),

    // 配置i18n
    configVueI18nPlugin(),

    UnoCSS(),

    // 通过这个插件，在修改vite.config.ts文件则不需要重新运行也生效配置
    ViteRestart({
      restart: ['vite.config.ts'],
    }),
  ];

  // 是否开启 mock 服务  https://github.com/pengzhanbo/vite-plugin-mock-dev-server
  if (VITE_USE_MOCK) {
    vitePlugins.push(mockDevServerPlugin());
  }

  vitePlugins.push(configSvgIconsPlugin(isBuild));

  if (isBuild) {
    // 创建打包压缩配置
    vitePlugins.push(configCompressPlugin(viteEnv));
  }

  return vitePlugins;
};
