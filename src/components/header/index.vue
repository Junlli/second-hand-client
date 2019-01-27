<template>
  <div class="header">
    <div class="w">
      <h1>
        <a href="javascript:void(0)" class="logo">校乐购</a>
      </h1>
      <router-link to="/release">
        <el-button type="info" class="release">发布商品</el-button>
      </router-link>
      <form class="search">
        <input type="text" placeholder="搜索" class="search-filed">
        <button type="submit" class="search-btn">搜索</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "index";
</style>
