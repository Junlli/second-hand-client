<template>
  <div class="collection">
    <div class="uncollect" :class="{hide: isHide}">
      <span class="uncollect-letter">您还没有收藏商品呢！您可以</span>
      <router-link to="/">
        <Button type="success">浏览商品</Button>
      </router-link>
    </div>
    <div class="favor-box" v-for="item in goods" :key="item.index">
      <a href="javascript:void(0)">
        <img :src=item.imgUrl alt="" class="photo">
      </a>
      <h2>
        <a href="" class="title">{{ item.name }}</a>
      </h2>
      <span class="status">{{ item.status }}</span>
      <Button type="warning" @click="cancelCollect">取消收藏</Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import "index";
</style>
