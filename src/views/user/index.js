import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      active: 'user',
      id: '',
      show: false, // 是否显示修改头像
      imgUrl: '',
      dataList: {
        list: []
      },
      apiData: {
        u_avatar: '',
        u_password: '',
        u_mail: '',
        u_name: '',
        u_school: ''
      },
      unLogin: false,
      count: '' // 拥有的商品数
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
    ...mapMutations(['setUserInfo']),
    edit () {
      this.$router.push('/userDetail')
    },
    handleMouseOver () {
      this.show = true
    },
    handleMouseLeave () {
      this.show = false
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = res.data.url
      this.userInfo.u_avatar = this.imageUrl
      this.userInfo.u_password = ''
      this.$api.post(this.$SERVER.POST_UPUSERINFO, { ...this.userInfo, id: this.userInfo._id })
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 获取商品列表
    getCommodity () {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: { u_id: this.userInfo._id }
      }).then(data => {
        this.count = data.data.count
      })
    }
  },
  created () {
    this.getCommodity()
  },
  mounted () {
    this.$api(this.$SERVER.GET_CURRENTUSERINFO)
      .then(data => {
        this.setUserInfo(data.data)
      })
  },
  watch: {
    $route: {
      handler () {
        this.$api(this.$SERVER.GET_CURRENTUSERINFO)
          .then(data => {
            this.setUserInfo(data.data)
          })
      },
      immediate: true
    }
  }
}
