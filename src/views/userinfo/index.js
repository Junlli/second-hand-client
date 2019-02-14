import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'

export default {
  data () {
    return {
      apiData: {},
      count: '',
      commodity: []
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  methods: {
    getUserInfo () {
      this.$api(this.$SERVER.GET_USERINFO, {
        params: { id: this.$route.params.id }
      }).then(data => {
        this.apiData = data.data
      })
    },
    getCommodity () {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: { u_id: this.$route.params.id, c_state: 1 }
      }).then(data => {
        this.commodity = data.data.list
        this.count = data.data.count
      })
    },
    // 跳转到商品详情页
    toCommidityDetail (id) {
      this.$router.push({
        name: 'detail',
        params: { id }
      })
    }
  },
  created () {
    this.getUserInfo()
    this.getCommodity()
  }
}
