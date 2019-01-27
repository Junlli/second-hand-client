export default {
  name: 'province',
  props: ['province', 'provinces'],
  data () {
    return {
      val: ''
    }
  },
  methods: {
    getCityList (e) {
      this.$api(`${this.$SERVER.GET_CITYLIST}?id=${e}`)
        .then(data => this.$emit('change', { list: data.data, val: e }))
    }
  },
  watch: {
    province (newVal) {
      this.val = newVal
    }
  }
}
