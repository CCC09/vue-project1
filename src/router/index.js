import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import NotFound from '@/views/404'
import Image from '@/views/image'
import Publish from '@/views/publish'

import store from '@/store'

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
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        },
        {
          path: 'publish',
          name: 'publish',
          component: Publish
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
// 加上全局前置导航守卫,拦截未登陆的路由跳转
router.beforeEach((to, from, next) => {
  // 如果不是登陆页，而且没有用户信息 跳转到登录页。 否则若是登录页或者有用户信息 放行
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})

export default router
