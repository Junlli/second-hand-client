<template>
  <div class="detail-page">
    <home-header></home-header>
    <div class="main">
      <div class="detail clearfix">
        <div class="picture">
          <pic-zoom :url=smallImgs[isShow].imgUrl :scale="2"></pic-zoom>
          <ul class="img-list">
            <li
              class="small-img"
              @click="handleClick(index)"
              :class="{active: isShow === index}"
              v-for="(item, index) of smallImgs"
            >
              <img :src= item.imgUrl alt="" class="pic">
            </li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="title">我是商品哇哈哈哈哈哈哈哈哈嗝哈</li>
            <li class="price">
              <i class="iconfont">&#xe616;</i>
              <span class="jiage">12元</span>
            </li>
            <li class="user">
              <a href="#">
                <i class="iconfont">&#xe600;</i>
                <span class="username">Junlli</span>
                <Rate v-model="value" count="1" />
                <span class="rate">5.0</span>
              </a>
            </li>
            <li class="school">
              <i class="iconfont">&#xe676;</i>
              <span>清华大学</span>
            </li>
            <li class="location">
              <i class="iconfont">&#xe61f;</i>
              <span>教学楼</span>
            </li>
            <li class="identify">
              <i class="iconfont">&#xe6ac;</i>
              <span>未认证</span>
            </li>
            <li class="datetime">
              <i class="iconfont">&#xe672;</i>
              <span>2019-1-16 8:39</span>
            </li>
          </ul>
          <router-link to="/order">
            <Button type="primary">购买商品</Button>
          </router-link>
          <Button type="success" @click="modal1 = true">联系卖家</Button>
          <Modal
            v-model="modal1"
            width="400"
            >
            <p slot="header" style="color:#666;text-align:center">
              <span>联系方式</span>
            </p>
            <div style="text-align:center">
              <router-link to="/login">
                <!--<Button type="success" size="large" @click="handleLogin">请先登录</Button>-->
              </router-link>
                <ul class="connect">
                  <li class="phone">
                    <i class="iconfont">&#xe613;</i>
                    <span>13562458754</span>
                  </li>
                  <li class="wechat">
                    <i class="iconfont">&#xe82c;</i>
                    <span>weixinhao</span>
                  </li>
                  <li class="qq">
                    <i class="iconfont">&#xe629;</i>
                    <span>5426849</span>
                  </li>
                </ul>

            </div>
            <div slot="footer" style="border:none"></div>
          </Modal>
          <Button type="primary" ghost @click="handleCollect">
            <Icon type="md-heart" :class="{changeColor: ischange === 1}" />
            收藏
          </Button>
        </div>
      </div>
      <div class="description">
        <div class="description-title">
          <span>商品详情</span>
        </div>
        <div class="description-body">
          <p>
            笔记本电脑 笔记本电脑是联想的初一买的现在上大学换电脑出售！
            配置:120g的金士顿固态硬盘最近才换的 500g的机械硬盘 主板是17年换的七彩虹的新主板  双显卡 i5的处理器 鼠标  鼠标垫  1.5的网线  打游戏的话   lol  cf   dnf 毫无压力！现在出售！有意者可联系我15136209633
            本交易支持自提、当面交易、邮寄
          </p>
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
