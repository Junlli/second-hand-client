export default {
  data () {
    return {
      provinceList: [],
      cityList: []
    }
  },
  created () {
    this.getProvinceList()
  },
  methods: {
    getProvinceList () {
      this.$api(this.$SERVER.GET_PROVINCELIST)
        .then(data => this.provinceList = data.data)
    },
    setCityList (e) {
      this.cityList = e.list
      this.apiData.u_city = ''
      this.apiData.u_province = e.val
    },
    getCityList () {
      this.$api(`${this.$SERVER.GET_CITYLIST}?id=${this.apiData.u_province}`)
        .then(data => this.cityList = data.data)
      console.log(this.cityList)
    }
  }
}
