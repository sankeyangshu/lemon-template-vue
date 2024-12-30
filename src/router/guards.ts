import NProgress from 'nprogress';
import { LOGIN_URL } from '@/config';
import { useRouteStore } from '@/store/modules/route';
import { useUserStore } from '@/store/modules/user';
import type { Router } from 'vue-router';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, parent: '#app' });

// 白名单
const whiteList = ['/login', '/register', '/forgotPassword'];

export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, _from, next) => {
    NProgress.start();

    // 设置标题
    if (typeof to.meta.title === 'string') {
      document.title = to.meta.title || import.meta.env.VITE_APP_TITLE;
    }

    // 获取用户信息 store
    const userStore = useUserStore();
    // 获取用户是否登录状态，确定用户是否已登录过，存在Token
    const hasToken = userStore.token;

    if (hasToken) {
      // 用户登录
      if (to.path === LOGIN_URL) {
        // 如果已登录，重定向到主页
        next({ path: '/' });
      } else {
        const routeStore = useRouteStore();
        if (!routeStore.allRouters.length) {
          const accessRoutes = await routeStore.generateRoutes();
          // 动态添加访问路由表
          accessRoutes.forEach((item) => router.addRoute(item));

          // 这里相当于push到一个页面 不在进入路由拦截
          next({ ...to, replace: true });
        } else {
          next();
        }
      }
    } else {
      // 用户未登录
      if (whiteList.includes(to.path)) {
        // 在免登录白名单中，直接进入
        next();
      } else {
        // 没有访问权限的其他页面将重定向到登录页面
        next(`/login?redirect=${to.path}`);
      }
    }
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
