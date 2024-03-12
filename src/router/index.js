import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    
    {
      path: '/meal/:id',
      name: 'meal',
      component: () => import('../pages/AboutPage.vue')
    },
    
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../pages/FavouritesPage.vue')
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import('../pages/CategoryPage.vue')
    },
    
  ]
})

export default router