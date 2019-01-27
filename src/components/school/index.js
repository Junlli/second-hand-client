export default {
  name: 'school',
  props: ['school', 'schools'],
  data () {
    return {
      val: '',
      schoolLoading: false
    }
  },
  methods: {
    getSchoolList (e) {
      if (e !== '') {
        this.schoolLoading = true
        this.$api(`${this.$SERVER.GET_SCHOOILIST}?name=${e}`)
          .then(data => {
            this.schoolLoading = false
            this.$emit('list', data.data)
          })
      }
    },
    setVal (e) {
      this.$emit('change', e)
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {
    school (newVal) {
      this.val = newVal
    }
  }
}
