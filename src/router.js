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
    },
    {
      path: '/release',
      name: 'release',
      component: resolve => {
        require(['./views/release/index.vue'], resolve)
      }
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => {
        require(['./views/user/index.vue'], resolve)
      },
      children: [
        {
          path: '/',
          name: 'personal',
          component: resolve => {
            require(['./views/user/component/personal/index.vue'], resolve)
          }
        },
        {
          path: 'sale',
          name: 'sale',
          component: resolve => {
            require(['./views/user/component/sale/index.vue'], resolve)
          }
        },
        {
          path: 'buy',
          name: 'buy',
          component: resolve => {
            require(['./views/user/component/buy/index.vue'], resolve)
          }
        },
        {
          path: 'question',
          name: 'question',
          component: resolve => {
            require(['./views/user/component/question/index.vue'], resolve)
          }
        }
      ]
    }
  ]
})
