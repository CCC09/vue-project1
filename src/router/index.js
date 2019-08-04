import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // $router.push('/login') 或者 $router.push({name:'login'}) 都可以访问
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
