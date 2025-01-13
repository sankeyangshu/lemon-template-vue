import path from 'node:path';
import process from 'node:process';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

/**
 * 配置i18n国际化 vite 插件
 */
export function configVueI18nPlugin() {
  // 配置i18n
  return VueI18nPlugin({
    // locale messages resource pre-compile option (指定需要导入的语言包文件夹)
    include: path.resolve(process.cwd(), 'src/locales/modules/**'),
  });
}
