<template>
  <div id="my_info">
    <div id="account_info">
      <h2>账户信息</h2>
      <ul class="infos">
        <li>用户名</li>
        <li class="right_info">
          <span>{{ userInfo.u_name}}</span>
        </li>
      </ul>
    </div>
    <div id="base_info">
      <h2>基本信息</h2>
      <ul class="infos">
        <li>学校</li>
        <li class="right_info">
          <span id="school_span">{{ userInfo.u_school }}</span>
        </li>
      </ul>
      <ul class="infos">
        <li>邮箱</li>
        <li class="right_info">
          <span id="qq_span">{{ userInfo.u_mail }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import "./index";
</style>
