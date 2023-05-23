import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import App from './App.vue';
import 'virtual:svg-icons-register'; // svg-icons注册导入
import setupSvgIcons from '@/plugins/icons'; // 导入svg图标组件
import './styles/index.scss'; // 全局css

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
