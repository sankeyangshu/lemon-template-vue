/*
 * @Description: 项目入口文件
 * @Author: 三棵杨树
 * @Date: 2023-04-02 20:15:58
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2023-04-03 20:18:30
 */
import { createApp } from 'vue';
import { setupRouter } from '@/router';
import App from './App.vue';
import 'normalize.css'; // 统一各个浏览器之间的显示差异
import './styles/index.scss'; // 全局css

function bootstrap() {
  // 创建实例
  const app = createApp(App);

  // 配置路由
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
