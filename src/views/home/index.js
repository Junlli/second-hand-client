import Swiper from 'swiper'
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
      items: [
        {title: '全部分类'},
        {title: '二手书'},
        {title: '服饰衣物'},
        {title: '美妆护肤'},
        {title: '电器'}
      ],
      secondItems: [{
        childList: [
          {title: '教材'},
          {title: '小说文学'},
          {title: '名人传记'},
          {title: '人文社科'},
          {title: '心理百科'}
        ]
      },
      {
        childList: [
          { title: '教材1' },
          { title: '小说文学' },
          { title: '名人传记' },
          { title: '人文社科' },
          { title: '心理百科' }
        ]
      }],
      apiData: {
        u_avatar: '',
        u_name: ''
      },
      unLogin: true
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations([]),
    showItem (index) {
      this.second = index
      this.secondCurrent = index
    },
    hideItem () {
      this.second = null
    },
    clickHandle (index) {
      this.current = index
    },
    hideSecondItems () {
      this.secondCurrent = null
    },
    // 动画
    moveUp () {
      this.show = true
    },
    moveDown () {
      this.show = false
    },
    quit () {
      this.$api(this.$SERVER.GET_QUIT)
        .then(data => {
          this.unLogin = true
          this.$router.push('/')
        })
    },
    getUserInfo () {
      this.$api(this.$SERVER.GET_USERINFO, {
        params: { id: this.id }
      }).then (data => {
        let info = data.data
        info.u_password = ''
        this.apiData = info
      })
    }
  },
  created () {
    this.$route
  },
  watch: {
    $route: {
      handler () {
        this.$api(this.$SERVER.GET_ISLOGIN)
          .then(data => {
            if (data.state === true) {
              this.id = this.userInfo._id
              this.getUserInfo()
            }
          })
      },
      immediate: true
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
    this.$api(this.$SERVER.GET_ISLOGIN)
      .then(data => {
        console.log(data.state)
        if (data.state === true) {
          this.unLogin = false
        }
      })
  }
}
