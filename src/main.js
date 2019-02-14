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
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// axios
import api from './utils/api'
import SERVER from './utils/api/config'

Vue.config.productionTip = false

/**
 * element-ui
 */
Vue.use(ElementUI)

/**
 * iview
 */
Vue.use(iView)

/**
 * axios
 * @type {AxiosStatic}
 */
Vue.prototype.$api = api
Vue.prototype.$SERVER = SERVER

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
