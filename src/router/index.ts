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
        meta: { title: '登录', i18n: 'login' },
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Login/register.vue'),
        meta: { title: '注册', i18n: 'register' },
      },
      {
        path: '/forgotPassword',
        name: 'ForgotPassword',
        component: () => import('@/views/Login/forgotPassword.vue'),
        meta: { title: '忘记密码', i18n: 'forgotPassword' },
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页', icon: 'home-o', iconType: 'vant', tabBar: true, i18n: 'home' },
      },
      {
        path: '/example',
        name: 'Example',
        component: () => import('@/views/Example/index.vue'),
        meta: { title: '示例', icon: 'gem-o', iconType: 'vant', tabBar: true, i18n: 'example' },
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
          i18n: 'mine',
        },
      },
      {
        path: '/themeSetting',
        name: 'ThemeSetting',
        component: () => import('@/views/ThemeSetting/index.vue'),
        meta: { title: '主题设置', i18n: 'themeSetting' },
      },
    ],
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Layout,
    children: [
      {
        path: '/mock',
        name: 'MockDemo',
        component: () => import('@/views/Example/mockDemo.vue'),
        meta: { title: 'Mock 指南', i18n: 'mock' },
      },
      {
        path: '/echarts',
        name: 'EchartsDemo',
        component: () => import('@/views/Example/echartsDemo.vue'),
        meta: { title: 'Echarts 演示', i18n: 'echarts' },
      },
      {
        path: '/icon',
        name: 'IconDemo',
        component: () => import('@/views/Example/iconDemo.vue'),
        meta: { title: 'Icon 示例', i18n: 'icon' },
      },
      {
        path: '/keepAlive',
        name: 'KeepAliveDemo',
        component: () => import('@/views/Example/keepAliveDemo.vue'),
        meta: { title: 'KeepAlive 演示', keepAlive: true, i18n: 'keepAlive' },
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
