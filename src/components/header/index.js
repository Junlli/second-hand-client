import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      isLogin: false // 是否显示头像
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted () {
    this.$api(this.$SERVER.GET_ISLOGIN)
      .then(data => {
        if (data !== null) {
          this.isLogin = true
        }
      })
  }
}
