import { createRouter, createWebHistory } from 'vue-router'
import Overviev from '../views/Overviev.vue'
import Streaming from '../views/Streaming.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overviev',
      component: Overviev
    },
    {
      path: '/Streamy',
      name: 'streaming',
      component: Streaming
    }
  ]
})

export default router
