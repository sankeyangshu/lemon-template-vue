import SvgIcon from '@/components/SvgIcon/index.vue'; // svg图标组件
import type { App } from 'vue';

/**
 * setup svg icon (导入svg图标)
 */
export default (app: App<Element>) => {
  app.component('SvgIcon', SvgIcon);
};
