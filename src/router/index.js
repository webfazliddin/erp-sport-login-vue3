import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/pages/HomePage.vue')
        },
        {
          path: '/sport',
          component: () => import('@/pages/Sport.vue')
        },
        {
          path: 'ssp',
          component: () => import('@/pages/Ssp.vue')
        },
        {
          path: 'ihma',
          component: () => import('@/pages/Ihma.vue')
        },
        {
          path: 'crm',
          component: () => import('@/pages/Crm.vue')
        },
        {
          path: 'minvuz',
          component: () => import('@/pages/Minvuz.vue')
        },
        {
          path: 'ombudsman',
          component: () => import('@/pages/Ombudsman.vue')
        },
        {
          path: 'ijodkorlar',
          component: () => import('@/pages/Ijodkorlar.vue')
        },
        {
          path: 'kvadrat',
          component: () => import('@/pages/Kvadrat.vue')
        }
      ]
    }
  ]
})

export default router
