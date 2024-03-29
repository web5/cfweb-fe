/*
 * @Date: 2022-03-31 00:51:47
 * @LastEditors: geekwen
 * @LastEditTime: 2022-04-01 00:47:27
 * @FilePath: /cfweb-fe/src/entry-server.ts
 * @Description: Description
 */
import { createSSRApp } from 'vue';
import { createMemoryHistory } from 'vue-router';
import App from './App.vue';
import createRouter from './router';
import store from './store';

const router = createRouter(createMemoryHistory(process.env.BASE_URL));

export default function vueapp() {
  const app = createSSRApp(App).use(store).use(router);
  return {
    app,
    router,
    store,
  };
}
