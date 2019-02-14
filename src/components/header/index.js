import { mapState, mapGetters, mapMutations } from 'vuex'
import School from '@/components/school/index.vue'

export default {
  props: ['unLogin'],
  data () {
    return {
      login: false,
      modal: false, // 显示对话框
      u_school: '',
      changeSchoolName: '',
      schoolList: []
    }
  },
  components: {
    School
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    handleQuit () {
      this.$api(this.$SERVER.GET_QUIT)
        .then(data => {
          console.log(data)
          this.setUserInfo()
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
          this.u_school = data.data.u_school
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
      this.u_school = this.changeSchoolName
      this.modal = false
    },
    cancel () {
      this.modal = false
    }
  },
  created () {
    this.isLogin()
    this.getUserInfo()
  }
}
