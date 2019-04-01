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
          this.$router.push('/')
        })
    },
    // 点击头像进入个人中心
    toUser () {
      this.$router.push('/user/personal')
    },
    // 发布商品
    handleRelease () {
      if (this.userInfo.u_avatar) {
        this.$router.push('/release')
      } else {
        this.login = true
      }
    },
    // 跳转至登录页面
    handleLogin () {
      this.login = false
      this.$router.push('/login')
    },
    // 获取用户信息
    getUserInfo () {
      // if (!this.u_school) {
      //   this.setCommoditySchool(this.userInfo.u_school)
      // }
      this.setCommoditySchool(this.userInfo.u_school)
      this.changeSchoolName = this.userInfo.u_school
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
    // 切换学校
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
    // this.getUserInfo()
  }
}
