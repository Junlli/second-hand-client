export default {
  data () {
    return {
      isError: false,
      errorMsg: '',
      form: {
        user: '',
        pwd: '',
        email: '',
        school: ''
      }
    }
  },
  methods: {
    register () {
      if (this.form.user === '' || this.form.pwd === '' || this.form.email === '' || this.form.school === '') {
        this.errorMsg = '请将信息填写完整'
        this.isError = true
      } else if (!/^\w{6,10}$/.test(this.form.user)) {
        this.errorMsg = '请填写正确的用户名'
        this.isError = true
      } else if (!/^[0-9a-zA-Z]{6,}/.test(this.form.pwd)) {
        this.errorMsg = '请填写正确的密码'
        this.isError = true
      } else if (!/^[0-9a-zA-Z][.-_0-9a-zA-Z]*@[0-9a-zA-Z]+(\.[0-9a-zA-Z-_]+){1,2}$/.test(this.form.email)) {
        this.errorMsg = '请填写正确的邮箱'
        this.isError = true
      }
    }
  }
}
