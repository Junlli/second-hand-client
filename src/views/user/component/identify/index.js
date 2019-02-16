import { newJson } from '@/utils/js/index'

export default {
  data () {
    return {
      isHide: false,
      isShow: true,
      isResult: true,
      imageUrl: '',
      getApiData: {
        p_name: '',
        p_prove: '',
        p_school: '',
        p_image: ''
      }
    }
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
      // console.log(this.imageUrl)
      this.getApiData.p_image = file.response.data.url
      // console.log(this.getApiData.p_image)
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
    }
  }
}
