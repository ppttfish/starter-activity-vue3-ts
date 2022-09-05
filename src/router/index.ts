import { getToken } from '@/uitls'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/index.vue')
    },
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = getToken()

  const { name } = to
  const isLoginOrHome = name === 'login' || name === 'home'

  token || isLoginOrHome ? next() : next({ name: 'login' })
})

export default router
