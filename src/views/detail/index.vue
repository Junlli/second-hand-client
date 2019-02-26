<template>
  <div class="detail-page">
    <home-header></home-header>
    <div class="main">
      <div class="detail clearfix">
        <div class="picture">
          <div class="bigImg">
            <pic-zoom
              v-if="commodityInfo"
              :url="$SERVER.FILEURL + commodityInfo.c_images[isShow]"
              :scale="2"
            ></pic-zoom>
          </div>
          <ul class="img-list">
            <li
              class="small-img"
              @click="handleClick(index)"
              :class="{active: isShow === index}"
              v-for="(item, index) of commodityInfo.c_images"
            >
              <img :src="$SERVER.FILEURL + item" alt="" class="pic">
            </li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="title">{{ commodityInfo.c_title }}</li>
            <li class="price">
              <i class="iconfont">&#xe616;</i>
              <span class="jiage">{{ commodityInfo.c_price/100 }}元</span>
            </li>
            <li class="user">
              <a @click="toUserInfo(commodityInfo.u_id)">
                <i class="iconfont">&#xe600;</i>
                <span class="username">{{ commodityInfo.u_name }}</span>
                <div class="rate">
                  <svg class="register-form-account" aria-hidden="true">
                    <use xlink:href="#icon-icon-test"></use>
                  </svg>
                  <span class="rate-num">5.0</span>
                </div>
              </a>
            </li>
            <li class="school">
              <i class="iconfont">&#xe676;</i>
              <span>{{ commodityInfo.u_school }}</span>
            </li>
            <li class="inventory">
              <i class="iconfont">&#xe677;</i>
              <el-input-number v-model="inventory" :min="1" :max="commodityInfo.c_num" label="描述文字"></el-input-number>
              <span class="inventory-num">(库存{{ commodityInfo.c_num }}件)</span>
            </li>
            <li class="datetime">
              <i class="iconfont">&#xe672;</i>
              <span v-if="commodityInfo">{{ commodityInfo.create_date.split(' ')[0] }}</span>
            </li>
          </ul>
          <div class="button">
            <Button
              type="primary"
              @click="handleBuy(c_id)"
              v-if="userInfo.u_name !== commodityInfo.u_name"
            >购买商品</Button>
            <Button
              type="success"
              @click="handleConnect"
              v-if="userInfo.u_name !== commodityInfo.u_name"
            >联系卖家</Button>
            <Button
              type="primary"
              ghost
              @click="handleCollect(ischange)"
              v-if="userInfo.u_name !== commodityInfo.u_name"
            >
              <Icon type="md-heart" :class="{changeColor: ischange === 1}" />
              收藏
            </Button>
          </div>
        </div>
      </div>
      <div class="description">
        <div class="description-title">
          <span>商品详情</span>
        </div>
        <div class="description-body" v-html="commodityInfo.c_detail"></div>
      </div>
    </div>
    <Modal v-model="login" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>您还未登录</span>
      </p>
      <div class="toLogin">
        <Button type="primary" @click="handleLogin">请先登录</Button>
      </div>
      <div slot="footer">
      </div>
    </Modal>
    <Modal
      v-model="modal1"
      width="400"
    >
      <p slot="header" style="color:#666;text-align:center">
        <span>联系方式</span>
      </p>
      <div style="text-align:center">
        <ul class="connect">
          <li class="phone">
            <i class="iconfont">&#xe613;</i>
            <span>{{ commodityInfo.c_tel }}</span>
          </li>
          <li class="wechat">
            <i class="iconfont">&#xe82c;</i>
            <span>{{ commodityInfo.c_wx }}</span>
          </li>
          <li class="qq">
            <i class="iconfont">&#xe629;</i>
            <span>{{ commodityInfo.c_qq }}</span>
          </li>
        </ul>
      </div>
      <div slot="footer" style="border:none"></div>
    </Modal>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import "index";
</style>
