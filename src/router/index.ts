import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import { createRouterGuard } from './guards';
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

/**
 * 异步路由组件
 */
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
        meta: { title: '登录' },
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页', icon: 'home-o', iconType: 'vant', tabBar: true },
      },
      {
        path: '/example',
        name: 'Example',
        component: () => import('@/views/Example/index.vue'),
        meta: { title: '示例', icon: 'gem-o', iconType: 'vant', tabBar: true },
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/Mine/index.vue'),
        meta: {
          title: '我的',
          icon: 'contact-o',
          iconType: 'vant',
          tabBar: true,
          hiddenNavBar: true,
        },
      },
      {
        path: '/themeSetting',
        name: 'ThemeSetting',
        component: () => import('@/views/ThemeSetting/index.vue'),
        meta: { title: '主题设置' },
      },
    ],
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Layout,
    redirect: '/mock',
    children: [
      {
        path: '/mock',
        name: 'MockDemo',
        component: () => import('@/views/Example/MockDemo.vue'),
        meta: { title: 'Mock 指南' },
      },
      {
        path: '/echarts',
        name: 'EchartsDemo',
        component: () => import('@/views/Example/EchartsDemo.vue'),
        meta: { title: 'Echarts 演示' },
      },
      {
        path: '/icon',
        name: 'IconDemo',
        component: () => import('@/views/Example/IconDemo.vue'),
        meta: { title: 'Icon 示例' },
      },
      {
        path: '/keepAlive',
        name: 'KeepAliveDemo',
        component: () => import('@/views/Example/KeepAliveDemo.vue'),
        meta: { title: 'KeepAlive 演示', keepAlive: true },
      },
    ],
  },
];

/**
 * 公共路由
 */
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/ErrorPages/404.vue'),
  },
];

/**
 * notFoundRouter(找不到路由)
 */
export const notFoundRouter = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: '/404',
};

// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes],
});

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
  createRouterGuard(router);
}
