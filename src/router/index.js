import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // $router.push('/login') 或者 $router.push({name:'login'}) 都可以访问
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      // redirect: '/welcome',
      // name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'welcome',
          component: Welcome
        },
        {
          path: 'article',
          name: 'article',
          component: Article
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

export default router
