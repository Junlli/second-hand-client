import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import crypto from 'crypto'
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
      count: '', // 拥有的商品数
      modal: false, // 修改密码弹窗
      formItem: {
        old_pwd: '',
        new_pwd: '',
        confirm_pwd: ''
      }
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
    ...mapMutations(['setUserInfo', 'setCommoditySchool']),
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
    },
    // 修改密码
    changePwd () {
      this.modal = true
    },
    ok () {
      let md5 = crypto.createHash('md5')
      md5.update(this.formItem.old_pwd)
      if (md5.digest('hex') !== this.userInfo.u_password) {
        this.$message.error('原始密码错误')
      } else if (this.formItem.new_pwd !== this.formItem.confirm_pwd) {
        this.$message.error('两次密码输入不一致')
      } else if (this.formItem.old_pwd === '' || this.formItem.new_pwd === '' || this.formItem.confirm_pwd === '') {
        this.$message.error('请将信息填写完整')
      } else {
        this.$api.post(this.$SERVER.POST_UPUSERINFO, {
          id: this.userInfo._id, u_password: this.formItem.new_pwd
        }).then(data => {
          this.modal = false
          this.$api(this.$SERVER.GET_QUIT)
            .then(data => {
              this.setCommoditySchool('')
              this.$router.push('/')
            })
        })
      }
    },
    cancel () {
      this.modal = false
    }
  },
  created () {
    this.getCommodity()
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
