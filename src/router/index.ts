/*
 * @Date: 2022-03-31 08:26:14
 * @LastEditors: geekwen
 * @LastEditTime: 2022-04-02 02:13:46
 * @FilePath: /cfweb-fe/src/router/index.ts
 * @Description: Description
 */
import {
  createRouter,
  RouteRecordRaw,
  RouterHistory,
  Router,
} from 'vue-router';
import Portal from '../views/Portal.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Portal,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default function router(history: RouterHistory): Router {
  return createRouter({
    history,
    routes,
  });
}
