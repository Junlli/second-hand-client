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
          console.log(data)
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
    },
    getUserInfo () {
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => this.setUserInfo(data.data))
    },
    isLogin () {
      this.$api(this.$SERVER.GET_ISLOGIN)
        .then(data => data.state && this.getUserInfo())
    }
  },
  created () {
    this.isLogin()
  }
}
