import HomeHeader from '@/components/header/index.vue'
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      imgCount: 0,
      isShow: false
    }
  },
  components: {
    HomeHeader
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
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
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess () {
      this.imgCount++
      if (this.imgCount === 4) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  }
}
