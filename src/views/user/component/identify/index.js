import { newJson } from '@/utils/js/index'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      isShow: true,
      isHide: false,
      isResult: true,
      imageUrl: '',
      getApiData: {
        p_name: '',
        p_prove: '',
        p_school: '',
        p_image: ''
      },
      u_static: 0
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    // 认证按钮操作
    handleClick () {
      this.isHide = true
      this.isShow = false
    },
    // 上传操作
    handleAvatarSuccess (res, file) {
      // this.imageUrl = URL.createObjectURL(file.response.data.url)
      this.getApiData.p_image = file.response.data.url
    },
    // beforeAvatarUpload (file) {
    //   const isJPG = file.type === 'image/jpeg'
    //   const isLt2M = file.size / 1024 / 1024 < 2
    //   if (!isJPG) {
    //     this.$message.error('上传图片只能是 JPG 格式!')
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传图片大小不能超过 2MB!')
    //   }
    //   return isJPG && isLt2M
    // },
    onSubmit () {
      let apiData = newJson(this.getApiData)
      this.$api.post(this.$SERVER.POST_PROVEADD, apiData)
        .then(data => {
          console.log(data)
        })
      this.isShow = true
      this.isResult = false
      this.u_static = 1
    }
  },
  created () {
    console.log(this.u_static)
  }
}
