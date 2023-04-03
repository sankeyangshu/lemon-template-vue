/*
 * @Description: 路由配置文件
 * @Author: 三棵杨树
 * @Date: 2023-04-03 20:13:27
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2023-04-03 20:17:47
 */

import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
  },
];

// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}
