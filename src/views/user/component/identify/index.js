export default {
  data () {
    return {
      isHide: false,
      isShow: true,
      imageUrl: ''
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
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}