<template>
  <div class="bg">
    <home-header></home-header>
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
      <Row>
        <Col span="8">
          <Menu :theme="theme2">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper" />
                二手书
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people" />
                用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats" />
                统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </Col>
      </Row>
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
