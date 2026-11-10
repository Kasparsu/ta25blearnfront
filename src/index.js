import { createApp } from 'vue';

import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

const pages = import.meta.glob('./pages/*.vue');

const routes = [];
for(let page in pages) {
  let name = page.replace('./pages/', '').replace('.vue', '');
  let path = '/' + name.toLowerCase();
  if(routes.length === 0) {
    path = '/';  
  }
  routes.push({ path, name, component: pages[page]});
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');