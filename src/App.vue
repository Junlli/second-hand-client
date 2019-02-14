<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'src/sass/base.scss';

html, body, #app {
  height: 100%;
}
</style>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['setUserInfo'])
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>
