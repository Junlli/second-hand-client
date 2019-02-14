export default {
  data () {
    return {
      u_id: '',
      commodityInfo: '',
      c_state: '',
      isHide: true // 隐藏未收藏信息
    }
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
    this.$api(this.$SERVER.GET_CURRENTUSERINFO)
      .then(data => {
        this.u_id = data.data._id
        this.getCollectionList()
      })
  },
  watch: {
    $route: {
      handler () {

      }
    }
  }
}
