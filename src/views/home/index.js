import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      isShow: false,
      second: null,
      current: 0, // 一级分类当前索引
      secondCurrent: 0, // 二级分类当前索引
      show: false,
      theme2: 'dark',
      apiData: {
        u_avatar: '',
        u_name: ''
      },
      getApiData: {
        c_type: '',
        c_type2: '',
        pageSize: 20,
        pageIndex: 1,
        c_state: 1
      },
      dataList: {
        count: 1,
        list: []
      },
      typeList: [],
      commidityList: [],
      bannerImg: [],
      // 轮播图
      swiperOption: {
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction : false,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        pagination: '.swiper-pagination',
        paginationClickable :true
      }
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    // 动画
    moveUp (index) {
      this.show = index
    },
    moveDown () {
      this.show = false
    },
    // 退出登录
    quit () {
      this.$api(this.$SERVER.GET_QUIT)
        .then(data => this.setUserInfo())
    },
    // 获取当前用户信息
    getUserInfo () {
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => this.setUserInfo(data.data))
    },
    // 是否登录
    isLogin () {
      this.$api(this.$SERVER.GET_ISLOGIN)
        .then(data => data.state && this.getUserInfo())
    },
    // 获取商品分类列表
    getTypeList () {
      this.$api(this.$SERVER.GET_TYPELIST)
        .then(data => {
          // console.log(data.data.list)
          this.typeList = data.data.list
        })
    },
    // 获取商品列表
    getCommidity () {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: this.getApiData
      })
        .then(data => {
          this.dataList = data.data
        })
    },
    // 显示对应商品
    showCommidity (type1, type2) {
      this.getApiData.c_type = type1
      this.getApiData.c_type2 = type2
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: this.getApiData
      }).then(data => {
        this.dataList = data.data
      })
    },
    // 跳转到商品详情页
    toCommidityDetail (id) {
      let routerData = this.$router.resolve({
        name: 'detail',
        params: { id }
      })
      window.open(routerData.href, '_blank')
    },
    // 返回切换后的每页条数
    handleSizeChange (val) {
      this.getApiData.pageSize = val
      console.log(this.getApiData.pageSize)
      this.getCommidity()
    },
    // 返回页码
    handlePage (val) {
      this.getApiData.pageIndex = val
      this.getCommidity()
    },
    // 获取轮播图
    getBanner () {
      this.$api(this.$SERVER.GET_BANNERLIST, {
        params: { b_state: 1 }
      }).then(data => {
        this.bannerImg = data.data.list
        console.log(this.bannerImg)
      })
    },
    // 点击一级分类显示分类的所有商品
    clickSubmenu (type1) {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: { c_type: type1, c_state: 1 }
      }).then(data => {
        this.dataList = data.data
      })
    }
  },
  created () {
    // 获取商品分类列表
    this.getTypeList()
    // 获取商品列表
    this.getCommidity()
    // 获取轮播图
    this.getBanner()
    // let mySwiper = new Swiper('.swiper-container', {
    //   // autoplay: true,
    //   // autoplay: {
    //   //   disableOnInteraction: false,  //点击后继续轮播(这个很重要)
    //   //   delay: 1000,                       //自动轮播的每次的时间 可以不设置 会有个默认值
    //   // },
    //   loop: true,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   },
    //   pagination: {
    //     el: '.swiper-pagination'
    //   }
    // })
  },
  mounted () {

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
