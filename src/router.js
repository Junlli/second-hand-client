import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => {
        require(['./views/home/index.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['./views/login/index.vue'], resolve)
      }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => {
        require(['./views/register/index.vue'], resolve)
      }
    }
  ]
})
