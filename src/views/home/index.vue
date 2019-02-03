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
        <div class="login-box" v-if="!userInfo.u_avatar">
          <div class="profile">
            <img src="~@/assets/img/home/profile.jpg" alt="登录头像" class="profile-photo">
          </div>
          <router-link to="/login">
            <el-button type="primary">请登录</el-button>
          </router-link>
          <router-link to="/register" class="register">免费注册</router-link>
        </div>
        <div class="login-box" v-else>
          <div class="profile">
            <img :src="$SERVER.FILEURL + userInfo.u_avatar" alt="登录头像" class="profile-photo">
          </div>
          <span class="account">{{ userInfo.u_name }}</span>
          <router-link to="/user" class="personal">个人中心</router-link>
          <div class="quit" @click="quit">退出</div>
        </div>
      </div>
      <Row>
        <Col span="8">
          <Menu :theme="theme2">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-book-outline" />
                二手书
              </template>
              <MenuItem name="1-1">全部</MenuItem>
              <MenuItem name="1-2">考试教材</MenuItem>
              <MenuItem name="1-3">小说文学</MenuItem>
              <MenuItem name="1-4">名人传记</MenuItem>
              <MenuItem name="1-5">人文社科</MenuItem>
              <MenuItem name="1-6">心理百科</MenuItem>
              <MenuItem name="1-7">成功励志</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <i class="iconfont">&#xe60c;</i>
                服饰衣物
              </template>
              <MenuItem name="2-1">男装</MenuItem>
              <MenuItem name="2-2">女装</MenuItem>
              <MenuItem name="2-3">鞋类</MenuItem>
              <MenuItem name="2-4">配饰</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <i class="iconfont">&#xe60e;</i>
                生活用品
              </template>
              <MenuItem name="3-1">厨具</MenuItem>
              <MenuItem name="3-2">收纳用品</MenuItem>
              <MenuItem name="3-3">清洁工具</MenuItem>
              <MenuItem name="3-4">其他</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <i class="iconfont">&#xe627;</i>
                美妆护肤
              </template>
              <MenuItem name="4-1">护肤品</MenuItem>
              <MenuItem name="4-2">化妆品</MenuItem>
              <MenuItem name="4-3">洗发护发</MenuItem>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <i class="iconfont">&#xe601;</i>
                家用电器
              </template>
              <MenuItem name="5-1">吹风筒</MenuItem>
              <MenuItem name="5-2">洗衣机</MenuItem>
              <MenuItem name="5-3">厨房电器</MenuItem>
              <MenuItem name="5-4">电热壶</MenuItem>
              <MenuItem name="5-5">其他</MenuItem>
            </Submenu>
          </Menu>
        </Col>
      </Row>
      <div class="main">
        <div class="clearfix">
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
        <div>
          <Page :total="100" show-elevator />
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
