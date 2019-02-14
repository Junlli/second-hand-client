import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      getApiData: {
        o_name: '',
        o_address: '',
        o_tel: '',
        b_id: '',
        c_id: '',
        o_state: 1,
        o_price: '',
        o_num: ''
      },
      columns: [
        {
          title: '商品',
          align: 'center',
          key: 'name',
          width: 300,
          render: h => {
            if (this.commodityInfo) {
              return h('div', [
                h('img', {
                  attrs: {
                    src: this.$SERVER.FILEURL + this.commodityInfo.c_images[0]
                  },
                  style: {
                    display: 'block',
                    width: '40px',
                    height: '40px',
                    marginTop: '10px',
                    float: 'left'
                  }
                }),
                h('a', {
                  style: {
                    display: 'block',
                    marginLeft: '50px',
                    height: '40px',
                    textAlign: 'left',
                    paddingTop: '8px'
                  }
                }, this.commodityInfo.c_title),
                h('span', {
                  style: {
                    display: 'block',
                    width: '240px',
                    marginLeft: '50px',
                    textAlign: 'left',
                    marginTop: '-5px'
                  }
                }, '订单号:' + this.$route.params.id)
              ])
            }
          }
        },
        {
          title: '单价',
          align: 'center',
          key: 'price',
          width: 100,
          render: (h, params) => {
            return h('span', this.commodityInfo.c_price/100)
          }
        },
        {
          title: '数量',
          align: 'center',
          key: 'num',
          render: h => {
            return h('span', this.o_num)
          }
        },
        {
          title: '实付款',
          align: 'center',
          key: 'total',
          width: 80,
          render: h => {
            return h('span', {
              style: {
                color: '#f00'
              }
            }, this.commodityInfo.c_price * this.o_num / 100)
          }
        },
        {
          title: '卖家',
          align: 'center',
          key: 'buyer',
          render: h => {
            return h('a', this.commodityInfo.u_name)
          }
        }
      ],
      data4: [{}],
      commodityInfo: '',
      modal: false // 对话框
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  computed: {
    ...mapState(['o_num'])
  },
  methods: {
    submit () {
      if (this.getApiData.o_name === '' || this.getApiData.o_address === '' || this.getApiData.o_tel === '') {
        this.$message.error('请将信息填写完整')
      } else {
        this.modal = true
      }
    },
    confirm () {
      this.$api.post(this.$SERVER.POST_ORDERADD, { ...this.getApiData })
        .then(data => {
          console.log(data)
        })
      this.modal = false
      this.$message.success('购买成功')
      this.$router.push('/user/buy')
    },
    cancel () {
      this.modal = false
    },
    toDetail () {
      this.$router.push('/detail')
    },
    getCommidity () {
      this.$api(this.$SERVER.GET_COMMODITYINFO, {
        params: { id: this.$route.params.id }
      })
        .then(data => {
          this.commodityInfo = data.data
          this.getApiData.c_id = this.$route.params.id
          this.getApiData.o_price = data.data.c_price
          this.getApiData.o_num = this.o_num
          console.log(this.getApiData.o_num)
        })
    },
    getUserInfo () {
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => {
          this.getApiData.b_id = data.data._id
        })
    }
  },
  created () {
    this.getCommidity()
    this.getUserInfo()
  }
}
