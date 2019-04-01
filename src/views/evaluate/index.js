import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      orderInfo: '',
      getApiData: {
        o_id: '',
        l_content: '',
        l_reliable: 0,
        l_fine: 0,
        n_id: ''
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  methods: {
    // 获取订单信息
    getOrderInfo () {
      this.$api(this.$SERVER.GET_ORDERINFO, {
        params: { id: this.$route.params.id }
      }).then(data => {
        this.orderInfo = data.data
      })
    },
    // 提交评价
    submit () {
      this.getApiData.n_id = this.userInfo._id
      this.$api.post(this.$SERVER.POST_COMMENTADD, this.getApiData)
        .then(data => {
          this.$message.success('评价成功')
          this.$router.push('/user/personal')
        })
    }
  },
  created () {
    this.getOrderInfo()
    this.getApiData.o_id = this.$route.params.id
  }
}
