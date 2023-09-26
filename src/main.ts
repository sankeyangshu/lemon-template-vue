import { createApp } from 'vue';
import setupSvgIcons from '@/plugins/icons'; // 导入svg图标组件
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import App from './App.vue';
import './styles/index.scss'; // 全局css
import 'virtual:svg-icons-register'; // svg-icons注册导入

function bootstrap() {
  // 创建实例
  const app = createApp(App);

  // 配置 store
  setupStore(app);

  // 配置路由
  setupRouter(app);

  // 导入svg图标
  setupSvgIcons(app);

  app.mount('#app');
}

bootstrap();
