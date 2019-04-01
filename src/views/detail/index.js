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
      c_id: '',
      login: false,
      description: '',
      service: '',
      count: ''
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
    handleBuy (id) {
      if (this.userInfo.u_avatar) {
        this.setCommodityNum(this.inventory)
        this.$router.push({
          name: 'order',
          params: id
        })
      } else {
        this.login = true
      }
    },
    handleConnect () {
      if (this.userInfo.u_avatar) {
        this.modal1 = true
      } else {
        this.login = true
      }
    },
    handleLogin () {
      this.login = false
      this.$router.push('/login')
    },
    handleCollect (ischange) {
      if (this.userInfo.u_avatar) {
        if (ischange === 1) {
          this.ischange = 0
          this.$api(this.$SERVER.GET_COLLECTIONDEL, {
            params: { u_id: this.u_id, c_id: this.$route.params.id }
          }).then(data => {
            console.log(data)
          })
        } else {
          this.ischange = 1
          this.$api.post(this.$SERVER.POST_COLLECTIONADD, {
            u_id: this.u_id, c_id: this.$route.params.id })
        }
      } else {
        this.login = true
      }
    },
    getUserInfo () {
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => {
          this.setUserInfo(data.data)
          this.u_id = data.data._id
        })
    },
    getCommodity () {
      this.$api(this.$SERVER.GET_COMMODITYINFO, {
        params: { id: this.$route.params.id }
      }).then(data => {
        this.commodityInfo = data.data
        this.getCommentList()
        // console.log(this.commodityInfo)
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
    },
    // 获取商家评分
    getCommentList () {
      this.$api(this.$SERVER.GET_COMMENTLIST, {
        params: { u_id: this.commodityInfo.u_id }
      }).then(data => {
        this.count = data.data.count
        if (this.count !== 0) {
          let list = data.data.list
          let descriptions = 0
          let service = 0
          for (let i = 0; i < list.length; i++) {
            descriptions += list[i].l_fine
            service += list[i].l_reliable
          }
          this.description = descriptions / list.length
          this.service = service / list.length
        }
      })
    }
  },
  created () {
    // this.getUserInfo()
    // this.getCommentList()
  },
  watch: {
    $route: {
      handler () {
        this.getCommodity()
      },
      immediate: true
    }
  }
}
