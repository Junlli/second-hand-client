import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 图标字体
import './sass/fonticon/iconfont.css'
import './sass/fonticon/iconfont.js'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入swiper（轮播图）
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

/**
 * element-ui
 */
Vue.use(ElementUI)

/**
 * iview
 */
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')