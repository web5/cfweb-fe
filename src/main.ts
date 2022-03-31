import { createApp } from 'vue';
import { createWebHistory} from 'vue-router';
import App from './App.vue';
import createRouter from './router';
import store from './store';

const router = createRouter(createWebHistory(process.env.BASE_URL));

createApp(App).use(store).use(router).mount('#app');
