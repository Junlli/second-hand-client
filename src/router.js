import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import api from '@/utils/api'
import SERVER from '@/utils/api/config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
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
        },
        {
          path: 'collection',
          name: 'collection',
          component: resolve => {
            require(['./views/user/component/collection/index.vue'], resolve)
          }
        },
        {
          path: 'identify',
          name: 'identify',
          component: resolve => {
            require(['./views/user/component/identify/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => {
        require(['./views/detail/index.vue'], resolve)
      }
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => {
        require(['./views/order/index.vue'], resolve)
      }
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      component: resolve => {
        require(['./views/edit/index.vue'], resolve)
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // 如果是登陆页面 && 用户信息为空{}
//   if (to.name !== 'login' && Object.keys(store.state.userInfo).length === 0) {
//     api(SERVER.GET_ISLOGIN)
//       .then(data => {
//         return data.state ? api(SERVER.GET_CURRENTUSERINFO) : next({name: 'login'})
//       })
//       .then(data => {
//         store.commit('setUserInfo', data.data)
//         next()
//       })
//       .catch(data => next({name: 'login'})
//       )
//   } else {
//     next()
//   }
// })
