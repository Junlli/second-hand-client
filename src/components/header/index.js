import { mapState, mapGetters, mapMutations } from 'vuex'
import School from '@/components/school/index.vue'

export default {
  props: ['unLogin'],
  data () {
    return {
      login: false,
      modal: false, // 显示对话框
      changeSchoolName: '',
      schoolList: [],
      searchKey: ''
    }
  },
  components: {
    School
  },
  computed: {
    ...mapState(['userInfo', 'u_school'])
  },
  methods: {
    ...mapMutations(['setUserInfo', 'setCommoditySchool']),
    handleQuit () {
      this.$api(this.$SERVER.GET_QUIT)
        .then(data => {
          this.setUserInfo()
          this.setCommoditySchool('')
          console.log(typeof this.u_school)
          this.$router.push('/')
        })
    },
    // 点击头像进入个人中心
    toUser () {
      this.$router.push('/user/personal')
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
        .then(data => {
          this.setUserInfo(data.data)
          if (this.u_school === '') {
            this.setCommoditySchool(data.data.u_school)
          }
          this.changeSchoolName = this.u_school
        })
    },
    isLogin () {
      this.$api(this.$SERVER.GET_ISLOGIN)
        .then(data => data.state && this.getUserInfo())
    },
    getSchoolList (data) {
      this.schoolList = data
    },
    setSchool (val) {
      this.changeSchoolName = val
    },
    changeSchool () {
      this.setCommoditySchool(this.changeSchoolName)
      this.modal = false
    },
    cancel () {
      this.modal = false
    },
    // 搜索关键词匹配
    searchResult () {
      this.$emit('getCommodity', this.searchKey)
    }
  },
  created () {
    this.isLogin()
    this.getUserInfo()
  }
}
