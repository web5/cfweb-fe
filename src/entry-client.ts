/*
 * @Date: 2022-03-31 00:49:09
 * @LastEditors: geekwen
 * @LastEditTime: 2022-03-31 03:39:16
 * @FilePath: /cfweb-fe/src/entry-client.ts
 * @Description: Description
 */
import { createSSRApp } from 'vue';
import { createWebHistory } from 'vue-router';
import App from './App.vue';
import createRouter from './router';
import store from './store';

const router = createRouter(createWebHistory(process.env.BASE_URL));

const app = createSSRApp(App);
app.use(store).use(router).mount('#app');

router.isReady().then(() => {
  app.mount('#app');
});
