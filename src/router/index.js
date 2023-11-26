import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/main.vue'
import developers from '@/pages/developers.vue'

import buy from '@/pages/buy.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/developers',
    name: 'developers',
    component: developers
  },
  {
    path: '/buy',
    name: 'buy',
    component: buy
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
