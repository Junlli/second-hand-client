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
        c_state: 1,
        u_school: ''
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
      },
      searchKey: ''
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState(['userInfo', 'u_school']),
    ...mapGetters(['updateSchool'])
  },
  methods: {
    ...mapMutations(['setUserInfo', 'setCommoditySchool']),
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
        .then(data => {
          this.setCommoditySchool('')
          this.getApiData.u_school = ''
          this.setUserInfo()
          this.getCommodityList()
        })
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
          this.typeList = data.data.list
        })
    },
    // 获取商品列表
    getCommodity () {
      if (this.u_school !== '') {
        this.getApiData.u_school = this.u_school
        this.getCommodityList()
      } else {
        this.$api(this.$SERVER.GET_CURRENTUSERINFO)
          .then(data => {
            if (data.data !== null) {
              this.getApiData.u_school = data.data.u_school
              this.getCommodityList()
            } else {
              this.getApiData.u_school = ''
              this.getCommodityList()
            }
          })
      }
    },
    getCommodityList (val) {
      if (val) {
        this.searchKey = val
        this.$api(this.$SERVER.GET_COMMODITYLIST, {
          params: this.getApiData
        }).then(data => {
          this.dataList.list = []
          for (let i = 0; i < data.data.list.length; i++) {
            let reg = new RegExp('.*' + val + '.*')
            if (reg.test(data.data.list[i].c_title)) {
              this.dataList.list.push(data.data.list[i])
            }
          }
        })
      } else {
        console.log(this.getApiData.u_school)
        this.$api(this.$SERVER.GET_COMMODITYLIST, {
          params: this.getApiData
        })
          .then(data => {
            console.log(data)
            this.dataList = data.data
          })
      }
    },
    // 显示对应商品
    showCommidity (type1, type2) {
      this.getApiData.c_type = type1
      this.getApiData.c_type2 = type2
      this.getCommodityList(this.searchKey)
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
      // console.log(this.getApiData.pageSize)
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
      })
    },
    // 点击一级分类显示分类的所有商品
    clickSubmenu (type1) {
      this.getApiData.c_type = type1
      this.getApiData.c_type2 = ''
      this.getCommodityList(this.searchKey)
    }
  },
  created () {
    // 获取商品分类列表
    this.getTypeList()
    // 获取商品列表
    this.getCommodity()
    // 获取轮播图
    this.getBanner()
  },
  mounted () {

  },
  watch: {
    // $route: {
    //   handler () {
    //     this.isLogin()
    //     // console.log(this.$route.state.u_school)
    //   },
    //   immediate: true
    // },
    // 学校变化时刷新商品列表
    updateSchool: function (newVal) {
      this.getCommodity()
    }
  }
}
