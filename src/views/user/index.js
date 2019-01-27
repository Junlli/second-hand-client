import HomeHeader from '@/components/header/index.vue'
import HomeFooter from '@/components/footer/index.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      active: 'user',
      id: ''
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations([]),
    edit (id) {
      this.$router.push('/userDetail')
    }
  },
  mounted () {
    // this.$api(this.$SERVER.GET_USERINFO, {
    //   params : { id: this.id }
    // }).then(data => {
    //   console.log(this.id)
    //   console.log(data.data)
    // })

    // this.$nextTick(() => {
    //   this.active = this.$route.path.slice(1)
    //   console.log(this.active)
    //   this.$refs.active.updateActiveName()
    // })
  },

}
