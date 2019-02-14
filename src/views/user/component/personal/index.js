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
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => {
          console.log(data)
        })
    }
  },
  created () {
    this.getUserInfo()
  },
  watch: {
    $route: {
      handler () {
        this.getUserInfo()
      }
    }
  }
}
