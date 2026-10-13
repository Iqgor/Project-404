import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import FoundersPage from './pages/FoundersPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/founders',
      name: 'founders',
      component: FoundersPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
