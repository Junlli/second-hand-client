<template>
  <div class="box">
    <div class="bg"></div>
    <div class="login-box">
      <p class="login-title">欢迎登录校乐购</p>
      <div class="error-msg" v-show="isError">{{errorMsg}}</div>
      <div class="form">
        <svg class="login-form-account icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
        <input type="text" placeholder="用户名或邮箱" class="login-label" v-model="user">
      </div>
      <div class="form">
        <svg class="login-form-account icon" aria-hidden="true">
          <use xlink:href="#icon-mima1"></use>
        </svg>
        <input type="password " placeholder="密码" class="login-label" v-model="pwd">
      </div>
      <router-link to="register" class="register">注册</router-link>
      <button class="login-button" @click="login">登录</button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="sass" scoped>
  @import 'index.scss'
</style>
