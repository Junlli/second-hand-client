<template>
  <div class="bg clearfix">
    <home-header></home-header>
    <div class="type-page">
      <div class="top">
        <div id="user_photo" class="pull-left" @mouseenter="handleMouseOver"
             @mouseleave="handleMouseLeave">
          <img id="origin_ph" :src="$SERVER.FILEURL + apiData.u_avatar" alt="头像" >
          <el-upload
            :action="$SERVER.URL + $SERVER.PATH + $SERVER.POST_UPIMG"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              id="change_ph"
              src="https://www.youzixy.com/Public/images/icon/mkhead_hover.png"
              alt="头像"
              v-if="show"
            >
          </el-upload>
        </div>
        <div id="user_msg">
          <div class="name">{{apiData.u_name}}</div>
          <p class="has_sell">共有<span class="all">0</span>件商品，已卖出<span>0</span>件商品</p>
          <ul class="seller_attr">
            <li>学校：&nbsp;&nbsp;<span>{{apiData.u_school}}</span></li>
            <li>认证：&nbsp;&nbsp;<span>未认证</span></li>
          </ul>
          <Button type="primary" @click="edit()">编辑个人信息</Button>
        </div>
      </div>
      <Menu
        mode="horizontal"
        theme="light"
        :active-name="this.$route.path.slice(1)"
      >
        <MenuItem name="user" to="/user">
          <Icon type="ios-paper" />
          个人资料
        </MenuItem>
        <MenuItem name="user/sale" to="/user/sale">
          <Icon type="ios-people" />
          我发布的商品
        </MenuItem>
        <MenuItem name="user/buy" to="/user/buy">
          <Icon type="ios-people" />
          我购买的商品
        </MenuItem>
        <MenuItem name="user/collection" to="/user/collection">
        <Icon type="ios-construct" />
        我的收藏
        </MenuItem>
        <MenuItem name="5">
          <Icon type="ios-construct" />
          消息中心
        </MenuItem>
        <MenuItem name="user/identify" to="/user/identify">
          <Icon type="ios-construct" />
          认证信息
        </MenuItem>
        <MenuItem name="user/question" to="/user/question">
          <Icon type="ios-construct" />
          问题反馈
        </MenuItem>
      </Menu>
      <router-view></router-view>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import "index";
</style>
