<template>
  <div class="box">
    <div class="bg"></div>
    <div class="register-box">
      <p class="register-title">注册校乐购</p>
      <div class="error-msg" v-show="isError">{{errorMsg}}</div>
      <div class="form">
        <svg class="register-form-account icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
        <input type="text" placeholder="用户名" class="register-label" v-model="form.user">
        <em>长度6-10，只包含字母、数字和下划线</em>
      </div>
      <div class="form">
        <svg class="register-form-account icon" aria-hidden="true">
          <use xlink:href="#icon-mima1"></use>
        </svg>
        <input type="password " placeholder="密码" class="register-label" v-model="form.pwd">
        <em>6位及以上字母、数字</em>
      </div>
      <div class="form">
        <svg class="register-form-account icon" aria-hidden="true">
          <use xlink:href="#icon-mima1"></use>
        </svg>
        <input type="password " placeholder="确认密码" class="register-label" v-model="form.pwd">
      </div>
      <div class="form">
        <svg class="register-form-account icon" aria-hidden="true">
          <use xlink:href="#icon-youxiang"></use>
        </svg>
        <input type="text " placeholder="邮箱" class="register-label" v-model="form.email">
      </div>
      <div class="form">
        <select name="省" class="city">
          <option>广东省</option>
        </select>
        <select name="市" class="city">
          <option>广州市</option>
        </select>
      </div>
      <div class="form">
        <svg class="register-form-account icon" aria-hidden="true">
          <use xlink:href="#icon-xuexiao"></use>
        </svg>
        <input type="text " placeholder="学校" class="register-label" v-model="form.school">
      </div>
      <router-link to="login" class="login">登录</router-link>
      <button class="register-button" @click="register">注册</button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="sass" scoped>
  @import 'index.scss'
</style>
