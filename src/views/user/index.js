import HomeHeader from '@/components/header/index.vue'

export default {
  data () {
    return {
      active: 'user'
    }
  },
  components: {
    HomeHeader
  },
  methods: {
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.active = this.$route.path.slice(1)
    //   console.log(this.active)
    //   this.$refs.active.updateActiveName()
    // })
  }
}
