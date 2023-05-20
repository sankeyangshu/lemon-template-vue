import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import App from './App.vue';
import 'normalize.css'; // 统一各个浏览器之间的显示差异
import './styles/index.scss'; // 全局css

function bootstrap() {
  // 创建实例
  const app = createApp(App);

  // 配置 store
  setupStore(app);

  // 配置路由
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
