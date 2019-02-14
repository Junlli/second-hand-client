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
      commodityInfo: '',
      u_id: '',
      c_id: ''
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    PicZoom
  },
  computed: {
    ...mapState(['userInfo', 'o_num']),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations(['setUserInfo', 'setCommodityNum']),
    handleClick (index) {
      this.isShow = index
    },
    handleLogin () {
      this.modal1 = false
    },
    handleBuy (id) {
      this.setCommodityNum(this.inventory)
      this.$router.push({
        name: 'order',
        params: id
      })
    },
    handleCollect (col) {
      if (col === 1) {
        this.ischange = 0
        this.$api(this.$SERVER.GET_COLLECTIONDEL, {
          params: { id: this.commodityInfo.col_id }
        }).then(data => {
          console.log(data)
        })
      } else {
        this.ischange = 1
        this.$api.post(this.$SERVER.POST_COLLECTIONADD, {
          u_id: this.u_id, c_id: this.$route.params.id })
      }
    },
    getUserInfo () {
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => this.setUserInfo(data.data))
    },
    isLogin () {
      this.$api(this.$SERVER.GET_ISLOGIN)
        .then(data => data.state && this.getUserInfo())
    },
    getCommodity () {
      this.$api(this.$SERVER.GET_COMMODITYINFO, {
        params: { id: this.$route.params.id }
      }).then(data => {
        this.commodityInfo = data.data
        console.log(this.commodityInfo)
        if (this.commodityInfo.c_col === 1) {
          this.ischange = 1
        } else {
          this.ischange = 0
        }
      })
    },
    toUserInfo (id) {
      this.$router.push({
        name: 'userInfo',
        params: { id }
      })
    }
  },
  created () {
    this.$api(this.$SERVER.GET_CURRENTUSERINFO)
      .then(data => {
        this.u_id = data.data._id
      })
  },
  watch: {
    $route: {
      handler () {
        this.isLogin()
        this.getCommodity()
      },
      immediate: true
    }
  }
}
