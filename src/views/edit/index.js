import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import address from '@/utils/mixin/address'
import School from '@/components/school/index.vue'
import Province from '@/components/province/index.vue'

export default {
  mixins: [address],
  data () {
    return {
      id: '',
      apiData: {
        u_name: '',
        u_mail: '',
        u_province: '',
        u_city: '',
        u_school: '',
        u_password: '',
        u_tel: '',
        u_wx: '',
        u_qq: ''
      },
      schoolList: []
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    School,
    Province
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters([''])
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    getSchoolList (data) {
      this.schoolList = data
    },
    setSchool (val) {
      this.apiData.u_school = val
    },
    cancel () {
      this.$router.push('/user/personal')
    },
    save () {
      // this.userInfo.u_password = ''
      this.$api.post(this.$SERVER.POST_UPUSERINFO, { ...this.apiData, id: this.userInfo._id })
        .then(data => this.thenSubmit('修改'))
    },
    thenSubmit (str) {
      this.$message.success(str + '成功')
      this.$router.push('/user/personal')
    },
    getUserInfo () {
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => {
          let info = this.userInfo
          info.u_password = ''
          this.apiData = info
          this.getCityList()
        })
    }
  },
  created () {
    this.getUserInfo()
  },
  watch: {
    $route: {
      handler () {
        this.$api(this.$SERVER.GET_CURRENTUSERINFO)
          .then(data => {
            this.setUserInfo(data.data)
          })
      }
    }
  }
}
