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
            console.log(data.data)
            this.newsList.push(data.data)
            for (let i = 0; i < this.newsList.length; i++) {
              if (this.newsList[i].n_type === 2) {
                this.newsList[i].n_content = '您的认证将于2个工作日内完成审核'
              } else if (this.newsList[i].n_type === 3) {
                this.newsList[i].n_content = '您的反馈已收到，感谢您的反馈'
              } else if (this.newsList[i].n_type === 4) {
                if (this.newsList[i].o_state === 0) {
                  this.newsList[i].n_content = '商品' + this.newsList[i].c_title + '交易已关闭'
                } else if (this.newsList[i].o_state === 1) {
                  this.newsList[i].n_content = '商品' + this.newsList[i].c_title + '已下单，未发货'
                } else if (this.newsList[i].o_state === 2) {
                  this.newsList[i].n_content = '商品' + this.newsList[i].c_title + '已发货'
                } else if (this.newsList[i].o_state === 3) {
                  this.newsList[i].n_content = '商品' + this.newsList[i].c_title + '交易成功'
                }
              }
            }
          })
        }
      }
    })
  }
}
