import { mapState } from 'vuex'

export default {
  data () {
    return {
      newsList: []
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.$api(this.$SERVER.GET_NEWSLIST, {
      params: { u_id: this.userInfo._id }
    }).then(data => {
      if (data.data) {
        let messages = data.data.list
        for (let i = 0; i < messages.length; i++) {
          this.$api(this.$SERVER.GET_NEWSINFO, {
            params: { id: messages[i]._id }
          }).then(data => {
            this.newsList.push(data.data)
          })
        }
      }
    })
  }
}
