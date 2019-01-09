<template>
  <div class="bg">
    <div class="header">
      <div class="w">
        <h1>
          <a href="javascript:void(0)" class="logo">校乐购</a>
        </h1>
        <form class="search">
          <input type="text" placeholder="搜索" class="search-filed">
          <button type="submit" class="search-btn">搜索</button>
        </form>
        <el-button type="info" class="release">发布商品</el-button>
      </div>
    </div>
    <div class="type-page clearfix">
      <div class="banner clearfix">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://www.youzixy.com/Uploads/ad/2017-05-31/592eced4d71ec.png" alt="轮播图" class="swiper-img">
            </div>
            <div class="swiper-slide">
              <img src="https://www.youzixy.com/Uploads/ad/2017-05-31/592eced4d71ec.png" alt="轮播图" class="swiper-img">
            </div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="login-box">
          <div class="profile">
            <img src="~@/assets/img/home/profile.jpg" alt="登录头像" class="profile-photo">
          </div>
          <router-link to="/login">
            <el-button type="primary">请登录</el-button>
          </router-link>
          <router-link to="/register" class="register">免费注册</router-link>
        </div>
      </div>
      <div class="sidebar">
        <ul class="item-box">
          <li
            v-for="(item, index) of items"
            :key="index"
            class="first-item"
            @mouseenter="showItem(index)"
            @mouseleave="hideItem"
            @click="clickHandle(index)"
            :class="{'cur': index === second, 'click': index === current}"
          >
            {{ item.title }}
          </li>
        </ul>
        <div
          class="second-items"
          v-for="(item, index) of secondItems"
          @mouseleave="hideSecondItems"
        >
          <ul>
            <li
              class="second-item"
              v-for="(child, cindex) of item.childList"
              v-show="secondCurrent === index+1"
            >
              {{child.title}}
            </li>
          </ul>
        </div>
      </div>
      <div class="main">
        <div
          class="class-item"
          @mouseenter="moveUp"
          @mouseleave="moveDown"
          :class="{'move-up': show}"
        >
          <div class="class-bg-layer"></div>
          <div class="class-item-bg">
            <a target="_blank" href="/sale/9" class="class-img">
              <img class="img-responsive" src="https://www.youzixy.com/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" alt="36码mm猛戳啦！" data-original="/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" style="display: block;">
            </a>
            <div class="pricehot clearfix">
              <span class="price">￥&nbsp;<span>25</span></span>
              <span class="hot">点击数&nbsp;<span>1639</span></span>
            </div>
            <a target="_blank" href="/sale/9" class="title">36码mm猛戳啦!</a>
            <div class="some  clearfix">
              <span class="school">桂林电子科技大学</span>
              <span class="renzheng">未认证</span>
            </div>
          </div>
        </div>
        <div class="class-item">
          <div class="class-bg-layer"></div>
          <div class="class-item-bg">
            <a target="_blank" href="/sale/9" class="class-img">
              <img class="img-responsive" src="https://www.youzixy.com/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" alt="36码mm猛戳啦！" data-original="/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" style="display: block;">
            </a>
            <div class="pricehot clearfix">
              <span class="price">￥&nbsp;<span>25</span></span>
              <span class="hot">点击数&nbsp;<span>1639</span></span>
            </div>
            <a target="_blank" href="/sale/9" class="title">36码mm猛戳啦!</a>
            <div class="some  clearfix">
              <span class="school">桂林电子科技大学</span>
              <span class="renzheng">未认证</span>
            </div>
          </div>
        </div>
        <div class="class-item">
          <div class="class-bg-layer"></div>
          <div class="class-item-bg">
            <a target="_blank" href="/sale/9" class="class-img">
              <img class="img-responsive" src="https://www.youzixy.com/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" alt="36码mm猛戳啦！" data-original="/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" style="display: block;">
            </a>
            <div class="pricehot clearfix">
              <span class="price">￥&nbsp;<span>25</span></span>
              <span class="hot">点击数&nbsp;<span>1639</span></span>
            </div>
            <a target="_blank" href="/sale/9" class="title">36码mm猛戳啦!</a>
            <div class="some  clearfix">
              <span class="school">桂林电子科技大学</span>
              <span class="renzheng">未认证</span>
            </div>
          </div>
        </div>
        <div class="class-item">
          <div class="class-bg-layer"></div>
          <div class="class-item-bg">
            <a target="_blank" href="/sale/9" class="class-img">
              <img class="img-responsive" src="https://www.youzixy.com/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" alt="36码mm猛戳啦！" data-original="/Uploads/salebuy/2016-01-13/thumb_5695e0a4885a1.jpg" style="display: block;">
            </a>
            <div class="pricehot clearfix">
              <span class="price">￥&nbsp;<span>25</span></span>
              <span class="hot">点击数&nbsp;<span>1639</span></span>
            </div>
            <a target="_blank" href="/sale/9" class="title">36码mm猛戳啦!</a>
            <div class="some  clearfix">
              <span class="school">桂林电子科技大学</span>
              <span class="renzheng">未认证</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="w">
        <div>hhh</div>
      </div>
    </footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import '~@/sass/common.scss';
  @import "index";
</style>
