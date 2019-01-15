export default {
  data () {
    return {
      goods: [
        {
          imgUrl: 'https://www.youzixy.com/Uploads/salebuy/2019-01-12/5c39fab6eb474.jpg',
          name: '我是商品哇哈哈哈哈哈哈哈嗝哈',
          status: '出售中',
          index: 1
        },
        {
          imgUrl: 'https://www.youzixy.com/Uploads/salebuy/2019-01-12/5c39fab6eb474.jpg',
          name: '我是商品哇哈哈哈哈哈哈哈嗝哈',
          status: '出售中',
          index: 2
        }
      ],
      isHide: true // 隐藏未收藏信息
    }
  },
  methods: {
    cancelCollect (index) {
      this.goods.splice(index, 1)
      if (this.goods.length === 0) {
        this.isHide = false
      } else {
        this.isHide = true
      }
    },
    mounted () {
      if (this.goods.length === 0) {
        this.isHide = false
      } else {
        this.isHide = true
      }
    }
  }
}
