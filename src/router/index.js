import { createRouter, createWebHistory } from 'vue-router'
import CharacteristicView from '@/views/CharacteristicView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'characteristic',
      component: CharacteristicView
    }
  ]
})

export default router
