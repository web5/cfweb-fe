/*
 * @Date: 2022-03-31 08:26:14
 * @LastEditors: geekwen
 * @LastEditTime: 2022-04-01 00:47:57
 * @FilePath: /cfweb-fe/src/main.ts
 * @Description: Description
 */
import { createApp } from 'vue';
import { createWebHistory } from 'vue-router';
import App from './App.vue';
import createRouter from './router';
import store from './store';

const router = createRouter(createWebHistory(process.env.BASE_URL));

createApp(App).use(store).use(router).mount('#app');
