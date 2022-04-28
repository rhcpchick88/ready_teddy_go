import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/client',
    name: 'client',
    component: () => import('../views/ClientLogin.vue')
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../views/RestaurantLogin.vue')
  },
  {
    path: '/restauranthome',
    name: 'restaurant',
    component: () => import('../views/RestaurantHome.vue')
  },
  {    
    path: '/clienthome',
    name: 'client',
    component: () => import('../views/ClientHome.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
