<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import 'src/sass/base.scss';

html, body, #app {
  height: 100%;
}
</style>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    getUserInfo(){
      this.$api(this.$SERVER.GET_ISLOGIN)
        .then( data =>
          data.state && this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        )
        .then( data => this.setUserInfo(data.data))
    }
  },
  created () {
    // this.getUserInfo()
  }
}
</script>
