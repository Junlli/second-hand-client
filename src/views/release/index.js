import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import {mapState, mapGetters, mapMutations} from 'vuex'
import { newJson } from '@/utils/js/index'

export default {
  data () {
    return {
      c_type: [],
      c_type2: [],
      apiData: {
        u_id: '',
        c_title: '',
        c_type: '',
        c_type2: '',
        c_images: [],
        c_price: '',
        c_address: '',
        c_detail: '',
        c_num: 1,
        c_state: 1
      },
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      imgCount: 0,
      isShow: false,
      fileList: [] // 图片
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  computed: {
    ...mapState(['userInfo']),
    filePath () {
      if (this.apiData.c_images !== undefined) {
        return this.apiData.c_images.map(file => ({url: this.$SERVER.FILEURL + file}))
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
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
    handleRemove (file, fileList) {
      this.imgCount--
      if (this.imgCount < 4) {
        this.isShow = false
      }
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = this.$SERVER.FILEURL + file.response.data.url
      this.dialogVisible = true
    },
    handleSuccess (response) {
      this.apiData.c_images.push(response.data.url)
      this.imgCount++
      if (this.imgCount === 4) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    getTypeList () {
      this.$api(this.$SERVER.GET_TYPELIST)
        .then(data => {
          this.c_type = data.data.list
          this.getType2()
        })
    },
    getType2 () {
      let c_type = this.apiData.c_type
      if (c_type == '') {
        this.c_type2 = []
        return
      }
      this.c_type2 = this.c_type.find( obj => obj.t_name == c_type).t_types
    },
    // 发布商品
    onSubmit () {
      if (this.$route.query.id) {
        this.upInfo()
      } else {
        this.addInfo()
      }
    },
    addInfo () {
      let apiData = newJson(this.apiData)
      apiData.c_price *= 100
      this.$api.post(this.$SERVER.POST_COMMODITYADD, apiData)
        .then( data => data.state ? this.thenSubmit('新增') : this.$message.error(data.mes))
    },
    thenSubmit (str) {
      this.$message.success(str + '成功')
      this.$router.push('/user/sale')
    },
    upInfo () {
      let apiData = newJson(this.apiData)
      apiData.c_price *= 100
      this.$api.post(this.$SERVER.POST_COMMODITYUPINFO, { ...apiData, c_id: this.$route.query.id })
        .then(data => data.state ? this.thenSubmit('编辑') : this.$message.error(data.mes))
    },
    getUserInfo () {
      this.$api(this.$SERVER.GET_CURRENTUSERINFO)
        .then(data => {
          this.apiData.u_id = data.data._id
        })
    },
    getCommodity () {
      this.$api(this.$SERVER.GET_COMMODITYINFO, {
        params: { id: this.$route.query.id }
      }).then(data => {
        this.apiData = data.data
        this.apiData.c_price /= 100
      })
    }
  },
  created () {
    this.getTypeList()
    this.getUserInfo()
    this.getCommodity()
  },
  watch: {
    $route: {
      handler () {
        if (this.$route.query.id) {
          this.getCommodity()
        } else {
          this.apiData = {}
        }
      }
    }
  }
}
