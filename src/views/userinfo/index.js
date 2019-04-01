import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import detail from './components/detail'
import message from './components/message'

export default {
  data () {
    return {
      apiData: {},
      count: '',
      getApiData: {
        pageSize: 20,
        pageIndex: 1,
        u_id: this.$route.params.id
      },
      detail: 'detail',
      message: 'message',
      currentView: ''
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    detail,
    message
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
        // this.commodity = data.data.list
        this.count = data.data.count
      })
    },
    // 跳转到商品详情页
    toCommidityDetail (id) {
      this.$router.push({
        name: 'detail',
        params: { id }
      })
    },
    // 切换tab
    tabChange (tabItem) {
      this.currentView = tabItem
    }
  },
  created () {
    this.getUserInfo()
    this.getCommodity()
    // this.getCommentList()
    this.currentView = 'detail'
  }
}
