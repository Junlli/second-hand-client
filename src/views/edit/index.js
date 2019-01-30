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
        u_password: ''
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
    getSchoolList (data) {
      this.schoolList = data
    },
    setSchool (val) {
      this.apiData.u_school = val
    },
    cancel () {
      this.$router.push('/user')
    },
    save () {
      this.apiData.u_password = ''
      this.$api.post(this.$SERVER.POST_UPUSERINFO, { ...this.apiData, id: this.userInfo._id })
        .then(data =>
          this.$api(this.$SERVER.GET_USERINFO, {
            params: {id: this.userInfo._id}
          })
            .then(data => this.thenSubmit('修改')))
    },
    thenSubmit (str) {
      this.$message.success(str + '成功')
      this.$router.push('/user')
    },
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
