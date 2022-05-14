import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'vue-cookies'

Vue.use(VueRouter)

function clientAuth (to, from, next) {
  let clientToken = cookies.get('clientToken');
  if (clientToken == null){
    console.log('unknown user');
    router.push('error');    
  } else {
    next();
  }
}

function restaurantAuth (to, from, next) {
  let restaurantToken = cookies.get('restaurantToken');
  if (restaurantToken == null){
    console.log('unknown user');
    router.push('error');
  } else {
    next();
  }
}

const routes = [
  {
    path: '/client',
    name: 'client',
    component: () => import('../views/Client/ClientLogin.vue'),
  },
  {    
    path: '/clienthome',
    name: 'clienthome',
    component: () => import('../views/Client/ClientHome.vue'),
    beforeEnter: clientAuth

  },
  {    
    path: '/clientregister',
    name: 'client register',
    component: () => import('../views/Client/ClientRegister.vue')
  },  
  {    
    path: '/clientprofile',
    name: 'client profile',
    component: () => import('../views/Client/ClientProfile.vue'),
    beforeEnter: clientAuth
  },
  {    
    path: '/clientupdateprofile',
    name: 'client update profile',
    component: () => import('../views/Client/ClientUpdateProfile.vue'),
    beforeEnter: clientAuth
  },  
  {
    path:'/cartview',
    name:'cart view',
    component: () => import('../views/Client/CartView.vue'),
    beforeEnter: clientAuth
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../views/Restaurant/RestaurantLogin.vue'),
  },
  {
    path: '/restauranthome',
    name: 'restauranthome',
    component: () => import('../views/Restaurant/RestaurantHome.vue'),
    beforeEnter: restaurantAuth
  },
  {    
    path: '/restaurantregister',
    name: 'restaurant register',
    component: () => import('../views/Restaurant/RestaurantRegister.vue')
  },  
  {    
    path: '/restaurantprofile',
    name: 'restaurant profile',
    component: () => import('../views/Restaurant/RestaurantProfile.vue'),
    beforeEnter: restaurantAuth
  },  
  {    
    path: '/restaurantupdateprofile',
    name: 'restaurant update profile',
    component: () => import('../views/Restaurant/RestaurantUpdateProfile.vue'),
    beforeEnter: restaurantAuth
  },  
  {    
    path: '/createmenu',
    name: 'createmenu',
    component: () => import('../views/Restaurant/RestaurantMenu.vue'),
    beforeEnter: restaurantAuth
  },  
  {    
    path: '/updatemenu',
    name: 'updatemenu',
    component: () => import('../views/Restaurant/RestaurantUpdateMenu.vue'),
    beforeEnter: restaurantAuth
  },   
  {
    path: '/orderview',
    name: 'order view',
    component: () => import('../views/Restaurant/OrderView.vue'),
    beforeEnter: restaurantAuth
  },  
  {    
    path: '/restaurants',
    name: 'restaurants',
    component: () => import('../views/RestaurantView.vue')
  }, 
  {
    path: '/error',
    name: 'notfound',
    component: () => import ('../views/LoginError.vue')
  }
]

export const router = new VueRouter({
  routes
})

export default router
