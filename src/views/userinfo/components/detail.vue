<template>
  <div>
    <div id="my_products" v-for="(item, index) in commodity" :key="index">
      <div id="onsale_pro">
        <div class="enshr_each clearfix">
          <a class="enshr_ph">
            <img :src="$SERVER.FILEURL + item.c_images[0]">
          </a>
          <div class="enshr_info">
            <h2><a @click="toCommidityDetail(item._id)">{{ item.c_title }}</a></h2>
            <div class="enshr_state">
              <span class="enshr_info_price">价格：¥{{ item.c_price / 100}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <span class="num">库存：{{ item.c_num }}</span>
          </div>
        </div>                <div class="row text-center">
        <nav><ul class="pagination"></ul></nav>                </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commodity',
  data () {
    return {
      commodity: []
    }
  },
  methods: {
    getCommodity () {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: { u_id: this.$route.params.id, c_state: 1 }
      }).then(data => {
        this.commodity = data.data.list
      })
    }
  },
  created () {
    this.getCommodity()
  }
}
</script>

<style lang="scss" scoped>
  #my_products {
    background: #fff;
    padding: 15px;
    margin-top: 30px;
    border-bottom: 1px solid #ccc;
    .enshr_each {
      padding-left: 120px;
      .enshr_ph {
        float: left;
        margin-left: -120px;
        img {
          width: 120px;
          height: 125px;
        }
      }
      .enshr_info {
        margin-left: 20px;
        h2 {
          margin-top: 10px;
          font-size: 24px;
        }
        p {
          margin: 0 0 10px;
        }
        .enshr_state {
          margin: 10px 0;
          span {
            font-size: 18px;
          }
        }
        .num {
          font-size: 18px;
        }
      }
    }
  }
</style>
