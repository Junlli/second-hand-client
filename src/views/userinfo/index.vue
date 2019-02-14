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
            <li>认证：&nbsp;&nbsp;<span>未认证</span></li>
          </ul>
        </div>
      </div>
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
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import "index";
</style>
