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
    component: () => import('../views/Client/ClientLogin.vue')
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../views/Restaurant/RestaurantLogin.vue')
  },
  {
    path: '/restauranthome',
    name: 'restaurant',
    component: () => import('../views/Restaurant/RestaurantHome.vue')
  },
  {    
    path: '/clienthome',
    name: 'client',
    component: () => import('../views/Client/ClientHome.vue')
  },
  {    
    path: '/clientregister',
    name: 'client register',
    component: () => import('../views/Client/ClientRegister.vue')
  }, 
  {    
    path: '/restaurantregister',
    name: 'restaurant register',
    component: () => import('../views/Restaurant/RestaurantRegister.vue')
  },  
]

const router = new VueRouter({
  routes
})

export default router
