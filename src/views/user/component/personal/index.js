import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      id: '',
      apiData: {
        u_avatar: '',
        u_school: '',
        u_mail: '',
        u_name: ''
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    getUserInfo () {
      this.$api(this.$SERVER.GET_USERINFO, {
        params: { id: this.id }
      }).then (data => {
        let info = data.data
        console.log(info)
        info.u_password = ''
        this.apiData = info
      })
    }
  },
  created () {
    this.$route
  },
  watch: {
    $route: {
      handler () {
        this.id = this.userInfo._id
        this.getUserInfo()
      },
      immediate: true
    }
  }
}
