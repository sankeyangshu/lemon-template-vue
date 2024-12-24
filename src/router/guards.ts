import NProgress from 'nprogress';
import { useRouteStore } from '@/store/modules/route';
import type { Router } from 'vue-router';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, parent: '#app' });

// const whiteList = ['/login'];

export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, _from, next) => {
    NProgress.start();

    // 设置标题
    if (typeof to.meta.title === 'string') {
      document.title = to.meta.title || import.meta.env.VITE_APP_TITLE;
    }

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
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
