import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  props: ['unLogin'],
  data () {
    return {
      login: false
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    handleQuit () {
      this.$api(this.$SERVER.GET_QUIT)
        .then (data => {
          // this.$emit(`update:${dataName}`, newValue)
          this.setUserInfo()
          this.$router.push('/')
        })
    },
    // 点击头像进入个人中心
    toUser () {
      this.$router.push('/user')
    },
    handleRelease () {
      if (this.userInfo.u_avatar) {
        this.$router.push('/release')
      } else {
        this.login = true
      }
    },
    handleLogin () {
      this.login = false
      this.$router.push('/login')
    }
  }
}
