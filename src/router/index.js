import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/task-list',
          name: 'task-list',
          component: () => import('@/views/TaskList.vue')
        },
        {
          path: '/task-list/:id',
          component: () => import('@/views/TaskDetail.vue')
        },
        {
          path: '/statistic',
          name: 'statistic',
          component: () => import('@/views/Statistic.vue')
        }
      ]
    },
  ]
})

export default router
