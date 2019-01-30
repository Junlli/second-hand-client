<template>
  <div class="header">
    <div class="w">
      <h1>
        <a href="javascript:void(0)" class="logo">校乐购</a>
      </h1>
      <router-link to="/">
        <div class="home">首页</div>
      </router-link>
      <router-link to="/release">
        <el-button type="info" class="release">发布商品</el-button>
      </router-link>
      <ul class="nav navbar-nav navbar-right login-box" v-if="userInfo !== undefined">
        <li>
          <a class="headpic-link" target="_blank" href="/user">
            <img class="headpic" :src="$SERVER.FILEURL + userInfo.u_avatar">
          </a>
        </li>
        <li>
          <a class="quit">退出</a>
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
