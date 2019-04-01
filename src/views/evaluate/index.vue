<template>
  <div class="bg">
    <home-header></home-header>
    <div class="evaluate">
      <div class="head">
        <h1>评价</h1>
        <span class="seller">卖家：{{orderInfo.s_name}}</span>
      </div>
      <Input v-model="getApiData.l_content" type="textarea" :rows="4" placeholder="聊聊这次交易您的感受" />
      <div class="rate">
        <div>
          <span>商品与描述相符</span>
          <Rate v-model="getApiData.l_fine" />
        </div>
        <div>
          <span>卖家的服务态度</span>
          <Rate v-model="getApiData.l_reliable" />
        </div>
      </div>
      <Button type="primary" size="large" @click="submit">提交评价</Button>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import "index";
</style>
