import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'

export default {
  data () {
    return {
      formItem: {
        buyer: '',
        address: '',
        phone: ''
      },
      columns4: [
        {
          title: '成交时间',
          align: 'center',
          key: 'datetime',
          width: 110
        },
        {
          title: '商品',
          align: 'center',
          key: 'name',
          width: 240,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods.img
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
                  textAlign: 'left'
                }
              }, params.row.goods.name),
              h('span', {
                style: {
                  display: 'block',
                  width: '200px',
                  marginLeft: '50px',
                  textAlign: 'left'
                }
              }, '订单号:' + params.row.goods.no)
            ])
          }
        },
        {
          title: '单价',
          align: 'center',
          key: 'price',
          width: 100,
          render: (h, params) => {
            return h('span', params.row.price)
          }
        },
        {
          title: '数量',
          align: 'center',
          key: 'num'
        },
        {
          title: '实付款',
          align: 'center',
          key: 'total',
          width: 80
        },
        {
          title: '卖家',
          align: 'center',
          key: 'buyer',
          render: (h, params) => {
            return h('a', params.row.buyer)
          }
        }
      ],
      data4: [
        {
          goods: {
            img: 'https://www.youzixy.com/Public/images/icon/mkhead_hover.png',
            name: '我是商品哇哈哈哈哈哈哈哈哈嗝哈',
            no: '12361481248971289'
          },
          price: '45.00',
          num: 1,
          total: '45.00',
          buyer: 'junlli',
          datetime: '2018-03-31 19:14'
        }
      ],
      modal: false // 对话框
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  methods: {
    submit () {
      console.log(this.formItem.buyer)
      if (this.formItem.buyer === '' || this.formItem.address === '' || this.formItem.phone === '') {
        this.$message.error('请将信息填写完整')
      } else {
        this.modal = true
      }
    },
    confirm () {
      this.modal = false
      this.$message.success('购买成功')
      this.$router.push('/user/buy')
    },
    cancel () {
      this.modal = false
    }
  }
}
