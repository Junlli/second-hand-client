import address from '@/utils/mixin/address'
import School from '@/components/school/index.vue'
import Province from '@/components/province/index.vue'

export default {
  mixins: [address],
  data () {
    return {
      isError: false,
      errorMsg: '',
      apiData: {
        u_account: '',
        u_password: '',
        u_confirmpwd: '',
        u_name: '',
        u_tel: '',
        u_mail: '',
        u_school: '',
        u_introduce: '',
        u_province: '',
        u_city: ''
      },
      schoolList: [],
      centerDialogVisible: false
    }
  },
  components: {
    School,
    Province
  },
  methods: {
    register () {
      if (this.apiData.u_account === '' || this.apiData.u_password === '' || this.apiData.u_mail === '' || this.apiData.u_school === '') {
        this.errorMsg = '请将信息填写完整'
        this.isError = true
      } else if (!/^\w{6,10}$/.test(this.apiData.u_account)) {
        this.errorMsg = '请填写正确的用户名'
        this.isError = true
      } else if (!/^[0-9a-zA-Z]{6,}/.test(this.apiData.u_password)) {
        this.errorMsg = '请填写正确的密码'
        this.isError = true
      } else if (this.apiData.u_password !== this.apiData.u_confirmpwd) {
        this.errorMsg = '两次输入的密码不一致'
      } else if (!/^[0-9a-zA-Z][.-_0-9a-zA-Z]*@[0-9a-zA-Z]+(\.[0-9a-zA-Z-_]+){1,2}$/.test(this.apiData.u_mail)) {
        this.errorMsg = '请填写正确的邮箱'
        this.isError = true
      } else {
        this.$api.post(this.$SERVER.POST_ADDUSER, this.apiData)
          .then(data => this.thenSubmit())
      }
    },
    thenSubmit () {
      this.centerDialogVisible = true
    },
    getSchoolList (data) {
      this.schoolList = data
    },
    setSchool (val) {
      this.apiData.u_school = val
    },
    toLogin () {
      this.centerDialogVisible = false
      this.$router.push('/login')
    },
    toHome () {
      this.centerDialogVisible = false
      this.$router.push('/')
    }
  }
}
