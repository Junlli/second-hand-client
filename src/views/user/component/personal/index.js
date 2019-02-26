import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      id: '',
      apiData: {
        u_avatar: '',
        u_school: '',
        u_mail: '',
        u_name: ''
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
