import { createRouter } from 'vue-router'

import Ebook from '@/Ebook.vue'
import { createMemoryHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  }, {
    path: '/ebook',
    component: Ebook
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
