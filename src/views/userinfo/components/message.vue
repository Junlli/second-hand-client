<style lang="scss" scoped>
  .message {
    height: 50vh;
    .rate {
      background: #fff;
      font-size: 24px;
      padding: 20px 50px;
      .comment {
        padding: 20px 50px;
        border-bottom: 1px solid #ccc;
        .buyer-info {
          position: relative;
          img {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 10px;
          }
          .buyer {
            position: absolute;
            left: 70px;
            top: 10px;
          }
        }
        .time {
          color: #ccc;
          font-size: 14px;
        }
      }
    }
    .noRate {
      text-align: center;
      font-size: 30px;
      height: 200px;
      line-height: 200px;
    }
  }
</style>

<template>
    <div class="message">
      <div v-if="comment !== 0" class="rate">
        <span>商品与描述相符： {{description}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>卖家的服务态度： {{service}}</span>
        <div v-for="(item, index) in commentList" :key="index" class="comment">
          <div class="buyer-info">
            <img :src="$SERVER.FILEURL + item.n_user.u_avatar" alt="">
            <span class="buyer">{{item.n_user.u_account}}</span>
          </div>
          <p>{{item.n_content}}</p>
          <p class="time">{{item.create_date}}</p>
        </div>
      </div>
      <div v-else class="noRate">该商家暂时没有评价</div>
    </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      comment: '',
      commentList: [],
      description: '',
      service: ''
    }
  },
  methods: {
    // 获取评价信息
    getCommentList () {
      this.$api(this.$SERVER.GET_COMMENTLIST, {
        params: { u_id: this.$route.params.id }
      }).then(data => {
        this.commentList = data.data.list
        this.comment = data.data.count
        if (this.comment !== 0) {
          let list = data.data.list
          let descriptions = 0
          let service = 0
          for (let i = 0; i < list.length; i++) {
            descriptions += list[i].l_fine
            service += list[i].l_reliable
          }
          this.description = descriptions / list.length
          this.service = service / list.length
        }
      })
    }
  },
  created () {
    this.getCommentList()
  }
}
</script>
