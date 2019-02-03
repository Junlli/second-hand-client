import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import PicZoom from 'vue-piczoom'

export default {
  data () {
    return {
      isShow: 0,
      smallImgs: [
        { imgUrl: 'https://www.youzixy.com/Uploads/salebuy/2019-01-15/5c3db44b850fc.jpg' },
        { imgUrl: 'https://www.youzixy.com/Uploads/salebuy/2019-01-12/5c39fac97e3f3.jpg' },
        { imgUrl: 'https://www.youzixy.com/Uploads/salebuy/2019-01-15/5c3db44b850fc.jpg' },
        { imgUrl: 'https://www.youzixy.com/Uploads/salebuy/2019-01-12/5c39fac97e3f3.jpg' }
      ],
      inventory: 1, // 库存
      modal1: false,
      value: 1,
      ischange: 0 // 爱心颜色
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    PicZoom
  },
  methods: {
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
    }
  }
}
