import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      u_id: '',
      commodityInfo: '',
      c_state: '',
      isHide: true // 隐藏未收藏信息
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    cancelCollect (id) {
      this.$api(this.$SERVER.GET_COLLECTIONDEL, {
        params: { id: id }
      }).then(data => {
        this.getCollectionList()
      })
    },
    getCollectionList () {
      this.$api(this.$SERVER.GET_COLLECTIONLIST, {
        params: { u_id: this.u_id }
      }).then(data => {
        this.commodityInfo = data.data.list
      })
    }
  },
  created () {
    this.u_id = this.userInfo._id
    this.getCollectionList()
  }
}
