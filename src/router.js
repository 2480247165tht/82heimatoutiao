import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'

import Login from './views/login'
import Main from './views/home/main'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: Login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '', // 默认的二级路由的地址path为空串
      component: Main
    }]
  }

  ]
})
