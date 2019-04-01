<script src="index.js"></script>
<template>
  <div class="bg clearfix">
    <home-header @getCommodity="getCommodityList"></home-header>
    <div class="type-page clearfix">
      <div class="banner clearfix">
        <swiper :options="swiperOption" v-if="bannerImg.length">
          <swiper-slide v-for="(item, index) in bannerImg" :key="index">
            <img :src="$SERVER.FILEURL + item.b_image" alt="轮播图" class="swiper-img">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
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
          <router-link to="/user/personal" class="personal">个人中心</router-link>
          <div class="quit" @click="quit">退出</div>
        </div>
      </div>
      <Row>
        <Col span="8">
          <Menu
            width="200px"
            :theme="theme2"
            v-for="(item, index) in typeList"
            :key=index
            @on-open-change="clickSubmenu(item.t_name)"
          >
            <Submenu :name= index>
              <template slot="title">
                {{ item.t_name }}
              </template>
              <MenuItem
                :name=index
                v-for="(type, index) in item.t_types"
                :key="index"
                @click.native="showCommidity(item.t_name, type)"
              >
                {{type}}
              </MenuItem>
            </Submenu>
          </Menu>
        </Col>
      </Row>
      <!--<swiper :options="swiperOption" v-if="bannerImg.length">-->
        <!--<swiper-slide v-for="(item, index) in bannerImg" :key="index">-->
          <!--<img :src="$SERVER.FILEURL + item.b_image" alt="轮播图" class="swiper-img">-->
        <!--</swiper-slide>-->
        <!--<div class="swiper-pagination "  slot="pagination"></div>-->
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--</swiper>-->
      <div class="main">
        <div class="clearfix">
          <div
            class="class-item"
            @mouseenter="moveUp(index)"
            @mouseleave="moveDown(index)"
            v-for="(item, index) in dataList.list"
            :class="{'move-up': index === show}"
            @click="toCommidityDetail(item._id)"
          >
            <div class="class-bg-layer"></div>
            <div class="class-item-bg">
              <a class="class-img">
                <img class="img-responsive" :src="$SERVER.FILEURL + item.c_images[0]"  style="display: block;">
              </a>
              <div class="pricehot clearfix">
                <span class="price">￥&nbsp;<span>{{item.c_price/100}}</span></span>
                <span class="hot">点击数&nbsp;<span>1639</span></span>
              </div>
              <a class="title">{{ item.c_title }}</a>
              <div class="some  clearfix">
                <span class="school">{{ item.u_school }}</span>
                <span class="user">{{ item.u_name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Page
            v-if="dataList.count > getApiData.pageSize"
            @on-page-size-change="handleSizeChange"
            @on-change="handlePage"
            :page-size="getApiData.pageSize"
            :total="dataList.count"
            :current="getApiData.pageIndex"
            show-elevator
            show-total
          />
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
