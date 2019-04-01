<template>
  <div class="bg">
    <home-header></home-header>
    <div class="type-page">
      <div class="top">
        <div id="user_photo" class="pull-left">
          <img id="origin_ph" :src="$SERVER.FILEURL + apiData.u_avatar" alt="头像" >
        </div>
        <div id="user_msg">
          <div class="name">{{apiData.u_name}}</div>
          <p class="has_sell">共有<span class="all">{{ count }}</span>件商品</p>
          <ul class="seller_attr">
            <li>学校：&nbsp;&nbsp;<span>{{apiData.u_school}}</span></li>
            <li v-if="apiData.power === true">认证：&nbsp;&nbsp;<span>已认证</span></li>
            <li v-else>认证：&nbsp;&nbsp;<span>未认证</span></li>
          </ul>
        </div>
      </div>
      <div class="description">
        <div class="description-title">
          <span @click="tabChange(detail)" :class="{active: 'detail' === currentView}">商品详情</span>
          <span @click="tabChange(message)" :class="{active: 'message' === currentView}">商家评价</span>
        </div>
        <div :is="currentView"></div>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import "index";
</style>
