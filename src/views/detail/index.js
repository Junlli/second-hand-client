import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import PicZoom from 'vue-piczoom'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      isShow: 0,
      inventory: 1, // 库存
      modal1: false,
      value: 1,
      ischange: 0, // 爱心颜色
      commidityInfo: ''
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    PicZoom
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    handleClick (index) {
      this.isShow = index
    },
    handleLogin () {
      this.modal1 = false
    },
    handleCollect () {
      if (this.ischange === 1) {
        this.ischange = 0
      } else {
        this.ischange = 1
      }
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
    console.log(this.$route.params)
    this.$api(this.$SERVER.GET_COMMODITYINFO, {
      params: { id: this.$route.params.id}
    }).then(data => {
      this.commidityInfo = data.data
      console.log(this.commidityInfo)
    })
  },
  watch: {
    $route: {
      handler () {
        this.isLogin()
      },
      immediate: true
    }
  }
}
