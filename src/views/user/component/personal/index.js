import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters([])
  }
}
