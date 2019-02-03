<template>
  <div class="header">
    <div class="w">
      <h1>
        <a href="javascript:void(0)" class="logo">校乐购</a>
      </h1>
      <router-link to="/">
        <div class="home">首页</div>
      </router-link>
      <el-button type="info" class="release" @click="handleRelease">发布商品</el-button>
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
      <ul class="login-box" v-if="userInfo.u_avatar">
        <li>
          <a class="headpic-link" target="_blank" @click="toUser">
            <img class="headpic" :src="$SERVER.FILEURL + userInfo.u_avatar">
          </a>
        </li>
        <li>
          <a class="quit" @click="handleQuit()">退出</a>
        </li>
      </ul>
      <form class="search">
        <input type="text" placeholder="搜索" class="search-filed">
        <button type="submit" class="search-btn">搜索</button>
      </form>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import "index";
</style>
