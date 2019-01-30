import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      errorMsg: '',
      isError: false,
      apiData: {
        u_account: '',
        u_password: ''
      }
    }
  },
  computed: {
    ...mapState([]),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    login () {
      this.$api.post(this.$SERVER.POST_LOGIN, this.apiData)
        .then(data => {
          if (!data.state) {
            this.$message.error('账号或密码错误')
            return
          }
          if (data.data) {
            this.setUserInfo(data.data)
          } else {
            this.$message.error('账号或密码错误')
          }
        })
    }
  }
}
