export default {
  data () {
    return {
      errorMsg: '',
      isError: false,
      user: '',
      pwd: ''
    }
  },
  methods: {
    login () {
      // 验证账号密码是否为空
      if (this.user === '' && this.pwd === '') {
        this.errorMsg = '请输入账号和密码'
        this.isError = true
      } else if (this.user === '') {
        this.errorMsg = '请输入账号'
        this.isError = true
      } else if (this.pwd === '') {
        this.errorMsg = '请输入密码'
        this.isError = true
      } else if (this.user !== '123' || this.pwd !== '123') {
        this.errorMsg = '请输入正确的账号和密码'
        this.isError = true
      }
    }
  }
}
