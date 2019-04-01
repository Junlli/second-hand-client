<template>
  <div class="collection">
    <div class="uncollect" v-if="commodityInfo.length === 0">
      <span class="uncollect-letter">您还没有收藏商品呢！您可以</span>
      <router-link to="/">
        <Button type="success">浏览商品</Button>
      </router-link>
    </div>
    <div v-else>
      <div
        class="favor-box"
        v-for="(item, index) in commodityInfo"
        :key="index"
      >
        <a>
          <img :src="$SERVER.FILEURL + item.commodity.c_images[0]" alt="" class="photo">
        </a>
        <h2>
          <a class="title">{{ item.commodity.c_title }}</a>
          <span class="price">￥{{ item.commodity.c_price / 100 }}</span>
        </h2>
        <span class="status">{{ c_state = item.commodity.c_state === 1 ? '出售中' : '已下架' }}</span>
        <Button type="warning" @click="cancelCollect(item._id)">取消收藏</Button>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import "index";
</style>
