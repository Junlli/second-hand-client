import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}, // 用户信息
    o_num: '', // 选择商品数量
    u_school: '' // 学校
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload == null ? {} : payload
    },
    setCommodityNum (state, payload) {
      state.o_num = payload
    },
    setCommoditySchool (state, payload) {
      state.u_school = payload
    }
  },
  actions: {

  },
  getters: {
    updateSchool: state => state.u_school
  }
})
