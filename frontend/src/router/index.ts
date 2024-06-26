import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
  }
}

const createHistory = createWebHistory;

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  // Leave this as is and make changes in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  history: createHistory(process.env.VUE_ROUTER_BASE),
});

export default Router;
